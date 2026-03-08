import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Eye, EyeOff, RefreshCw, FileText, Star } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  author_role: string;
  read_time: string;
  featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

const categories = ["Design", "Development", "SEO", "Marketing", "Technology", "Case Study"];

const emptyPost: Omit<BlogPost, "id" | "created_at" | "updated_at"> = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  category: "Design",
  image: "",
  author: "Admin",
  author_role: "Editor",
  read_time: "5 min read",
  featured: false,
  is_published: true,
};

export const BlogManagementTab = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState(emptyPost);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    // Fetch all posts (admin can see unpublished too)
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load blog posts");
    } else {
      setPosts((data as BlogPost[]) || []);
    }
    setIsLoading(false);
  };

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const openCreate = () => {
    setEditingPost(null);
    setFormData(emptyPost);
    setShowDialog(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image: post.image,
      author: post.author,
      author_role: post.author_role,
      read_time: post.read_time,
      featured: post.featured,
      is_published: post.is_published,
    });
    setShowDialog(true);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error("Title, excerpt and content are required");
      return;
    }

    setIsSaving(true);
    const slug = formData.slug || generateSlug(formData.title);

    if (editingPost) {
      const { error } = await supabase
        .from("blog_posts")
        .update({ ...formData, slug, updated_at: new Date().toISOString() })
        .eq("id", editingPost.id);

      if (error) toast.error("Failed to update post");
      else toast.success("Blog post updated!");
    } else {
      const { error } = await supabase
        .from("blog_posts")
        .insert({ ...formData, slug });

      if (error) toast.error(error.message);
      else toast.success("Blog post created!");
    }

    setIsSaving(false);
    setShowDialog(false);
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) toast.error("Failed to delete");
    else {
      toast.success("Post deleted");
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const togglePublish = async (post: BlogPost) => {
    const { error } = await supabase
      .from("blog_posts")
      .update({ is_published: !post.is_published })
      .eq("id", post.id);

    if (error) toast.error("Failed to update");
    else {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id ? { ...p, is_published: !p.is_published } : p
        )
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Blog Posts
            </CardTitle>
            <CardDescription>{posts.length} total posts</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={fetchPosts}>
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button size="sm" onClick={openCreate}>
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto text-primary" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="w-10 h-10 mx-auto mb-2 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">No blog posts yet</p>
              <Button className="mt-4" onClick={openCreate}>
                Create First Post
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl border border-border/50 bg-secondary/30 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="font-medium text-sm truncate">{post.title}</h4>
                      {post.featured && (
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <Badge
                        variant={post.is_published ? "default" : "outline"}
                        className="text-xs"
                      >
                        {post.is_published ? "Published" : "Draft"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => togglePublish(post)}
                      title={post.is_published ? "Unpublish" : "Publish"}
                    >
                      {post.is_published ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openEdit(post)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(post.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPost ? "Edit Blog Post" : "Create Blog Post"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                      slug: generateSlug(e.target.value),
                    })
                  }
                  placeholder="Blog post title"
                />
              </div>
              <div className="space-y-2">
                <Label>Slug</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  placeholder="auto-generated-slug"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Excerpt *</Label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                placeholder="Brief description of the post"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label>Content (HTML) *</Label>
              <Textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                placeholder="<h2>Section Title</h2><p>Your content here...</p>"
                rows={10}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(val) =>
                    setFormData({ ...formData, category: val })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Image URL</Label>
                <Input
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Author</Label>
                <Input
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Author Role</Label>
                <Input
                  value={formData.author_role}
                  onChange={(e) =>
                    setFormData({ ...formData, author_role: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Read Time</Label>
                <Input
                  value={formData.read_time}
                  onChange={(e) =>
                    setFormData({ ...formData, read_time: e.target.value })
                  }
                  placeholder="5 min read"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Switch
                  checked={formData.featured}
                  onCheckedChange={(val) =>
                    setFormData({ ...formData, featured: val })
                  }
                />
                <Label>Featured</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={formData.is_published}
                  onCheckedChange={(val) =>
                    setFormData({ ...formData, is_published: val })
                  }
                />
                <Label>Published</Label>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setShowDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : editingPost ? "Update" : "Create"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
