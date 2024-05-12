// -- section
import Navbar from "presentation/components/molecules/Navbar";
import Footer from "presentation/components/organisms/Footer";

export function Default({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
