'use client'

import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="about" className="relative flex h-screen items-center justify-center overflow-hidden pt-16">
      {/* 비정형 그라디언트 배경 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#000000]"></div>
        
        {/* 비정형 그라디언트 블롭 */}
        <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 transform">
          {/* 시안 블롭 */}
          <div className="absolute -left-[5%] -top-[10%] h-[70%] w-[70%] rounded-[40%] bg-[#5EF6FF] opacity-10 blur-[120px] animate-soft-pulse"></div>
          
          {/* 중간 블렌딩 블롭 */}
          <div className="absolute left-[20%] top-[10%] h-[60%] w-[60%] rounded-[45%] bg-[#9E7AFF] opacity-5 blur-[100px] animate-soft-pulse [animation-delay:0.5s]"></div>
          
          {/* 핑크 블롭 */}
          <div className="absolute -bottom-[5%] right-[5%] h-[60%] w-[70%] rounded-[60%] bg-[#FF4397] opacity-10 blur-[120px] animate-soft-pulse"></div>
          
          {/* 옐로우 블롭 - 약간 겹치게 */}
          <div className="absolute left-[30%] top-[40%] h-[50%] w-[50%] rounded-[50%] bg-[#FBF53] opacity-5 blur-[90px] animate-soft-pulse [animation-delay:0.8s]"></div>
          
          {/* 추가 블렌딩 블롭 */}
          <div className="absolute bottom-[20%] left-[10%] h-[40%] w-[40%] rounded-[55%] bg-[#7CFFB4] opacity-5 blur-[80px] animate-soft-pulse"></div>
        </div>
        
        {/* 그리드 라인 */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-[calc(72rem*0.9)]">
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="relative px-12 py-20">
              <div className="text-center">
                <h1 className="mb-12 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                  <p className="text-white">보이지 않는 수작업까지 찾아내</p>
                  <span className="text-white">4배 더 빠르게, </span><span className="text-[#5EF6FF]">초효율화</span>
                </h1>
                <p className="mb-4 text-[#f0f0f0] text-lg">매출은 그대로인데<br />투입되는 인력과 비용만 계속 늘고 있진 않나요?</p>
                <p className="mb-14 text-[#f0f0f0] text-lg">대표가 매일 실무까지 챙겨야 하는 회사라면,<br />이젠 자동화로 바꿔야 할 때입니다</p>
                <button onClick={() => scrollToSection('contact')} className="mb-16 rounded-lg border border-[#5EF6FF] bg-transparent px-10 py-4 text-base font-medium text-[#5EF6FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(94,246,255,0.8)] relative before:absolute before:inset-0 before:rounded-lg before:border before:border-[#5EF6FF] before:opacity-0 before:transition-all hover:before:inset-[-2px] hover:before:opacity-100">
                  자동화 무료 진단받기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={() => scrollToSection('solution')}
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 flex animate-bounce justify-center items-center cursor-pointer hover:text-[#5EF6FF] transition-colors [animation-duration:3s]"
      >
        <ChevronDown className="h-8 w-8 text-white/90" />
      </button>
    </section>
  )
} 