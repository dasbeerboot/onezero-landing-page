'use client'

export function ServiceSection() {
  return (
    <section id="service" className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20">
      <div className="container relative mx-auto px-4">
        <div className="relative">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">이렇게 달라집니다</h2>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-gray-800">
            <div className="grid grid-cols-2 divide-x divide-gray-800 border-b border-gray-800">
              <div className="bg-gray-900/80 p-4 text-center font-medium">Before</div>
              <div className="bg-[#5EF6FF]/10 p-4 text-center font-medium text-[#5EF6FF]">After</div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-800">
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300">매일 수동 데이터 입력</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300">수기 견적서 발송</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-300">반복적인 보고서 작성</span>
                </div>
              </div>
              <div className="space-y-4 bg-[#5EF6FF]/5 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-[#5EF6FF]">매일 자동 업데이트</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#5EF6FF]">견적서 자동 전송</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#5EF6FF]">보고서 자동 생성</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 