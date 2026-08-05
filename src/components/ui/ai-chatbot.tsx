import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  Volume2,
  VolumeX,
  RotateCcw,
  ArrowDown,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://uvpxfbucgcpsjwahmvjy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cHhmYnVjZ2Nwc2p3YWhtdmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyODc4MzIsImV4cCI6MjA4Mzg2MzgzMn0.cyfjlAm-k3g4vDF814UGYdnb9vhvBfkcMFhFpwSGRIE";

const CHAT_URL = `${SUPABASE_URL}/functions/v1/chat`;
const STORAGE_KEY = "itoby-chat-history";

const suggestedQuestions = [
  "🎨 What services do you offer?",
  "💰 Tell me about pricing",
  "📱 Mobile app development?",
  "📧 How can I contact you?",
  "⚡ What's your tech stack?",
];

const followUpSuggestions = [
  "Tell me more",
  "Show portfolio",
  "Get a quote",
  "🤝 Talk to a human",
];

const defaultMessage: Msg = {
  role: "assistant",
  content:
    "Hi! 👋 I'm the **Itoby AI Assistant**. How can I help you today? Ask me about our services, pricing, or anything else!",
};

function loadHistory(): Msg[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Msg[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (error) {
    // localStorage not available or corrupted
    console.warn("Failed to load chat history from localStorage");
  }
  return [defaultMessage];
}

function saveHistory(msgs: Msg[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch (error) {
    // localStorage not available or quota exceeded
    console.warn("Failed to save chat history to localStorage");
  }
}

// Notification sound using Web Audio API
function playNotificationSound() {
  try {
    const ctx = new (window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.frequency.setValueAtTime(880, ctx.currentTime);
    oscillator.frequency.setValueAtTime(1100, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.25);
  } catch (error) {
    // Web Audio API not supported
    console.warn("Web Audio API not supported for notification sound");
  }
}

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (msg: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    onError(data.error || "Something went wrong. Please try again.");
    return;
  }

  if (!resp.body) {
    onError("No response body");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let textBuffer = "";
  let streamDone = false;

  while (!streamDone) {
    const { done, value } = await reader.read();
    if (done) break;
    textBuffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
      let line = textBuffer.slice(0, newlineIndex);
      textBuffer = textBuffer.slice(newlineIndex + 1);

      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;

      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") {
        streamDone = true;
        break;
      }

      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch (error) {
        // JSON parsing failed, add to buffer
        textBuffer = line + "\n" + textBuffer;
        break;
      }
    }
  }

  if (textBuffer.trim()) {
    for (let raw of textBuffer.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (raw.startsWith(":") || raw.trim() === "") continue;
      if (!raw.startsWith("data: ")) continue;
      const jsonStr = raw.slice(6).trim();
      if (jsonStr === "[DONE]") continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch (error) {
        // Skip invalid JSON chunks in streaming response
        console.warn("Failed to parse streaming chunk:", jsonStr);
      }
    }
  }

  onDone();
}

// Typing indicator dots
const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-2 py-1">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 rounded-full bg-primary/60"
        animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </div>
);

