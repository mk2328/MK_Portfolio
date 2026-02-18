import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience"; // Pehle se import hai
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Experience /> 
            <Skills/>
            <Services />
            <Work />
            <Contact />
            <Footer />
        </>
    )
};