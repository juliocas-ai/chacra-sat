"use client";

export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          backgroundColor: "#f4f6f9",
          color: "#1c2533",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "460px",
            width: "100%",
            backgroundColor: "#ffffff",
            border: "1px solid #dfe4ea",
            borderRadius: "16px",
            padding: "32px 24px",
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(11, 29, 58, 0.08)",
          }}
        >
          <h1 style={{ margin: "0 0 8px", fontSize: "22px", color: "#0b1d3a" }}>
            ChacraSat — System Error
          </h1>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "14px",
              color: "#5d6878",
              lineHeight: 1.5,
            }}
          >
            An unexpected error occurred while loading the application. / Ocurrió
            un error inesperado al cargar la aplicación.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              backgroundColor: "#2f9e5b",
              color: "#ffffff",
              border: 0,
              borderRadius: "10px",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again / Intentar de nuevo
          </button>
        </div>
      </body>
    </html>
  );
}
