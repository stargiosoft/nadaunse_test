import svgPaths from "./svg-rprzf2hdml";
import imgGeminiGeneratedImageCknfrhcknfrhcknf1 from "figma:asset/78be6e5f76cb608225d4cdd7e8bee19567b1ff6b.png";

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #868686)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="• Icons">
      <Box />
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="• Icon Button">
      <Icons />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <IconButton />
    </div>
  );
}

function Component() {
  return (
    <div className="relative size-[20px]" data-name="아이콘 메인">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_101_1519)" id="ìì´ì½ ë©ì¸">
          <g id="Vector" opacity="0.36"></g>
          <g id="Group 2472">
            <path d={svgPaths.p367f85c0} id="Vector_2" stroke="var(--stroke-0, #030303)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_101_1519">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="• Icon Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Component />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <IconButton1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[28.7px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#1b1b1b] text-[20px] text-center text-nowrap tracking-[-0.2px]">마스터 콘텐츠 수정하기</p>
      <Frame1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[12px] relative shrink-0 w-[430px]">
      <Frame2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[20px] w-full">
        <p className="leading-[25px]">기본 정보</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222222] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">상태: 배포전</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="Label">
      <Container />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Label />
    </div>
  );
}

function Radiogroup() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative w-[360px]" data-name="Radiogroup - 요금 선택">
      <Group4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222222] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">유형: 유료</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <Container1 />
    </div>
  );
}

function Radiogroup1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative w-[360px]" data-name="Radiogroup - 요금 선택">
      <Label1 />
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[21px] place-items-start relative">
      <Radiogroup1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Radiogroup />
      <Group7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[190px]" data-name="Gemini_Generated_Image_cknfrhcknfrhcknf 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageCknfrhcknfrhcknf1} />
      </div>
    </div>
  );
}

