import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Search, 
  Phone, 
  MapPin, 
  Clock, 
  Hospital, 
  GraduationCap, 
  Shield, 
  Calendar,
  ExternalLink
} from "lucide-react";

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const serviceCategories = [
    { id: "all", name: "All Services", icon: Users },
    { id: "healthcare", name: "Healthcare", icon: Hospital },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "safety", name: "Public Safety", icon: Shield },
  ];

  const services = [
    {
      id: 1,
      name: "Apollo Hospitals Jubilee Hills",
      category: "healthcare",
      description: "Multi-specialty hospital with advanced cardiac care, oncology, and emergency services",
      address: "Road No 72, Film Nagar, Jubilee Hills, Hyderabad, Telangana 500096",
      phone: "+91 40 2360 7777",
      hours: "24/7 Emergency Services, OPD: 8AM-8PM",
      services: ["Cardiology", "Oncology", "Emergency", "ICU", "Maternity"],
      website: "https://www.apollohospitals.com"
    },
    {
      id: 2,
      name: "Continental Hospitals",
      category: "healthcare", 
      description: "Premier healthcare facility with organ transplants and advanced surgical procedures",
      address: "IT Park Rd, Nanakram Guda, Gachibowli, Hyderabad, Telangana 500032",
      phone: "+91 40 6737 3000",
      hours: "24/7 Emergency Services, OPD: 8AM-6PM",
      services: ["Organ Transplant", "Neurology", "Orthopedics", "Emergency", "Preventive Health"],
      website: "https://www.continentalhospitals.com"
    },
    {
      id: 3,
      name: "Gandhi Hospital",
      category: "healthcare",
      description: "Government hospital providing free medical services to economically weaker sections",
      address: "Musheerabad, Secunderabad, Telangana 500003",
      phone: "+91 40 2770 1146",
      hours: "24/7 Emergency Services, OPD: 8AM-2PM",
      services: ["General Medicine", "Surgery", "Pediatrics", "Emergency", "Outpatient"],
      website: "#"
    },
    {
      id: 4,
      name: "Osmania General Hospital",
      category: "healthcare",
      description: "Largest government hospital in Telangana with comprehensive medical services",
      address: "Afzal Gunj, Hyderabad, Telangana 500012",
      phone: "+91 40 2460 7777",
      hours: "24/7 Emergency Services, OPD: 8AM-2PM",
      services: ["Multi-specialty", "Trauma Care", "Emergency", "Surgery", "Medicine"],
      website: "#"
    },
    {
      id: 5,
      name: "NIMS Hospital",
      category: "healthcare",
      description: "Nizams Institute of Medical Sciences - Premier government medical institution",
      address: "Punjagutta, Hyderabad, Telangana 500082", 
      phone: "+91 40 2348 8001",
      hours: "24/7 Emergency Services, OPD: 8AM-2PM",
      services: ["Cardiology", "Neurology", "Nephrology", "Emergency", "Research"],
      website: "https://www.nims.edu.in"
    },
    {
      id: 6,
      name: "Care Hospitals Banjara Hills",
      category: "healthcare",
      description: "Multi-specialty hospital with advanced medical technology and patient care",
      address: "Road No. 1, Banjara Hills, Hyderabad, Telangana 500034",
      phone: "+91 40 6165 4545",
      hours: "24/7 Emergency Services, OPD: 8AM-8PM",
      services: ["Cardiology", "Oncology", "Orthopedics", "Emergency", "Gastroenterology"],
      website: "https://www.carehospitals.com"
    },
    {
      id: 7,
      name: "Hyderabad Adult Education Centre",
      category: "education",
      description: "Government initiative for adult literacy and skill development programs",
      address: "Abids, Hyderabad, Telangana 500001",
      phone: "+91 40 2320 4567",
      hours: "Mon-Sat 9AM-6PM",
      services: ["Adult Literacy", "Computer Training", "Vocational Skills", "Telugu Classes"],
      website: "#"
    },
    {
      id: 8,
      name: "Telangana State Skill Development Corporation",
      category: "education",
      description: "Skill development and job training programs for youth and adults",
      address: "Musheerabad, Hyderabad, Telangana 500020",
      phone: "+91 40 2321 8901",
      hours: "Mon-Fri 9AM-5PM",
      services: ["IT Training", "Manufacturing Skills", "Healthcare Training", "Placement Support"],
      website: "https://www.tsskdc.com"
    },
    {
      id: 9,
      name: "Dr. MCR HRD Institute",
      category: "education", 
      description: "Human resource development with focus on governance and public administration",
      address: "Road No. 25, Jubilee Hills, Hyderabad, Telangana 500033",
      phone: "+91 40 2354 5678",
      hours: "Mon-Fri 9AM-5PM",
      services: ["Leadership Training", "Public Administration", "E-Governance", "Policy Research"],
      website: "https://www.hrd.ap.gov.in"
    },
    {
      id: 10,
      name: "Commissionerate of Technical Education",
      category: "education",
      description: "Technical education programs and diploma courses for career advancement",
      address: "Masab Tank, Hyderabad, Telangana 500028",
      phone: "+91 40 2331 2345",
      hours: "Mon-Fri 10AM-5PM",
      services: ["Diploma Courses", "Technical Training", "Certification", "Career Guidance"],
      website: "#"
    },
    {
      id: 11,
      name: "Hyderabad Police Commissionerate",
      category: "safety",
      description: "Central police administration for law and order in Hyderabad city",
      address: "Basheerbagh, Hyderabad, Telangana 500029",
      phone: "100 (Emergency), +91 40 2761 4444",
      hours: "24/7 Emergency Services",
      services: ["Emergency Response", "Crime Prevention", "Traffic Management", "Women Safety"],
      website: "https://www.hyderabadpolice.gov.in"
    },
    {
      id: 12,
      name: "Cyberabad Police Commissionerate", 
      category: "safety",
      description: "Police services for Cyberabad area covering IT corridor and western Hyderabad",
      address: "Gachibowli, Hyderabad, Telangana 500032",
      phone: "100 (Emergency), +91 40 2311 5555",
      hours: "24/7 Emergency Services",
      services: ["Cyber Crime", "IT Security", "Community Policing", "Women Help Desk"],
      website: "https://www.cyberabadpolice.gov.in"
    },
    {
      id: 13,
      name: "SHE Teams Hyderabad",
      category: "safety",
      description: "Specialized team for women safety and prevention of harassment",
      address: "Various locations across Hyderabad",
      phone: "+91 9490616555 (WhatsApp)",
      hours: "24/7 Support",
      services: ["Women Safety", "Harassment Prevention", "Awareness Programs", "Emergency Response"],
      website: "https://www.sheteams.telangana.gov.in"
    },
    {
      id: 14,
      name: "Disaster Response Force Telangana",
      category: "safety",
      description: "Emergency response team for natural disasters and crisis management",
      address: "Begumpet, Hyderabad, Telangana 500016",
      phone: "108 (Emergency), +91 40 2340 1234",
      hours: "24/7 Emergency Response",
      services: ["Disaster Management", "Emergency Rescue", "Crisis Response", "Training"],
      website: "#"
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.services.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const upcomingEvents = [
    {
      id: 1,
      title: "Health Screening Camp",
      date: "September 25, 2025",
      location: "Hitec City Community Center",
      description: "Free health checkups and diabetes screening for residents"
    },
    {
      id: 2,
      title: "Skill Development Workshop",
      date: "September 28, 2025", 
      location: "TSSDCL Training Center, Ameerpet",
      description: "Digital marketing and e-commerce training for youth"
    },
    {
      id: 3,
      title: "Traffic Awareness Program",
      date: "October 2, 2025",
      location: "Tank Bund, Hyderabad",
      description: "Road safety awareness and traffic rules education"
    },
    {
      id: 4,
      title: "Women Safety Workshop",
      date: "October 5, 2025",
      location: "SHE Teams Office, Banjara Hills",
      description: "Self-defense training and safety awareness for women"
    },
    {
      id: 5,
      title: "Digital Governance Seminar",
      date: "October 8, 2025",
      location: "HMDA Auditorium",
      description: "Learn about online services and digital initiatives"
    },
    {
      id: 6,
      title: "Community Clean Drive",
      date: "October 12, 2025",
      location: "Hussain Sagar Lake",
      description: "Volunteer for lake cleaning and environmental awareness"
    },
    {
      id: 7,
      title: "Job Fair 2025",
      date: "October 15, 2025",
      location: "HITEX Exhibition Center",
      description: "Employment opportunities across IT and non-IT sectors"
    },
    {
      id: 8,
      title: "Medical Camp - Cardiology",
      date: "October 18, 2025",
      location: "Apollo Hospital, Jubilee Hills",
      description: "Free cardiac screening and consultation"
    },
    {
      id: 9,
      title: "Heritage Walk Program",
      date: "October 22, 2025",
      location: "Charminar and Old City",
      description: "Guided tour of historical monuments and cultural sites"
    },
    {
      id: 10,
      title: "Cyber Security Awareness",
      date: "October 25, 2025",
      location: "Cyberabad Police Station",
      description: "Online safety and cyber crime prevention workshop"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-community flex items-center justify-center">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Community Services</h1>
            <p className="text-muted-foreground">
              Essential services and programs for community members
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
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription className="mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{service.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{service.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{service.hours}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {service.services.map((serviceType, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {serviceType}
                      </Badge>
                    ))}
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
                <Calendar className="h-5 w-5" />
                <span>Upcoming Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-3 rounded-lg bg-muted/50 space-y-2">
                  <h3 className="font-medium text-sm">{event.title}</h3>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-xs">{event.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
              <CardDescription>
                Can't find what you're looking for?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;