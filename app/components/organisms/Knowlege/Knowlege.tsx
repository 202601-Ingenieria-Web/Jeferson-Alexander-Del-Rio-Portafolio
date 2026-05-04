"use client"
import { TextPresentation } from "../../molecules/Text/Textpresentation";
import { Knowledgecard } from "../../molecules/Knowlege/Knowlegecard";



const knowledgeData = [
  {
    icon: "mdi:monitor-cellphone",
    title: "Front-End Development",
    desc: "React, Next.js, Tailwind CSS",
  },
  {
    icon: "mdi:server",
    title: "Back-End Development",
    desc: "Django, Spring Boot, REST APIs",
  },
  {
    icon: "mdi:brain",
    title: "Machine Learning",
    desc: "Python, TensorFlow, Data Analysis",
  },
  {
    icon: "mdi:database",
    title: "Databases",
    desc: "PostgreSQL, MySQL, Data Modeling",
  },
  {
    icon: "mdi:cloud-outline",
    title: "Cloud & Tools",
    desc: "AWS, Git, Docker, CI/CD",
  },
  {
  icon: "mdi:database-search",
  title: "RAG Systems",
  desc: "LangChain, Vector Databases, LLM Integration",
  },
]


export function MyKnowledge() {
  return (
    <section id="knowledge" className="w-full">

      <TextPresentation
        title="My Knowledge"
        description="Systems Engineering student focused on front-end, 
        back-end, and machine learning. Passionate about building modern 
        applications and exploring AI-driven solutions like RAG systems."
      />

      <div className="flex flex-col gap-6 mx-auto">

        <div className="grid gap-5 md:grid-cols-3">
          
          {knowledgeData.map((item) => (
            <div key={item.title} className="w-full">
              <Knowledgecard 
                icon={item.icon} 
                title={item.title} 
                desc={item.desc} 
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}