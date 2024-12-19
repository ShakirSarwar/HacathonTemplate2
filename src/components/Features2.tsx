import { FaEnvelope } from "react-icons/fa";

export default function Features() {
    return (
        <main className="bg-white  w-[1440px] h-[603px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Section */}
                <div className="text-left px-4 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
                        From a studio in London to a global brand with over 400 outlets
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        When we started Avion, the idea was simple. Make high quality
                        furniture affordable and available for the mass market.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Handmade, and lovingly crafted furniture and homeware is what we
                        live, breathe and design so our Chelsea boutique became the hotbed
                        for the London interior design community.
                    </p>
                    {/* CTA Button */}
                    <button className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition">
                        <FaEnvelope className="text-lg" />
                        Get in touch
                    </button>
                </div>

                {/* Image Placeholder Section */}
                <div className="w-full h-[400px] bg-gray-200 flex  items-baseline">
                    {/* Placeholder for Image */}
                    <div className="md:w-[800px] md:h-[584px] flex">
                        <img src={'Sofa2.jpg'} width={720} height={603} alt='right' />
                    </div>
                </div>
            </div>
        </main>
    );
}
