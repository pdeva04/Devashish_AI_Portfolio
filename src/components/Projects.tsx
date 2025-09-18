import ProjectCard from "./ProjectCard";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
const Projects = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: descRef, isVisible: descVisible } = useScrollAnimation({ rootMargin: '0px 0px -50px 0px' });
  const { containerRef: projectsRef, visibleItems } = useStaggeredAnimation(6, 150);

  const projects = [{
    title: "Ford L&D AI Optimization",
    category: "Enterprise L&D",
    description: "Revolutionized content creation workflows for Ford's Learning & Development team using AI integration and automation tools.",
    impact: "Achieved 30%+ efficiency improvement in L&D content creation for videos, e-learning modules, and training materials.",
    metrics: "30%+ Efficiency Boost",
    tools: ["Lovable", "Gemini", "ChatGPT", "Gamma.app", "Articulate 360", "Veo 3", "Heygen", "Synthesia"],
    link: "https://app.chroniclehq.com/share/ac0618b2-1fb8-4723-b1c7-74be13be1749/4c9631ae-85ac-4627-9b65-2417278ca0b1/intro"
  }, {
    title: "Khan Academy AI Math Content",
    category: "EdTech",
    description: "AI integration in video creation and exercise creation, developed personalized Chrome apps to improve personalized workflows.",
    impact: "Delivered engaging educational content with animated visualizations, improving student comprehension and engagement.",
    metrics: "3x productivity gains across Management and content production",
    tools: ["ChatGPT 4o", "Gemini", "Cursor", "Manim", "Clipchamp AI", "Python"],
    link: "https://youtu.be/OCNf1sBIwTs"
  }, {
    title: "Ed Sharpener YouTube Automation",
    category: "Content Creation",
    description: "Used GCP and AI tools to efficiently create automations for uploading content.",
    impact: "Created prototypes for YouTube shorts end to end pipeline and Automatic YouTube video uploads using GCP",
    metrics: "25K+ Subscribers",
    tools: ["YouTube Analytics", "AI Scripting", "Video Automation", "SEO Optimization"],
    link: "https://youtu.be/VVy9Z5D3GLA"  }, {
    title: "Tutero Personalized Learning",
    category: "EdTech",
    description: "Developed AI-powered personalized math modules with dynamic theme customization for Australian K-12 students.",
    impact: "Enabled personalized learning experiences with themes like Pirates, Space, and Dinosaurs, significantly reducing content creation time.",
    metrics: "70% Faster Creation",
    tools: ["Notion AI", "ChatGPT", "Gemini", "Custom Chrome Extension"]
  }, {
    title: "Theatre Production AI Design",
    category: "Creative Arts",
    description: "Created stunning play posters and marketing materials using AI-generated art and design automation.",
    impact: "Dramatically reduced design costs and time while maintaining professional quality for theatre productions.",
    metrics: "80% Faster Design",
    tools: ["Midjourney", "ChatGPT", "DALL-E", "Design Automation"],
    link: "https://file.notion.so/f/f/15f78004-045f-422b-80cf-94f2896069e9/eaa3459e-2ccd-4cf7-9724-5ea3cebaab5c/marry_go_round.jpeg?table=block&id=1e06e704-bb1f-80e3-9f24-e40703201915&spaceId=15f78004-045f-422b-80cf-94f2896069e9&expirationTimestamp=1758204000000&signature=Tlrjuttde1DhKwz1L9VKVmGm38doqOBoAAlgnLmnAOI&downloadName=marry+go+round.jpeg"
  }, {
    title: "Google Workspace Automation",
    category: "Process Optimization",
    description: "Built intelligent automation systems for Google Sheets and organizational workflows using GCP APIs.",
    impact: "Streamlined organizational processes and data management, saving significant operational time.",
    metrics: "25% Time Saved",
    tools: ["Gemini", "Apps Script", "GCP APIs", "Google Sheets"]
  }];
  return <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div 
            ref={titleRef as any}
            className={`transition-all duration-700 ${titleVisible ? 'animate-fade-in-up' : 'scroll-hidden'}`}
          >
            <Badge className="mb-4 ai-badge">Featured Projects</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 hero-text text-pink-900 leading-[1.2] pb-1 md:pb-1.5">
              Transforming Ideas into Impact
            </h2>
          </div>
          <p 
            ref={descRef as any}
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 ${descVisible ? 'animate-text-reveal' : 'scroll-hidden-text'}`}
          >
            Discover how I've helped organizations across EdTech, L&D, and creative industries 
            achieve remarkable efficiency gains through AI-powered solutions.
          </p>
        </div>

        <div ref={projectsRef as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 ${visibleItems.includes(index) ? 'animate-scale-in' : 'scroll-hidden-scale'}`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default Projects;