import { useState, useEffect } from 'react';

// ============================================
// Sweet Delights - Cake Business Website
// A single-page responsive website for ordering cakes via WhatsApp
// ============================================

// --- CONFIGURATION ---
// REPLACE THIS WITH THE ACTUAL WHATSAPP NUMBER (include country code, no + or spaces)
// Example: "2348012345678" for a Nigerian number
const WHATSAPP_NUMBER = "2348012345678";

// Cake data for the gallery section
const cakes = [
  {
    id: 1,
    name: "Chocolate Fudge",
    description: "Rich, moist chocolate cake layered with silky fudge ganache and topped with chocolate shavings.",
    price: "Starting at ₦15,000",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Red Velvet",
    description: "Classic red velvet with cream cheese frosting, perfectly balanced sweetness and cocoa flavor.",
    price: "Starting at ₦18,000",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0a948e34?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Vanilla Bean",
    description: "Light and fluffy vanilla sponge with real vanilla bean buttercream and fresh berry topping.",
    price: "Starting at ₦12,000",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Black Forest",
    description: "Chocolate sponge layered with whipped cream, cherries, and chocolate curls. A timeless classic.",
    price: "Starting at ₦20,000",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Fruit Cake",
    description: "Loaded with dried fruits, nuts, and warm spices. Perfect for celebrations and holidays.",
    price: "Starting at ₦16,000",
    image: "https://images.unsplash.com/photo-1621303837172-481d86fbb47e?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Custom Design",
    description: "Your imagination, our hands! Fully customized cakes for any theme, shape, or design you desire.",
    price: "Starting at ₦25,000",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=300&fit=crop"
  }
];

// --- HEADER/NAVIGATION COMPONENT ---
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sticky header effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Order Now", href: "#order" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-3xl">🎂</span>
          <span className="font-serif text-2xl font-bold text-pink-600">
            Sweet Delights
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-brown-500 hover:text-pink-500 font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-pink-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brown-500 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100 mt-2">
          <ul className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-brown-500 hover:text-pink-500 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562440499-64c9a111f713?w=1920&h=1080&fit=crop')`
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <span className="text-6xl animate-float">🎂</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brown-500 mb-6 leading-tight">
            Handcrafted Cakes for{" "}
            <span className="text-pink-500">Every Occasion</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-brown-400 mb-10 font-light max-w-2xl mx-auto">
            Custom designs, delicious flavors, made with love in Aba.
          </p>

          {/* CTA Button */}
          <a
            href="#order"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Order Now 🍰
          </a>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#fffbf5"
          />
        </svg>
      </div>
    </section>
  );
}

