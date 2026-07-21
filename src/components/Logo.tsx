import logoMark from "../assets/logo-lh/logo-mark.svg";

export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <img
      src={logoMark}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className="block shrink-0"
      style={{ width: size, height: size }}
    />
  );
}
