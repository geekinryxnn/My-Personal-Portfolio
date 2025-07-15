import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  tags: string[];
}

const ProjectCard = ({ title, description, image, githubUrl, tags }: ProjectCardProps) => {
  return (
    <Card className="card-gradient overflow-hidden glow-hover group">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 glow-hover"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View Code
          </Button>
          <Button 
            variant="default" 
            size="sm"
            className="flex-1"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;