function Upload() {
  return (
    <div className="[grid-area:1_/_1] ml-[22px] mt-0 relative size-[30px]" data-name="upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="upload">
          <path d={svgPaths.p30e40980} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Upload />
      <p className="[grid-area:1_/_1] font-['Pretendard:Regular',sans-serif] leading-[normal] ml-0 mt-[35px] not-italic relative text-[16px] text-black text-nowrap whitespace-pre">썸네일 교체</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[grid-area:1_/_1] h-[80px] ml-0 mt-0 relative rounded-[8px] w-[150px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[89px] py-[13px] relative size-full">
          <Group3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:1_/_1] h-[35px] ml-0 mt-0 relative rounded-[8px] w-[150px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[89px] py-[13px] relative size-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">이미지 다시 만들기</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#48b2af] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[95px] place-items-start relative">
      <Frame12 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame11 />
      <Group1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[20px] h-[197px] items-center leading-[0] relative shrink-0 w-[360px]" data-name="Container">
      <Group2 />
      <Group6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative size-[30px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 427319336">
          <path d="M11 7L19 15L11 23" id="Vector 4" stroke="var(--stroke-0, #79808A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-[360px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] text-[14px] text-black text-nowrap top-[20.5px] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">개인운세</p>
        </div>
        <div className="absolute flex items-center justify-center left-[319px] size-[30px] top-[5px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Frame3 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative size-[30px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame 427319336">
          <path d="M11 7L19 15L11 23" id="Vector 4" stroke="var(--stroke-0, #79808A)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-[360px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] left-[18px] text-[14px] text-black text-nowrap top-[20.5px] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">오행 분석</p>
        </div>
        <div className="absolute flex items-center justify-center left-[319px] size-[30px] top-[5px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Frame4 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[gainsboro] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[43px] items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[normal]">인생이 잘 안 풀려서 다가올 어려움을 미리 대비하고 싶은 사람</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[60px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[13px] py-[12px] relative size-full">
          <Container3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[normal]">인생 지뢰밭 피해 가는 법</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[13px] py-[12px] relative size-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11px] right-[17px] top-[7.89px]" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[19.6px] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">{`혹시 내 인생길에 숨겨진 지뢰가 있는 건 아닐까요? 당신의 `}</p>
        <p className="mb-0">{`사주를 분석하여 타고난 약점과 앞으로 조심해야 할 시기를 `}</p>
        <p className="mb-0">{`알려드립니다. 인생의 위험 요소를 미리 파악하고 현명하게 `}</p>
        <p>피해 가세요.</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[100px] min-h-[80px] relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto relative size-full">
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[43px] items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[19.6px] relative shrink-0 text-[14px] text-black w-full">
        <p className="mb-0">{`제가 특별히 조심해야 할 것은 무엇이고, 어떻게 피할 수 `}</p>
        <p>있나요?</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[60px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[13px] py-[12px] relative size-full">
          <Container6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <Group5 />
      <Container2 />
      <Frame5 />
      <Frame6 />
      <Input />
      <Input1 />
      <Textarea />
      <Input2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[11px] pt-[30px] px-[35px] relative w-full">
          <Heading3Margin />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[20px] w-full">
        <p className="leading-[25px]">미리보기 예시 1</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[25px] items-start ml-0 mt-0 pb-[20px] pt-0 px-0 relative w-[360px]" data-name="Heading 3:margin">
      <Heading1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[normal]">제 사주에서 타고난 가장 취약한 부분은 무엇인가요?</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[40px] ml-0 mt-[40px] relative rounded-[8px] w-[360px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[13px] py-[12px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[19.3px] items-start leading-[0] left-[11px] right-[17px] text-[14px] text-black text-nowrap top-[8.1px]" data-name="Paragraph">
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`당신의 사주를 보면 타고난 강점은 명확히 보이지만, 몇 가지 `}</p>
        <p className="mb-0">{`취약한 부분도 눈에 띕니다. 그중에서도 가장 두드러지는 것은 `}</p>
        <p>인간관계에서 오는 갈등과 내면의 불안정성이에요.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`일처리가 깔끔하고 목표를 향한 추진력이 강한 반면, 때로는 `}</p>
        <p className="mb-0">{`지나치게 고집스럽고 독단적인 면이 나타날 수 있어요. 이는 `}</p>
        <p className="mb-0">{`사주에 '사해충'이 있어 금전 문제나 인간관계에서 예상치 `}</p>
        <p className="mb-0">{`못한 변동이 많을 수 있다는 점과 연결되죠. 특히 올해와 `}</p>
        <p className="mb-0">{`내년에는 주변과의 마찰이 더욱 두드러질 수 있으니, 원만한 `}</p>
        <p>관계 유지를 위해 특별히 신경 써야 할 시기입니다.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`또한 '자미원진'의 영향으로 배우자나 연인과의 관계에서 `}</p>
        <p className="mb-0">{`예민함이나 의심이 생기기 쉬워요. 이는 단순히 상대방의 `}</p>
        <p className="mb-0">{`문제라기보다 당신의 내면에서 비롯된 것일 수 있어요. `}</p>
        <p className="mb-0">{`'비견'과 '겁재'가 겹쳐 있어 경쟁심이 강하고, 때로 자신의 `}</p>
        <p className="mb-0">{`감정에 휩쓸려 충동적인 결정으로 이어질 수 있으니, 중요한 `}</p>
        <p>결정은 신중을 기하는 것이 좋습니다.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`하지만 걱정 마세요. 사주에 '천을귀인'이 있어 어려움이 닥칠 `}</p>
        <p className="mb-0">{`때마다 뜻밖의 도움을 받을 수 있는 복점이 있어요. 주변 `}</p>
        <p className="mb-0">{`사람들과의 관계에서 작은 신뢰를 쌓아가는 것이 중요합니다. `}</p>
        <p className="mb-0">{`당신의 강한 추진력과 창의성은 분명히 위기를 기회로 바꿀 수 `}</p>
        <p>있는 힘이 될 거예요.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`앞으로의 시기에는 자신을 너무 과신하기보다 때론 물러서는 `}</p>
        <p className="mb-0">{`지혜가 필요할 때가 올 거예요. 인간관계에서 유연성을 `}</p>
        <p className="mb-0">{`키우고, 내면의 불안감을 다스리는 연습이 필요합니다. `}</p>
        <p className="mb-0">{`명상이나 취미 활동으로 마음을 가다듬는 시간을 가져보는 `}</p>
        <p>것도 좋겠어요.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`당신은 타고난 재능과 잠재력이 풍부한 사람이에요. 앞으로의 `}</p>
        <p className="mb-0">{`2년이 중요한 전환점이 될 수 있으니, 지금의 고민이 미래의 `}</p>
        <p className="mb-0">{`밑거름이 되도록 마음을 다잡아 보세요. 당신의 가능성은 `}</p>
        <p>무한하다는 걸 잊지 마세요.</p>
      </div>
    </div>
  );
}

