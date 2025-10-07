//import { useState } from 'react';
// import type { MenuProps } from 'antd';
// import {Dropdown, Button, Space } from 'antd';
// import { MenuOutlined, GlobalOutlined, DownOutlined, CloseOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import { Search } from 'lucide-react';

// Keeping the existing menu items...
// const productItems: MenuProps['items'] = [
//   {
//     key: '1',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item (disabled)
//       </a>
//     ),
//   },
//   {
//     key: '3',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//         3rd menu item (disabled)
//       </a>
//     ),
//   },
//   {
//     key: '4',
//     label: 'a danger item',
//   },
// ];

// const SolutionItems: MenuProps['items'] = [...productItems];
// const ResourcesItems: MenuProps['items'] = [...productItems];
// const EnterpriseItems: MenuProps['items'] = [...productItems];
// const PricingItems: MenuProps['items'] = [...productItems];
import logo01 from "../assets/logo01.png"
export default function NavBar() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const navItems = [
  //   { label: 'Products', items: productItems },
  //   { label: 'Solutions', items: SolutionItems },
  //   { label: 'Resources', items: ResourcesItems },
  //   { label: 'Enterprise', items: EnterpriseItems },
  //   { label: 'Pricing', items: PricingItems },
  // ];

  return (
    <>
        <header className="border-b border-gray-200 bg-[#E3DBDB] shadow-sm">
        <nav className="max-w-7xl mx-auto pr-8 flex items-center justify-center py-2">
          <div className="flex w-[50%]">
                   <div className="flex items-center pr-8 w-[50%]">
              <img src={logo01} 
                alt="logo" 
              />
              </div>
          <div className="hidden pl-8 md:flex items-center space-x-10 font-semibold w-[50%] text-sm">
              <a href="/" className="text-black-700 hover:text-red-600">Home</a>
              <a href="/#about" className="text-black-700 hover:text-red-600">About</a>
              <a href="/#projects" className="text-black-700 hover:text-red-600">Projects</a>
              <a href="/#events" className="text-black-700 hover:text-red-600">Events</a>
              <a href="/#contact" className="text-black-700 hover:text-red-600">Contact</a>
            </div>
          </div>
   
        </nav>
      </header>    
    </>
  );
}