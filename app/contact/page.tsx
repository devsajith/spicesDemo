import { Leaf, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+919645851927"; // REPLACE WITH ACTUAL NUMBER

export default function Contact() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <section className="py-20 bg-white">
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
        </div>
    );
}
