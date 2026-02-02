import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coffee, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast.success("Welcome to the neighborhood! Check your inbox for a special welcome offer.");
      setEmail("");
    }
  };

  return (
    <section id="signup" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Coffee className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Content */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Join the Neighborhood
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            Be the first to know about new menu items, special events, and exclusive offers. 
            Plus, get 15% off your first order when you sign up.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-primary-foreground animate-fade-in">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">You're in! Welcome to the family.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl focus:border-primary-foreground focus:ring-primary-foreground/50"
              />
              <Button
                type="submit"
                variant="secondary"
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Subscribe
              </Button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-primary-foreground/60 text-sm mt-6">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
