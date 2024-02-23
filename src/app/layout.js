import Head from "next/head";
import "../styles/main.css";

export const metadata = {
  title: "Mauro Gigena",
  description: "FrontEnd Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container text-center`}>{children}</body>
    </html>
  );
}
