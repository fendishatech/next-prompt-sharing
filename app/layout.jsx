import "@styles/globals.css";

export const metadata = {
  title: "prompt sharing app",
  description: "AI Prompts sharing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
