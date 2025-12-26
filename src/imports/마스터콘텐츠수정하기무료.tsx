import svgPaths from "./svg-t7unj5t6tn";
import imgGeminiGeneratedImageCknfrhcknfrhcknf1 from "figma:asset/78be6e5f76cb608225d4cdd7e8bee19567b1ff6b.png";

function Frame({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="h-[16px] relative shrink-0 w-[8px]">
        <div className="absolute inset-[-3.31%_-13.26%_-3.31%_-6.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
            <path d={svgPaths.pdb11c00} id="Vector 4" stroke="var(--stroke-0, #79808A)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Upload({ className }: { className?: string }) {
  return (
    <div className={className} data-name="upload">
      <div className="absolute flex inset-[16.67%] items-center justify-center">
        <div className="flex-none rotate-[270deg] size-[40px]">
          <div className="relative size-full" data-name="Icon">
            <div className="absolute inset-[-2.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                <path d={svgPaths.p23aed00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type IconButtonProps = {
  className?: string;
  state?: "Default" | "Press" | "Disabled";
  size?: "sm" | "md" | "lg";
};

function IconButton({ className, state = "Default", size = "sm" }: IconButtonProps) {
  if (state === "Default" && size === "md") {
    return (
      <div className={className} data-name="State=Default, Size=md">
        <div className="relative shrink-0 size-[24px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Default" && size === "lg") {
    return (
      <div className={className} data-name="State=Default, Size=lg">
        <div className="relative shrink-0 size-[32px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Disabled" && size === "md") {
    return (
      <div className={className} data-name="State=Disabled, Size=md">
        <div className="relative shrink-0 size-[24px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Disabled" && size === "lg") {
    return (
      <div className={className} data-name="State=Disabled, Size=lg">
        <div className="relative shrink-0 size-[32px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Disabled" && size === "sm") {
    return (
      <div className={className} data-name="State=Disabled, Size=sm">
        <div className="relative shrink-0 size-[20px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Press" && size === "md") {
    return (
      <div className={className} data-name="State=Press, Size=md">
        <div className="relative shrink-0 size-[24px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Press" && size === "lg") {
    return (
      <div className={className} data-name="State=Press, Size=lg">
        <div className="relative shrink-0 size-[32px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Press" && size === "sm") {
    return (
      <div className={className} data-name="State=Press, Size=sm">
        <div className="relative shrink-0 size-[20px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="State=Default, Size=sm">
      <div className="relative shrink-0 size-[20px]" data-name="• Icons">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="search-normal">
              <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              <g id="Vector_3" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component({ className }: { className?: string }) {
  return (
    <div className={className} data-name="마스터 콘텐츠 수정하기_무료">
      <div className="content-stretch flex flex-col h-[1290px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col items-start min-h-[932px] relative shrink-0 w-full" data-name="Main">
          <div className="bg-white content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[12px] relative shrink-0 w-[430px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <IconButton className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" size="md" />
              </div>
              <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[28.7px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1b1b1b] text-[20px] text-center text-nowrap tracking-[-0.2px]">마스터 콘텐츠 수정하기</p>
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="• Icon Button">
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none rotate-[180deg]">
                      <div className="relative size-[20px]" data-name="아이콘 메인">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g clipPath="url(#clip0_131_4417)" id="ìì´ì½ ë©ì¸">
                            <g id="Vector" opacity="0.36"></g>
                            <g id="Group 2472">
                              <path d={svgPaths.p367f85c0} id="Vector_2" stroke="var(--stroke-0, #030303)" strokeLinecap="round" strokeWidth="2" />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_131_4417">
                              <rect fill="white" height="20" width="20" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start pb-[11px] pt-[30px] px-[35px] relative w-full">
                <div className="content-stretch flex flex-col items-start mb-[-1px] pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 3:margin">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                    <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[20px] w-full">
                      <p className="leading-[25px]">기본 정보</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[15px] items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative w-[360px]" data-name="Radiogroup - 요금 선택">
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                        <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="Label">
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222222] text-[14px] text-nowrap">
                              <p className="leading-[17.5px] whitespace-pre">상태: 배포전</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[21px] place-items-start relative">
                      <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative w-[360px]" data-name="Radiogroup - 요금 선택">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
                          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                            <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222222] text-[14px] text-nowrap">
                              <p className="leading-[17.5px] whitespace-pre">유형: 무료</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[20px] h-[197px] items-center leading-[0] relative shrink-0 w-[360px]" data-name="Container">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[190px]" data-name="Gemini_Generated_Image_cknfrhcknfrhcknf 1">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageCknfrhcknfrhcknf1} />
                      </div>
                    </div>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                      <div className="[grid-area:1_/_1] h-[80px] ml-0 mt-0 relative rounded-[8px] w-[150px]">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex h-[80px] items-center justify-center px-[89px] py-[13px] relative w-[150px]">
                            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                              <Upload className="[grid-area:1_/_1] ml-[22px] mt-0 overflow-clip relative size-[30px]" />
                              <p className="[grid-area:1_/_1] font-['Pretendard:Regular',sans-serif] leading-[normal] ml-0 mt-[35px] not-italic relative text-[16px] text-black text-nowrap whitespace-pre">썸네일 교체</p>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[95px] place-items-start relative">
                        <div className="[grid-area:1_/_1] h-[35px] ml-0 mt-0 relative rounded-[8px] w-[150px]">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex h-[35px] items-center justify-center px-[89px] py-[13px] relative w-[150px]">
                              <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">이미지 다시 만들기</p>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#48b2af] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[40px] relative rounded-[8px] shrink-0 w-[360px]">
                    <div className="h-[40px] overflow-clip relative rounded-[inherit] w-[360px]">
                      <div className="absolute flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] left-[18px] not-italic text-[14px] text-black text-nowrap top-[20.5px] translate-y-[-50%]">
                        <p className="leading-[normal] whitespace-pre">개인운세</p>
                      </div>
                      <div className="absolute flex items-center justify-center left-[319px] size-[30px] top-[5px]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "30" } as React.CSSProperties}>
                        <div className="flex-none rotate-[90deg]">
                          <Frame className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative size-[30px]" />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="h-[40px] relative rounded-[8px] shrink-0 w-[360px]">
                    <div className="h-[40px] overflow-clip relative rounded-[inherit] w-[360px]">
                      <div className="absolute flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] left-[18px] not-italic text-[14px] text-black text-nowrap top-[20.5px] translate-y-[-50%]">
                        <p className="leading-[normal] whitespace-pre">오행 분석</p>
                      </div>
                      <div className="absolute flex items-center justify-center left-[319px] size-[30px] top-[5px]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "30" } as React.CSSProperties}>
                        <div className="flex-none rotate-[90deg]">
                          <Frame className="content-stretch flex items-center overflow-clip px-[11px] py-[4px] relative size-[30px]" />
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col h-[40px] items-start px-[13px] py-[12px] relative w-full">
                        <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
                          <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
                            <p className="leading-[normal]">인생 지뢰밭 피해 가는 법</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="bg-white h-[100px] min-h-[80px] relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
                    <div className="h-[100px] overflow-auto relative w-full">
                      <div className="absolute content-stretch flex flex-col items-start left-[11px] right-[17px] top-[7.89px]" data-name="Container">
                        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[19.6px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">
                          <p className="mb-0">혹시 내 인생길에 숨겨진 지뢰가 있는 건 아닐까요? 당신의 </p>
                          <p className="mb-0">사주를 분석하여 타고난 약점과 앞으로 조심해야 할 시기를 </p>
                          <p className="mb-0">알려드립니다. 인생의 위험 요소를 미리 파악하고 현명하게 </p>
                          <p>피해 가세요.</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex items-start left-[35px] pb-[20px] pt-0 px-0 right-[35px] top-[30px]" data-name="Heading 3:margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[314px]" data-name="Heading 3">
                  <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[20px] w-full">
                    <p className="leading-[25px]">질문지 1</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[35px] right-[35px] top-[74px]" data-name="Container">
                <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col h-[40px] items-start px-[13px] py-[12px] relative w-full">
                      <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
                          <p className="leading-[normal]">제 사주에서 타고난 가장 취약한 부분은 무엇인가요?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[144px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex gap-[30px] items-start left-[35px] pb-[20px] pt-0 px-0 right-[35px] top-[30px]" data-name="Heading 3:margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[314px]" data-name="Heading 3">
                  <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[20px] w-full">
                    <p className="leading-[25px]">질문지 2</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="Group 427318470">
                      <circle cx="8" cy="8" fill="var(--fill-0, #D9D9D9)" id="Ellipse 7" r="8" />
                      <g id="Group 427318468">
                        <path d="M5 5L11 11" id="Vector 199" stroke="var(--stroke-0, white)" />
                        <path d="M5 11L11 5" id="Vector 200" stroke="var(--stroke-0, white)" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col items-start left-[35px] right-[35px] top-[74px]" data-name="Container">
                <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col h-[40px] items-start px-[13px] py-[12px] relative w-full">
                      <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
                          <p className="leading-[normal]">제 사주에서 타고난 가장 취약한 부분은 무엇인가요?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col justify-end size-full">
              <div className="content-stretch flex flex-col items-start justify-end pb-[10px] pt-0 px-[35px] relative w-full">
                <div className="content-stretch flex flex-col items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
                  <div className="relative rounded-[8px] shrink-0 w-[360px]">
                    <div className="content-stretch flex items-center justify-center overflow-clip px-[89px] py-[13px] relative rounded-[inherit] w-[360px]">
                      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">질문지 추가</p>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#48b2af] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col justify-end size-full">
              <div className="content-stretch flex flex-col items-start justify-end pb-[10px] pt-[20px] px-[35px] relative w-full">
                <div className="content-stretch flex flex-col items-start pb-[20px] pt-[30px] px-0 relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#48b2af] h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
                    <div aria-hidden="true" className="absolute border border-[#2c6fe3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex h-[50px] items-center justify-center p-px relative w-full">
                        <div className="basis-0 flex flex-col font-['Pretendard_Variable:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-center text-white">
                          <p className="leading-[normal]">수정하기</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
                  <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
                    <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[89px] py-[13px] relative w-full">
                        <div className="basis-0 flex flex-col font-['Pretendard_Variable:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-black text-center">
                          <p className="leading-[normal]">삭제하기</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component1() {
  return <Component className="bg-white content-stretch flex flex-col items-start relative size-full" />;
}