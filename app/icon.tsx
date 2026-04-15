import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1E5FAE",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-0.5px",
          }}
        >
          LR
        </span>
      </div>
    ),
    { ...size }
  );
}
