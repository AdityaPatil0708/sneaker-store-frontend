import { Instagram, MessageCircle, Twitter} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        const handleHighlight = () => {
            setHighlight(true);
            setTimeout(() => setHighlight(false), 1000);
        };

        window.addEventListener('highlightSupport', handleHighlight);
        return () => window.removeEventListener('highlightSupport', handleHighlight);
    }, []);

    return (
        <footer 
            id="footer" 
            className="flex flex-col md:flex-row justify-around text-black p-5 md:pl-40 md:pr-40 gap-6 md:gap-0"
        >
            <div className="text-center md:text-left">
                <p className="mb-1 font-medium">Useful Links -</p>
                <ul className="text-xs text-gray-400">
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">About</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Shop</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Terms and Conditions!</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Returns and Refunds</a>
                    </li>
                </ul>
            </div>

            <div className="text-center md:text-left">
                <p className="mb-2 font-medium">Socials</p>
                <div className="flex gap-3 text-gray-400 justify-center md:justify-start">
                    <a href="#">
                        <Instagram className="hover:text-gray-950 transform duration-500" size={20}/>
                    </a>
                    <a href="#">
                        <MessageCircle className="hover:text-gray-950 transform duration-500" size={20}/>
                    </a>
                    <a href="#">
                        <Twitter className="hover:text-gray-950 transform duration-500" size={20}/>
                    </a>
                </div>
            </div>

            <div 
                id="support-section"
                className={`text-center md:text-left transition-all duration-500 ${
                    highlight ? 'bg-gray-100 p-4 -m-4' : ''
                }`}
            >
                <p className="mb-1 font-medium">Contact Us / Support</p>
                <ul className="text-xs text-gray-400">
                    <li className="hover:text-gray-950 transform duration-500 break-all">
                        <a href="#">Email : adityapatilap0724@gmail.com</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Phone : 8698659661</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="#">Whatsapp : 8698659661</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}