function Textarea1() {
  return (
    <div className="bg-white h-[120px] min-h-[80px] relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto relative size-full">
        <Paragraph />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[95px] relative w-[360px]" data-name="Container">
      <Textarea1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[360px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[89px] py-[13px] relative rounded-[inherit] w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">예시 다시 만들기</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#48b2af] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[230px] pb-[20px] pt-0 px-0 relative w-[360px]" data-name="Container">
      <Frame7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Heading3Margin1 />
      <Input3 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[20px] w-full">
        <p className="leading-[25px]">미리보기 예시 2</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[25px] items-start ml-0 mt-0 pb-[20px] pt-0 px-0 relative w-[360px]" data-name="Heading 3:margin">
      <Heading2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[normal]">제 사주에서 타고난 가장 취약한 부분은 무엇인가요?</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[40px] ml-0 mt-[40px] relative rounded-[8px] w-[360px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[13px] py-[12px] relative rounded-[inherit] size-full">
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[19.3px] items-start leading-[0] left-[11px] right-[17px] text-[14px] text-black text-nowrap top-[8.1px]" data-name="Paragraph">
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`당신의 사주를 보면 타고난 강점은 명확히 보이지만, 몇 가지 `}</p>
        <p className="mb-0">{`취약한 부분도 눈에 띕니다. 그중에서도 가장 두드러지는 것은 `}</p>
        <p>인간관계에서 오는 갈등과 내면의 불안정성이에요.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`일처리가 깔끔하고 목표를 향한 추진력이 강한 반면, 때로는 `}</p>
        <p className="mb-0">{`지나치게 고집스럽고 독단적인 면이 나타날 수 있어요. 이는 `}</p>
        <p className="mb-0">{`사주에 '사해충'이 있어 금전 문제나 인간관계에서 예상치 `}</p>
        <p className="mb-0">{`못한 변동이 많을 수 있다는 점과 연결되죠. 특히 올해와 `}</p>
        <p className="mb-0">{`내년에는 주변과의 마찰이 더욱 두드러질 수 있으니, 원만한 `}</p>
        <p>관계 유지를 위해 특별히 신경 써야 할 시기입니다.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`또한 '자미원진'의 영향으로 배우자나 연인과의 관계에서 `}</p>
        <p className="mb-0">{`예민함이나 의심이 생기기 쉬워요. 이는 단순히 상대방의 `}</p>
        <p className="mb-0">{`문제라기보다 당신의 내면에서 비롯된 것일 수 있어요. `}</p>
        <p className="mb-0">{`'비견'과 '겁재'가 겹쳐 있어 경쟁심이 강하고, 때로 자신의 `}</p>
        <p className="mb-0">{`감정에 휩쓸려 충동적인 결정으로 이어질 수 있으니, 중요한 `}</p>
        <p>결정은 신중을 기하는 것이 좋습니다.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`하지만 걱정 마세요. 사주에 '천을귀인'이 있어 어려움이 닥칠 `}</p>
        <p className="mb-0">{`때마다 뜻밖의 도움을 받을 수 있는 복점이 있어요. 주변 `}</p>
        <p className="mb-0">{`사람들과의 관계에서 작은 신뢰를 쌓아가는 것이 중요합니다. `}</p>
        <p className="mb-0">{`당신의 강한 추진력과 창의성은 분명히 위기를 기회로 바꿀 수 `}</p>
        <p>있는 힘이 될 거예요.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`앞으로의 시기에는 자신을 너무 과신하기보다 때론 물러서는 `}</p>
        <p className="mb-0">{`지혜가 필요할 때가 올 거예요. 인간관계에서 유연성을 `}</p>
        <p className="mb-0">{`키우고, 내면의 불안감을 다스리는 연습이 필요합니다. `}</p>
        <p className="mb-0">{`명상이나 취미 활동으로 마음을 가다듬는 시간을 가져보는 `}</p>
        <p>것도 좋겠어요.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`당신은 타고난 재능과 잠재력이 풍부한 사람이에요. 앞으로의 `}</p>
        <p className="mb-0">{`2년이 중요한 전환점이 될 수 있으니, 지금의 고민이 미래의 `}</p>
        <p className="mb-0">{`밑거름이 되도록 마음을 다잡아 보세요. 당신의 가능성은 `}</p>
        <p>무한하다는 걸 잊지 마세요.</p>
      </div>
    </div>
  );
}

