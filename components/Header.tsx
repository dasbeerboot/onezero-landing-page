'use client'

import Logo from "./Logo"

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Logo className="h-12 w-auto" />
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-white/80 transition-colors hover:text-[#5EF6FF]">
                소개
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('solution')} className="text-sm font-medium text-white/80 transition-colors hover:text-[#5EF6FF]">
                솔루션
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('case-study')} className="text-sm font-medium text-white/80 transition-colors hover:text-[#5EF6FF]">
                고객 사례
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('service')} className="text-sm font-medium text-white/80 transition-colors hover:text-[#5EF6FF]">
                서비스
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="rounded-lg border border-[#5EF6FF] bg-transparent px-5 py-2 text-sm font-medium text-[#5EF6FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(94,246,255,0.8)] relative before:absolute before:inset-0 before:rounded-lg before:border before:border-[#5EF6FF] before:opacity-0 before:transition-all hover:before:inset-[-2px] hover:before:opacity-100"
          >
            문의하기
          </button>
        </div>
      </div>
    </header>
  )
} 