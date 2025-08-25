// src/components/Header.tsx
"use client";
import { useState } from "react";
import { Menu, X, Printer } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Printer className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900">PrintBlow</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contact
            </a>
            <button className="btn-primary">Get Quote</button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 mt-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-primary-600"
              >
                Services
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-primary-600"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-primary-600"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600"
              >
                Contact
              </a>
              <button className="btn-primary w-full mt-2">Get Quote</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
