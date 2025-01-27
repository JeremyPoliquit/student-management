import "./globals.css";

export const metadata = {
  title: "CvSU Bacoor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
