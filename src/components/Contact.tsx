import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6 animate-slide-up">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-effect rounded-xl p-8 animate-bounce-in">
              <h3 className="text-2xl font-bold text-gradient mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 group hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:zishuahmad96@outlook.com" className="text-primary hover:text-primary/80 transition-colors">
                      zishuahmad96@outlook.com
                    </a>
                  </div>
                </div>

                {/* Phone with Unavailable Effect */}
                <div className="flex items-center space-x-4 group hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-chart-2 to-chart-3 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-muted-foreground">Currently Unavailable</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-destructive rounded-full animate-ping"></div>
                        <div className="w-2 h-2 bg-destructive rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-2 h-2 bg-destructive rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 group hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-chart-3 to-chart-4 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-muted-foreground">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="glass-effect rounded-xl p-8 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gradient mb-4">Professional Resume</h3>
              <p className="text-muted-foreground mb-6">
                Download my complete resume for detailed information about my experience and skills.
              </p>
              <Button className="w-full hover-lift animate-shimmer group">
                <User className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume (PDF)
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-xl p-8 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-gradient">Send Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project ideas..."
                  rows={6}
                  required
                  className="border-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full hover-lift animate-shimmer group"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;