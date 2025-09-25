import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { 
  MessageSquare, 
  Camera, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Upload,
  Heart,
  Users,
  IndianRupee
} from "lucide-react";

const ReportIssuePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    priority: "",
  });

  const issueCategories = [
    "Roads & Transportation",
    "Public Safety",
    "Utilities",
    "Parks & Recreation",
    "Waste Management",
    "Housing",
    "Other"
  ];

  const priorities = [
    { value: "low", label: "Low", color: "bg-green-100 text-green-800" },
    { value: "medium", label: "Medium", color: "bg-yellow-100 text-yellow-800" },
    { value: "high", label: "High", color: "bg-red-100 text-red-800" }
  ];

  const recentIssues = [
    {
      id: 1,
      title: "Pothole on Main Street",
      status: "in-progress",
      category: "Roads & Transportation",
      reported: "2 days ago",
      location: "Main St & 5th Ave"
    },
    {
      id: 2,
      title: "Broken streetlight",
      status: "resolved",
      category: "Utilities",
      reported: "1 week ago",
      location: "Park Avenue"
    },
    {
      id: 3,
      title: "Graffiti removal needed",
      status: "reported",
      category: "Public Safety",
      reported: "3 days ago",
      location: "Community Center"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Issue Reported Successfully",
      description: "Your report has been submitted and assigned reference #" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      location: "",
      priority: "",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-civic flex items-center justify-center">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Report an Issue</h1>
            <p className="text-muted-foreground">
              Help improve our community by reporting problems and concerns
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Submit New Report</CardTitle>
              <CardDescription>
                Provide detailed information about the issue you've encountered
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    Issue Title *
                  </label>
                  <Input
                    id="title"
                    placeholder="Brief description of the issue"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category *
                    </label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {issueCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="priority" className="text-sm font-medium">
                      Priority Level
                    </label>
                    <Select
                      value={formData.priority}
                      onValueChange={(value) => setFormData({ ...formData, priority: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        {priorities.map((priority) => (
                          <SelectItem key={priority.value} value={priority.value}>
                            {priority.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="Street address or landmark"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Detailed Description *
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about the issue, including when it occurred and any relevant circumstances"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Attach Photos (Optional)
                  </label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop photos here, or click to select
                    </p>
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Submit Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Community Reports</CardTitle>
              <CardDescription>
                See what others in your area are reporting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentIssues.map((issue) => (
                <div key={issue.id} className="p-3 rounded-lg border bg-card">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-sm">{issue.title}</h3>
                    {getStatusIcon(issue.status)}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {issue.category}
                      </Badge>
                      <Badge className={`text-xs ${getStatusColor(issue.status)}`}>
                        {issue.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{issue.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{issue.reported}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
              <CardDescription>
                For urgent issues requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                <div className="flex items-center space-x-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="font-medium text-sm text-red-800">Emergency</span>
                </div>
                <p className="text-sm text-red-700">Call 911 for life-threatening emergencies</p>
              </div>
              
              <div className="p-3 rounded-lg bg-muted/50">
                <h4 className="font-medium text-sm mb-1">Non-Emergency Police</h4>
                <p className="text-sm text-muted-foreground">(555) 123-0000</p>
              </div>
              
              <div className="p-3 rounded-lg bg-muted/50">
                <h4 className="font-medium text-sm mb-1">City Services Hotline</h4>
                <p className="text-sm text-muted-foreground">(555) 456-0000</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Community Issues with Donations Section */}
      <div className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Community Support Issues</h2>
          <p className="text-muted-foreground">
            Help fund solutions to ongoing community issues through donations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              id: 1,
              title: "Community Park Renovation",
              description: "Upgrade playground equipment and add new benches for families in Jubilee Hills Community Park.",
              category: "Parks & Recreation",
              location: "Jubilee Hills",
              targetAmount: 250000,
              raisedAmount: 187500,
              donorCount: 125,
              priority: "medium",
              image: "🏞️"
            },
            {
              id: 2,
              title: "Street Light Installation",
              description: "Install LED street lights in poorly lit areas to improve safety for evening commuters.",
              category: "Public Safety",
              location: "Kukatpally",
              targetAmount: 150000,
              raisedAmount: 98000,
              donorCount: 89,
              priority: "high",
              image: "💡"
            },
            {
              id: 3,
              title: "School Library Books",
              description: "Purchase new books and educational materials for government school library in Secunderabad.",
              category: "Education",
              location: "Secunderabad",
              targetAmount: 75000,
              raisedAmount: 75000,
              donorCount: 156,
              priority: "low",
              image: "📚"
            },
            {
              id: 4,
              title: "Water Purification System",
              description: "Install water purification systems in areas facing contaminated water supply issues.",
              category: "Utilities",
              location: "Old City",
              targetAmount: 180000,
              raisedAmount: 134000,
              donorCount: 78,
              priority: "high",
              image: "💧"
            }
          ].map((issue) => {
            const progressPercentage = Math.round((issue.raisedAmount / issue.targetAmount) * 100);
            const isCompleted = progressPercentage >= 100;
            
            return (
              <Card key={issue.id} className="hover:shadow-card transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-2xl">{issue.image}</div>
                    <Badge className={priorities.find(p => p.value === issue.priority)?.color}>
                      {issue.priority}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{issue.title}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {issue.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {issue.description}
                  </p>
                  
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{issue.location}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className={`font-medium ${isCompleted ? 'text-green-600' : 'text-primary'}`}>
                        {progressPercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${
                          isCompleted ? 'bg-green-500' : 'bg-primary'
                        }`}
                        style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Donation Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <IndianRupee className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">
                          ₹{issue.raisedAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-muted-foreground">
                          of ₹{issue.targetAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{issue.donorCount} donors</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant={isCompleted ? "outline" : "default"}
                    disabled={isCompleted}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    {isCompleted ? "Goal Achieved!" : "Donate Now"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReportIssuePage;