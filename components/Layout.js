// components/Layout.js
import Header from './Header';
import Footer from './Footer';
import Logo from './Logo';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Logo />
      <main>{children}</main>
      <Footer />
    </>
  );
}
