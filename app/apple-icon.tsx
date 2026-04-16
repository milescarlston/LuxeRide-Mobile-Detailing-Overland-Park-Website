import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E5FAE 0%, #164a8a 100%)",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-4px",
            lineHeight: 1,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          LR
        </span>
        <div
          style={{
            marginTop: 10,
            width: 44,
            height: 4,
            borderRadius: 2,
            backgroundColor: "#10B981",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
