

'use client'
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              3D Studio<span className="text-orange-500">Pro</span>
            </div>
            <p className="text-gray-300 mb-6">
              Your premier 3D visualization partner. Creating stunning visual experiences 
              that bring ideas to life through cutting-edge technology and artistic vision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Process</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">3D Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">3D Animation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Product Rendering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Architectural Viz</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">VR/AR Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Motion Graphics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="text-gray-300">456 Creative Avenue</p>
                  <p className="text-gray-300">Los Angeles, CA 90028</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <p className="text-gray-300">+1 (555) 987-6543</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <p className="text-gray-300">hello@3dstudiopro.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 3D Studio Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-orange-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-orange-500 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;