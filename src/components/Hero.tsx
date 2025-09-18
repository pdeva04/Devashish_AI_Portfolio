import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Brain, Zap } from "lucide-react";
import heroImage from "@/assets/images/backgrounds/hero-ai-consultant.jpg";
import profileImage from "@/assets/images/profiles/devai-profile.jpg";
const Hero = () => {
  const [currentService, setCurrentService] = useState(0);
  const [displayText, setDisplayText] = useState("AI");
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const services = ["AI & Automation", "Improved Workflows", "Efficient Prompting", "Agentic Workflows", "Latest AI Tools"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  // Intersection Observer to trigger animation when hero section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    let timeouts: NodeJS.Timeout[] = [];
    
    const runAnimation = () => {
      // Reset to "AI"
      setDisplayText("AI");
      
      // Wait 1 second, then start backspacing
      timeouts.push(setTimeout(() => {
        setDisplayText("A");
        timeouts.push(setTimeout(() => {
          setDisplayText("");
          // Start typing "AI and Human"
          const fullText = "AI and Human";
          let index = 0;
          
          const typeNext = () => {
            if (index <= fullText.length) {
              setDisplayText(fullText.slice(0, index));
              index++;
              timeouts.push(setTimeout(typeNext, 120));
            } else {
              // Animation complete, reset shouldAnimate to allow retriggering
              timeouts.push(setTimeout(() => {
                setShouldAnimate(false);
              }, 2000));
            }
          };
          
          typeNext();
        }, 100));
      }, 1000));
    };
    
    runAnimation();
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [shouldAnimate]);
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section ref={heroRef} className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-hero-bg/95 to-hero-bg/90 backdrop-blur-sm bg-[#040513]/[0.76]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-16 h-16 rounded-full gradient-neural animate-neural-pulse flex items-center justify-center">
          <Brain className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="absolute top-40 right-32 animate-float" style={{
      animationDelay: '2s'
    }}>
        <div className="w-12 h-12 rounded-full bg-ai-secondary/30 backdrop-blur-sm border border-ai-secondary/50 flex items-center justify-center shadow-neural">
          <Sparkles className="w-6 h-6 text-ai-secondary" />
        </div>
      </div>

      <div className="absolute bottom-40 left-32 animate-float" style={{
      animationDelay: '4s'
    }}>
        <div className="w-14 h-14 rounded-full bg-ai-accent/30 backdrop-blur-sm border border-ai-accent/50 flex items-center justify-center shadow-neural">
          <Zap className="w-7 h-7 text-ai-accent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-slide-up">
        <div className="mb-6">
          <span className="text-2xl md:text-3xl font-bold px-4 py-2 rounded-full border border-ai-primary/30 backdrop-blur-sm">
            <span className="hero-text">Let us tap</span> <span className="text-metallic-silver" style={{textShadow: '0 0 2px hsl(var(--metallic-silver) / 0.5)'}}>{displayText}</span> <span className="hero-text">superpower</span>
          </span>
        </div>
        
        <div className="flex flex-col items-center gap-8 mb-8 text-center">
          <img src={profileImage} alt="Devashish Phadnis - AI Consultant" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-lg" />
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="hero-text">Transform Your Business with</span>
            </h1>
            <div className="text-3xl md:text-5xl mb-4 h-16 flex items-center justify-center">
              <span className="text-metallic-silver font-bold italic transition-ai">
                {services[currentService]}
              </span>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground">
              <span className="hero-text font-semibold">Devashish Phadnis</span> - AI Consultant
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed text-center">
          Empowering EdTech, L&D, Theatre, and Production agencies with cutting-edge AI solutions. 
          <br className="hidden md:block" />
          Delivering <span className="efficiency-text italic font-bold">measurable efficiency gains</span> through intelligent automation and optimized workflows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button onClick={scrollToProjects} size="lg" className="gradient-neural hover:ai-glow transition-neural text-white font-semibold px-8 py-4 text-lg shadow-hero">
            Explore My Work
          </Button>
          <Button onClick={scrollToContact} variant="outline" size="lg" className="border-ai-secondary/60 text-ai-secondary hover:bg-ai-secondary hover:text-white transition-ai px-8 py-4 text-lg backdrop-blur-sm bg-white/10">
            Start Your Project
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-8 animate-bounce">
          <div 
            onClick={scrollToProjects}
            className="w-12 h-12 rounded-full border-2 border-muted-foreground/30 bg-background/20 backdrop-blur-sm flex items-center justify-center hover:border-primary/50 transition-colors mx-auto cursor-pointer">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;