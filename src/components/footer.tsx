import { Facebook, Instagram, Twitter, Linkedin, Play } from 'lucide-react';

export default function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Section - Logo and Social Media */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">THETECHERS</span>
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
            <Twitter className="w-5 h-5 cursor-pointer" />
            <Linkedin className="w-5 h-5 cursor-pointer" />
            <Play className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">THETECHERS</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Community</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Basic Settings</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Terms and conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy and Policies</a></li>
            </ul>
          </div>
        </div>
        
        {/* Language Selector & Copyright */}
        <div className="flex flex-col gap-3">
          <p className="text-sm">© 2025 THETECHERS Technologies</p>
          <select className="bg-transparent border border-white text-white px-2 py-1 text-sm rounded">
            <option>English</option>
            <option>Français</option>
            <option>Español</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
