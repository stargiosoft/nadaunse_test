import svgPaths from "./svg-pbc3bzttir";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from "./svg-3ggfr";

function TextLoginText() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] items-start left-0 px-[20px] py-[64px] text-black text-center top-[99px] w-[390px]" data-name="Text / Login Text">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[35.5px] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">나다운이 처음이라면</p>
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[39.5px] relative shrink-0 text-[27px] tracking-[-0.27px] w-full">무료로 체험해 보세요!</p>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute bottom-[37.8%] left-[115px] top-[36.37%] w-[160px]" data-name="img">
      <div className="absolute inset-[-0.69%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 220">
          <g id="img">
            <path d={svgPaths.p2285b300} fill="var(--fill-0, #F4F4F4)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.p2885c700} fill="var(--fill-0, #FDD751)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
              <path d={svgPaths.p1a844100} fill="var(--fill-0, #EFC748)" id="Vector_3" />
              <path d={svgPaths.p13ab4b00} fill="var(--fill-0, #FDD751)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
              <path d={svgPaths.pd878300} fill="var(--fill-0, #EFC748)" id="Vector_5" />
            </g>
            <path d={svgPaths.p28479a80} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="3" />
            <g id="Group_2">
              <path d={svgPaths.p330db180} fill="var(--fill-0, black)" id="Vector_7" />
              <path d={svgPaths.p3b7fce00} fill="var(--fill-0, black)" id="Vector_8" />
            </g>
            <path d={svgPaths.pf08ecf0} fill="var(--fill-0, #BCD961)" id="Vector_9" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="3" />
            <path d={svgPaths.p3a1ba900} fill="var(--fill-0, #BCD961)" id="Vector_10" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="3" />
            <path d="M79.6406 41.3195V24.6095" id="Vector_11" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="3" />
            <path d={svgPaths.pe7f0800} fill="var(--fill-0, #FDD751)" id="Vector_12" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="flash">
          <path d={svgPaths.p12d62f00} fill="var(--fill-0, white)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons">
      <Box />
    </div>
  );
}

function IconAndLabel() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Icon and Label">
      <Icons />
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[-0.24px]">최근 로그인</p>
    </div>
  );
}

function Container() {
  return (
    <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center mb-[-13px] px-[16px] py-[6px] relative rounded-bl-[8px] rounded-br-[999px] rounded-tl-[999px] rounded-tr-[999px] shrink-0 z-[2]" data-name="Container">
      <IconAndLabel />
    </div>
  );
}

function IconAndLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon and Label">
      <div className="h-[18.537px] relative shrink-0 w-[20.179px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
          <path clipRule="evenodd" d={svgPaths.p2d30f4f0} fill="var(--fill-0, #1F1F1F)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        <p className="leading-[25px]">카카오로 무료 체험 시작하기</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fee500] h-[56px] mb-[-13px] relative rounded-[16px] shrink-0 w-full z-[1]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fee500] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-px relative size-full">
          <IconAndLabel1 />
        </div>
      </div>
    </div>
  );
}

function ButtonSnsButton() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[13px] pt-0 px-0 relative shrink-0 w-full" data-name="Button / SNS Button">
      <Container />
      <Button />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[20.924px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.668px_5.669px] mask-size-[9.795px_9.586px] ml-[-57.86%] mt-[-59.14%] relative w-[21.133px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Group">
          <path d={svgPaths.p3b2a4100} fill="var(--fill-0, #3E82F1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[51.02%] mt-[40.91%] place-items-start relative" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] h-[19.602px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.67px_5.669px] mask-size-[15.871px_8.265px] ml-[-35.72%] mt-[-68.59%] relative w-[27.209px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 20">
        <g id="Group">
          <path d={svgPaths.p11a42100} fill="var(--fill-0, #32A753)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.44%] mt-[59.5%] place-items-start relative" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[20.502px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.668px] mask-size-[4.495px_9.164px] ml-[-126.09%] mt-[-61.85%] relative w-[15.831px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
        <g id="Group">
          <path d={svgPaths.p2d06fd80} fill="var(--fill-0, #F9BB00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[27.55%] place-items-start relative" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] h-[19.602px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.67px_5.669px] mask-size-[15.945px_8.265px] ml-[-35.56%] mt-[-68.59%] relative w-[27.282px]" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 20">
        <g id="Group">
          <path d={svgPaths.p2948c480} fill="var(--fill-0, #E74133)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.44%] mt-0 place-items-start relative" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function GoogleIconContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Google Icon Container">
      <ClipPathGroup />
      <ClipPathGroup1 />
      <ClipPathGroup2 />
      <ClipPathGroup3 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0" data-name="Button Container">
      <GoogleIconContainer />
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        <p className="leading-[25px]">Google로 무료 체험 시작하기</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[56px] mb-[-13px] relative rounded-[16px] shrink-0 w-full z-[1]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-px relative size-full">
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}

function ButtonSnsButton1() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[13px] pt-0 px-0 relative shrink-0 w-full" data-name="Button / SNS Button">
      <Button1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <ButtonSnsButton />
      <ButtonSnsButton1 />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#999] text-[14px] text-center tracking-[-0.42px] w-full">무료 체험 후 자동 결제되지 않아요!</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[20px] top-[611px] w-[350px]">
      <Frame1 />
    </div>
  );
}

function Notch() {
  return (
    <div className="absolute h-[30px] left-[103px] top-[-2px] w-[183px]" data-name="Notch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 30">
        <g id="Notch">
          <path d={svgPaths.pf91bfc0} fill="var(--fill-0, black)" id="Notch_2" />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.662px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p2d05aa80} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p1fcfdd80} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p12636800} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p10be8f00} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p3cc2d900} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p24372f50} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3aa84e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2e6b3780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p12b0b900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function IndependentIPhoneStatusBar() {
  return (
    <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-[390px]" data-name="Independent / iPhone Status Bar">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons1 />
    </div>
  );
}

function Box2() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home-2">
          <path d={svgPaths.p3d07f180} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <RightAction />
    </div>
  );
}

function NavigationTopBar() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Navigation / Top Bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[4px] relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function TopNavigation1Depth() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Top Navigation/1depth">
      <NavigationTopBar />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]">
      <IndependentIPhoneStatusBar />
      <TopNavigation1Depth />
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="absolute bg-white bottom-0 h-[28px] left-0 w-[390px]" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="최근 로그인 (카카오)">
      <Frame />
      <HomeIndicatorLight />
      <TextLoginText />
      <Img />
      <Frame2 />
    </div>
  );
}