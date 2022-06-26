import { TProps } from "../types";

export default function Remove(props: TProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        style={{
          fill: "currentColor",
        }}
        d="M12 12h2v12h-2zM18 12h2v12h-2z"
      />
      <path
        style={{
          fill: "currentColor",
        }}
        d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6Zm4 22V8h16v20ZM12 2h8v2h-8z"
      />
      <path
        data-name="&lt;Transparent Rectangle&gt;"
        style={{
          fill: "none",
        }}
        d="M0 0h32v32H0z"
      />
    </svg>
  );
}
