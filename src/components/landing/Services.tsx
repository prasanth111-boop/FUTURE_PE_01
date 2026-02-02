import { Coffee, UtensilsCrossed, Wifi } from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Handcrafted Brews",
    description:
      "Every cup tells a story. Our beans are ethically sourced and roasted in small batches right here in the neighborhood. From silky espressos to perfectly balanced pour-overs, experience coffee as it was meant to be.",
    features: ["Single-origin beans", "Daily roasted", "Expert baristas"],
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen & Bakery",
    description:
      "Start your morning with our signature sourdough, baked fresh before dawn. Our kitchen crafts seasonal pastries, hearty sandwiches, and local favorites that pair perfectly with your brew.",
    features: ["Fresh sourdough daily", "Local pastries", "Seasonal menu"],
  },
  {
    icon: Wifi,
    title: "Community Space",
    description:
      "More than a cafe—it's your third place. Fast Wi-Fi, plenty of outlets, and comfortable seating make it ideal for remote work, casual meetings, or catching up with friends.",
    features: ["High-speed Wi-Fi", "Meeting corners", "All-day welcome"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-forest font-medium text-sm uppercase tracking-wider mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Crafted with Care, <br className="hidden sm:block" />
            <span className="text-forest-light">Served with Heart</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every detail at Chillax is designed to make your day a little better.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-sage/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-forest group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-forest group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-forest rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
