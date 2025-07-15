import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/meozjrgy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ryankiratu67@email.com",
      href: "mailto:ryangeekin@email.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "geekinryxnn",
      href: "https://github.com/geekinryxnn"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ryan-geekin",
      href: "https://www.linkedin.com/in/ryan-kiratu-208098367/"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 797 178 273",
      href: "tel:+254797178273"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={method.label}
                className="card-gradient glow-hover group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {method.label}
                  </h3>
                  <Button 
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary text-sm"
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    {method.value}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="card-gradient glow-hover animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gradient">Send Me a Message</h3>
                <p className="text-muted-foreground">
                  Have a project in mind? Let's discuss how we can work together.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        className="bg-background/50 border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50 border-border"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                      className="bg-background/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or ideas..."
                      rows={6}
                      required
                      className="bg-background/50 border-border resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full button-gradient text-white font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;