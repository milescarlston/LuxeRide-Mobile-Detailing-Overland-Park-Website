import { ImageResponse } from "next/og";

export const alt = "LuxeRide Mobile Car Detailing in Overland Park, KS";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1E5FAE 0%, #123d72 100%)",
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 88,
              height: 88,
              borderRadius: 18,
              background: "rgba(255, 255, 255, 0.12)",
              fontSize: 44,
              fontWeight: 900,
              letterSpacing: "-2px",
            }}
          >
            LR
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-1px",
              opacity: 0.9,
            }}
          >
            LuxeRide
          </div>
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 900,
            letterSpacing: "-2.5px",
            lineHeight: 1.05,
            maxWidth: 980,
          }}
        >
          Mobile Car Detailing in Overland Park
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            fontWeight: 500,
            opacity: 0.85,
            maxWidth: 960,
          }}
        >
          We come to you. Professional results, zero hassle.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            right: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <span>luxeridedetailing.site</span>
          <span
            style={{
              background: "#10B981",
              color: "#FFFFFF",
              padding: "12px 28px",
              borderRadius: 10,
            }}
          >
            Get a Free Quote
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
