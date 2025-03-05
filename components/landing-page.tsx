'use client'

import { ArrowDown, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#000000] text-white font-pretendard">
      {/* Header */}
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

      {/* Hero Section - About */}
      <section id="about" className="relative flex h-screen items-center justify-center overflow-hidden pt-16">
        {/* 비정형 그라디언트 배경 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#000000]"></div>
          
          {/* 비정형 그라디언트 블롭 */}
          <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 transform">
            {/* 시안 블롭 */}
            <div className="absolute -left-[5%] -top-[10%] h-[70%] w-[70%] rounded-[40%] bg-[#5EF6FF] opacity-20 blur-[120px] animate-soft-pulse"></div>
            
            {/* 중간 블렌딩 블롭 */}
            <div className="absolute left-[20%] top-[10%] h-[60%] w-[60%] rounded-[45%] bg-[#9E7AFF] opacity-15 blur-[100px] animate-soft-pulse [animation-delay:0.5s]"></div>
            
            {/* 핑크 블롭 */}
            <div className="absolute -bottom-[5%] right-[5%] h-[60%] w-[70%] rounded-[60%] bg-[#FF4397] opacity-20 blur-[120px] animate-soft-pulse [animation-delay:1s]"></div>
            
            {/* 옐로우 블롭 - 약간 겹치게 */}
            <div className="absolute left-[30%] top-[40%] h-[50%] w-[50%] rounded-[50%] bg-[#FBF53] opacity-10 blur-[90px] animate-soft-pulse [animation-delay:1.5s]"></div>
            
            {/* 추가 블렌딩 블롭 */}
            <div className="absolute bottom-[20%] left-[10%] h-[40%] w-[40%] rounded-[55%] bg-[#7CFFB4] opacity-10 blur-[80px] animate-soft-pulse [animation-delay:2s]"></div>
          </div>
          
          {/* 그리드 라인 */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-[calc(72rem*0.9)]">
            {/* 글래스모피즘 박스 */}
            <div className="relative overflow-hidden rounded-[2rem]">
              {/* 메인 글래스 효과 */}
              {/* <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-[12px]"></div> */}
              
              {/* 내부 발광 효과 */}
              {/* <div className="absolute -left-1/3 top-1/4 h-[40rem] w-[40rem] rounded-full bg-[#5EF6FF]/10 blur-[140px]"></div>
              <div className="absolute -right-1/3 -bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-[#FF4397]/10 blur-[140px]"></div> */}
              
              {/* 테두리 효과 */}
              {/* <div className="absolute inset-0 rounded-[2rem] border border-white/[0.08]"></div> */}
              
              {/* 상단 하이라이트 */}
              {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"></div> */}
              
              {/* 컨텐츠 */}
              <div className="relative px-12 py-20">
                <div className="text-center">
                  <h1 className="mb-12 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                    <p className="text-white/[0.98]">적게 일하고 많이 버세요의</p>
                    <span className="text-[#5EF6FF]">적게</span><span className="text-white/[0.98]">를 책임집니다</span>
                  </h1>
                  <p className="mb-10 text-xl text-white/90 md:text-2xl">광고대행사와 지식산업 기업을 위한 맞춤형 자동화 솔루션</p>
                  <p className="mb-14 text-lg text-white/80">직원 한 명당 하루 4시간을 돌려드립니다</p>
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

      {/* Features Section - Solution */}
      <section id="solution" className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-20">
        <div className="container relative mx-auto px-4">
          <div className="relative">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">우리는 이런 업무를 자동화합니다</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "데이터 수집 & 응용",
                "광고 리포트 생성",
                "네이버 순위 추적",
                "블로그 리뷰 작성",
                "뉴스레터 발송",
                "프리랜서 운영 최적화",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:border-[#5EF6FF]/30 hover:bg-gray-800/50"
                >
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#5EF6FF]" />
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-study" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
        <div className="container relative mx-auto px-4">
          <div className="relative">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">실제 자동화 사례</h2>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:border-[#5EF6FF]/30">
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">주식회사 리얼코치</h3>
                  <p className="mb-4 text-gray-300">
                    블로그 리뷰 주간 3,000건 자동 작성,
                    <br />
                    기자단 관리 + 입금 자동화
                    <br />→ 월 1,500만원 비용 절감
                  </p>
                </div>
                <div className="relative h-64 w-full bg-gradient-to-br from-[#5EF6FF]/10 to-[#FF4397]/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-lg bg-gray-800/80 p-4 backdrop-blur-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium">자동화 대시보드</span>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded bg-gray-700"></div>
                        <div className="h-4 w-3/4 rounded bg-gray-700"></div>
                        <div className="h-4 w-5/6 rounded bg-gray-700"></div>
                        <div className="h-4 w-2/3 rounded bg-[#5EF6FF]/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:border-[#FF4397]/30">
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">프린스턴리뷰</h3>
                  <p className="mb-4 text-gray-300">
                    영문 뉴스레터 자동 제작/발송
                    <br />→ 잠재고객 유료 전환율 상승
                  </p>
                </div>
                <div className="relative h-64 w-full bg-gradient-to-br from-[#FF4397]/10 to-[#FBF53]/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-lg bg-gray-800/80 p-4 backdrop-blur-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium">뉴스레터 자동화</span>
                        <div className="flex gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                          <div className="h-4 w-full rounded bg-gray-700"></div>
                          <div className="h-4 w-full rounded bg-gray-700"></div>
                          <div className="h-4 w-full rounded bg-gray-700"></div>
                        </div>
                        <div className="flex items-center justify-center rounded bg-[#FF4397]/20 p-2">
                          <div className="h-12 w-12 rounded-full bg-[#FF4397]/30"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section - Service */}
      <section id="service" className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20">
        <div className="container relative mx-auto px-4">
          <div className="relative">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">이렇게 달라집니다</h2>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-gray-800">
              <div className="grid grid-cols-2 divide-x divide-gray-800 border-b border-gray-800">
                <div className="bg-gray-900/80 p-4 text-center font-medium">Before</div>
                <div className="bg-[#5EF6FF]/10 p-4 text-center font-medium text-[#5EF6FF]">After</div>
              </div>
              {[
                ["매일 수동 데이터 입력", "매일 자동 업데이트"],
                ["수기 견적서 발송", "견적서 자동 전송"],
                ["블로그 리뷰 작성 스트레스", "리뷰 주간 3,000건 자동 작성"],
                ["사진 찍고 수기 결제", "온라인 자동 결제 링크 전송"],
              ].map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 divide-x divide-gray-800 border-b border-gray-800 last:border-b-0"
                >
                  <div className="p-4 py-6">{row[0]}</div>
                  <div className="bg-[#5EF6FF]/5 p-4 py-6 font-medium text-[#5EF6FF]">{row[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Contact */}
      <section id="contact" className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">아직도 반복 업무에 시간을 쓰고 계신가요?</h2>
            <p className="mb-10 text-xl text-gray-300">무료로 자동화 진단받고, 시간을 벌어보세요</p>
            <button onClick={() => scrollToSection('contact')} className="rounded-lg border border-[#5EF6FF] bg-transparent px-10 py-4 text-base font-medium text-[#5EF6FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(94,246,255,0.8)] relative before:absolute before:inset-0 before:rounded-lg before:border before:border-[#5EF6FF] before:opacity-0 before:transition-all hover:before:inset-[-2px] hover:before:opacity-100">
              자동화 무료 진단받기
            </button>
          </div>
        </div>
      </section>

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
    </div>
  )
} 