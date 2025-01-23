
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Footer: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto py-12 px-6">
        {/* Links and Help Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8">
          {/* Address Section */}
          <div className="text-gray-500 text-sm space-y-2">
            <p className="font-medium text-gray-900">Meubel House</p>
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

        
          <div className="space-y-4">
            <h3 className="text-gray-500 font-semibold text-sm">Links</h3>
            <ul className="space-y-2">
              <li className="text-gray-800 hover:text-gray-600 cursor-pointer">Home</li>
              <li className="text-gray-800 hover:text-gray-600 cursor-pointer">Shop</li>
              <li className="text-gray-800 hover:text-gray-600 cursor-pointer">About</li>
              <li className="text-gray-800 hover:text-gray-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-500 font-semibold text-sm">Help</h3>
            <ul className="space-y-2">

              <li className="text-gray-800 hover:text-gray-600 cursor-pointer">Payment Options</li>
              <li className="text-gray-800 hover:text-gray-600 cursor-pointer">Returns</li>
              <li className="text-gray-800 hover:text-gray-600 cursor-pointer">Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-gray-500 font-semibold text-sm">Newsletter</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Enter Your Email Address</p>
              <div className="flex items-center">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="border border-gray-300 rounded-l-lg px-4 py-2 w-full focus:outline-none"
                />
                <Button className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg hover:bg-indigo-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p>© 2022 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
