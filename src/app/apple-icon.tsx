import { ImageResponse } from "next/og";
import { getIconDataUri } from "@/lib/og-image";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const iconDataUri = await getIconDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1d3a",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconDataUri} alt="ChacraSat" width={164} height={164} />
      </div>
    ),
    {
      ...size,
    }
  );
}
