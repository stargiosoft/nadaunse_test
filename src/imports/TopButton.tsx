import svgPaths from "./svg-n3nmasvu1h";

function TablerArrowBigUpFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler:arrow-big-up-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler:arrow-big-up-filled">
          <path d={svgPaths.p20a08f00} fill="var(--fill-0, #48B2AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function TopButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[999px] size-full" data-name="Top Button">
      <div aria-hidden="true" className="absolute border border-[#f8f8f8] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)]" />
      <TablerArrowBigUpFilled />
    </div>
  );
}