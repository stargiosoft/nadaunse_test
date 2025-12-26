import svgPaths from "./svg-fu38tipfva";
import clsx from "clsx";
import imgProfileImage from "figma:asset/23b9117ba4bdef1f5ecec145e7fd9de948dfdc19.png";
import imgProfileImage1 from "figma:asset/f888aae3d4fa9e36635d8f093202b737ebd63bfb.png";
import imgProfileImage2 from "figma:asset/08e5d2dc3d48ab9b16a1b99d70ef18bcbb35413e.png";
import imgProfileImage3 from "figma:asset/ffd5594ef3ec2504fa21c9545347dbc82cefbe42.png";

function ProfileImageContainer4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-[8px] size-[60px]" data-name="Profile Image">
        {children}
      </div>
    </div>
  );
}

function Box2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type ButtonSquareButton3Props = {
  additionalClassNames?: string;
};

function ButtonSquareButton3({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonSquareButton3Props>) {
  return (
    <div className={clsx("basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">{children}</g>
      </svg>
    </div>
  );
}
type HomeIndicatorLightProps = {
  additionalClassNames?: string;
};

function HomeIndicatorLight({ additionalClassNames = "" }: HomeIndicatorLightProps) {
  return (
    <div className={clsx("h-[28px] relative shrink-0 w-full", additionalClassNames)}>
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function DetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <BirthdateContainerText text="양력 1994.07.23 午(오)시" />
      <AttributesContainer text="원숭이띠" text1="물고기자리" text2="여성" />
    </div>
  );
}

function Helper() {
  return (
    <div className="h-[6px] relative shrink-0 w-0">
      <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
          <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
type AttributesContainerProps = {
  text: string;
  text1: string;
  text2: string;
};

function AttributesContainer({ text, text1, text2 }: AttributesContainerProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0 w-full">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">{text}</p>
      <Helper />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">{text1}</p>
      <Helper />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">{text2}</p>
    </div>
  );
}
type BirthdateContainerTextProps = {
  text: string;
};

function BirthdateContainerText({ text }: BirthdateContainerTextProps) {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shrink-0 w-full">
      <p className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">{text}</p>
    </div>
  );
}

function Icons2() {
  return (
    <Wrapper>
      <path d={svgPaths.p3ae52400} fill="var(--fill-0, #848484)" id="Vector" stroke="var(--stroke-0, #848484)" />
    </Wrapper>
  );
}

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-[350px]">
      <div className="absolute inset-[-0.5px_0]" style={{ "--fill-0": "rgba(243, 243, 243, 1)", "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
          <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
        </svg>
      </div>
    </div>
  );
}
type TitleContainerTextProps = {
  text: string;
};

function TitleContainerText({ text }: TitleContainerTextProps) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">{text}</p>
    </div>
  );
}

function Notch() {
  return (
    <div className="absolute contents left-[103px] top-[-2px]" data-name="Notch">
      <div className="absolute h-[30px] left-[calc(50%-0.5px)] top-[-2px] translate-x-[-50%] w-[183px]" data-name="Notch">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 30">
            <path d={svgPaths.pf91bfc0} fill="var(--fill-0, black)" id="Notch" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Battery">
      <div className="absolute h-[11.333px] right-[17px] top-[17.33px] w-[22px]" data-name="Rectangle">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d={svgPaths.p7e6b880} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[4px] right-[14.67px] top-[21px] w-[1.328px]" data-name="Combined Shape">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d={svgPaths.p32d253c0} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[7.333px] right-[19px] top-[19.33px] w-[18px]" data-name="Rectangle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 8">
            <path d={svgPaths.p3544af00} fill="var(--fill-0, black)" id="Rectangle" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Right Side">
      <Battery />
      <div className="absolute h-[10.965px] right-[44.03px] top-[17.33px] w-[15.272px]" data-name="Wifi">
        <div className="absolute inset-[0_0_-0.01%_0]" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
            <path d={svgPaths.p3554a580} fill="var(--fill-0, black)" id="Wifi" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[10.666px] right-[64.33px] top-[17.67px] w-[17px]" data-name="Mobile Signal">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
            <path d={svgPaths.p37d7cb00} fill="var(--fill-0, black)" id="Mobile Signal" />
          </svg>
        </div>
      </div>
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

function IPhoneXOrNewerLightDefault() {
  return (
    <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-full" data-name="iPhone X (or newer)/Light/Default">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Box() {
  return (
    <Box2>
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
      </g>
    </Box2>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons />
    </div>
  );
}

function Box1() {
  return (
    <Box2>
      <g id="home-2">
        <path d={svgPaths.p3d07f180} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </Box2>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">사주 정보 관리</p>
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

function TopNavigationContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Top Navigation Container">
      <IPhoneXOrNewerLightDefault />
      <TopNavigation1Depth />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainerText text="내 사주" />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text / Section Title">
      <Container />
      <Divider />
    </div>
  );
}

function OuterCircle() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[20px]" data-name="Outer Circle">
      <div aria-hidden="true" className="absolute border-[#48b2af] border-[6px] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <OuterCircle />
    </div>
  );
}

function ProfileImageContainer() {
  return (
    <ProfileImageContainer4>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgProfileImage} />
    </ProfileImageContainer4>
  );
}

function ProfileContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Profile Container">
      <SelectionControlsRadioButton />
      <ProfileImageContainer />
    </div>
  );
}

function ButtonIconButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons2 />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.45px]">별빛 속에 피어난 작은 꿈 (본인)</p>
      <ButtonIconButton />
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Info Container">
      <TitleContainer />
      <DetailsContainer />
    </div>
  );
}

function CardProfileCard() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[8px] py-[12px] relative rounded-[12px] shrink-0 w-[350px]" data-name="Card / ProfileCard">
      <ProfileContainer />
      <InfoContainer />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section Container">
      <TextSectionTitle />
      <CardProfileCard />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainerText text="함께 보는 사주" />
    </div>
  );
}

function TextSectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text / Section Title">
      <Container1 />
      <Divider />
    </div>
  );
}

function SelectionControlsRadioButton1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container2 />
    </div>
  );
}

function ProfileImageContainer1() {
  return (
    <ProfileImageContainer4>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgProfileImage1} />
    </ProfileImageContainer4>
  );
}

function ProfileContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Profile Container">
      <SelectionControlsRadioButton1 />
      <ProfileImageContainer1 />
    </div>
  );
}

function ButtonIconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons2 />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.45px]">연인-1 (연인)</p>
      <ButtonIconButton1 />
    </div>
  );
}

function InfoContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Info Container">
      <TitleContainer1 />
      <DetailsContainer />
    </div>
  );
}

function CardProfileCard1() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[8px] py-[12px] relative rounded-[12px] shrink-0 w-[350px]" data-name="Card / ProfileCard">
      <ProfileContainer1 />
      <InfoContainer1 />
    </div>
  );
}

function SelectionControlsRadioButton2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container2 />
    </div>
  );
}

function ProfileImageContainer2() {
  return (
    <ProfileImageContainer4>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgProfileImage2} />
    </ProfileImageContainer4>
  );
}

function ProfileContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Profile Container">
      <SelectionControlsRadioButton2 />
      <ProfileImageContainer2 />
    </div>
  );
}

function ButtonIconButton2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons2 />
    </div>
  );
}

function TitleContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.45px]">연인-2 (연인)</p>
      <ButtonIconButton2 />
    </div>
  );
}

function DetailsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Details Container">
      <BirthdateContainerText text="양력 1994.07.23 午(오)시" />
      <AttributesContainer text="말띠" text1="물고기자리" text2="여성" />
    </div>
  );
}

function InfoContainer2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Info Container">
      <TitleContainer2 />
      <DetailsContainer1 />
    </div>
  );
}

function CardProfileCard2() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[8px] py-[12px] relative rounded-[12px] shrink-0 w-[350px]" data-name="Card / ProfileCard">
      <ProfileContainer2 />
      <InfoContainer2 />
    </div>
  );
}

