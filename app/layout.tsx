import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const myFont = IBM_Plex_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "James Park | Web Developer",
  description: "James Park's Portfolio",
};

// export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} flex flex-col justify-between min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
