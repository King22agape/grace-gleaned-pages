import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send, Heart } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              I'd love to hear from you. Share your thoughts, prayer requests, or suggestions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have questions about faith, want to discuss a book or movie, 
                  or simply need prayer, I'm here to listen and engage in meaningful conversation.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email Me</h4>
                        <p className="text-muted-foreground text-sm">
                          For general inquiries, prayer requests, or collaboration opportunities.
                        </p>
                        <a 
                          href="mailto:hello@gracegleaned.com" 
                          className="text-primary hover:text-primary-dark transition-colors font-medium"
                        >
                          hello@gracegleaned.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent-red bg-accent-red-light">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MessageCircle className="h-6 w-6 text-accent-red mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Share Your Story</h4>
                        <p className="text-muted-foreground text-sm">
                          Have a testimony, book recommendation, or topic suggestion? 
                          I'd love to hear how God is working in your life.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Heart className="h-5 w-5 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName"
                      type="text" 
                      placeholder="Your first name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName"
                      type="text" 
                      placeholder="Your last name"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    type="text" 
                    placeholder="What's this about?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Share your thoughts, prayer requests, or questions..."
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  I'll respond to your message within 24-48 hours. Your privacy is important to me.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};