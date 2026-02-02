import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    slug: "web-design-trends-2026",
    title: "Top Web Design Trends to Watch in 2026",
    excerpt: "Discover the latest design patterns and visual trends that are shaping the future of web experiences.",
    content: `
      <p>The world of web design is constantly evolving, and 2026 brings exciting new trends that are reshaping how we create digital experiences. From AI-driven personalization to immersive 3D elements, let's explore what's hot in web design this year.</p>
      
      <h2>1. AI-Powered Personalization</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming integral to web design. Websites are now capable of adapting their content, layout, and even color schemes based on individual user preferences and behavior patterns.</p>
      
      <h2>2. Immersive 3D Elements</h2>
      <p>With WebGL and Three.js becoming more accessible, we're seeing more websites incorporate stunning 3D visuals. From product showcases to interactive backgrounds, 3D is adding depth and engagement to web experiences.</p>
      
      <h2>3. Micro-Interactions & Animations</h2>
      <p>Subtle animations and micro-interactions are making websites feel more alive. These small details—like button hover effects, loading animations, and scroll-triggered transitions—enhance user experience significantly.</p>
      
      <h2>4. Dark Mode as Default</h2>
      <p>More websites are adopting dark mode as their primary theme, offering easier viewing in low-light conditions and reducing eye strain. The key is creating designs that work beautifully in both light and dark modes.</p>
      
      <h2>5. Sustainable Web Design</h2>
      <p>With growing environmental awareness, sustainable web design practices are gaining traction. This includes optimizing images, reducing server requests, and choosing green hosting providers.</p>
      
      <h2>Conclusion</h2>
      <p>Staying ahead of design trends is crucial for creating modern, engaging websites. By incorporating these trends thoughtfully, you can create digital experiences that resonate with users and stand out in 2026.</p>
    `,
    category: "Design",
    date: "Jan 8, 2026",
    readTime: "5 min read",
    author: "Sarah Johnson",
    authorRole: "Lead Designer",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    slug: "seo-checklist-2026",
    title: "The Ultimate SEO Checklist for 2026",
    excerpt: "A comprehensive guide to optimizing your website for search engines in the AI era.",
    content: `
      <p>Search engine optimization continues to evolve with AI and machine learning playing increasingly important roles. Here's your comprehensive SEO checklist for 2026.</p>
      
      <h2>Technical SEO Fundamentals</h2>
      <p>Start with the basics: ensure your website loads quickly, is mobile-friendly, and has a secure HTTPS connection. Core Web Vitals remain critical ranking factors.</p>
      
      <h2>Content Quality & E-E-A-T</h2>
      <p>Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines are more important than ever. Create content that demonstrates real expertise and provides genuine value.</p>
      
      <h2>AI-Generated Content Considerations</h2>
      <p>While AI can assist with content creation, search engines are getting better at identifying low-quality AI content. Focus on adding unique insights and human expertise.</p>
      
      <h2>Voice Search Optimization</h2>
      <p>With smart speakers and voice assistants becoming ubiquitous, optimizing for conversational queries is essential. Focus on natural language and question-based keywords.</p>
      
      <h2>Local SEO Strategies</h2>
      <p>For businesses with physical locations, local SEO remains crucial. Keep your Google Business Profile updated and encourage customer reviews.</p>
    `,
    category: "SEO",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    author: "Michael Chen",
    authorRole: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    slug: "conversion-rate-optimization",
    title: "How to Improve Website Conversion Rate by 300%",
    excerpt: "Proven strategies and psychological principles to turn visitors into customers.",
    content: `
      <p>Improving your website's conversion rate doesn't require magic—it requires understanding user psychology and applying proven optimization techniques.</p>
      
      <h2>Understanding User Intent</h2>
      <p>Before optimizing, understand why visitors come to your site. Use analytics, heatmaps, and user surveys to identify pain points and opportunities.</p>
      
      <h2>Simplify Your Forms</h2>
      <p>Every additional form field reduces conversions. Ask only for essential information and consider progressive profiling for complex needs.</p>
      
      <h2>Leverage Social Proof</h2>
      <p>Testimonials, case studies, and trust badges significantly impact conversion rates. Display them prominently near your calls-to-action.</p>
      
      <h2>Optimize Your CTAs</h2>
      <p>Your call-to-action buttons should stand out visually and use action-oriented language. Test different colors, sizes, and copy to find what works best.</p>
      
      <h2>A/B Testing Framework</h2>
      <p>Implement a systematic testing approach. Test one element at a time and ensure statistical significance before making permanent changes.</p>
    `,
    category: "Marketing",
    date: "Jan 2, 2026",
    readTime: "6 min read",
    author: "Emily Rodriguez",
    authorRole: "Marketing Director",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  },
  {
    id: 4,
    slug: "react-vs-nextjs-2026",
    title: "React vs Next.js: Which One to Choose in 2026?",
    excerpt: "An in-depth comparison of React and Next.js for modern web development.",
    content: `
      <p>The React ecosystem continues to evolve, and the choice between vanilla React and Next.js depends on your specific project requirements.</p>
      
      <h2>When to Choose React</h2>
      <p>React is ideal for single-page applications, complex interactive UIs, and when you need maximum flexibility in your stack. It's perfect for dashboards and internal tools.</p>
      
      <h2>When to Choose Next.js</h2>
      <p>Next.js shines for SEO-critical websites, e-commerce platforms, and content-heavy sites. Its server-side rendering and static generation capabilities are unmatched.</p>
      
      <h2>Performance Considerations</h2>
      <p>Next.js offers better out-of-the-box performance with automatic code splitting, image optimization, and edge functions. React requires more manual optimization.</p>
      
      <h2>Developer Experience</h2>
      <p>Next.js provides a more opinionated structure with file-based routing and API routes. React offers more freedom but requires more decisions.</p>
      
      <h2>Our Recommendation</h2>
      <p>For most web applications in 2026, Next.js is the better choice. However, for complex SPAs or when integrating with existing systems, React remains excellent.</p>
    `,
    category: "Development",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    author: "David Park",
    authorRole: "Senior Developer",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
  },
  {
    id: 5,
    slug: "ai-digital-marketing",
    title: "The Rise of AI in Digital Marketing",
    excerpt: "How artificial intelligence is transforming digital marketing strategies.",
    content: `
      <p>AI is revolutionizing digital marketing, enabling unprecedented personalization and efficiency. Here's how to leverage AI in your marketing strategy.</p>
      
      <h2>Predictive Analytics</h2>
      <p>AI can analyze customer behavior patterns to predict future actions, helping you target the right audience at the right time with the right message.</p>
      
      <h2>Content Generation</h2>
      <p>AI tools can assist with creating ad copy, email subjects, and even blog posts. However, human oversight remains essential for brand voice and accuracy.</p>
      
      <h2>Chatbots & Customer Service</h2>
      <p>Modern AI chatbots can handle complex queries, qualify leads, and provide 24/7 support, significantly improving customer experience.</p>
      
      <h2>Programmatic Advertising</h2>
      <p>AI-powered programmatic advertising optimizes ad placement, bidding, and targeting in real-time, maximizing ROI on advertising spend.</p>
      
      <h2>Getting Started</h2>
      <p>Start small by implementing AI tools for specific tasks like email optimization or ad targeting. Gradually expand as you learn what works for your business.</p>
    `,
    category: "Technology",
    date: "Dec 25, 2025",
    readTime: "6 min read",
    author: "Lisa Thompson",
    authorRole: "Tech Analyst",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  },
  {
    id: 6,
    slug: "mobile-app-best-practices",
    title: "Mobile App Development Best Practices",
    excerpt: "Essential guidelines for building successful mobile applications.",
    content: `
      <p>Building a successful mobile app requires more than just coding skills. Here are the best practices that separate good apps from great ones.</p>
      
      <h2>User-Centric Design</h2>
      <p>Start with user research and create personas. Every design decision should be informed by real user needs and behaviors.</p>
      
      <h2>Performance Optimization</h2>
      <p>Mobile users expect instant responses. Optimize images, minimize network requests, and implement efficient caching strategies.</p>
      
      <h2>Offline Functionality</h2>
      <p>Design your app to work offline when possible. Use local storage and sync data when connectivity is restored.</p>
      
      <h2>Security First</h2>
      <p>Implement proper authentication, encrypt sensitive data, and follow platform-specific security guidelines. Never store passwords in plain text.</p>
      
      <h2>Testing Across Devices</h2>
      <p>Test on multiple devices and OS versions. Use both automated testing and real-device testing to catch issues early.</p>
    `,
    category: "Development",
    date: "Dec 20, 2025",
    readTime: "9 min read",
    author: "James Wilson",
    authorRole: "Mobile Lead",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
  },
  {
    id: 7,
    slug: "saas-case-study-techflow",
    title: "Case Study: How We Built TechFlow's SaaS Platform",
    excerpt: "A deep dive into building a project management platform that serves 10,000+ teams.",
    content: `
      <p>When TechFlow approached us to build their project management SaaS platform, they had a vision but needed the technical expertise to bring it to life. Here's how we did it.</p>
      
      <h2>The Challenge</h2>
      <p>TechFlow needed a platform that could handle real-time collaboration, complex project hierarchies, and integrations with popular tools—all while maintaining sub-second response times.</p>
      
      <h2>Our Approach</h2>
      <p>We chose a modern stack: React with TypeScript for the frontend, Node.js with GraphQL for the API, and PostgreSQL for data persistence. Real-time features were powered by WebSockets.</p>
      
      <h2>Key Technical Decisions</h2>
      <p>We implemented event sourcing for audit trails, used Redis for caching and real-time pub/sub, and designed a microservices architecture for scalability.</p>
      
      <h2>Results</h2>
      <p>The platform launched successfully, acquiring 10,000+ teams within the first year. Response times average 150ms, and the system handles 1M+ daily active users.</p>
      
      <h2>Lessons Learned</h2>
      <p>Invest in observability early, design for scale from day one, and never underestimate the importance of a great onboarding experience.</p>
    `,
    category: "Case Study",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    author: "Robert Martinez",
    authorRole: "CTO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  },
  {
    id: 8,
    slug: "ecommerce-case-study-luxe",
    title: "Case Study: Luxe Fashion E-commerce Redesign",
    excerpt: "How a strategic redesign increased online sales by 180% for a luxury fashion brand.",
    content: `
      <p>Luxe Fashion came to us with a beautiful product line but an outdated e-commerce experience. Our mission: create a digital shopping experience worthy of their luxury brand.</p>
      
      <h2>The Problem</h2>
      <p>High bounce rates, abandoned carts, and poor mobile experience were costing Luxe significant revenue. Their conversion rate was well below industry average.</p>
      
      <h2>Research & Discovery</h2>
      <p>We conducted user interviews, analyzed competitor sites, and performed a comprehensive UX audit. The findings revealed issues with navigation, checkout flow, and visual hierarchy.</p>
      
      <h2>Design Solution</h2>
      <p>We created an immersive, editorial-style design that showcases products beautifully. Large imagery, minimal UI, and seamless animations create a premium feel.</p>
      
      <h2>Technical Implementation</h2>
      <p>Built on Next.js with headless commerce, the new site loads in under 2 seconds. We implemented AI-powered recommendations and a streamlined checkout.</p>
      
      <h2>The Results</h2>
      <p>180% increase in online sales, 45% reduction in cart abandonment, and 3x improvement in mobile conversion rates. The client exceeded their annual revenue goals within 6 months.</p>
    `,
    category: "Case Study",
    date: "Dec 10, 2025",
    readTime: "8 min read",
    author: "Sarah Johnson",
    authorRole: "Lead Designer",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug || p.id.toString() === slug);
  
  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <Badge className="mb-4">{post.category}</Badge>
            
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container-wide mb-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[2/1] rounded-2xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
              >
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">About the Author</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Share */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Share this article</h3>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon">
                        <Twitter size={18} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Linkedin size={18} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Facebook size={18} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest articles delivered to your inbox.
                    </p>
                    <Button className="w-full">Subscribe</Button>
                  </CardContent>
                </Card>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${relatedPost.slug}`}
                    className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <Badge variant="secondary" className="mb-3">{relatedPost.category}</Badge>
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
