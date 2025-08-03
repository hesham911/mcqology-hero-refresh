import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-medical-teal/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medical-teal mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you. Contact us for support or any inquiries about our educational platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-medical-teal mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-teal">Email</h4>
                    <p className="text-muted-foreground">info@mcqology.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-teal">Phone</h4>
                    <p className="text-muted-foreground">+962 6 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-teal">Address</h4>
                    <p className="text-muted-foreground">Amman, Jordan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <Card className="border-medical-green/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-medical-teal mb-4">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Sunday - Thursday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-medical-green/20 shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-medical-teal mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="Enter your email" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input placeholder="Message subject" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Write your message here..."
                    className="min-h-32"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-medical-green hover:bg-medical-green/90 text-white py-3 rounded-lg transition-all duration-300 hover:shadow-glow"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-3" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;