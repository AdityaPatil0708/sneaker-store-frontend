import nike from "../images/image.png";
import { ArrowRight } from "lucide-react";
export default function Hero() {
    return (
        <div className="box-border flex justify-center mt-30 pb-30">
            <div className="relative">
                <img src={nike} alt="" height={100} width={650} className="transform hover:scale-105 transition duration-300" />

                <div className="absolute top-50 right-110 w-100">
                    <p className="text-xl text-black pl-5">Step into style and</p>
                    <p className="text-xl text-black">sustainability with <strong className="font-medium text-2xl">UrbanSteps.</strong></p>
                    <div className="mt-4 flex gap-2">
                        <button className="bg-gray-950 text-white p-1.5 rounded-2xl pl-5 pr-5 transform hover:scale-105 transition duration-300 hover:cursor-pointer flex items-center gap-">
                            Shop Now
                            <ArrowRight size={16} />
                        </button>
                        <button
                            onClick={() => {
                                const footer = document.getElementById('footer');
                                const supportSection = document.getElementById('support-section');

                                if (footer) {
                                    footer.scrollIntoView({ behavior: 'smooth' });
                                }

                                setTimeout(() => {
                                    window.dispatchEvent(new Event('highlightSupport'));
                                }, 500);
                            }}
                            className="text-black p-1.5 rounded-2xl pl-3 pr-3 border hover:bg-gray-950 hover:text-white transform hover:scale-105 transition duration-300 hover:cursor-pointer"
                        >
                            Support
                        </button>
                    </div>
                </div>

                <div className="absolute top-110 left-110 w-100 p-4 rounded-lg">
                    <p className="text-xl text-black text-right">Your go-to destination for premium</p>
                    <p className="text-xl text-black text-right pr-5">footwear, where every step</p>
                    <p className="text-xl text-black text-right pr-7">makes a <strong className="font-medium text-2xl">Difference!</strong></p>
                </div>
            </div>
        </div>
    )
}
