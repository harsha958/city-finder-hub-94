import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bus, 
  Train, 
  Car, 
  Bike,
  Clock, 
  IndianRupee,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Navigation,
  MapPin
} from "lucide-react";

const TransportGuidePage = () => {
  const currentTraffic = {
    level: "moderate",
    percentage: 65,
    lastUpdated: "2 minutes ago"
  };

  const transportModes = [
    {
      type: "Metro",
      icon: Train,
      cost: "₹15-40",
      time: "Fast",
      traffic: "none",
      pros: ["No traffic delays", "Air-conditioned", "Punctual", "Safe"],
      cons: ["Limited routes", "Crowded during peak hours"],
      recommendation: "Best for long distances within metro coverage",
      status: "excellent",
      routes: ["Red Line", "Blue Line", "Green Line"]
    },
    {
      type: "Bus (TSRTC)",
      icon: Bus,
      cost: "₹8-25",
      time: "Moderate",
      traffic: "high",
      pros: ["Extensive network", "Very affordable", "Frequent services"],
      cons: ["Traffic delays", "Can be crowded", "No AC in some buses"],
      recommendation: "Good for areas not covered by metro",
      status: "good",
      routes: ["City buses", "Express services", "Pushpak services"]
    },
    {
      type: "Auto Rickshaw",
      icon: Car,
      cost: "₹25-200",
      time: "Variable",
      traffic: "moderate",
      pros: ["Door-to-door service", "Flexible routes", "Available everywhere"],
      cons: ["Meter issues", "Traffic dependent", "No AC"],
      recommendation: "Best for short to medium distances",
      status: "fair",
      routes: ["Anywhere in city", "Shared autos available"]
    },
    {
      type: "Cab (Ola/Uber)",
      icon: Car,
      cost: "₹50-500",
      time: "Variable",
      traffic: "high",
      pros: ["Comfortable", "GPS tracking", "Multiple options", "AC"],
      cons: ["Surge pricing", "Traffic delays", "Expensive"],
      recommendation: "Comfortable option for longer distances",
      status: "good",
      routes: ["All areas", "Airport connectivity"]
    },
    {
      type: "Bike Taxi",
      icon: Bike,
      cost: "₹20-150",
      time: "Fast",
      traffic: "low",
      pros: ["Quick in traffic", "Cost-effective", "Easy parking"],
      cons: ["Weather dependent", "Safety concerns", "Limited baggage"],
      recommendation: "Fast option for short distances during traffic",
      status: "excellent",
      routes: ["Most areas", "Quick intercity travel"]
    }
  ];

  const trafficHotspots = [
    {
      area: "Jubilee Hills - Banjara Hills",
      status: "heavy",
      peakHours: "8:00-10:00 AM, 6:00-8:00 PM",
      alternative: "Take Metro to Jubilee Hills Metro Station",
      severity: "high"
    },
    {
      area: "Secunderabad - Begumpet",
      status: "moderate",
      peakHours: "9:00-11:00 AM, 5:30-7:30 PM",
      alternative: "Use Blue Line Metro",
      severity: "medium"
    },
    {
      area: "Mehdipatnam - Tolichowki",
      status: "heavy",
      peakHours: "8:30-10:30 AM, 6:30-8:30 PM",
      alternative: "Take Airport Express Metro",
      severity: "high"
    },
    {
      area: "Ameerpet - SR Nagar",
      status: "light",
      peakHours: "8:00-9:30 AM, 6:00-7:00 PM",
      alternative: "Multiple metro connections available",
      severity: "low"
    }
  ];

  const recommendations = {
    "heavy": {
      primary: "Metro",
      secondary: "Bike Taxi",
      avoid: "Bus/Car during peak hours"
    },
    "moderate": {
      primary: "Metro/Bus",
      secondary: "Auto Rickshaw",
      avoid: "Personal vehicle if possible"
    },
    "light": {
      primary: "Any mode",
      secondary: "Walk for short distances",
      avoid: "None"
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-600 bg-green-50 border-green-200";
      case "good": return "text-blue-600 bg-blue-50 border-blue-200";
      case "fair": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "poor": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getTrafficColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-600";
      case "medium": return "text-yellow-600";
      case "low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-civic flex items-center justify-center">
            <Navigation className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Transport Guide</h1>
            <p className="text-muted-foreground">
              Smart transportation suggestions based on real-time traffic conditions
            </p>
          </div>
        </div>
      </div>

      {/* Current Traffic Status */}
      <Card className="mb-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Current Traffic Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{currentTraffic.percentage}%</div>
              <div className="text-sm text-muted-foreground">City Average</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold capitalize">{currentTraffic.level}</div>
              <div className="text-sm text-muted-foreground">Traffic Level</div>
            </div>
            <div className="text-center">
              <div className="text-sm">Last Updated</div>
              <div className="text-sm text-muted-foreground">{currentTraffic.lastUpdated}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="modes" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="modes">Transport Modes</TabsTrigger>
          <TabsTrigger value="traffic">Traffic Hotspots</TabsTrigger>
          <TabsTrigger value="recommendations">Smart Suggestions</TabsTrigger>
        </TabsList>

        <TabsContent value="modes" className="space-y-6">
          <div className="grid gap-6">
            {transportModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{mode.type}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={`${getStatusColor(mode.status)} text-xs`}>
                              {mode.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">Cost: {mode.cost}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{mode.recommendation}</p>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium text-sm mb-2 text-green-600">Pros</h4>
                        <ul className="space-y-1">
                          {mode.pros.map((pro, i) => (
                            <li key={i} className="flex items-center space-x-2 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-2 text-red-600">Cons</h4>
                        <ul className="space-y-1">
                          {mode.cons.map((con, i) => (
                            <li key={i} className="flex items-center space-x-2 text-xs">
                              <AlertTriangle className="h-3 w-3 text-red-500" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Available Routes</h4>
                      <div className="flex flex-wrap gap-1">
                        {mode.routes.map((route, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {route}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-6">
          <div className="grid gap-4">
            {trafficHotspots.map((spot, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{spot.area}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getTrafficColor(spot.severity)}`}
                        >
                          {spot.status} traffic
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Peak: {spot.peakHours}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      {spot.severity === "high" && <TrendingUp className="h-5 w-5 text-red-500" />}
                      {spot.severity === "medium" && <TrendingUp className="h-5 w-5 text-yellow-500" />}
                      {spot.severity === "low" && <TrendingDown className="h-5 w-5 text-green-500" />}
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">💡 Alternative Route</h4>
                    <p className="text-sm text-muted-foreground">{spot.alternative}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Current Recommendations</CardTitle>
                <CardDescription>
                  Based on current traffic: {currentTraffic.level}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium text-sm text-green-800">Recommended</div>
                      <div className="text-sm text-green-600">
                        {recommendations[currentTraffic.level as keyof typeof recommendations].primary}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-sm text-blue-800">Alternative</div>
                      <div className="text-sm text-blue-600">
                        {recommendations[currentTraffic.level as keyof typeof recommendations].secondary}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-red-50 border border-red-200">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-medium text-sm text-red-800">Avoid</div>
                      <div className="text-sm text-red-600">
                        {recommendations[currentTraffic.level as keyof typeof recommendations].avoid}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
                <CardDescription>
                  Smart travel strategies for Hyderabad
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <h4 className="font-medium mb-1">🕐 Peak Hours to Avoid</h4>
                    <p className="text-muted-foreground">8:00-10:00 AM & 6:00-8:00 PM on weekdays</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-muted/50">
                    <h4 className="font-medium mb-1">🚇 Metro Benefits</h4>
                    <p className="text-muted-foreground">Fastest during peak hours, connects major areas</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-muted/50">
                    <h4 className="font-medium mb-1">🏍️ Bike Taxi Advantage</h4>
                    <p className="text-muted-foreground">Can navigate through traffic, ideal for urgent trips</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-muted/50">
                    <h4 className="font-medium mb-1">💰 Cost Optimization</h4>
                    <p className="text-muted-foreground">Bus for budget, Metro for speed, Cab for comfort</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransportGuidePage;