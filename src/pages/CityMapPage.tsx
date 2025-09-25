import CityMap from "@/components/map/CityMap";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Bus, Hospital, Home, Navigation } from "lucide-react";

const CityMapPage = () => {
  const serviceCategories = [
    {
      icon: Bus,
      title: "Public Transport",
      description: "Bus stops, metro stations, and transit hubs",
      color: "text-blue-600"
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "Hospitals, clinics, and emergency services",
      color: "text-red-600"
    },
    {
      icon: Home,
      title: "Housing Services",
      description: "Rental assistance and housing programs",
      color: "text-green-600"
    },
    {
      icon: Navigation,
      title: "Municipal Offices",
      description: "City hall, permits, and administrative services",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-civic flex items-center justify-center">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Interactive City Map</h1>
            <p className="text-muted-foreground">
              Find essential city services and navigate your community
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CityMap />
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Service Categories</CardTitle>
              <CardDescription>
                Click on map markers to see detailed information about each location
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Icon className={`h-5 w-5 mt-0.5 ${category.color}`} />
                    <div className="space-y-1">
                      <h3 className="font-medium text-sm">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors">
                <div className="flex items-center space-x-3">
                  <Navigation className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Find Nearest Hospital</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors">
                <div className="flex items-center space-x-3">
                  <Bus className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Transit Routes</span>
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors">
                <div className="flex items-center space-x-3">
                  <Home className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Housing Resources</span>
                </div>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CityMapPage;