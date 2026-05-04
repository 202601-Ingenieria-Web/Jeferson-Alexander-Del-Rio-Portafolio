import { Hero } from "./components/organisms/Hero/Hero";
import { MyKnowledge } from "./components/organisms/Knowlege/Knowlege";
import { Profilemenu } from "./components/organisms/ProfileInfo/Profilemenu";
import { Education } from "./components/organisms/Education/Education";
import { MyProjects } from "./components/organisms/Project/Project";
import { ContactSection } from "./components/organisms/Contact/ContactSection";
import { Sociallink } from "./components/organisms/SocialLink/Sociallink";
import { Footer } from "./components/organisms/Footer/Footer";

export default function Home() {
  return (
    <div className="flex">
      
    <Profilemenu />
  
    <main className="flex-1 w-full min-h-screen bg-[#F0F0F6] flex flex-col px-4 sm:px-6 lg:px-10 lg:mr-[90px] ">

      <div className="w-full max-w-[1200px] mx-auto space-y-10 sm:space-y-12 lg:space-y-16 pt-6 sm:pt-8 md:pt-10">
            
          <Hero />
          <MyKnowledge />
          <Education />
          <MyProjects />
          <ContactSection />
          <Footer />
          
        </div>
    </main>

      <Sociallink />

    </div>
  )
}
