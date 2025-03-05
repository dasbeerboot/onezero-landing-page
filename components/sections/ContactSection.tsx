'use client'

interface ContactSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function ContactSection({ scrollToSection }: ContactSectionProps) {
  return (
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
  )
} 