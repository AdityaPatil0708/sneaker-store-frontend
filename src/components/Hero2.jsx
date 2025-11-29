import bestselling from "../images/bestselling.png";
import nike1 from "../images/jordan1.webp";
import nike2 from "../images/jordan2.webp";
import adidas1 from "../images/adidas1.webp";
import puma1 from "../images/puma2.webp";

import puma2 from "../images/jordan3.webp";
import nike3 from "../images/jordan4.webp";
import nike4 from "../images/jordan5.webp";
import adidas2 from "../images/jordan6.png";

import puma4 from "../images/yeezy.png";
import nike7 from "../images/adidas4.png";
import nike8 from "../images/adidas3.png";
import adidas4 from "../images/yeezy2.png";


export default function Hero2() {
    return (
        <div id="image_description" className="border-b border-gray-700  mt-10  pb-10">
            <div className="box-border flex justify-center">
                <img src={bestselling} alt="" height={100} width={700} />
            </div>  
            <div className="mt-10">
                <ul className="flex justify-around pl-50 pr-50 gap-2 text-xs">
                    <li><img src={nike1} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Air Jordan 1 Retro Low <br /> OG 'Mocha'<br />From Rs. 14,999</a></li>
                    <li><img src={adidas1} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Adidas Sambas <br /> OG 'White Black Gum'<br />From Rs. 10,999</a></li>
                    <li><img src={puma1} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Puma Palermo Unisex <br /> Sneakers Ivory<br />From Rs. 6,999</a></li>
                    <li><img src={nike2} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Jordan 1 Low bred <br /> Toe 2.0<br />From Rs. 14,999</a></li>
                </ul>
            </div>
            <div className="mt-5">
                <ul className="flex justify-around pl-50 pr-50 gap-2 text-xs">
                    <li><img src={puma2} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Travis ScottxJordan 1<br /> 'Velvet Brown'<br />From Rs. 42,999</a></li>
                    <li><img src={nike3} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Dunk Low Medium<br /> Curry<br />From Rs. 13,999</a></li>
                    <li><img src={nike4} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Dunk Low Lottery Pack<br /> Malachite<br />From Rs. 11,999</a></li>
                    <li><img src={adidas2} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Dunk Low Union Argon <br /> Passport Pack<br />From Rs. 27,999</a></li>
                </ul>
            </div>
            
            <div className="mt-5">
                <ul className="flex justify-around pl-50 pr-50 gap-2 text-xs">
                    <li><img src={puma4} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Adidas Yeezy 350 V2 <br /> Carbon Beluga<br />From Rs. 16,999</a></li>
                    <li><img src={nike7} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Adidas Sambas OG<br />White Green<br />From Rs. 8,499</a></li>
                    <li><img src={adidas4} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Adidas Yeezy 350 <br /> Natural<br />From Rs. 17,999</a></li>
                    <li><img src={nike8} alt="" className="w-50 h-50 transform hover:scale-103 transition duration-300"/><a href="#">Adidas Sambas OG <br /> Collegiate Green<br />From Rs. 14,999</a></li>
                </ul>
            </div>
            <div className="mt-20 flex justify-center">
                <button className="bg-gray-950 text-white p-2 pl-2 pr-2 text-sm hover:cursor-pointer hover:scale-105 transition duration-300">View All</button>
            </div>
            
        </div>);    
}