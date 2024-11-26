import About from "./about/page";
import Contact from "./components/contact/page";
import HomeContent from "./components/HomeContent";
import Watches from "./components/watches/pages";




export default function Home() {
  return (
    <div>
       <HomeContent />
       <About/>
       <Watches/>
       <Contact/>
     </div>
  );
}
