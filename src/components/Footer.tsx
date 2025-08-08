import { Heart, Mail, BookOpen, Video, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Grace Gleaned</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Exploring faith, culture, and wisdom through articles, reviews, and thoughtful commentary. 
              Discovering God's grace in everyday life.
            </p>
            <div className="flex items-center space-x-1 text-sm text-primary-foreground/70">
              <Heart className="w-4 h-4 text-accent-red" />
              <span>Made with love for the Kingdom</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Content</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#articles" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <FileText className="w-3 w-3" />
                  Articles
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <BookOpen className="w-3 w-3" />
                  Book Reviews
                </a>
              </li>
              <li>
                <a href="#movies" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <Video className="w-3 w-3" />
                  Movie Reviews
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3 w-3" />
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@gracegleaned.com" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  hello@gracegleaned.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Grace Gleaned. All rights reserved. | 
            <span className="ml-1">
              "For by grace you have been saved through faith." - Ephesians 2:8
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};