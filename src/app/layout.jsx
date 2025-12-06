
import "./globals.css";


export const metadata = {
  title: "Food Landing Page",
  description: "Responsive landing page built with Next.js, Tailwind & v0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}