// --- GALLERY/MENU SECTION ---
function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 bg-[#fffbf5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-500 mb-4">
            Our Signature Cakes
          </h2>
          <p className="text-brown-400 text-lg max-w-2xl mx-auto">
            Each cake is baked fresh with premium ingredients and decorated with care.
            Choose from our favorites or request a custom creation.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="w-12 h-[2px] bg-pink-300"></span>
            <span className="text-pink-400 text-xl">✦</span>
            <span className="w-12 h-[2px] bg-pink-300"></span>
          </div>
        </div>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="cake-card bg-white rounded-2xl overflow-hidden shadow-md border border-pink-50"
            >
              {/* Cake Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-pink-600 font-semibold text-sm px-3 py-1 rounded-full shadow-sm">
                  {cake.price}
                </div>
              </div>

              {/* Cake Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-brown-500 mb-2">
                  {cake.name}
                </h3>
                <p className="text-brown-400 text-sm leading-relaxed mb-4">
                  {cake.description}
                </p>
                <a
                  href="#order"
                  className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors"
                >
                  Order this cake
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- HOW IT WORKS SECTION ---
function HowItWorksSection() {
  const steps = [
    {
      icon: "🎂",
      title: "Choose Your Cake",
      description: "Browse our menu and pick your favorite flavor, or describe your dream cake design."
    },
    {
      icon: "📝",
      title: "Fill Out the Order Form",
      description: "Tell us the details — size, occasion, date, and any special requests you have."
    },
    {
      icon: "💬",
      title: "We Confirm & Bake!",
      description: "We'll confirm your order via WhatsApp, then get baking with love and care."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-[#fffbf5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-500 mb-4">
            How It Works
          </h2>
          <p className="text-brown-400 text-lg max-w-xl mx-auto">
            Ordering your perfect cake is as easy as 1-2-3!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number circle */}
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-pink-100">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {index + 1}
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-brown-500 mb-3">
                {step.title}
              </h3>
              <p className="text-brown-400 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Connector arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-6 text-pink-300 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- ORDER FORM SECTION ---
function OrderFormSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cakeType: "Chocolate",
    size: "Medium (8 inch)",
    occasion: "",
    message: "",
    dateNeeded: "",
    instructions: ""
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission - sends order to WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the order message for WhatsApp
    const orderMessage = `🎂 *NEW CAKE ORDER - Sweet Delights* 🎂

━━━━━━━━━━━━━━━━━━
📋 *Order Details:*
━━━━━━━━━━━━━━━━━━

👤 *Customer Name:* ${formData.name}
📞 *Phone:* ${formData.phone}

🎂 *Cake Type:* ${formData.cakeType}
📏 *Size:* ${formData.size}
🎉 *Occasion:* ${formData.occasion || "Not specified"}
📅 *Date Needed:* ${formData.dateNeeded || "Not specified"}

💬 *Custom Message on Cake:*
${formData.message || "None"}

📝 *Special Instructions:*
${formData.instructions || "None"}

━━━━━━━━━━━━━━━━━━
Sent from Sweet Delights Website`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(orderMessage);

    // REPLACE THIS WITH THE ACTUAL WHATSAPP NUMBER
    // Format: country code + number (no + or spaces)
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="order" className="py-20 px-4 bg-[#fffbf5]">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-500 mb-4">
            Place Your Custom Order
          </h2>
          <p className="text-brown-400 text-lg max-w-2xl mx-auto">
            Fill out the form below and your order will be sent directly to our WhatsApp.
            We'll confirm availability and discuss details with you!
          </p>
        </div>

        {/* Order Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-pink-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer Name */}
            <div>
              <label className="block text-brown-500 font-medium mb-2 text-sm">
                👤 Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Chioma Okafor"
                className="form-input w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 outline-none transition-all text-brown-500 placeholder:text-brown-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-brown-500 font-medium mb-2 text-sm">
                📞 Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="e.g., 08012345678"
                className="form-input w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 outline-none transition-all text-brown-500 placeholder:text-brown-300"
              />
            </div>

            {/* Cake Type */}
            <div>
              <label className="block text-brown-500 font-medium mb-2 text-sm">
                🎂 Cake Type *
              </label>
              <select
                name="cakeType"
                value={formData.cakeType}
                onChange={handleChange}
                required
                className="form-input w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 outline-none transition-all text-brown-500 bg-white"
              >
                <option value="Chocolate">Chocolate</option>
                <option value="Vanilla">Vanilla</option>
                <option value="Red Velvet">Red Velvet</option>
                <option value="Fruit">Fruit Cake</option>
                <option value="Black Forest">Black Forest</option>
                <option value="Custom Design">Custom Design</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Size */}
            <div>
              <label className="block text-brown-500 font-medium mb-2 text-sm">
                📏 Size *
              </label>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="form-input w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 outline-none transition-all text-brown-500 bg-white"
              >
                <option value="Small (6 inch)">Small (6 inch)</option>
                <option value="Medium (8 inch)">Medium (8 inch)</option>
                <option value="Large (10 inch)">Large (10 inch)</option>
                <option value="Extra Large (12 inch)">Extra Large (12 inch)</option>
              </select>
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-brown-500 font-medium mb-2 text-sm">
                🎉 Occasion
              </label>
              <input
                type="text"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                placeholder="e.g., Birthday, Wedding, Anniversary"
                className="form-input w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 outline-none transition-all text-brown-500 placeholder:text-brown-300"
              />
            </div>

            {/* Date Needed */}
            <div>
              <label className="block text-brown-500 font-medium mb-2 text-sm">
                📅 Date Needed *
              </label>
              <input
                type="date"
                name="dateNeeded"
                value={formData.dateNeeded}
                onChange={handleChange}
                required
                className="form-input w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 outline-none transition-all text-brown-500"
              />
            </div>

            {/* Custom Message on Cake - Full Width */}
            <div className="md:col-span-2">
              <label className="block text-brown-500 font-medium mb-2 text-sm">
                ✍️ Custom Message on Cake
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                placeholder="e.g., Happy Birthday Ada! 🎈"
                className="form-input w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 outline-none transition-all text-brown-500 placeholder:text-brown-300 resize-none"
              />
            </div>

            {/* Special Instructions - Full Width */}
            <div className="md:col-span-2">
              <label className="block text-brown-500 font-medium mb-2 text-sm">
                📝 Special Instructions
              </label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows={3}
                placeholder="Any allergies, color preferences, design details, delivery info, etc."
                className="form-input w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 outline-none transition-all text-brown-500 placeholder:text-brown-300 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send Order via WhatsApp
            </button>
            <p className="text-brown-300 text-sm mt-4">
              Your order will open in WhatsApp for confirmation 💬
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

// --- FOOTER COMPONENT ---
function Footer() {
  return (
    <footer id="contact" className="bg-brown-500 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎂</span>
              <span className="font-serif text-2xl font-bold">Sweet Delights</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Handcrafted cakes made with love in Aba, Nigeria. Every cake tells a story —
              let us help you tell yours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-pink-300 transition-colors text-sm">Home</a></li>
              <li><a href="#menu" className="text-white/70 hover:text-pink-300 transition-colors text-sm">Our Menu</a></li>
              <li><a href="#order" className="text-white/70 hover:text-pink-300 transition-colors text-sm">Place an Order</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-pink-300 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <span>📍</span> Aba, Abia State, Nigeria
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <span>📞</span> +234 801 234 5678
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <span>📧</span> sweetdelights@email.com
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Sweet Delights. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Made with ❤️ by Vector Codes
          </p>
        </div>
      </div>
    </footer>
  );
}

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <MenuSection />
        <HowItWorksSection />
        <OrderFormSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
