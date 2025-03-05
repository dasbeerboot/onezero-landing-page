'use client'

export function SolutionSection() {
  return (
    <section id="solution" className="relative min-h-screen py-30 lg:py-44 overflow-hidden bg-black before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_20%_66%,rgba(94,246,255,0.10),transparent_30%)] after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_85%_75%,rgba(107,28,63,0.28),transparent_28%)] [&>*:first-child]:before:content-[''] [&>*:first-child]:before:absolute [&>*:first-child]:before:inset-0 [&>*:first-child]:before:bg-[radial-gradient(ellipse_at_50%_78%,rgba(251,255,83,0.06),transparent_30%)]">
      {/* 배경 텍스트 - 컨테이너 밖으로 이동 */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 w-[90%] flex justify-center items-center">
          {/* 외곽선 텍스트 */}
          <p className="absolute text-8xl sm:text-9xl md:text-[12vw] lg:text-[15vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.42)_44%,rgba(0,0,0,0.25)_66%,rgba(0,0,0,0.12)_88%,rgba(0,0,0,0.05)_94%,rgba(0,0,0,0)_94%,rgba(0,0,0,0)_100%)] opacity-[1.15]">
            ₩17,500,000
          </p>
          {/* 내부 글래스 텍스트 */}
          <p className="text-8xl sm:text-9xl md:text-[12vw] lg:text-[15vw] font-bold leading-none tracking-tighter text-transparent bg-gradient-to-b from-[rgba(255,255,255,0.12)] via-[rgba(255,255,255,0.07)_44%] via-[rgba(255,255,255,0.035)_66%] via-[rgba(255,255,255,0.02)_88%] via-[rgba(255,255,255,0.01)_94%] to-[rgba(255,255,255,0)_94%] bg-clip-text opacity-[1.0]">
            ₩17,500,000
          </p>
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        {/* 메인 콘텐츠 */}
        <div className="relative mb-24 mx-auto max-w-4xl text-center">
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold md:text-3xl lg:text-5xl lg:mt-32">
              적게 일하고 많이 버세요의<br />
              <span className="inline-flex items-baseline">
                <span className="font-light leading-[0]">[ </span>
                <span className="text-[#5EF6FF] mx-1 transition-all duration-300 hover:text-[#5EF6FF] hover:drop-shadow-[0_0_8px_rgba(94,246,255,0.4)]">적게</span>
                <span className="font-light leading-[0]"> ]</span>
              </span>를 책임집니다
            </h2>
            <div className="text-[#d8d8d8] mt-8">
              <div className="flex flex-col mb-4">
                <p>매일 쌓이는 수작업에, 점점 무거워지는 운영.</p>
                <p>제 사업도 똑같았습니다.</p>
              </div>

              <div className="flex flex-col mb-4">
                <p>하지만 문제는 단순히 반복 작업뿐만 아니라,</p>
                <p><b>엉킨 시스템과 비효율적인 프로세스</b>에 있다는 걸 깨닫고</p>
                <p className="mb-4">저는 방법을 바꿨습니다.</p>
                <p>회사의 운영을 처음부터 다시 설계했고,</p>
                <p>첫 달에만 <b>1,750만원</b>의 비용을 절감했습니다.</p>
              </div>

              <div className="flex flex-col mb-4">
                <p>단순히 버튼 몇 번 누르면 끝나는 기능 자동화는 의미 없습니다.</p>
                <b className="text-[#5EF6FF]">원제로는 기능이 아니라, 구조를 바꿉니다.</b>
              </div>
              
              <div className="flex flex-col mb-4">
                <p>일하는 방식을 처음부터 다시 설계하고,</p>
                <p>낭비되는 시간과 비용을 통째로 덜어냅니다.</p>
              </div>

              <div className="flex flex-col mb-4">
                <p>대부분의 일은 시스템에게 맡기고,</p>
                <p>대표님은 <b className="text-[#5EF6FF]">더 높은 가치를 창출하는 일에 집중할 수 있게</b> 하는 것</p>
              </div>
            </div>

            <p>이것이 바로 원제로가 만드는 초효율화입니다.</p>
          </div>
        </div>

        {/* 태그 */}
        <div className="relative z-10 mt-8 flex flex-col gap-4 overflow-hidden">
          {/* 첫 번째 행 - 왼쪽에서 오른쪽으로 */}
          <div className="flex gap-6 animate-slowScrollRight whitespace-nowrap">
            <div className="flex gap-6">
              {[
                "데이터 수집",
                "리포트 생성",
                "API 연동",
                "이메일 발송",
                "문서 자동화",
                "워크플로우 자동화",
                "RPA",
                "챗봇",
                "AI 분석",
                "크롤링",
                "매크로",
                "스크립팅",
                "광고 리포트 자동 작성",
                "플레이스 순위 수집",
                "블로그 리뷰 발행",
                "계약 갱신 알림톡 발송"
              ].map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm transition-all hover:border-[#5EF6FF]/30 hover:bg-white/10 shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* 무한 스크롤을 위한 복제 */}
            <div className="flex gap-6" aria-hidden="true">
              {[
                "데이터 수집",
                "리포트 생성",
                "API 연동",
                "이메일 발송",
                "문서 자동화",
                "워크플로우 자동화",
                "RPA",
                "챗봇",
                "AI 분석",
                "크롤링",
                "매크로",
                "스크립팅",
                "광고 리포트 자동 작성",
                "플레이스 순위 수집",
                "블로그 리뷰 발행",
                "계약 갱신 알림톡 발송"
              ].map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm transition-all hover:border-[#5EF6FF]/30 hover:bg-white/10 shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 두 번째 행 - 오른쪽에서 왼쪽으로 */}
          <div className="flex gap-6 animate-slowScrollLeft whitespace-nowrap">
            <div className="flex gap-6">
              {[
                "고객사 월간 리포트",
                "프리랜서 정산 자동화",
                "뉴스레터 발송",
                "스프레드시트 데이터 수집",
                "결제 내역 연동",
                "인스타 성과 리포트",
                "문자 대량 발송",
                "상담 예약 관리",
                "견적서 자동 발송",
                "사진 파일 정리",
                "고객사 실적 정리",
                "증빙 파일 자동 수집",
                "엑셀 작성",
                "프로젝트 현황 공유",
                "광고비 정산표 작성",
                "운영 매뉴얼 템플릿화"
              ].map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm transition-all hover:border-[#5EF6FF]/30 hover:bg-white/10 shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* 무한 스크롤을 위한 복제 */}
            <div className="flex gap-6" aria-hidden="true">
              {[
                "고객사 월간 리포트",
                "프리랜서 정산 자동화",
                "뉴스레터 발송",
                "스프레드시트 데이터 수집",
                "결제 내역 연동",
                "인스타 성과 리포트",
                "문자 대량 발송",
                "상담 예약 관리",
                "견적서 자동 발송",
                "사진 파일 정리",
                "고객사 실적 정리",
                "증빙 파일 자동 수집",
                "엑셀 작성",
                "프로젝트 현황 공유",
                "광고비 정산표 작성",
                "운영 매뉴얼 템플릿화"
              ].map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm transition-all hover:border-[#5EF6FF]/30 hover:bg-white/10 shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slowScrollRight {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes slowScrollLeft {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-slowScrollRight {
            animation: slowScrollRight 60s linear infinite;
          }

          .animate-slowScrollLeft {
            animation: slowScrollLeft 60s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
} 