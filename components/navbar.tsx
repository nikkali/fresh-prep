"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const router = useRouter()
  const isActive = (path: string) => router.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/">
            <a className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Maggie's Meal Prep</span>
            </a>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/menu">
              <a className={isActive("/menu") ? "text-blue-600" : "text-gray-500 hover:text-gray-900"}>
                Menu
              </a>
            </Link>
            <Link href="/about">
              <a className={isActive("/about") ? "text-blue-600" : "text-gray-500 hover:text-gray-900"}>
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className={isActive("/contact") ? "text-blue-600" : "text-gray-500 hover:text-gray-900"}>
                Contact
              </a>
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/cart">
            <a>
              <Button variant="outline" size="sm">
                Cart ({0})
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}