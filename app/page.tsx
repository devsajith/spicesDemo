"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "8330031686"; // REPLACE WITH ACTUAL NUMBER

const products = [
  {
    id: 1,
    name: "Nalpamadi Keram",
    category: "Skin Care Oil",
    image: "/product_nalpamaradi_1771650283494.png",
    description: "Ayurvedic skin care oil for glowing skin.",
    price: 350,
  },
  {
    id: 2,
    name: "Ashta Katvara",
    category: "Ayurvedic Medicine",
    image: "/product_ashta_1771650319807.png",
    description: "Traditional herbal health supplement.",
    price: 420,
  },
  {
    id: 3,
    name: "Rheumatol",
    category: "Back Pain",
    image: "/product_rheumatol_1771650354815.png",
    description: "Pain relief oil for joints and back pain.",
    price: 280,
  },
  {
    id: 4,
    name: "Pain Flex Oil",
    category: "Joint Care",
    image: "/product_painflex_1771650385653.png",
    description: "Multi-purpose pain relief massage oil.",
    price: 199,
  },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function ProductCard({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", pinCode: "" });

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const handleWhatsAppRedirect = (e: any) => {
    e.preventDefault();
    const message = `Hello! I would like to order:
Product: ${product.name}
Quantity: ${quantity}
Price: ₹${product.price}
Total: ₹${product.price * quantity}

*Delivery Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
PIN Code: ${formData.pinCode}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="group flex flex-col items-start bg-white p-5 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all h-full relative z-10">
        <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden shadow-sm shadow-stone-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-lg font-bold text-[#d8405b] mb-1 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-stone-500 text-sm mb-3 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>
        <div className="text-2xl font-bold text-stone-800 mb-5">
          ₹{product.price}
        </div>

        <div className="mt-auto w-full space-y-4">
          <button
            onClick={handleBuyNow}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-3 px-4 rounded-xl transition-transform transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Buy Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-stone-100 flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center bg-stone-50 shrink-0">
              <h3 className="font-bold text-lg text-stone-800">Complete Your Order</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-600 transition-colors p-1 rounded-full hover:bg-stone-200 focus:outline-none">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <form onSubmit={handleWhatsAppRedirect} className="p-6 space-y-5 overflow-y-auto">
              <div className="flex gap-4 items-center bg-green-50/50 p-3 rounded-xl border border-green-100">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-green-200">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 leading-tight">{product.name}</h4>
                  <p className="text-sm text-stone-600 mt-1">₹{product.price} / item</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-stone-50 p-3 rounded-xl border border-stone-100">
                <label className="block text-sm font-medium text-stone-700">Quantity</label>
                <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden shadow-sm bg-white">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 text-stone-600 hover:bg-stone-100 transition-colors">-</button>
                  <span className="w-10 text-center text-sm font-bold text-stone-800 border-x border-stone-300 py-1">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-stone-600 hover:bg-stone-100 transition-colors">+</button>
                </div>
              </div>

              <div className="flex justify-between items-center py-3 border-y border-stone-100">
                <span className="font-medium text-stone-700">Total Amount</span>
                <span className="text-xl font-bold text-green-700">₹{product.price * quantity}</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor={`name-${product.id}`} className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
                  <input required type="text" id={`name-${product.id}`} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-stone-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-stone-50 transition-colors" placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor={`phone-${product.id}`} className="block text-sm font-medium text-stone-700 mb-1">Phone Number *</label>
                  <input required type="tel" id={`phone-${product.id}`} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-stone-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-stone-50 transition-colors" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label htmlFor={`address-${product.id}`} className="block text-sm font-medium text-stone-700 mb-1">Delivery Address *</label>
                  <textarea required id={`address-${product.id}`} rows={2} value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full border border-stone-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-stone-50 transition-colors resize-none" placeholder="Enter full address with landmark"></textarea>
                </div>
                <div>
                  <label htmlFor={`pinCode-${product.id}`} className="block text-sm font-medium text-stone-700 mb-1">PIN Code *</label>
                  <input required type="text" id={`pinCode-${product.id}`} value={formData.pinCode} onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })} className="w-full border border-stone-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-stone-50 transition-colors" placeholder="Enter postal code" />
                </div>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-3.5 px-4 rounded-xl transition-transform transform hover:-translate-y-0.5 shadow-md mt-4">
                <WhatsAppIcon className="w-5 h-5" />
                Confirm & Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-700" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-green-900 leading-tight">Green Leaf</span>
                <span className="text-xs text-green-700 tracking-wider">ORGANIC SPICES GARDEN</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About Us", "Products", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-stone-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 hover:text-green-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="fill-none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "About Us", "Products", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-green-600 hover:bg-green-50 rounded-md"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_bg_1771650210711.png"
            alt="Herbal Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Pure Herbal Goodness <br /> from Nature
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto drop-shadow">
            Explore our wide range of handpicked herbal products—crafted with traditional wisdom, modern quality, and the healing power of Kerala's herbs.
          </p>
          <button className="bg-[#f07b46] hover:bg-[#d86b3b] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 tracking-wide">
            EXPLORE OUR PRODUCTS
          </button>
        </div>

        {/* Slider Controls (Decorative) */}
        <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
          <button className="w-12 h-12 bg-green-900/60 hover:bg-green-800 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all shadow-lg hover:pr-1">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
          <button className="w-12 h-12 bg-green-900/60 hover:bg-green-800 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all shadow-lg hover:pl-1">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/hero_bg_1771650210711.png"
                  alt="About our herbal garden"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h4 className="text-green-600 font-bold uppercase tracking-widest text-sm">About Us</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                Rooted in Tradition, Growing with Purity
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                At Green Leaf Organic Spices Garden, we bring you the authentic essence of Ayurvedic healing. Located in the pristine hills of Kerala, our gardens are home to rare medicinal plants and spices nurtured organically.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Our mission is to provide 100% natural, chemical-free products that promote wellness, balance, and vitality according to ancient Ayurvedic traditions. Every leaf, spice, and oil is a testament to our commitment to nature.
              </p>
              <button className="text-[#f07b46] font-semibold border-b-2 border-[#f07b46] pb-1 hover:text-stone-800 hover:border-stone-800 transition-colors inline-block mt-4">
                Discover Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h4 className="text-stone-500 mb-2">Home / Ayurvedic Oil</h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-4xl font-bold text-stone-800">Ayurvedic Oil</h2>
              <div className="flex items-center gap-4">
                <span className="text-stone-500 text-sm">Showing 1–4 of 20 results</span>
                <select className="border border-stone-300 rounded-md py-2 px-4 bg-white text-stone-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Sort by latest</option>
                  <option>Sort by popularity</option>
                  <option>Sort by rating</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h4 className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2">Contact Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Get In Touch</h2>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
              Have questions about our products or want to visit our organic garden? Send us a message and we'll get back to you shortly.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 space-y-8">
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 flex gap-4 items-start shadow-sm transition-shadow hover:shadow-md">
                <div className="bg-green-100 p-3 rounded-full text-green-700 shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-800 mb-1">Our Location</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Green Leaf Organic Spices Garden,<br />Munnar, Kerala, India 685612</p>
                </div>
              </div>

              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 flex gap-4 items-start shadow-sm transition-shadow hover:shadow-md">
                <div className="bg-green-100 p-3 rounded-full text-green-700 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-800 mb-1">Contact Info</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Phone: +91 {WHATSAPP_NUMBER}<br />Email: info@greenleafspices.com</p>
                </div>
              </div>

              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 flex gap-4 items-start shadow-sm transition-shadow hover:shadow-md">
                <div className="bg-green-100 p-3 rounded-full text-green-700 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-800 mb-1">Business Hours</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
                    <input type="text" id="name" className="w-full border border-stone-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 bg-stone-50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Your Email</label>
                    <input type="email" id="email" className="w-full border border-stone-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 bg-stone-50" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
                  <input type="text" id="subject" className="w-full border border-stone-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 bg-stone-50" placeholder="How can we help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                  <textarea id="message" rows={5} className="w-full border border-stone-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 bg-stone-50" placeholder="Write your message here..."></textarea>
                </div>
                <button type="button" className="bg-[#f07b46] hover:bg-[#d86b3b] text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-md w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-green-950 text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Leaf className="h-6 w-6 text-green-500" />
            <span className="font-bold text-lg text-white">Green Leaf</span>
          </div>
          <p>© {new Date().getFullYear()} Green Leaf. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to contact you through your website.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white rounded-full shadow-lg p-1 pr-4 hover:shadow-xl transition-all transform hover:-translate-y-1 group border border-green-100"
      >
        <div className="bg-[#25D366] text-white p-3 rounded-full flex items-center justify-center">
          <WhatsAppIcon className="w-8 h-8" />
        </div>
        <span className="font-medium text-stone-700 group-hover:text-green-600 transition-colors">Contact Us</span>
      </a>
    </div>
  );
}
