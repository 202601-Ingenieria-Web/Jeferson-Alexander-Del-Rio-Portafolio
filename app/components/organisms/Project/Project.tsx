"use client"
import { Button } from "@/app/components/atoms/buttons/Button";
import { TextPresentation } from "../../molecules/Text/Textpresentation";
import { Knowledgecard } from "../../molecules/Knowlege/Knowlegecard";
import { Projectcard } from "../../molecules/Projects/Projectcard";



const projectData = [
  {
    image: "/proyecto.png",
    title: "RAG Chatbot",
    description:
      "Developed a chatbot using Retrieval-Augmented Generation (RAG) with LangChain and FAISS to answer questions from documents.",
    href: "https://github.com/JefersonAlexander/RAGChatbot.git"
  },
  {
    image: "/proyecto.png",
    title: "Fleet Monitoring System",
    description:
      "Built a real-time fleet monitoring platform using microservices to improve road safety and driver management.",
    href: "https://github.com/DavidsonPerez07/Fleetguard_EV02_Back.git"
  },
  {
    image: "/proyecto.png",
    title: "EcoTour Web Platform",
    description:
      "Created a web application with Django for booking eco-tours, including search, filtering, and reservation features.",
    href: "https://github.com/JefersonAlexander/EcoWander.git"
  },
  {
    image: "/proyecto.png",
    title: "Student Performance Model",
    description:
      "Implemented a machine learning model to classify student performance based on academic and socio-demographic data.",
    href: "https://github.com/JefersonAlexander/Reser-Pro.git"
  },
  {
    image: "/proyecto.png",
    title: "API Gateway with JWT",
    description:
      "Designed an API Gateway using Spring Cloud Gateway with JWT authentication and role-based access control for microservices.",
    href: "https://github.com/JefersonAlexander/API-Gateway-JWT.git"
  },
  {
    image: "/proyecto.png",
    title: "Portfolio Website",
    description:
      "Developed and built a responsive personal portfolio using Next.js and Tailwind CSS to showcase projects and skills.",
    href: "https://github.com/202601-Ingenieria-Web/Jeferson-Alexander-Del-Rio-Portafolio.git"
  }
];

export function MyProjects() {
  return (
    <section id="projects" className="w-full   mx-auto ">
      
      
      <TextPresentation
        title="My Projects"
        description="A collection of my work in web development, 
        machine learning, and AI, showcasing practical solutions 
        and modern technologies." />

     
      <div className="w-full   mx-auto  flex  flex-col">
        

        <div className=" flex flex-wrap justify-center gap-6">
          {projectData.map((item) => (
            <div
              key={item.title}>
              <Projectcard
                image={item.image}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
