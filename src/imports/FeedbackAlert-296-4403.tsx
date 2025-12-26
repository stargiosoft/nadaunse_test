import clsx from "clsx";
type ButtonSquareButton2Props = {
  additionalClassNames?: string;
};

function ButtonSquareButton2({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonSquareButton2Props>) {
  return (
    <div className={clsx("basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">{children}</div>
      </div>
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

function Container() {
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

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#525252] text-[15px] text-nowrap tracking-[-0.45px]">아니요</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <ButtonSquareButton2 additionalClassNames="bg-[#f3f3f3]">
      <Container1 />
    </ButtonSquareButton2>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.45px]">네</p>
    </div>
  );
}

function ButtonSquareButton1() {
  return (
    <ButtonSquareButton2 additionalClassNames="bg-[#48b2af]">
      <Container2 />
    </ButtonSquareButton2>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Button Group">
      <ButtonSquareButton />
      <ButtonSquareButton1 />
    </div>
  );
}

function ButtonContainer() {
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

export default function FeedbackAlert() {
  return (
    <div className="relative rounded-[20px] size-full" data-name="Feedback / Alert">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <ButtonContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
    </div>
  );
}