// Human handoff card
const HumanHandoffCard = ({ lastMessage }: { lastMessage: string }) => {
  const handleHandoff = async (channel: string) => {
    // Fire webhook notification
    try {
      fetch(`${SUPABASE_URL}/functions/v1/send-webhook-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          type: "chat_handoff",
          data: { lastMessage, channel, timestamp: new Date().toISOString() },
        }),
      }).catch((error) => console.warn("Webhook notification failed:", error));
    } catch (error) {
      console.warn("Failed to send webhook notification:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-1 p-3 rounded-xl bg-secondary/60 border border-border/40 space-y-2.5"
    >
      <p className="text-xs font-medium text-foreground">Connect with our team:</p>
      <div className="flex flex-col gap-1.5">
        <a
          href="https://wa.me/919142773500?text=Hi%2C%20I%20was%20chatting%20with%20your%20AI%20assistant%20and%20need%20human%20help."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleHandoff("whatsapp")}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors text-xs font-medium text-green-600 dark:text-green-400"
        >
          <Phone className="w-3.5 h-3.5" />
          WhatsApp — Instant Reply
        </a>
        <a
          href="mailto:info@itobyinfotech.com?subject=Chat%20Inquiry&body=Hi%2C%20I%20was%20chatting%20on%20your%20website%20and%20need%20assistance."
          onClick={() => handleHandoff("email")}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors text-xs font-medium text-blue-600 dark:text-blue-400"
        >
          <Mail className="w-3.5 h-3.5" />
          Email — Detailed Response
        </a>
        <a
          href="tel:+919142773500"
          onClick={() => handleHandoff("phone")}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/20 transition-colors text-xs font-medium text-violet-600 dark:text-violet-400"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Call — +91 9142773500
        </a>
      </div>
    </motion.div>
  );
};

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(loadHistory);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [showHandoff, setShowHandoff] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Save history on change
  useEffect(() => {
    saveHistory(messages);
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Track unread when closed
  useEffect(() => {
    if (isOpen) setUnreadCount(0);
  }, [isOpen]);

  // Scroll detection
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    setShowScrollDown(!isNearBottom);
  }, []);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const send = async (text?: string) => {
    const msgText = (text || input).trim();
    if (!msgText || isLoading) return;

    // Detect human handoff request
    const handoffKeywords = ["talk to a human", "talk to human", "human agent", "real person", "connect to team", "🤝"];
    const isHandoff = handoffKeywords.some((k) => msgText.toLowerCase().includes(k));

    if (isHandoff) {
      const userMsg: Msg = { role: "user", content: msgText };
      const botMsg: Msg = {
        role: "assistant",
        content: "I understand you'd like to speak with a human! 😊 Here are the best ways to reach our team:",
      };
      setMessages((prev) => [...prev, userMsg, botMsg]);
      setShowHandoff(true);
      setInput("");
      if (soundEnabled) playNotificationSound();
      return;
    }
    const userMsg: Msg = { role: "user", content: msgText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > 1 && prev[prev.length - 2]?.role === "user" && prev[prev.length - 2]?.content === msgText) {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: (chunk) => upsertAssistant(chunk),
        onDone: () => {
          setIsLoading(false);
          if (soundEnabled) playNotificationSound();
          if (!isOpen) setUnreadCount((c) => c + 1);
        },
        onError: (msg) => {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: `Sorry, ${msg}` },
          ]);
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([defaultMessage]);
    setShowHandoff(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  const showSuggestions = messages.length <= 1;

  return (
    <>
      {/* Chat Toggle Button with unread badge */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-24 right-6 z-[60]"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center relative hover:scale-110 active:scale-95 transition-transform"
            >
              <Bot className="w-6 h-6 relative z-10" />

              {/* Unread badge */}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-xs font-bold flex items-center justify-center z-20">
                  {unreadCount}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[60] w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-120px)] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-border/50 bg-card/80 backdrop-blur-xl"
          >
            {/* Header with glassmorphism */}
            <div className="px-4 py-3 border-b border-border/30 bg-card/60 backdrop-blur-md flex items-center justify-between shrink-0 relative overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Itoby AI Assistant</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" />
                    <p className="text-xs text-muted-foreground">Online • Instant replies</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 relative z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-lg"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  title={soundEnabled ? "Mute" : "Unmute"}
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-lg"
                  onClick={clearChat}
                  title="Clear chat"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-3 relative"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i === messages.length - 1 ? 0 : 0, duration: 0.3 }}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 text-sm shadow-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md"
                        : "bg-secondary/80 backdrop-blur-sm border border-border/30 text-foreground rounded-2xl rounded-bl-md"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:m-0 [&>ul]:my-1 [&>ol]:my-1 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center shrink-0 mt-1">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 items-center"
                >
                  <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/10 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="bg-secondary/80 backdrop-blur-sm border border-border/30 px-3 py-2.5 rounded-2xl rounded-bl-md">
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}

              {/* Suggested questions */}
              {showSuggestions && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <p className="text-xs text-muted-foreground mb-2 px-1">Quick questions:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestedQuestions.map((q, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        onClick={() => send(q)}
                        className="px-3 py-1.5 text-xs rounded-full bg-secondary/80 border border-border/40 hover:border-primary/40 hover:bg-primary/10 text-foreground transition-all duration-200"
                      >
                        {q}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Follow-up suggestions after assistant reply */}
              {!showSuggestions && !isLoading && messages.length > 2 && messages[messages.length - 1]?.role === "assistant" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-1"
                >
                  <div className="flex flex-wrap gap-1.5">
                    {followUpSuggestions.map((q, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.06 }}
                        onClick={() => send(q)}
                        className="px-3 py-1.5 text-xs rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary transition-all duration-200"
                      >
                        {q}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Human handoff card */}
              {showHandoff && (
                <HumanHandoffCard lastMessage={messages[messages.length - 2]?.content || ""} />
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Scroll to bottom */}
            <AnimatePresence>
              {showScrollDown && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToBottom}
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border border-border/50 shadow-md flex items-center justify-center z-10"
                >
                  <ArrowDown className="w-4 h-4 text-muted-foreground" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="p-3 border-t border-border/30 bg-card/60 backdrop-blur-md shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="text-sm rounded-xl bg-secondary/50 border-border/30 focus-visible:ring-primary/30"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  className="shrink-0 rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-[10px] text-muted-foreground/50 text-center mt-1.5">
                Powered by Itoby AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
