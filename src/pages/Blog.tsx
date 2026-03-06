import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight, Search, Clock, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = ["All", "Design", "Development", "SEO", "Marketing", "Technology", "Case Study"];

const posts = [
  {
    id: 1,
    slug: "web-design-trends-2026",
    title: "Top Web Design Trends to Watch in 2026",
    excerpt: "Discover the latest design patterns and visual trends that are shaping the future of web experiences. From AI-driven personalization to immersive 3D elements.",
    category: "Design",
    date: "Jan 8, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    slug: "seo-checklist-2026",
    title: "The Ultimate SEO Checklist for 2026",
    excerpt: "A comprehensive guide to optimizing your website for search engines in the AI era. Learn about Core Web Vitals, E-E-A-T, and emerging ranking factors.",
    category: "SEO",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 3,
    slug: "conversion-rate-optimization",
    title: "How to Improve Website Conversion Rate by 300%",
    excerpt: "Proven strategies and psychological principles to turn visitors into customers. From micro-interactions to persuasive copywriting techniques.",
    category: "Marketing",
    date: "Jan 2, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 4,
    slug: "react-vs-nextjs-2026",
    title: "React vs Next.js: Which One to Choose in 2026?",
    excerpt: "An in-depth comparison of React and Next.js for modern web development. Understand when to use each framework for optimal results.",
    category: "Development",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 5,
    slug: "ai-digital-marketing",
    title: "The Rise of AI in Digital Marketing",
    excerpt: "How artificial intelligence is transforming digital marketing strategies. From predictive analytics to personalized content creation.",
    category: "Technology",
    date: "Dec 25, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 6,
    slug: "mobile-app-best-practices",
    title: "Mobile App Development Best Practices",
    excerpt: "Essential guidelines for building successful mobile applications. Cover everything from UI/UX to performance optimization.",
    category: "Development",
    date: "Dec 20, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 7,
    slug: "saas-case-study-techflow",
    title: "Case Study: How We Built TechFlow's SaaS Platform",
    excerpt: "A deep dive into building a project management platform that serves 10,000+ teams worldwide.",
    category: "Case Study",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 8,
    slug: "ecommerce-case-study-luxe",
    title: "Case Study: Luxe Fashion E-commerce Redesign",
    excerpt: "How a strategic redesign increased online sales by 180% for a luxury fashion brand.",
    category: "Case Study",
    date: "Dec 10, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    featured: false,
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Blog
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Insights & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay updated with the latest trends, tips, and insights in web design, 
              development, digital marketing, and real-world case studies.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === "All" && !searchQuery && (
        <section className="pb-16">
          <div className="container-wide">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="text-primary" size={20} />
              <h2 className="font-display text-xl font-bold">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <Badge className="mb-3">{post.category}</Badge>
                        <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge>{post.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                        Read More
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest articles, tips, and insights delivered straight to your inbox. 
              Join 5,000+ developers and designers who stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-12 bg-card"
              />
              <Button size="lg" className="shrink-0">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
