'use client'

export function CaseStudySection() {
  return (
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
                  <br />→ 월 1,750만원 비용 절감
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
  )
} 