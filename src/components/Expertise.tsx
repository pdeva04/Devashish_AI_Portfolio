import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cog, Video, BookOpen, Palette, BarChart3, ExternalLink } from "lucide-react";
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
      tools: ["ChatGPT", "Gemini", "Claude", "Midjourney", "DALL-E", "RAG Systems", "Kaggle"],
      link: "https://file.notion.so/f/f/15f78004-045f-422b-80cf-94f2896069e9/5eee9f0c-8c9b-424e-a568-164bb729161d/Completed_5-Day_Gen_AI_Intensive.png?table=block&id=1f26e704-bb1f-8027-ae9a-dd6999268e28&spaceId=15f78004-045f-422b-80cf-94f2896069e9&expirationTimestamp=1758204000000&signature=E1AR3EU_LEQAxZCI3-Y4vV4QA7iGducfNRoSQJeESk4&downloadName=Completed+5-Day+Gen+AI+Intensive.png"
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
      tools: ["Manim", "Clipchamp", "VEED.io", "Synthesia", "Heygen", "Veo 3"],
      link: "https://youtube.com/watch?v=zI1wHSI5Wgk&feature=youtu.be"
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
      tools: ["Midjourney", "Photoshop", "Figma", "Canva", "Adobe Creative Suite"],
      link: "https://file.notion.so/f/f/15f78004-045f-422b-80cf-94f2896069e9/eaa3459e-2ccd-4cf7-9724-5ea3cebaab5c/marry_go_round.jpeg?table=block&id=1e06e704-bb1f-80e3-9f24-e40703201915&spaceId=15f78004-045f-422b-80cf-94f2896069e9&expirationTimestamp=1758204000000&signature=Tlrjuttde1DhKwz1L9VKVmGm38doqOBoAAlgnLmnAOI&downloadName=marry+go+round.jpeg"
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-neural flex items-center justify-center group-hover:animate-neural-pulse">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {area.link && (
                      <a 
                        href={area.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="opacity-0 group-hover:opacity-100 transition-ai text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
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