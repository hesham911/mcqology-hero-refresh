import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    console.log("Sign in form data:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-medical flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Logo and branding */}
        <div className="text-center lg:text-left text-white space-y-6">
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" 
              alt="McQology Logo" 
              className="h-20 w-auto"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold">
              MCQOLOGY
            </h1>
            <p className="text-2xl lg:text-3xl font-semibold text-medical-green">
              MASTER EVERY MCQ
            </p>
            <p className="text-lg text-white/90 max-w-lg">
              Welcome back! Sign in to continue your medical education journey.
            </p>
          </div>
        </div>

        {/* Right side - Sign in form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-glow border-border/20 bg-background/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Sign In</CardTitle>
              <CardDescription className="text-muted-foreground">
                Welcome back to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
                    <Link 
                      to="/forgot-password" 
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
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

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Sign In
                </Button>

                <div className="text-center mt-6">
                  <p className="text-muted-foreground">
                    Don't have an account?{" "}
                    <Link 
                      to="/signup" 
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Sign Up
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

export default SignIn;