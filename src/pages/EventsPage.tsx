import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Search,
  Filter,
  Music,
  Utensils,
  Palette,
  Trophy,
  BookOpen,
  Heart,
  Ticket
} from "lucide-react";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDate, setSelectedDate] = useState("all");

  const eventCategories = [
    { value: "all", label: "All Categories" },
    { value: "cultural", label: "Cultural", icon: Palette },
    { value: "music", label: "Music", icon: Music },
    { value: "food", label: "Food & Drink", icon: Utensils },
    { value: "sports", label: "Sports", icon: Trophy },
    { value: "education", label: "Educational", icon: BookOpen },
    { value: "community", label: "Community", icon: Heart },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Cultural Festival",
      category: "cultural",
      date: "2024-02-15",
      time: "6:00 PM",
      location: "City Cultural Center",
      description: "Celebrate local culture with music, dance, and traditional arts.",
      attendees: 450,
      maxAttendees: 500,
      price: "Free",
      image: "/placeholder.svg",
      organizer: "Cultural Committee",
      featured: true
    },
    {
      id: 2,
      title: "Local Food Market",
      category: "food",
      date: "2024-02-10",
      time: "10:00 AM",
      location: "Main Street Square",
      description: "Discover local cuisine and fresh produce from regional vendors.",
      attendees: 200,
      maxAttendees: 300,
      price: "Free Entry",
      image: "/placeholder.svg",
      organizer: "Merchants Association"
    },
    {
      id: 3,
      title: "Community Marathon",
      category: "sports",
      date: "2024-02-20",
      time: "7:00 AM",
      location: "City Park",
      description: "Annual 10K run to promote health and community spirit.",
      attendees: 150,
      maxAttendees: 200,
      price: "₹500",
      image: "/placeholder.svg",
      organizer: "Sports Club"
    },
    {
      id: 4,
      title: "Tech Workshop Series",
      category: "education",
      date: "2024-02-12",
      time: "2:00 PM",
      location: "Community Center",
      description: "Learn about digital skills and technology for all ages.",
      attendees: 80,
      maxAttendees: 100,
      price: "₹200",
      image: "/placeholder.svg",
      organizer: "Digital Literacy Foundation"
    },
    {
      id: 5,
      title: "Jazz Under the Stars",
      category: "music",
      date: "2024-02-18",
      time: "8:00 PM",
      location: "Riverside Amphitheater",
      description: "Evening of smooth jazz with local and visiting musicians.",
      attendees: 320,
      maxAttendees: 400,
      price: "₹800",
      image: "/placeholder.svg",
      organizer: "Music Society"
    },
    {
      id: 6,
      title: "Neighborhood Cleanup Drive",
      category: "community",
      date: "2024-02-08",
      time: "9:00 AM",
      location: "Various Locations",
      description: "Join us in making our community cleaner and greener.",
      attendees: 75,
      maxAttendees: 150,
      price: "Free",
      image: "/placeholder.svg",
      organizer: "Green Initiative"
    }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap = {
      cultural: Palette,
      music: Music,
      food: Utensils,
      sports: Trophy,
      education: BookOpen,
      community: Heart,
    };
    return iconMap[category as keyof typeof iconMap] || Calendar;
  };

  const getCategoryColor = (category: string) => {
    const colorMap = {
      cultural: 'bg-purple-100 text-purple-800',
      music: 'bg-blue-100 text-blue-800',
      food: 'bg-orange-100 text-orange-800',
      sports: 'bg-green-100 text-green-800',
      education: 'bg-indigo-100 text-indigo-800',
      community: 'bg-pink-100 text-pink-800',
    };
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-civic flex items-center justify-center">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Community Events</h1>
            <p className="text-muted-foreground">
              Discover and join local events happening in your area
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {eventCategories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Featured Event */}
      {filteredEvents.some(event => event.featured) && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Event</h2>
          {filteredEvents
            .filter(event => event.featured)
            .map((event) => {
              const Icon = getCategoryIcon(event.category);
              return (
                <Card key={event.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={getCategoryColor(event.category)}>
                              <Icon className="h-3 w-3 mr-1" />
                              {event.category}
                            </Badge>
                            <Badge variant="outline">Featured</Badge>
                          </div>
                          <h3 className="text-2xl font-bold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Organized by {event.organizer}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{event.price}</div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees}/{event.maxAttendees} attending</span>
                          </div>
                        </div>
                        <Button>
                          <Ticket className="h-4 w-4 mr-2" />
                          Register Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
        </div>
      )}

      {/* Event Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents
          .filter(event => !event.featured)
          .map((event) => {
            const Icon = getCategoryIcon(event.category);
            return (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={getCategoryColor(event.category)}>
                      <Icon className="h-3 w-3 mr-1" />
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-sm font-semibold">
                      {event.price}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="mb-3">
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <p className="text-xs text-muted-foreground">{event.organizer}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span>{formatDate(event.date)}</span>
                      <Clock className="h-3 w-3 text-muted-foreground ml-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{event.attendees}/{event.maxAttendees} attending</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Ticket className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No events found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or check back later for new events.
          </p>
        </div>
      )}
    </div>
  );
};

export default EventsPage;