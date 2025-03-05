'use client'

import { ChevronUp } from "lucide-react"
import Logo from "./Logo"

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('about')}
        className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:text-[#5EF6FF]"
        aria-label="맨 위로 이동"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Logo className="h-10 w-auto" />
            <div className="flex gap-8">
              <button 
                onClick={() => scrollToSection('service')} 
                className="text-sm text-gray-400 hover:text-[#5EF6FF] transition-colors"
              >
                서비스
              </button>
              <button 
                onClick={() => scrollToSection('case-study')} 
                className="text-sm text-gray-400 hover:text-[#FF4397] transition-colors"
              >
                사례
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-sm text-gray-400 hover:text-[#FBF53] transition-colors"
              >
                문의하기
              </button>
              <button 
                onClick={() => scrollToSection('solution')} 
                className="text-sm text-gray-400 hover:text-[#5EF6FF] transition-colors"
              >
                솔루션
              </button>
            </div>
            <div className="text-sm text-gray-500">© 2025 프로젝트 원제로. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
} 