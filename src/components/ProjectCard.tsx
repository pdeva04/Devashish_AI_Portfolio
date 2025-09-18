import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";
interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  tools: string[];
  metrics?: string;
  link?: string;
  category: string;
}
const ProjectCard = ({
  title,
  description,
  impact,
  tools,
  metrics,
  link,
  category
}: ProjectCardProps) => {
  return <Card className="project-card h-full group">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="mb-2 bg-purple-400">{category}</Badge>
          {link && <a href={link} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-ai text-muted-foreground hover:text-primary">
              <ExternalLink className="w-4 h-4" />
            </a>}
        </div>
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-ai">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics && <div className="flex items-center gap-2 p-3 rounded-lg bg-ai-success/10 border border-ai-success/20">
            <TrendingUp className="w-4 h-4 text-ai-success" />
            <span className="text-ai-success font-semibold text-sm">{metrics}</span>
          </div>}
        
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-2">Impact:</h4>
          <p className="text-sm text-muted-foreground">{impact}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-2">Tools Used:</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => <span key={index} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-white border border-primary/20">
                {tool}
              </span>)}
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default ProjectCard;