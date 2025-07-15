import ProjectCard from "./ProjectCard";
import shirikishaImage from "@/assets/shirikisha-project.jpg";
import wildlifeImage from "@/assets/wildlife-project.jpg";
import groceryImage from "@/assets/grocery-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Shirikisha - Chama Management System",
      description: "A comprehensive management system for Chama groups (savings and credit cooperatives) featuring member management, savings tracking, loan processing, and financial reporting. Built to empower communities through organized financial collaboration.",
      image: shirikishaImage,
      githubUrl: "https://github.com/geekinryxnn/Shirikisha--chama-management-system",
      tags: ["React", "Node.js", "MongoDB", "Express", "Financial Tech"]
    },
    {
      title: "Wildlife Conservation Project",
      description: "An innovative wildlife tracking and conservation management platform that helps protect endangered species through data collection, monitoring, and analytics. Features animal tracking, habitat monitoring, and conservation metrics.",
      image: wildlifeImage,
      githubUrl: "https://github.com/geekinryxnn/Wildlife-Project",
      tags: ["Python", "Data Analytics", "Conservation", "Tracking", "Environmental"]
    },
    {
      title: "Grocery Shopping App",
      description: "A modern e-commerce mobile application that simplifies grocery shopping with features like product browsing, cart management, order tracking, and seamless checkout experience. Designed for convenience and user-friendly shopping.",
      image: groceryImage,
      githubUrl: "https://github.com/geekinryxnn/Grocery-Shopping-App",
      tags: ["React Native", "E-commerce", "Mobile", "Shopping Cart", "UX/UI"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've built that showcase my passion for 
            creating meaningful solutions across different domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;