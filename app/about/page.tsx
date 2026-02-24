import Image from "next/image";

export default function About() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <section className="py-20 bg-white">
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
