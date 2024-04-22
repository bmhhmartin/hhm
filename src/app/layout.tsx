import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "../../public/css/custom.css";
import "../../public/css/responsive.css";


const raleway = Raleway({
  weight: ['300','400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway'
})

const poppins = Poppins({
  weight: ['300','400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Md H H Martin",
  description: 'I am Md H H Martin. I can provide you Web design, Web Development, graphics design, Search Engine Optimization (SEO) and Stock Photography in professional way.',
  keywords: 'Md H H Martin, Martin Software Engineer, bmhhmartin, Web Developer Martin, Martin Next JS Developer, Hasnat Hanjala Martin, Stock Photographer Martin, Photographer Martin'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${poppins.variable}`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
