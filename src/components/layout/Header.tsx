import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MapPin, Users, MessageSquare, Newspaper, Globe, Building2, Calendar, Camera, Bus } from "lucide-react";
import urbanFlowLogo from "@/assets/urban-flow-logo.jpg";

const Header = () => {
  const location = useLocation();
  const [language, setLanguage] = useState("en");

  const navigation = [
    { name: "Home", href: "/", icon: MapPin },
    { name: "City Map", href: "/map", icon: MapPin },
    { name: "Services", href: "/services", icon: Users },
    { name: "Tourist Guide", href: "/tourist-guide", icon: Camera },
    { name: "Transport Guide", href: "/transport-guide", icon: Bus },
    { name: "Report Issue", href: "/report", icon: MessageSquare },
    { name: "Government", href: "/government", icon: Building2 },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "News", href: "/news", icon: Newspaper },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img 
              src={urbanFlowLogo} 
              alt="Urban Flow Logo" 
              className="h-8 w-8 rounded-lg object-cover"
            />
            <span className="hidden font-bold sm:inline-block">Urban Flow</span>
          </Link>
          
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={urbanFlowLogo} 
                alt="Urban Flow Logo" 
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="font-bold">Urban Flow</span>
            </Link>
            
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-primary ${
                        isActive(item.href)
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link to="/" className="flex items-center space-x-2 md:hidden">
              <img 
                src={urbanFlowLogo} 
                alt="Urban Flow Logo" 
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="font-bold">Urban Flow</span>
            </Link>
          </div>
          
          <nav className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="text-sm"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === "en" ? "ES" : "EN"}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;