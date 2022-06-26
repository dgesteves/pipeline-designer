import { TProps } from "../types";

export default function Add(props: TProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <path
        style={{
          fill: "currentColor",
        }}
        d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z"
      />
      <path
        style={{
          fill: "currentColor",
        }}
        d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7z"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h32v32H0z"
      />
    </svg>
  );
}
