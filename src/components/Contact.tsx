import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zishuahmad96@outlook.com",
      href: "mailto:zishuahmad96@outlook.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: "#"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Currently Unavailable",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "#"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:zishuahmad96@outlook.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for opportunities to collaborate or just want to say hello? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <a 
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                      title={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Ready to Work Together?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently available for freelance work and exciting projects. 
                  Whether you need a website, web application, or want to collaborate 
                  on something amazing, let's make it happen!
                </p>
                <div className="space-y-4">
                  <a 
                    href="mailto:zishuahmad96@outlook.com"
                    className="block w-full bg-primary text-primary-foreground text-center py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 glow-effect font-semibold"
                  >
                    Send Me an Email
                  </a>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Usually responds within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;