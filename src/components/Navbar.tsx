'use client'
import React from 'react';
import Image from "next/image";
import {CiSearch} from 'react-icons/ci';
import {FiShoppingCart} from 'react-icons/fi';
import Link from 'next/link';


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";



const Navbar = () => {
  return (
    <nav className="flex justify-between items-center my-8 mx-32">
      <Link href={'/'}>
        <Image src={'/assets/Logo.png'} alt="logo" width={150} height={150} />
      </Link>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/female" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                  Female
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/male" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Male
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/kids" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kids
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  All Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex justify-center items-center border border-gray-300 rounded">
        <CiSearch className="bg-white rounded-l mr-2" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className='rounded-r text-sm py-1 pr-48'
        />
      </div>
      <Link href="/cart" legacyBehavior passHref>
        <div className="p-4 rounded-full bg-gray-200 cursor-pointer">
          <FiShoppingCart className="relative" />
          <span className="absolute top-8 right-32 h-5 w-5 text-center text-base rounded-full text-white bg-red-600">
            0
          </span>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar