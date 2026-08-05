"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  showDetails: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, showDetails: false };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined, showDetails: false });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      const isDev = process.env.NODE_ENV !== "production";
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
          <div className="text-center max-w-lg w-full">
            <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground text-sm mb-4">
              An unexpected error occurred. Please try refreshing the page.
            </p>

            {isDev && this.state.error && (
              <div className="mb-6 text-left">
                <button
                  onClick={() => this.setState(s => ({ showDetails: !s.showDetails }))}
                  className="flex items-center gap-2 text-sm text-destructive font-mono mb-2 hover:underline"
                >
                  {this.state.showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  {this.state.error.message}
                </button>
                {this.state.showDetails && (
                  <pre className="text-xs text-muted-foreground bg-muted/50 rounded-xl p-4 overflow-auto max-h-64 border border-border text-left whitespace-pre-wrap">
                    {this.state.error.stack}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                )}
              </div>
            )}

            <Button onClick={this.handleReset} variant="default">
              <RefreshCw className="w-4 h-4 mr-2" />
              Go to Homepage
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
