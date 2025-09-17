import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cog, Video, BookOpen, Palette, BarChart3 } from "lucide-react";
import automationBg from "@/assets/images/backgrounds/ai-automation-bg.jpg";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Expertise = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: descRef, isVisible: descVisible } = useScrollAnimation({ rootMargin: '0px 0px -50px 0px' });
  const { containerRef: cardsRef, visibleItems } = useStaggeredAnimation(6, 120);
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  const expertiseAreas = [
    {
      icon: Brain,
      title: "AI & RAG",
      description: "Advanced prompt engineering, RAG systems, and competitive ML projects including Kaggle competitions",
      tools: ["ChatGPT", "Gemini", "Claude", "Midjourney", "DALL-E", "RAG Systems", "Kaggle"]
    },
    {
      icon: Cog,
      title: "Workflow Automation",
      description: "Streamlining processes with intelligent automation solutions",
      tools: ["Google Apps Script", "Zapier", "Make.com", "Python", "APIs", "Webhooks"]
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "AI-powered video, graphics, and multimedia content generation",
      tools: ["Manim", "Clipchamp", "VEED.io", "Synthesia", "Heygen", "Veo 3"]
    },
    {
      icon: BookOpen,
      title: "Educational Technology",
      description: "Curriculum design, content curation, and learning experience optimization",
      tools: ["Notion AI", "Articulate 360", "Khan Academy", "Learning Analytics"]
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "AI-assisted graphic design, branding, and visual content creation",
      tools: ["Midjourney", "Photoshop", "Figma", "Canva", "Adobe Creative Suite"]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Performance tracking, insights generation, and optimization strategies",
      tools: ["Google Analytics", "Sheets", "Python", "Tableau", "Power BI", "Looker"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${automationBg})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div 
            ref={titleRef as any}
            className={`transition-all duration-700 ${titleVisible ? 'animate-fade-in-left' : 'scroll-hidden-left'}`}
          >
            <Badge className="mb-4 ai-badge">Core Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              AI Tools & Technologies
            </h2>
          </div>
          <p 
            ref={descRef as any}
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 ${descVisible ? 'animate-text-reveal' : 'scroll-hidden-text'}`}
          >
            Leveraging cutting-edge AI tools and technologies to deliver exceptional results 
            across diverse industries and use cases.
          </p>
        </div>

        <div ref={cardsRef as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index}
                className={`project-card h-full group transition-all duration-700 ${visibleItems.includes(index) ? 'animate-fade-in-up' : 'scroll-hidden'}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-neural flex items-center justify-center mb-4 group-hover:animate-neural-pulse">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-ai">
                    {area.title}
                  </CardTitle>
                  <CardDescription>
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-2 py-1 text-xs rounded-full bg-muted text-white border border-border transition-ai cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience Stats */}
        <div 
          ref={statsRef as any} 
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "4", label: "Niche Industries Served" },
            { number: "30%+", label: "Average Efficiency Gain" },
            { number: "50+", label: "AI Tools Leveraged" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 ${statsVisible ? 'animate-fade-in-right' : 'scroll-hidden-right'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold hero-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;