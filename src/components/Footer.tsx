import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, ExternalLink, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold hero-text mb-3 md:mb-4">
              Devashish Phadnis
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-md">
              AI Consultant specializing in EdTech, L&D optimization, and intelligent automation. 
              Transforming businesses through innovative AI solutions.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="text-xs">AI Consultant</Badge>
              <Badge variant="secondary" className="text-xs">EdTech Expert</Badge>
              <Badge variant="secondary" className="text-xs">Content Creator</Badge>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/devashishphadnis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-ai"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="mailto:devashish.phadnis@gmail.com"
                className="text-muted-foreground hover:text-primary transition-ai"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="https://bird-roundworm-e61.notion.site/AI-Integration-Portfolio-Devashish-Phadnis-1e06e704bb1f805eadf2fee2a168f736" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-ai"
                title="View AI Portfolio"
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>AI Workflow Optimization</li>
              <li>EdTech Content Creation</li>
              <li>L&D Process Automation</li>
              <li>Video Production & Animation</li>
              <li>Custom AI Integrations</li>
              <li>Training & Workshops</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Industries</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>Educational Technology</li>
              <li>Learning & Development</li>
              <li>Theatre & Production</li>
              <li>Corporate Training</li>
              <li>Content Marketing</li>
              <li>Digital Media</li>
            </ul>
          </div>
        </div>

        <hr className="border-border my-6 md:my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm text-muted-foreground gap-2">
          <p>&copy; 2025 Devashish Phadnis. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <span>Based in Amravati, India</span>
            <span className="hidden sm:inline">•</span>
            <span>Available Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;