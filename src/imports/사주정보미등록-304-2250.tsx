import svgPaths from "./svg-7m6roblz4w";

function Group() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Group">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] left-0 rounded-[62px] size-[62px] to-50% to-[#f0f0f0] top-0" data-name="Rectangle" />
    </div>
  );
}

function ProfileIcon() {
  return (
    <div className="absolute contents left-[24.16px] top-[16.83px]" data-name="Profile Icon">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] left-[24.16px] rounded-[3.081px] size-[3.081px] to-50% to-[#f0f0f0] top-[29.56px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] left-[29.26px] rounded-[4.412px] size-[4.412px] to-50% to-[#f0f0f0] top-[16.83px]" data-name="Rectangle" />
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute left-[144px] size-[62px] top-0" data-name="Icons">
      <Group />
      <ProfileIcon />
    </div>
  );
}

function ProfileText() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[100px] w-[350px]" data-name="Profile Text">
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-full" data-name="Rectangle" />
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[228px]" data-name="Rectangle" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[144px] left-0 top-0 w-[350px]" data-name="Container">
      <Icons />
      <ProfileText />
    </div>
  );
}

function TextTextPageComponent() {
  return (
    <div className="absolute h-[144px] left-0 top-0 w-[350px]" data-name="Text / Text Page Component">
      <Container />
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[20px] left-[121.5px] top-[14px] w-[107px]" data-name="Container" />;
}

function ButtonSquareButton() {
  return (
    <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[48px] left-0 rounded-[12px] to-50% to-[#f0f0f0] top-[176px] w-[350px]" data-name="Button / Square Button">
      <Container1 />
    </div>
  );
}

function ProfileDetails() {
  return (
    <div className="absolute h-[224px] left-0 top-[32px] w-[350px]" data-name="Profile Details">
      <TextTextPageComponent />
      <ButtonSquareButton />
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-[350px]" data-name="Profile Content">
      <ProfileDetails />
    </div>
  );
}

function ProfileContainer() {
  return (
    <div className="absolute h-[292px] left-0 top-0 w-[350px]" data-name="Profile Container">
      <ProfileContent />
      <div className="absolute h-[0.01px] left-0 top-[292px] w-[350px]" data-name="Rectangle" style={{ backgroundImage: "linear-gradient(269.97deg, rgba(239, 239, 239, 0.05) 0%, rgb(240, 240, 240) 50%)" }} />
    </div>
  );
}

function Icons1() {
  return <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] rounded-[8px] shrink-0 size-[16px] to-50% to-[#f0f0f0]" data-name="Icons" />;
}

function ListItem() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[18px] w-[318px]" data-name="List Item">
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[20px] shrink-0 to-50% to-[#f0f0f0] w-[62px]" data-name="Rectangle" />
      <Icons1 />
    </div>
  );
}

function ButtonListItemButton() {
  return (
    <div className="h-[52px] relative rounded-[16px] shrink-0 w-full" data-name="Button / List Item Button">
      <ListItem />
    </div>
  );
}

function ButtonList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0 w-[350px]" data-name="Button List">
      {[...Array(3).keys()].map((_, i) => (
        <ButtonListItemButton key={i} />
      ))}
    </div>
  );
}

function ButtonListContainer() {
  return (
    <div className="absolute h-[175px] left-0 top-[312px] w-[350px]" data-name="Button List Container">
      <ButtonList />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="absolute h-[487px] left-[20px] top-[115px] w-[350px]" data-name="Content Container">
      <ProfileContainer />
      <ButtonListContainer />
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="absolute bottom-0 h-[28px] left-0 w-[390px]" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[22px] left-[8px] top-[6px] w-[318px]" data-name="Container">
      <div className="absolute bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[12.25px] left-0 rounded-[17.5px] to-50% to-[#f0f0f0] top-[5px] w-[31px]" data-name="Rectangle" />
    </div>
  );
}

function ButtonTextButton() {
  return (
    <div className="absolute h-[34px] left-[28px] rounded-[12px] top-0 w-[334px]" data-name="Button / Text Button">
      <Container2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bottom-[56px] h-[34px] left-0 w-[390px]" data-name="Button">
      <ButtonTextButton />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6618 11.3359">
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

function LeftAction() {
  return <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] rounded-[12px] shrink-0 size-[44px] to-50% to-[#f0f0f0]" data-name="Left Action" />;
}

function Box() {
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
      <Box />
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
      <div className="bg-gradient-to-l from-[rgba(239,239,239,0.05)] h-[14px] rounded-[21.25px] shrink-0 to-50% to-[#f0f0f0] w-[50px]" data-name="Rectangle" />
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
    <div className="bg-white relative size-full" data-name="사주정보 미등록">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <ContentContainer />
      <HomeIndicatorLight />
      <Button />
    </div>
  );
}