function Textarea2() {
  return (
    <div className="bg-white h-[120px] min-h-[80px] relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto relative size-full">
        <Paragraph1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[95px] relative w-[360px]" data-name="Container">
      <Textarea2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[360px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[89px] py-[13px] relative rounded-[inherit] w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">예시 다시 만들기</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#48b2af] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[230px] pb-[20px] pt-0 px-0 relative w-[360px]" data-name="Container">
      <Frame9 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Heading3Margin2 />
      <Input4 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[20px] w-full">
        <p className="leading-[25px]">미리보기 예시 3</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[25px] items-start ml-0 mt-0 pb-[20px] pt-0 px-0 relative w-[360px]" data-name="Heading 3:margin">
      <Heading3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[normal]">제 사주에서 타고난 가장 취약한 부분은 무엇인가요?</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[40px] ml-0 mt-[40px] relative rounded-[8px] w-[360px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[13px] py-[12px] relative rounded-[inherit] size-full">
        <Container15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[19.3px] items-start leading-[0] left-[11px] right-[17px] text-[14px] text-black text-nowrap top-[8.1px]" data-name="Paragraph">
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`당신의 사주를 보면 타고난 강점은 명확히 보이지만, 몇 가지 `}</p>
        <p className="mb-0">{`취약한 부분도 눈에 띕니다. 그중에서도 가장 두드러지는 것은 `}</p>
        <p>인간관계에서 오는 갈등과 내면의 불안정성이에요.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`일처리가 깔끔하고 목표를 향한 추진력이 강한 반면, 때로는 `}</p>
        <p className="mb-0">{`지나치게 고집스럽고 독단적인 면이 나타날 수 있어요. 이는 `}</p>
        <p className="mb-0">{`사주에 '사해충'이 있어 금전 문제나 인간관계에서 예상치 `}</p>
        <p className="mb-0">{`못한 변동이 많을 수 있다는 점과 연결되죠. 특히 올해와 `}</p>
        <p className="mb-0">{`내년에는 주변과의 마찰이 더욱 두드러질 수 있으니, 원만한 `}</p>
        <p>관계 유지를 위해 특별히 신경 써야 할 시기입니다.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`또한 '자미원진'의 영향으로 배우자나 연인과의 관계에서 `}</p>
        <p className="mb-0">{`예민함이나 의심이 생기기 쉬워요. 이는 단순히 상대방의 `}</p>
        <p className="mb-0">{`문제라기보다 당신의 내면에서 비롯된 것일 수 있어요. `}</p>
        <p className="mb-0">{`'비견'과 '겁재'가 겹쳐 있어 경쟁심이 강하고, 때로 자신의 `}</p>
        <p className="mb-0">{`감정에 휩쓸려 충동적인 결정으로 이어질 수 있으니, 중요한 `}</p>
        <p>결정은 신중을 기하는 것이 좋습니다.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`하지만 걱정 마세요. 사주에 '천을귀인'이 있어 어려움이 닥칠 `}</p>
        <p className="mb-0">{`때마다 뜻밖의 도움을 받을 수 있는 복점이 있어요. 주변 `}</p>
        <p className="mb-0">{`사람들과의 관계에서 작은 신뢰를 쌓아가는 것이 중요합니다. `}</p>
        <p className="mb-0">{`당신의 강한 추진력과 창의성은 분명히 위기를 기회로 바꿀 수 `}</p>
        <p>있는 힘이 될 거예요.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`앞으로의 시기에는 자신을 너무 과신하기보다 때론 물러서는 `}</p>
        <p className="mb-0">{`지혜가 필요할 때가 올 거예요. 인간관계에서 유연성을 `}</p>
        <p className="mb-0">{`키우고, 내면의 불안감을 다스리는 연습이 필요합니다. `}</p>
        <p className="mb-0">{`명상이나 취미 활동으로 마음을 가다듬는 시간을 가져보는 `}</p>
        <p>것도 좋겠어요.</p>
      </div>
      <div className="flex flex-col justify-center leading-[19.6px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`당신은 타고난 재능과 잠재력이 풍부한 사람이에요. 앞으로의 `}</p>
        <p className="mb-0">{`2년이 중요한 전환점이 될 수 있으니, 지금의 고민이 미래의 `}</p>
        <p className="mb-0">{`밑거름이 되도록 마음을 다잡아 보세요. 당신의 가능성은 `}</p>
        <p>무한하다는 걸 잊지 마세요.</p>
      </div>
    </div>
  );
}

