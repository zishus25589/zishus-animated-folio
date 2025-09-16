import { MapPin, Calendar, Mail, Phone } from 'lucide-react';
const PersonalInfo = () => {
  return <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4 animate-slide-up">
            Personal Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Get to know more about me and my background
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Age */}
          <div className="glass-effect rounded-xl p-6 text-center hover-lift animate-bounce-in">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Age</h3>
            <p className="text-3xl font-bold text-gradient">19</p>
            <p className="text-sm text-muted-foreground mt-2">Years Young</p>
          </div>

          {/* Location */}
          <div className="glass-effect rounded-xl p-6 text-center hover-lift animate-bounce-in" style={{
          animationDelay: '0.1s'
        }}>
            <div className="w-16 h-16 bg-gradient-to-br from-chart-2 to-chart-3 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-lg font-semibold text-gradient">Delhi</p>
            <p className="text-sm text-muted-foreground mt-2">India</p>
          </div>

          {/* Email */}
          <div className="glass-effect rounded-xl p-6 text-center hover-lift animate-bounce-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="w-16 h-16 bg-gradient-to-br from-chart-3 to-chart-4 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-sm font-medium text-gradient break-all">zishuahmad96@outlook</p>
          </div>

          {/* Phone */}
          <div className="glass-effect rounded-xl p-6 text-center hover-lift animate-bounce-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="w-16 h-16 bg-gradient-to-br from-chart-4 to-destructive rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <div className="cross-container">
              <p className="text-sm text-muted-foreground">Currently Unavailable</p>
              
              
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-chart-2/10 rounded-full animate-float" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-chart-3/10 rounded-full animate-float" style={{
          animationDelay: '4s'
        }}></div>
        </div>
      </div>
    </section>;
};
export default PersonalInfo;