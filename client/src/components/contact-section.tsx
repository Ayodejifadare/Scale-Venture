import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { Clock, CheckCircle, Users, Mail, Phone, MapPin } from "lucide-react";

const contactFormSchema = insertContactSubmissionSchema.extend({
  organizationType: z.enum(["accelerator", "corporate", "government", "other"])
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const whyChooseFeatures = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Average MVP delivery in 30 days or less",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "200+ successful MVP launches across industries",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Startup veterans and technical specialists",
    color: "bg-purple-100 text-purple-600"
  }
];

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      organizationType: undefined,
      projectDetails: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your submission. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Launch Your Next Innovation?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project and see how we can help you build and launch your MVP faster than ever.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started Today</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    {...form.register("firstName")}
                    id="firstName"
                    className="mt-2"
                    disabled={submitMutation.isPending}
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-sm text-red-600 mt-1">{form.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    {...form.register("lastName")}
                    id="lastName"
                    className="mt-2"
                    disabled={submitMutation.isPending}
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-sm text-red-600 mt-1">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  {...form.register("email")}
                  id="email"
                  type="email"
                  className="mt-2"
                  disabled={submitMutation.isPending}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-600 mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="organization">Organization</Label>
                <Input
                  {...form.register("organization")}
                  id="organization"
                  className="mt-2"
                  disabled={submitMutation.isPending}
                />
                {form.formState.errors.organization && (
                  <p className="text-sm text-red-600 mt-1">{form.formState.errors.organization.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="organizationType">Organization Type</Label>
                <Select 
                  onValueChange={(value) => form.setValue("organizationType", value as any)}
                  disabled={submitMutation.isPending}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your organization type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accelerator">Accelerator/Incubator</SelectItem>
                    <SelectItem value="corporate">Corporate Innovation Lab</SelectItem>
                    <SelectItem value="government">Government/NGO Hub</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.organizationType && (
                  <p className="text-sm text-red-600 mt-1">{form.formState.errors.organizationType.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="projectDetails">Project Details</Label>
                <Textarea
                  {...form.register("projectDetails")}
                  id="projectDetails"
                  rows={4}
                  placeholder="Tell us about your project or what you're looking to build..."
                  className="mt-2"
                  disabled={submitMutation.isPending}
                />
                {form.formState.errors.projectDetails && (
                  <p className="text-sm text-red-600 mt-1">{form.formState.errors.projectDetails.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-white hover:bg-secondary-brand text-lg py-4"
                disabled={submitMutation.isPending}
              >
                {submitMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose LaunchForge?</h3>
                <div className="space-y-6">
                  {whyChooseFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`p-2 rounded-lg ${feature.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">{feature.title}</h4>
                          <p className="text-slate-600">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-600">hello@launchforge.io</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-600">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-600">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
