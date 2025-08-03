import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Reset link sent",
        description: "Please check your email for the password reset link.",
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-medical flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-glow border-border/20 bg-background/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Check your email</CardTitle>
              <CardDescription className="text-muted-foreground">
                We've sent a password reset link to {email}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Didn't receive the email? Check your spam folder.</p>
                <p>The link will expire in 24 hours.</p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline" 
                  className="w-full"
                >
                  Try different email
                </Button>
                
                <Link to="/signin">
                  <Button variant="ghost" className="w-full">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-medical flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Information */}
        <div className="text-center text-white space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <Link to="/" className="bg-white rounded-lg p-3 shadow-soft hover:shadow-md transition-shadow cursor-pointer">
                <img 
                  src="/lovable-uploads/7fee58d2-510d-45f7-9b20-fa94ba74047b.png" 
                  alt="McQology Logo" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">
                Reset Password
              </h1>
              <p className="text-xl text-medical-green font-semibold">
                Get Back to Learning
              </p>
              <p className="text-lg text-white/80 max-w-md mx-auto leading-relaxed">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-green">24h</div>
                <div className="text-sm text-white/70">Link Valid</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-green">Secure</div>
                <div className="text-sm text-white/70">Process</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-green">Fast</div>
                <div className="text-sm text-white/70">Recovery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Reset form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-glow border-border/20 bg-background/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Forgot Password?</CardTitle>
              <CardDescription className="text-muted-foreground">
                No worries, we'll send you reset instructions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                    <Mail size={16} />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-background border-border focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>

                <div className="text-center">
                  <Link 
                    to="/signin" 
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={16} />
                    Back to Sign In
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;