function Textarea3() {
  return (
    <div className="bg-white h-[120px] min-h-[80px] relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto relative size-full">
        <Paragraph2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[95px] relative w-[360px]" data-name="Container">
      <Textarea3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[360px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[89px] py-[13px] relative rounded-[inherit] w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">예시 다시 만들기</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#48b2af] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[230px] pb-[20px] pt-0 px-0 relative w-[360px]" data-name="Container">
      <Frame10 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Heading3Margin3 />
      <Input5 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[15px] items-start leading-[0] pb-[10px] pt-[30px] px-[35px] relative w-full">
          <Group8 />
          <Group9 />
          <Group10 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[314px]" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[20px] w-full">
        <p className="leading-[25px]">질문지 1</p>
      </div>
    </div>
  );
}

function Heading3Margin4() {
  return (
    <div className="absolute content-stretch flex items-start left-[35px] pb-[20px] pt-0 px-0 right-[35px] top-[30px]" data-name="Heading 3:margin">
      <Heading4 />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white relative rounded-[50px] shrink-0 size-[16px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#2b8bf2] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="absolute bg-[#2b8bf2] left-[3.2px] rounded-[50px] size-[9.6px] top-1/2 translate-y-[-50%]" data-name="Input:checked" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222222] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">사주</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Label">
      <Input6 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222222] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">타로</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Label">
      <div className="bg-white relative rounded-[50px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
      <Container20 />
    </div>
  );
}

function Radiogroup2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Radiogroup - 카테고리 선택">
      <Label2 />
      <Label3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[normal]">제 사주에서 타고난 가장 취약한 부분은 무엇인가요?</p>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[13px] py-[12px] relative size-full">
          <Container21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[35px] right-[35px] top-[74px]" data-name="Container">
      <Radiogroup2 />
      <Input7 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[177px] relative shrink-0 w-full" data-name="Container">
      <Heading3Margin4 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[314px]" data-name="Heading 3">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b1b1b] text-[20px] w-full">
        <p className="leading-[25px]">질문지 2</p>
      </div>
    </div>
  );
}

function Group() {
  return (
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
  );
}

function Heading3Margin5() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-start left-[35px] pb-[20px] pt-0 px-0 right-[35px] top-[30px]" data-name="Heading 3:margin">
      <Heading5 />
      <Group />
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white relative rounded-[50px] shrink-0 size-[16px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#2b8bf2] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="absolute bg-[#2b8bf2] left-[3.2px] rounded-[50px] size-[9.6px] top-1/2 translate-y-[-50%]" data-name="Input:checked" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222222] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">사주</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Label">
      <Input8 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#222222] text-[14px] text-nowrap">
        <p className="leading-[17.5px] whitespace-pre">타로</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Label">
      <div className="bg-white relative rounded-[50px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
      <Container26 />
    </div>
  );
}

function Radiogroup3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Radiogroup - 카테고리 선택">
      <Label4 />
      <Label5 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[normal]">제 사주에서 타고난 가장 취약한 부분은 무엇인가요?</p>
      </div>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[13px] py-[12px] relative size-full">
          <Container27 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(168,168,168,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[35px] right-[35px] top-[74px]" data-name="Container">
      <Radiogroup3 />
      <Input9 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[252px] relative shrink-0 w-full" data-name="Container">
      <Heading3Margin5 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[360px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[89px] py-[13px] relative rounded-[inherit] w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">질문지 추가</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#48b2af] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Frame8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[10px] pt-0 px-[35px] relative w-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2c6fe3] h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2c6fe3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-px relative size-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[15px] text-center text-white">
            <p className="leading-[normal]">수정하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-[30px] px-0 relative shrink-0 w-full" data-name="Container">
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[89px] py-[13px] relative w-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[15px] text-black text-center">
            <p className="leading-[normal]">삭제하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Button1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end pb-[10px] pt-[20px] px-[35px] relative w-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[932px] relative shrink-0 w-full" data-name="Main">
      <Frame13 />
      <Container8 />
      <Container18 />
      <Container24 />
      <Container30 />
      <Container32 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-[2200px] items-start relative shrink-0 w-full" data-name="Container">
      <Main />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="마스터 콘텐츠 수정하기_유료">
      <Container36 />
    </div>
  );
}