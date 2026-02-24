import { Leaf } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-green-950 text-white/70 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <div className="flex justify-center items-center gap-2 mb-6">
                    <Leaf className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-lg text-white">Green Leaf</span>
                </div>
                <p>© {new Date().getFullYear()} Green Leaf. All rights reserved.</p>
            </div>
        </footer>
    );
}
