import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  FileText, 
  Users, 
  CreditCard,
  Clock,
  MapPin,
  Phone,
  ExternalLink,
  Shield,
  Scale,
  Briefcase
} from "lucide-react";

const GovernmentServicesPage = () => {
  const governmentOffices = [
    {
      name: "District Collector Office",
      category: "Administrative",
      services: ["Revenue Records", "Land Registration", "Certificates"],
      address: "Central Administrative Complex, District HQ",
      phone: "(555) 201-1000",
      hours: "9:00 AM - 5:00 PM",
      status: "open",
      icon: Building2
    },
    {
      name: "Sub-Registrar Office",
      category: "Registration",
      services: ["Property Registration", "Document Verification", "Stamp Duty"],
      address: "Registration Complex, Main Road",
      phone: "(555) 201-2000",
      hours: "10:00 AM - 4:00 PM",
      status: "open",
      icon: FileText
    },
    {
      name: "Municipal Corporation",
      category: "Civic",
      services: ["Birth Certificate", "Death Certificate", "Building Permits"],
      address: "Municipal Building, City Center",
      phone: "(555) 201-3000",
      hours: "9:30 AM - 5:30 PM",
      status: "open",
      icon: Users
    },
    {
      name: "Tehsil Office",
      category: "Revenue",
      services: ["Land Records", "Income Certificate", "Caste Certificate"],
      address: "Tehsil Complex, Block Office",
      phone: "(555) 201-4000",
      hours: "10:00 AM - 5:00 PM",
      status: "closed",
      icon: Scale
    },
    {
      name: "Employment Exchange",
      category: "Employment",
      services: ["Job Registration", "Skill Development", "Unemployment Benefits"],
      address: "Employment Building, Industrial Area",
      phone: "(555) 201-5000",
      hours: "9:00 AM - 4:00 PM",
      status: "open",
      icon: Briefcase
    },
    {
      name: "Police Station",
      category: "Law & Order",
      services: ["FIR Registration", "Character Certificate", "NOC"],
      address: "Police Lines, Central District",
      phone: "(555) 201-6000",
      hours: "24/7",
      status: "open",
      icon: Shield
    }
  ];

  const onlineServices = [
    {
      name: "e-District Services",
      description: "Apply for certificates and documents online",
      category: "Certificates",
      url: "#"
    },
    {
      name: "Property Registration",
      description: "Online property registration and verification",
      category: "Registration",
      url: "#"
    },
    {
      name: "Tax Payment Portal",
      description: "Pay property tax and other municipal taxes",
      category: "Payments",
      url: "#"
    },
    {
      name: "RTI Portal",
      description: "File Right to Information applications",
      category: "Information",
      url: "#"
    },
    {
      name: "Grievance Portal",
      description: "Submit and track government grievances",
      category: "Complaints",
      url: "#"
    },
    {
      name: "Pension Services",
      description: "Apply and manage pension services",
      category: "Benefits",
      url: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'open' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Administrative': 'bg-blue-100 text-blue-800',
      'Registration': 'bg-purple-100 text-purple-800',
      'Civic': 'bg-green-100 text-green-800',
      'Revenue': 'bg-orange-100 text-orange-800',
      'Employment': 'bg-yellow-100 text-yellow-800',
      'Law & Order': 'bg-red-100 text-red-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-civic flex items-center justify-center">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Government Services</h1>
            <p className="text-muted-foreground">
              Access government offices and online services in your area
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Government Offices</CardTitle>
              <CardDescription>
                Find government offices and their services near you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {governmentOffices.map((office, index) => {
                  const Icon = office.icon;
                  return (
                    <div key={index} className="p-4 rounded-lg border bg-card">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 rounded-lg bg-gradient-civic flex items-center justify-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{office.name}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className={getCategoryColor(office.category)}>
                                {office.category}
                              </Badge>
                              <Badge className={getStatusColor(office.status)}>
                                {office.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Services Offered</h4>
                          <div className="flex flex-wrap gap-1">
                            {office.services.map((service, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" className="w-full">
                          <MapPin className="h-4 w-4 mr-2" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Online Services</CardTitle>
              <CardDescription>
                Access government services digitally
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {onlineServices.map((service, index) => (
                <div key={index} className="p-3 rounded-lg border bg-card">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{service.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {service.description}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground ml-2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                      Access
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common government service requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Apply for Birth Certificate
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CreditCard className="h-4 w-4 mr-2" />
                Pay Property Tax
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Register for Voter ID
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Building2 className="h-4 w-4 mr-2" />
                Building Plan Approval
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Notices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                <h4 className="text-sm font-medium text-yellow-800 mb-1">
                  Office Hours Update
                </h4>
                <p className="text-xs text-yellow-700">
                  All government offices will be closed on Republic Day (Jan 26)
                </p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                <h4 className="text-sm font-medium text-blue-800 mb-1">
                  New Online Service
                </h4>
                <p className="text-xs text-blue-700">
                  Vehicle registration renewal now available online
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GovernmentServicesPage;