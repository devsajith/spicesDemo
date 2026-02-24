"use client";
import { useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "9645851927"; // REPLACE WITH ACTUAL NUMBER

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

function ProductCard({ product }: { product: any }) {
    const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", phone: "", address: "", pinCode: "" });

    const handleBuyNow = () => setIsModalOpen(true);

    const handleWhatsAppRedirect = (e: any) => {
        e.preventDefault();
        const message = `Hello! I would like to order:\nProduct: ${product.name}\nQuantity: ${quantity}\nPrice: ₹${product.price}\nTotal: ₹${product.price * quantity}\n\n*Delivery Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nPIN Code: ${formData.pinCode}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="group flex flex-col items-start bg-white p-5 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all h-full relative z-10">
                <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden shadow-sm shadow-stone-200">
                    <Image src={product.image} alt={product.name} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-bold text-[#d8405b] mb-1 group-hover:text-red-600 transition-colors">{product.name}</h3>
                <p className="text-stone-500 text-sm mb-3 line-clamp-2 min-h-[40px]">{product.description}</p>
                <div className="text-2xl font-bold text-stone-800 mb-5">₹{product.price}</div>
                <div className="mt-auto w-full space-y-4">
                    <button onClick={handleBuyNow} className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-3 px-4 rounded-xl transition-transform transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                        <WhatsAppIcon className="w-6 h-6" /> Buy Now
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
                                <WhatsAppIcon className="w-5 h-5" /> Confirm & Send via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default function ProductsPage() {
    return (
        <div className="pt-24 min-h-screen bg-stone-50">
            <section className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h4 className="text-stone-500 mb-2">Home / Ayurvedic Oil</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h2 className="text-4xl font-bold text-stone-800">Ayurvedic Products</h2>
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
        </div>
    );
}