function SelectionControlsRadioButton3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container2 />
    </div>
  );
}

function ProfileImageContainer3() {
  return (
    <ProfileImageContainer4>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgProfileImage3} />
    </ProfileImageContainer4>
  );
}

function ProfileContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Profile Container">
      <SelectionControlsRadioButton3 />
      <ProfileImageContainer3 />
    </div>
  );
}

function ButtonIconButton3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons2 />
    </div>
  );
}

function TitleContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.45px]">바람 따라 걷는 여행자 (친구)</p>
      <ButtonIconButton3 />
    </div>
  );
}

function DetailsContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Details Container">
      <BirthdateContainerText text="양력 1994.07.23 午(오)시" />
      <AttributesContainer text="닭띠" text1="물고기자리" text2="여성" />
    </div>
  );
}

function InfoContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Info Container">
      <TitleContainer3 />
      <DetailsContainer2 />
    </div>
  );
}

function CardProfileCard3() {
  return (
    <div className="content-stretch flex gap-[11px] items-center px-[8px] py-[12px] relative rounded-[12px] shrink-0 w-[350px]" data-name="Card / ProfileCard">
      <ProfileContainer3 />
      <InfoContainer3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <TextSectionTitle1 />
      <CardProfileCard1 />
      <CardProfileCard2 />
      <CardProfileCard3 />
    </div>
  );
}

function MainContentContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[44px] items-start left-[20px] top-[123px] w-[350px]" data-name="Main Content Container">
      <SectionContainer />
      <Frame />
    </div>
  );
}

function Icons3() {
  return (
    <Wrapper>
      <path d={svgPaths.p46c90f0} fill="var(--fill-0, white)" id="Vector" />
    </Wrapper>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">사주 정보 추가</p>
      <Icons3 />
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-[#48b2af] content-stretch flex h-[56px] items-center justify-center px-[12px] py-0 relative rounded-[16px] shrink-0 w-[358px]" data-name="Button / Square Button">
      <ButtonContainer />
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[12px] relative w-full">
          <ButtonSquareButton />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer1 />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-[390px]" data-name="Common / Bottom Button">
      <Container3 />
      <HomeIndicatorLight additionalClassNames="bg-white" />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[25.5px] relative shrink-0 text-[18px] text-black tracking-[-0.36px] w-full">등록된 사주를 삭제하시겠어요?</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[28px] py-[32px] relative w-full">
          <TextContainer />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#525252] text-[15px] text-nowrap tracking-[-0.45px]">아니요</p>
    </div>
  );
}

function ButtonSquareButton1() {
  return (
    <ButtonSquareButton3 additionalClassNames="bg-[#f3f3f3]">
      <Container5 />
    </ButtonSquareButton3>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.45px]">네</p>
    </div>
  );
}

function ButtonSquareButton2() {
  return (
    <ButtonSquareButton3 additionalClassNames="bg-[#48b2af]">
      <Container6 />
    </ButtonSquareButton3>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Button Group">
      <ButtonSquareButton1 />
      <ButtonSquareButton2 />
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Button Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[20px] pt-0 px-[24px] relative w-full">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

function FeedbackAlert() {
  return (
    <div className="absolute left-1/2 rounded-[20px] top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%] w-[320px]" data-name="Feedback / Alert">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container4 />
        <ButtonContainer2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
    </div>
  );
}

function HomeIndicatorContainer() {
  return (
    <div className="absolute bottom-[-129px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Home Indicator Container">
      <HomeIndicatorLight />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="사주 정보 삭제 컨펌 모달">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <MainContentContainer />
      <div className="absolute h-0 left-[20px] top-[775px] w-[350px]">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Vector 23" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <CommonBottomButton />
      <div className="absolute bg-[rgba(0,0,0,0.8)] h-[844px] left-0 top-0 w-[390px]" data-name="Background" />
      <FeedbackAlert />
    </div>
  );
}