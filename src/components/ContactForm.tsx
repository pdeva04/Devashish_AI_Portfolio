import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Send, Calendar } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    priority: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        company: formData.company,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        description: formData.description,
        priority: formData.priority,
        timestamp: new Date().toLocaleString(),
        source: "Devashish Phadnis AI Consultant Portfolio"
      };
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams, emailjsConfig.publicKey);
      toast.success("Inquiry submitted successfully! I'll get back to you within 24 hours.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
        priority: ""
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      const errorMessage = error?.text || error?.message || "Failed to submit inquiry. Please try again or contact me directly.";
      toast.error(`Email submission failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 ai-badge">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
            Start Your AI Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to boost your efficiency with AI? Let's discuss your project and explore 
            how we can achieve remarkable results together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">devashish.phadnis@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+91 9560922289</p>
              </CardContent>
            </Card>


            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  
                  Current Role
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Content Expert & AI Generalist</p>
                <p className="text-sm text-muted-foreground">Khan Academy India</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 project-card">
            <CardHeader>
              <CardTitle>Project Inquiry Form</CardTitle>
              <CardDescription>
                Share your project details and I'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" required value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder="Your full name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="your.email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" value={formData.company} onChange={e => handleInputChange('company', e.target.value)} placeholder="Your company name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select required onValueChange={value => handleInputChange('projectType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="l&d-optimization">L&D Workflow Optimization</SelectItem>
                        <SelectItem value="edtech-content">EdTech Content Creation</SelectItem>
                        <SelectItem value="ai-automation">AI Process Automation</SelectItem>
                        <SelectItem value="video-production">Video Production & Animation</SelectItem>
                        <SelectItem value="custom-ai-tools">Custom AI Tool Integration</SelectItem>
                        <SelectItem value="training-workshops">AI Training & Workshops</SelectItem>
                        <SelectItem value="other">Other (Please specify)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={value => handleInputChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                        <SelectItem value="30k-plus">$30,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select onValueChange={value => handleInputChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Expected timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority Level</Label>
                    <Select onValueChange={value => handleInputChange('priority', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Just exploring</SelectItem>
                        <SelectItem value="medium">Medium - Planning phase</SelectItem>
                        <SelectItem value="high">High - Ready to start</SelectItem>
                        <SelectItem value="urgent">Urgent - Need immediate help</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea id="description" required value={formData.description} onChange={e => handleInputChange('description', e.target.value)} placeholder="Please describe your project, goals, current challenges, and how you envision AI helping your organization..." className="min-h-[120px]" />
                </div>

                <Button type="submit" disabled={isLoading} className="w-full gradient-neural hover:ai-glow transition-neural text-white font-semibold py-3">
                  <Send className="w-4 h-4 mr-2" />
                  {isLoading ? "Submitting..." : "Send Project Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactForm;