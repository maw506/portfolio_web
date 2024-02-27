import Head from "next/head";
import "../styles/main.css";

export const metadata = {
  title: "Mauro Gigena",
  description: "FrontEnd Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en es">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
      </Head>
      <body className="container">{children}</body>
    </html>
  );
}
