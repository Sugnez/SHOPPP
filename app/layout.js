export const metadata = {
  title: "Komat Boutique",
  description: "Vintage Streetwear aus den 90ern & 2000ern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
