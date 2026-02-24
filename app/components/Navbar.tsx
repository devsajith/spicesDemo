"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <Leaf className="h-8 w-8 text-green-700" />
                        <div className="flex flex-col">
                            <span className="font-bold text-xl text-green-900 leading-tight">Green Leaf</span>
                            <span className="text-xs text-green-700 tracking-wider">ORGANIC SPICES GARDEN</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-stone-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                        <Link href="/about" className="text-stone-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">About Us</Link>
                        <Link href="/products" className="text-stone-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Products</Link>
                        <Link href="/contact" className="text-stone-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Contact Us</Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-stone-600 hover:text-green-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <Link href="/" className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-green-600 hover:bg-green-50 rounded-md">Home</Link>
                        <Link href="/about" className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-green-600 hover:bg-green-50 rounded-md">About Us</Link>
                        <Link href="/products" className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-green-600 hover:bg-green-50 rounded-md">Products</Link>
                        <Link href="/contact" className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-green-600 hover:bg-green-50 rounded-md">Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
