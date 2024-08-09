interface RibbonsProps {
  width: number;
}

export default function Ribbons({ width }: RibbonsProps) {
  const iter = Math.ceil(width / 8);

  const el = Array.from({ length: iter }, (_: any, i: number) => i + 1).map((i) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 2 1" preserveAspectRatio="none" fill="#fff" key={i}>
      <polygon points="2 0 1 0.5 2 1" />
    </svg>
  ));

  return (
    <div className="absolute right-0 top-0">
      <div className="flex flex-col">{el}</div>
    </div>
  );
}
