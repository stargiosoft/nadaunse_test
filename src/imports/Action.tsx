import svgPaths from "./svg-yuyald0msh";

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <path d={svgPaths.p123b8a80} id="Vector_2" opacity="0" stroke="var(--stroke-0, #999999)" />
        </g>
      </svg>
    </div>
  );
}

export default function Action() {
  return (
    <div className="relative size-full" data-name="Action">
      <Box />
    </div>
  );
}