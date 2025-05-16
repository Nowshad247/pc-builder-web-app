"use client"

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"
import { Menu, X, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const session  = useSession()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
 const submenu = [
    { label: "CPU / Processor", href: "/cpu" },
    { label: "Motherboard", href: "/motherboard" },
    { label: "RAM", href: "/ram" },
    { label: "Power Supply Unit", href: "/power-supply-unit" },
    { label: "Storage Device", href: "/power-supply-unit" },
    { label: "Monitor", href: "/power-supply-unit" },
    { label: "Others", href: "/power-supply-unit" },
  ]
  return (
    <header className="mx-auto sticky top-0 max-w-[1240px] z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">
            <Image 
              src="/next.svg" // relative path to image in public folder
              alt="My Photo"
              width={100} 
              height={40} 
/>
            </span>
          </Link>
        </div>

        {/* Left side menu - desktop */}
        <nav className="hidden md:flex md:flex-1">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <DropdownMenuLabel className="py-1">Categories</DropdownMenuLabel>
            </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  { 
                    submenu.map((items) => {
                      return (
                       <Link key={items.label} href={items.href} className="text-sm font-medium transition-colors hover:text-primary">
                        <DropdownMenuItem className="flex items-center">
                          {items.label}
                        </DropdownMenuItem> </Link>
                       
                      )
                    })
                  }
            </DropdownMenuContent>
          </DropdownMenu>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right side - desktop */}
        <div className="ml-auto flex items-center gap-2">
        <div className="hidden md:flex md:items-center md:gap-2">
            <Button variant="outline">PC Builder</Button>
          </div>

          { 
            session ? (
              null
            ) : (
              <Button variant="outline" onClick={() => signIn()}>Sign In</Button> 
            )
          }

          {
            session ? (<DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full border-2 border-primary">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={ ()=>signOut()}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>) : <Button variant="outline" onClick={() => signIn()}>Sign In</Button> 
          }

        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden z-50">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="flex-1">
                PC Builder
              </Button>
              <Button className="flex-1">Account</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
