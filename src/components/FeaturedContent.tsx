import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, Calendar, User, ArrowRight } from "lucide-react";

const featuredPosts = [
  {
    id: 1,
    title: "Walking in Faith: Lessons from Psalm 23",
    excerpt: "Discovering comfort and guidance in one of the most beloved passages of Scripture.",
    category: "Articles",
    author: "Grace Writer",
    date: "December 15, 2024",
    readTime: "5 min read",
    icon: FileText,
    featured: true
  },
  {
    id: 2,
    title: "Book Review: 'Mere Christianity' by C.S. Lewis",
    excerpt: "A timeless exploration of faith that continues to challenge and inspire readers across generations.",
    category: "Book Reviews",
    author: "Grace Writer",
    date: "December 10, 2024", 
    readTime: "8 min read",
    icon: BookOpen,
    featured: false
  },
  {
    id: 3,
    title: "The Chronicles of Narnia: Faith in Fantasy",
    excerpt: "Examining the profound Christian allegories woven throughout Lewis's magical world.",
    category: "Movie Reviews",
    author: "Grace Writer",
    date: "December 8, 2024",
    readTime: "6 min read",
    icon: Video,
    featured: false
  },
  {
    id: 4,
    title: "Finding Hope in Difficult Seasons",
    excerpt: "How Scripture guides us through life's challenges with unwavering hope and trust.",
    category: "Articles",
    author: "Grace Writer", 
    date: "December 5, 2024",
    readTime: "7 min read",
    icon: FileText,
    featured: false
  }
];

export const FeaturedContent = () => {
  const featuredPost = featuredPosts.find(post => post.featured);
  const otherPosts = featuredPosts.filter(post => !post.featured);

  return (
    <section id="articles" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">Content</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughtful reflections on faith, culture, and the Christian journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          {featuredPost && (
            <Card className="lg:row-span-2 bg-gradient-to-br from-card to-secondary/50 shadow-lg hover:shadow-xl transition-all duration-300 border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-accent-red text-accent-foreground">
                    Featured
                  </Badge>
                  <featuredPost.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-foreground leading-tight">
                  {featuredPost.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <Button variant="hero" className="w-full">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Other Posts Grid */}
          <div className="space-y-6">
            {otherPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300 bg-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
