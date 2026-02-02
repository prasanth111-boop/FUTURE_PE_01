import { Clock, MapPin, Phone } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 8:00 PM" },
  { day: "Saturday", time: "8:00 AM – 9:00 PM" },
  { day: "Sunday", time: "8:00 AM – 6:00 PM" },
];

const Location = () => {
  return (
    <section id="location" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-forest font-medium text-sm uppercase tracking-wider mb-4 block">
            Visit Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Find Us in the{" "}
            <span className="text-forest-light">Neighborhood</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're right in the heart of the community. Drop by anytime—good coffee and warm welcomes await.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-[500px] bg-sage-muted">
            {/* Placeholder Map Design */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-muted to-sage/40">
              <div className="absolute inset-0 opacity-30">
                {/* Grid lines for map effect */}
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(to right, hsl(var(--forest) / 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, hsl(var(--forest) / 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              {/* Roads */}
              <div className="absolute top-1/3 left-0 right-0 h-4 bg-cream-dark/80" />
              <div className="absolute top-0 bottom-0 left-1/4 w-3 bg-cream-dark/80" />
              <div className="absolute top-0 bottom-0 right-1/3 w-2 bg-cream-dark/60" />
              <div className="absolute bottom-1/4 left-0 right-0 h-2 bg-cream-dark/60" />
              
              {/* Pin Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                <div className="relative animate-float">
                  <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center shadow-elevated">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-forest rotate-45" />
                </div>
                {/* Shadow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-2 bg-forest/20 rounded-full blur-sm" />
              </div>

              {/* Neighborhood Label */}
              <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-card">
                <p className="text-sm font-medium text-foreground">123 Main Street</p>
                <p className="text-xs text-muted-foreground">Downtown District</p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Hours Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sage/50 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-forest" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Hours of Operation
                </h3>
              </div>
              <div className="space-y-4">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">{item.day}</span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sage/50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-forest" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Get in Touch
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground">123 Main Street</p>
                    <p className="text-muted-foreground">Downtown District, City 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <p className="text-foreground">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
