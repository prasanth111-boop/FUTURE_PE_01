import { Coffee, UtensilsCrossed, Wifi } from "lucide-react";

const menuItems = {
  coffee: [
    { name: "Espresso", price: "₹120" },
    { name: "Americano", price: "₹140" },
    { name: "Cappuccino", price: "₹180" },
    { name: "Latte", price: "₹190" },
    { name: "Flat White", price: "₹200" },
    { name: "Cold Brew", price: "₹220" },
    { name: "Filter Coffee (South Indian)", price: "₹80" },
  ],
  food: [
    { name: "Sourdough Toast & Butter", price: "₹150" },
    { name: "Avocado Toast", price: "₹280" },
    { name: "Egg Benedict", price: "₹320" },
    { name: "Paneer Sandwich", price: "₹220" },
    { name: "Chicken Club Sandwich", price: "₹280" },
    { name: "Fresh Croissant", price: "₹120" },
    { name: "Chocolate Brownie", price: "₹150" },
  ],
  extras: [
    { name: "Almond Milk", price: "+₹40" },
    { name: "Oat Milk", price: "+₹50" },
    { name: "Extra Shot", price: "+₹30" },
  ],
};

const services = [
  {
    icon: Coffee,
    title: "Handcrafted Brews",
    description:
      "Every cup tells a story. Our beans are ethically sourced and roasted in small batches. From silky espressos to perfectly balanced pour-overs, experience coffee as it was meant to be.",
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
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
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

        {/* Menu Section */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elevated">
          <div className="text-center mb-12">
            <span className="text-forest font-medium text-sm uppercase tracking-wider mb-4 block">
              Our Menu
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
              What's Brewing Today
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Coffee Menu */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sage/50 rounded-lg flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-forest" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground">
                  Coffee & Drinks
                </h4>
              </div>
              <ul className="space-y-4">
                {menuItems.coffee.map((item) => (
                  <li key={item.name} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                    <span className="text-foreground">{item.name}</span>
                    <span className="text-forest font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Food Menu */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sage/50 rounded-lg flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-forest" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground">
                  Food & Bakery
                </h4>
              </div>
              <ul className="space-y-4">
                {menuItems.food.map((item) => (
                  <li key={item.name} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                    <span className="text-foreground">{item.name}</span>
                    <span className="text-forest font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extras */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sage/50 rounded-lg flex items-center justify-center">
                  <span className="text-forest font-semibold">+</span>
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground">
                  Add-ons
                </h4>
              </div>
              <ul className="space-y-4">
                {menuItems.extras.map((item) => (
                  <li key={item.name} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                    <span className="text-foreground">{item.name}</span>
                    <span className="text-muted-foreground font-medium">{item.price}</span>
                  </li>
                ))}
              </ul>
              
              {/* Note */}
              <div className="mt-8 p-4 bg-sage/20 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Note:</span> All prices are inclusive of GST. 
                  We offer 10% off on orders above ₹500.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
