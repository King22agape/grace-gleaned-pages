import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Users, Target } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Grace-Centered",
      description: "Every post reflects God's unmerited favor and love for humanity"
    },
    {
      icon: BookOpen,
      title: "Scripture-Focused",
      description: "Biblical truth serves as the foundation for all content and reviews"
    },
    {
      icon: Users,
      title: "Community-Minded",
      description: "Building connections through shared faith and thoughtful dialogue"
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Encouraging spiritual growth and deeper understanding of God's will"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Grace Gleaned</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A ministry of reflection, review, and spiritual growth
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Our Mission</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Welcome to Grace Gleaned, where faith meets culture through thoughtful analysis 
                  and biblical perspective. This platform serves as a space for exploring how 
                  God's grace manifests in literature, film, and everyday life.
                </p>
                <p>
                  Through articles, book reviews, and movie commentary, we seek to encourage 
                  believers in their walk with Christ while engaging with contemporary culture 
                  through the lens of Scripture.
                </p>
                <p>
                  Whether you're looking for your next meaningful read, seeking biblical 
                  insight on current topics, or simply want to grow in your understanding 
                  of God's character, you'll find content here that challenges and inspires.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">What You'll Find</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• In-depth articles on Christian living and theology</li>
                    <li>• Honest reviews of Christian and secular literature</li>
                    <li>• Thoughtful analysis of films through a biblical worldview</li>
                    <li>• Video content exploring faith and culture</li>
                    <li>• Resources for spiritual growth and discipleship</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};