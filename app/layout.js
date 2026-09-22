import "./globals.css";

export const metadata = {
  title: "JANKEN FRIENDS",
  description:
    "仮面の挑戦者と戦うジャンケンカードゲーム",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0b0b09",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
