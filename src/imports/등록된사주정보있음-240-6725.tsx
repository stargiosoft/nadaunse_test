import svgPaths from "./svg-b51v8udqqu";
import imgProfileImage from "figma:asset/23b9117ba4bdef1f5ecec145e7fd9de948dfdc19.png";
import imgProfileImage1 from "figma:asset/d77c3fe358f723df590ae192d4b86109f708d210.png";
import imgProfileImage2 from "figma:asset/08e5d2dc3d48ab9b16a1b99d70ef18bcbb35413e.png";
import imgProfileImage3 from "figma:asset/ffd5594ef3ec2504fa21c9545347dbc82cefbe42.png";

function TitleContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">내 사주</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer />
    </div>
  );
}

function TextSectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text / Section Title">
      <Container />
      <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--fill-0": "rgba(243, 243, 243, 1)", "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Profile Image Container">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-[8px] size-[60px]" data-name="Profile Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgProfileImage} />
      </div>
    </div>
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

function Icons() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pdd51400} fill="var(--fill-0, #848484)" id="Vector" stroke="var(--stroke-0, #848484)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.45px]">별빛 속에 피어난 작은 꿈 (본인)</p>
      <ButtonIconButton />
    </div>
  );
}

function BirthdateContainer() {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shrink-0 w-full" data-name="Birthdate Container">
      <p className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">양력 1994.07.23 午(오)시</p>
    </div>
  );
}

function AttributesContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Attributes Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">원숭이띠</p>
      <div className="h-[6px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
            <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">물고기자리</p>
      <div className="h-[6px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
            <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">여성</p>
    </div>
  );
}

function DetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Details Container">
      <BirthdateContainer />
      <AttributesContainer />
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Info Container">
      <TitleContainer1 />
      <DetailsContainer />
    </div>
  );
}

function CardProfileCard() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Card / ProfileCard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center px-[8px] py-[12px] relative w-full">
          <ProfileContainer />
          <InfoContainer />
        </div>
      </div>
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

function TitleContainer2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">함께 보는 사주</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <TitleContainer2 />
    </div>
  );
}

function TextSectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text / Section Title">
      <Container1 />
      <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--fill-0": "rgba(243, 243, 243, 1)", "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
            <path d="M0 0.5H350" id="Divider" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Profile Image Container">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-[8px] size-[60px]" data-name="Profile Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgProfileImage1} />
      </div>
    </div>
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

function Icons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pdd51400} fill="var(--fill-0, #848484)" id="Vector" stroke="var(--stroke-0, #848484)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons1 />
    </div>
  );
}

function TitleContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.45px]">연인-1 (연인)</p>
      <ButtonIconButton1 />
    </div>
  );
}

function BirthdateContainer1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shrink-0 w-full" data-name="Birthdate Container">
      <p className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">양력 1994.07.23 午(오)시</p>
    </div>
  );
}

function AttributesContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Attributes Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">용띠</p>
      <div className="h-[6px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
            <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">물고기자리</p>
      <div className="h-[6px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
            <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">여성</p>
    </div>
  );
}

function DetailsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Details Container">
      <BirthdateContainer1 />
      <AttributesContainer1 />
    </div>
  );
}

function InfoContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Info Container">
      <TitleContainer3 />
      <DetailsContainer1 />
    </div>
  );
}

function CardProfileCard1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Card / ProfileCard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center px-[8px] py-[12px] relative w-full">
          <ProfileContainer1 />
          <InfoContainer1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container3 />
    </div>
  );
}

function ProfileImageContainer2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Profile Image Container">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-[8px] size-[60px]" data-name="Profile Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgProfileImage2} />
      </div>
    </div>
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

function Icons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pdd51400} fill="var(--fill-0, #848484)" id="Vector" stroke="var(--stroke-0, #848484)" />
        </g>
      </svg>
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

function TitleContainer4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.45px]">연인-2 (연인)</p>
      <ButtonIconButton2 />
    </div>
  );
}

function BirthdateContainer2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shrink-0 w-full" data-name="Birthdate Container">
      <p className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">양력 1994.07.23 午(오)시</p>
    </div>
  );
}

function AttributesContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Attributes Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">말띠</p>
      <div className="h-[6px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
            <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">물고기자리</p>
      <div className="h-[6px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
            <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">여성</p>
    </div>
  );
}

function DetailsContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Details Container">
      <BirthdateContainer2 />
      <AttributesContainer2 />
    </div>
  );
}

function InfoContainer2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Info Container">
      <TitleContainer4 />
      <DetailsContainer2 />
    </div>
  );
}

function CardProfileCard2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Card / ProfileCard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center px-[8px] py-[12px] relative w-full">
          <ProfileContainer2 />
          <InfoContainer2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function SelectionControlsRadioButton3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[36px]" data-name="Selection Controls / Radio Button">
      <Container4 />
    </div>
  );
}

function ProfileImageContainer3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Profile Image Container">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-[8px] size-[60px]" data-name="Profile Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgProfileImage3} />
      </div>
    </div>
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

function Icons3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.pdd51400} fill="var(--fill-0, #848484)" id="Vector" stroke="var(--stroke-0, #848484)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIconButton3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button / Icon Button">
      <Icons3 />
    </div>
  );
}

function TitleContainer5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.45px]">바람 따라 걷는 여행자 (친구)</p>
      <ButtonIconButton3 />
    </div>
  );
}

function BirthdateContainer3() {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shrink-0 w-full" data-name="Birthdate Container">
      <p className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">양력 1994.07.23 午(오)시</p>
    </div>
  );
}

function AttributesContainer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Attributes Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">닭띠</p>
      <div className="h-[6px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
            <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">물고기자리</p>
      <div className="h-[6px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
            <path d="M0.5 0.5V6.5" id="Vector 16" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px]">여성</p>
    </div>
  );
}

function DetailsContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full" data-name="Details Container">
      <BirthdateContainer3 />
      <AttributesContainer3 />
    </div>
  );
}

function InfoContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Info Container">
      <TitleContainer5 />
      <DetailsContainer3 />
    </div>
  );
}

function CardProfileCard3() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Card / ProfileCard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11px] items-center px-[8px] py-[12px] relative w-full">
          <ProfileContainer3 />
          <InfoContainer3 />
        </div>
      </div>
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
    <div className="absolute content-stretch flex flex-col gap-[44px] items-start left-[20px] top-[115px] w-[350px]" data-name="Main Content Container">
      <SectionContainer />
      <Frame />
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_240_7207)" id="Icons">
          <path d={svgPaths.p2a89300} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_240_7207">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]">사주 정보 추가</p>
      <Icons4 />
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

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer1 />
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-[390px]" data-name="Common / Bottom Button">
      <Container5 />
      <HomeIndicatorLight />
    </div>
  );
}

function HomeIndicatorLight1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function HomeIndicatorContainer() {
  return (
    <div className="absolute bottom-[-129px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Home Indicator Container">
      <HomeIndicatorLight1 />
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

function Box() {
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

function Icons5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons5 />
    </div>
  );
}

function Box1() {
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

function Icons6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons6 />
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

function Spacer() {
  return <div className="h-[16px] shrink-0 w-full" data-name="Spacer" />;
}

function NavigationTopNavigationWidget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
      <NavigationTopBar />
      <Spacer />
    </div>
  );
}

function TopNavigationContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Top Navigation Container">
      <IndependentIPhoneStatusBar />
      <NavigationTopNavigationWidget />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="등록된 사주 정보 있음">
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
    </div>
  );
}