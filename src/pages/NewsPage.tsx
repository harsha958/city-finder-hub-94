import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Newspaper, 
  Search, 
  Calendar, 
  ExternalLink, 
  Filter,
  Clock,
  MapPin,
  Megaphone
} from "lucide-react";

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const newsCategories = [
    { id: "all", name: "All News" },
    { id: "city-council", name: "City Council" },
    { id: "public-safety", name: "Public Safety" },
    { id: "transportation", name: "Transportation" },
    { id: "community", name: "Community Events" },
    { id: "development", name: "Development" }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Hyderabad Metro Rail Expansion to Shamshabad Airport Approved",
      summary: "The Telangana government has approved the metro rail extension from MGBS to Rajiv Gandhi International Airport, making it easier for passengers to reach the airport via public transport.",
      category: "transportation",
      source: "Hyderabad Metro Rail Limited",
      publishedAt: "2025-09-15T10:00:00Z",
      location: "Hyderabad Metro Network",
      featured: true
    },
    {
      id: 2,
      title: "GHMC Launches 'Clean Hyderabad' Digital Initiative",
      summary: "Citizens can now report sanitation issues, request garbage collection, and track complaint status through the new mobile app launched by Greater Hyderabad Municipal Corporation.",
      category: "community",
      source: "GHMC",
      publishedAt: "2025-09-14T14:30:00Z",
      location: "Greater Hyderabad"
    },
    {
      id: 3,
      title: "KTR Inaugurates New IT Tower in Financial District",
      summary: "Minister KT Rama Rao inaugurated a new 40-story IT tower that will house over 15,000 employees, further strengthening Hyderabad's position as India's IT hub.",
      category: "development",
      source: "IT Department Telangana",
      publishedAt: "2025-09-13T09:15:00Z",
      location: "Financial District, Gachibowli"
    },
    {
      id: 4,
      title: "SHE Teams Report 40% Reduction in Women Harassment Cases",
      summary: "Hyderabad's SHE Teams initiative has successfully reduced harassment cases by 40% through active patrolling, awareness programs, and swift action on complaints.",
      category: "public-safety",
      source: "Hyderabad Police",
      publishedAt: "2025-09-12T16:45:00Z",
      location: "Hyderabad City"
    },
    {
      id: 5,
      title: "HMDA Announces 2BHK Housing Scheme Registration",
      summary: "Hyderabad Metropolitan Development Authority opens registration for 50,000 new 2BHK houses under the state's affordable housing program for middle-income families.",
      category: "development",
      source: "HMDA",
      publishedAt: "2025-09-11T11:00:00Z",
      location: "Various Locations"
    },
    {
      id: 6,
      title: "Hyderabad Becomes India's First City with 100% LED Street Lighting",
      summary: "All 6.5 lakh street lights across Hyderabad have been converted to energy-efficient LED lights, reducing power consumption by 50% and improving road safety.",
      category: "city-council",
      source: "GHMC",
      publishedAt: "2025-09-10T08:30:00Z",
      location: "Greater Hyderabad"
    },
    {
      id: 7,
      title: "New Cyber Security Command Center Operational in Cyberabad",
      summary: "State-of-the-art cyber security facility equipped with AI-powered threat detection systems begins operations to protect citizens from cyber crimes and fraud.",
      category: "public-safety",
      source: "Cyberabad Police",
      publishedAt: "2025-09-09T15:20:00Z",
      location: "Cyberabad"
    },
    {
      id: 8,
      title: "Hussain Sagar Lake Restoration Project Phase 2 Begins",
      summary: "The second phase of lake restoration includes advanced water treatment systems, floating gardens, and recreational facilities to make the lake pollution-free.",
      category: "development",
      source: "Hyderabad Lake Conservation",
      publishedAt: "2025-09-08T12:00:00Z",
      location: "Hussain Sagar, Tank Bund"
    },
    {
      id: 9,
      title: "TSRTC Introduces Electric Buses on 20 New Routes",
      summary: "Telangana State Road Transport Corporation adds 200 electric buses to its fleet, covering major routes including Secunderabad to Gachibowli and Uppal to Mehdipatnam.",
      category: "transportation",
      source: "TSRTC",
      publishedAt: "2025-09-07T10:45:00Z",
      location: "Hyderabad Bus Network"
    },
    {
      id: 10,
      title: "Heritage City Walk Program Launched for Charminar Area",
      summary: "Tourism department introduces guided heritage walks covering Charminar, Mecca Masjid, Laad Bazaar, and nearby historical sites to promote cultural tourism.",
      category: "community",
      source: "Telangana Tourism",
      publishedAt: "2025-09-06T14:15:00Z",
      location: "Old City, Charminar"
    },
    {
      id: 11,
      title: "Apollo Hospital Hyderabad Launches AI-Powered Diagnostic Center",
      summary: "The new diagnostic center uses artificial intelligence for early detection of diseases, offering advanced imaging and pathology services to patients.",
      category: "community",
      source: "Apollo Hospitals",
      publishedAt: "2025-09-05T09:30:00Z",
      location: "Jubilee Hills"
    },
    {
      id: 12,
      title: "ORR Traffic Management System Upgraded with Smart Signals",
      summary: "Outer Ring Road now features AI-powered traffic signals that adapt to real-time traffic conditions, reducing travel time by up to 25% during peak hours.",
      category: "transportation",
      source: "Hyderabad Traffic Police",
      publishedAt: "2025-09-04T16:00:00Z",
      location: "Outer Ring Road"
    },
    {
      id: 13,
      title: "Telangana Government Announces Free WiFi in All Parks",
      summary: "All public parks in Hyderabad will have free high-speed internet connectivity as part of the Digital Telangana initiative to bridge the digital divide.",
      category: "city-council",
      source: "IT Department Telangana",
      publishedAt: "2025-09-03T11:30:00Z",
      location: "Public Parks Citywide"
    },
    {
      id: 14,
      title: "NIMS Hospital Introduces Robotic Surgery Program",
      summary: "Nizams Institute of Medical Sciences becomes first government hospital in South India to offer robotic surgery for complex cardiac and cancer procedures.",
      category: "community",
      source: "NIMS Hyderabad",
      publishedAt: "2025-09-02T13:45:00Z",
      location: "Punjagutta"
    }
  ];

  const publicAnnouncements = [
    {
      id: 1,
      title: "Metro Services Maintenance",
      description: "Blue Line metro services between Ameerpet to LB Nagar will be suspended on September 22nd from 11 PM to 5 AM",
      priority: "high",
      date: "2025-09-22"
    },
    {
      id: 2,
      title: "GHMC Property Tax Last Date Extended",
      description: "Property tax payment deadline extended till October 31st. Pay online to avail 10% discount",
      priority: "medium", 
      date: "2025-10-31"
    },
    {
      id: 3,
      title: "Ganesh Immersion Traffic Advisory",
      description: "Several roads will be closed during Ganesh immersion processions. Use alternate routes",
      priority: "high",
      date: "2025-09-28"
    },
    {
      id: 4,
      title: "Vaccination Drive at Community Centers",
      description: "Free vaccination for children and adults available at all community centers every Saturday",
      priority: "medium",
      date: "2025-09-21"
    },
    {
      id: 5,
      title: "Digital Seva Portal Maintenance",
      description: "Government online services will be unavailable on September 20th from 2 AM to 6 AM for system upgrade",
      priority: "low",
      date: "2025-09-20"
    },
    {
      id: 6,
      title: "Bulk Waste Collection Drive",
      description: "Special collection for old furniture and electronics in Kukatpally area this weekend",
      priority: "low",
      date: "2025-09-23"
    },
    {
      id: 7,
      title: "Water Supply Disruption Notice",
      description: "Areas around Begumpet will face water supply disruption on September 25th from 10 AM to 6 PM",
      priority: "high",
      date: "2025-09-25"
    },
    {
      id: 8,
      title: "Citizen Grievance Meeting",
      description: "Monthly public grievance meeting with GHMC officials at Secretariat on September 27th",
      priority: "medium",
      date: "2025-09-27"
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "city-council": "bg-blue-100 text-blue-800",
      "public-safety": "bg-red-100 text-red-800",
      "transportation": "bg-green-100 text-green-800",
      "community": "bg-purple-100 text-purple-800",
      "development": "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      "high": "bg-red-100 text-red-800 border-red-200",
      "medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "low": "bg-green-100 text-green-800 border-green-200"
    };
    return colors[priority as keyof typeof colors];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-civic flex items-center justify-center">
            <Newspaper className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Hyderabad News & Updates</h1>
            <p className="text-muted-foreground">
              Stay informed about local government, community events, and city services in Hyderabad
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <div className="lg:col-span-3">
          {/* Search and Filter */}
          <div className="mb-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search news and updates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {filteredArticles.length > 0 && filteredArticles[0].featured && (
            <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  <Badge className={getCategoryColor(filteredArticles[0].category)}>
                    {filteredArticles[0].category.replace('-', ' ')}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{filteredArticles[0].title}</CardTitle>
                <CardDescription className="text-base">
                  {filteredArticles[0].summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{formatDate(filteredArticles[0].publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{filteredArticles[0].location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{filteredArticles[0].source}</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* News Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredArticles.slice(filteredArticles[0]?.featured ? 1 : 0).map((article) => (
              <Card key={article.id} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category.replace('-', ' ')}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{article.location}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 px-2">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Megaphone className="h-5 w-5" />
                <span>Public Announcements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {publicAnnouncements.map((announcement) => (
                <div 
                  key={announcement.id} 
                  className={`p-3 rounded-lg border ${getPriorityColor(announcement.priority)}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-sm">{announcement.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {announcement.priority}
                    </Badge>
                  </div>
                  <p className="text-xs mb-2">{announcement.description}</p>
                  <div className="flex items-center space-x-1 text-xs">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(announcement.date).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stay Connected</CardTitle>
              <CardDescription>
                Get the latest updates delivered to you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <Newspaper className="h-4 w-4 mr-2" />
                Subscribe to Newsletter
              </Button>
              <Button className="w-full" variant="outline">
                <Megaphone className="h-4 w-4 mr-2" />
                Follow Social Media
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;