import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Camera, Utensils, ShoppingBag, Calendar } from "lucide-react";

const TouristGuidePage = () => {
  const attractions = [
    {
      id: 1,
      name: "Charminar",
      category: "Historical",
      rating: 4.8,
      duration: "2-3 hours",
      description: "Iconic 16th-century mosque and monument, symbol of Hyderabad",
      highlights: ["Architecture", "Photography", "Shopping nearby"],
      bestTime: "Evening",
      image: "🕌"
    },
    {
      id: 2,
      name: "Golconda Fort",
      category: "Historical",
      rating: 4.7,
      duration: "3-4 hours",
      description: "Ancient fortress with acoustic marvels and panoramic city views",
      highlights: ["Trekking", "History", "Sunset views"],
      bestTime: "Morning/Evening",
      image: "🏰"
    },
    {
      id: 3,
      name: "Hussain Sagar Lake",
      category: "Nature",
      rating: 4.5,
      duration: "2-3 hours",
      description: "Heart-shaped lake with Buddha statue and boat rides",
      highlights: ["Boating", "Walking", "Food courts"],
      bestTime: "Evening",
      image: "🏞️"
    },
    {
      id: 4,
      name: "Ramoji Film City",
      category: "Entertainment",
      rating: 4.6,
      duration: "Full day",
      description: "World's largest film studio complex with themed attractions",
      highlights: ["Film sets", "Shows", "Adventure rides"],
      bestTime: "Morning",
      image: "🎬"
    },
    {
      id: 5,
      name: "Salar Jung Museum",
      category: "Cultural",
      rating: 4.4,
      duration: "2-3 hours",
      description: "One of India's largest museums with rare artifacts",
      highlights: ["Art collections", "Manuscripts", "Sculptures"],
      bestTime: "Morning",
      image: "🏛️"
    },
    {
      id: 6,
      name: "Laad Bazaar",
      category: "Shopping",
      rating: 4.3,
      duration: "2-4 hours",
      description: "Traditional market famous for bangles and pearls",
      highlights: ["Shopping", "Local crafts", "Street food"],
      bestTime: "Evening",
      image: "🛒"
    }
  ];

  const foodSpots = [
    {
      name: "Paradise Restaurant",
      specialty: "Hyderabadi Biryani",
      rating: 4.5,
      priceRange: "₹₹",
      location: "Secunderabad"
    },
    {
      name: "Cafe Bahar",
      specialty: "Mutton Biryani",
      rating: 4.3,
      priceRange: "₹₹",
      location: "Basheer Bagh"
    },
    {
      name: "Shadab Restaurant",
      specialty: "Haleem & Kebabs",
      rating: 4.4,
      priceRange: "₹₹",
      location: "Ghansi Bazaar"
    }
  ];

  const itineraries = [
    {
      title: "One Day Heritage Tour",
      places: ["Charminar", "Laad Bazaar", "Mecca Masjid", "Salar Jung Museum"],
      duration: "8-10 hours",
      transport: "Auto/Cab"
    },
    {
      title: "Weekend Adventure",
      places: ["Golconda Fort", "Hussain Sagar", "Lumbini Park", "Eat Street"],
      duration: "2 days",
      transport: "Metro + Walking"
    },
    {
      title: "Entertainment Special",
      places: ["Ramoji Film City", "Snow World", "Ocean Park"],
      duration: "2-3 days",
      transport: "Private vehicle"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-civic flex items-center justify-center">
            <Camera className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tourist Guide</h1>
            <p className="text-muted-foreground">
              Discover the best attractions, food, and experiences in Hyderabad
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Top Attractions */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Top Attractions</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{attraction.image}</span>
                      <div>
                        <CardTitle className="text-lg">{attraction.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {attraction.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-muted-foreground">{attraction.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-sm">
                    {attraction.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">Duration: {attraction.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-xs">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">Best time: {attraction.bestTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {attraction.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button size="sm" className="w-full mt-3">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Food Recommendations */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Utensils className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Must-Try Food</h2>
            </div>
            
            <div className="space-y-4">
              {foodSpots.map((spot, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{spot.name}</h3>
                        <p className="text-sm text-muted-foreground">{spot.specialty}</p>
                        <p className="text-xs text-muted-foreground">{spot.location}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{spot.rating}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {spot.priceRange}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Suggested Itineraries */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Suggested Itineraries</h2>
            </div>
            
            <div className="space-y-4">
              {itineraries.map((itinerary, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{itinerary.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>⏱️ {itinerary.duration}</span>
                      <span>🚗 {itinerary.transport}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {itinerary.places.map((place, placeIndex) => (
                        <Badge key={placeIndex} variant="secondary" className="text-xs">
                          {place}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      View Full Itinerary
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Quick Tips */}
        <section>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>💡</span>
                <span>Travel Tips for Hyderabad</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">🌡️ Best Time to Visit</h4>
                  <p className="text-xs text-muted-foreground">October to March for pleasant weather</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">🚊 Getting Around</h4>
                  <p className="text-xs text-muted-foreground">Metro, Auto-rickshaws, Ola/Uber</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">💰 Currency</h4>
                  <p className="text-xs text-muted-foreground">Indian Rupee (INR), Cards widely accepted</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">🗣️ Languages</h4>
                  <p className="text-xs text-muted-foreground">Telugu, Urdu, Hindi, English</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default TouristGuidePage;