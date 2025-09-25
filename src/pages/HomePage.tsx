import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  MessageSquare, 
  Newspaper, 
  ArrowRight,
  Shield,
  Heart,
  Home,
  Clock,
  Globe,
  CheckCircle
} from "lucide-react";
import civicHeroImage from "@/assets/civic-hero.jpg";

const HomePage = () => {
  const quickLinks = [
    {
      title: "Interactive City Map",
      description: "Find public transport, healthcare, and essential services",
      icon: MapPin,
      href: "/map",
      color: "bg-gradient-civic"
    },
    {
      title: "Community Services",
      description: "Browse healthcare, education, and social programs",
      icon: Users,
      href: "/services", 
      color: "bg-gradient-community"
    },
    {
      title: "Report an Issue",
      description: "Help improve your community by reporting problems",
      icon: MessageSquare,
      href: "/report",
      color: "bg-gradient-hero"
    },
    {
      title: "Local News & Updates",
      description: "Stay informed about city services and community events",
      icon: Newspaper,
      href: "/news",
      color: "bg-gradient-civic"
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Available in English and Spanish for better accessibility"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your personal information is protected with enterprise-grade security"
    },
    {
      icon: Heart,
      title: "Community-Focused",
      description: "Built by and for community members to strengthen local connections"
    },
    {
      icon: CheckCircle,
      title: "Always Current",
      description: "Real-time updates ensure you have the latest information"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Community Members" },
    { number: "150+", label: "Local Services" },
    { number: "500+", label: "Issues Resolved" },
    { number: "24/7", label: "Access Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img
            src={civicHeroImage}
            alt="Community engagement and city services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Welcome to Urban Flow
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Your Gateway to
              <span className="block text-accent">Hyderabad's Services</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Connecting Hyderabad residents and newcomers with essential city services, community resources, 
              and civic engagement opportunities. Find what you need, when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/map">
                  <MapPin className="h-5 w-5 mr-2" />
                  Explore City Map
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services">
                  <Users className="h-5 w-5 mr-2" />
                  Browse Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access essential city services, connect with your community, and stay informed 
              about local developments through our integrated platform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className={`h-12 w-12 rounded-lg ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild variant="ghost" className="w-full justify-between group-hover:text-primary">
                      <Link to={link.href}>
                        Get Started
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Your Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed with accessibility, security, and community needs at the forefront.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-civic text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Connected?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of community members who are already using Urban Flow to 
              access services, stay informed, and make their voices heard in Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/report">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Report Your First Issue
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services">
                  Find Local Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;