import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission to your Laravel backend
    console.log("Sign up form data:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-medical flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Welcome content */}
        <div className="text-center text-white space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" 
                alt="McQology Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">
                Join McQology
              </h1>
              <p className="text-xl text-medical-green font-semibold">
                Start Your Medical Journey
              </p>
              <p className="text-lg text-white/80 max-w-md mx-auto leading-relaxed">
                Create your account and join thousands of medical students mastering MCQs with our comprehensive platform.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-green">FREE</div>
                <div className="text-sm text-white/70">To Start</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-green">24/7</div>
                <div className="text-sm text-white/70">Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-green">∞</div>
                <div className="text-sm text-white/70">Practice</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Sign up form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-glow border-border/20 bg-background/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Sign Up</CardTitle>
              <CardDescription className="text-muted-foreground">
                Create your account to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">Phone number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="h-12 bg-background border-border focus:border-primary pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground font-medium">Password Confirm</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="h-12 bg-background border-border focus:border-primary pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Sign Up
                </Button>

                <div className="text-center mt-6">
                  <p className="text-muted-foreground">
                    Already have an account?{" "}
                    <Link 
                      to="/signin" 
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Log In
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;