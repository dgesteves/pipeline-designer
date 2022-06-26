import { TProps } from "../types";

export default function Draggable(props: TProps): JSX.Element {
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
        d="M10 6h4v4h-4zM18 6h4v4h-4zM10 14h4v4h-4zM18 14h4v4h-4zM10 22h4v4h-4zM18 22h4v4h-4z"
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
