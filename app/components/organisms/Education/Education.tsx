"use client"

import { TextPresentation } from "../../molecules/Text/Textpresentation";
import { Educationcard } from "../../molecules/Education/Educationcard";
import { Divider } from "../../atoms/util/Divider";



const EducationData = [
  {
    leftTitle: "Systems Engineering",
    role: "Student",
    date: "2022 - Present",
    rightTitle: "University of Antioquia",
    description:
      "Currently pursuing a degree in Systems Engineering, focusing on software development, data structures, and modern technologies such as web development and machine learning.",
  },
  {
    leftTitle: "Artificial Intelligence Bootcamp",
    role: "Participant",
    date: "2025",
    rightTitle: "Talento Tech - Government of Colombia",
    description:
      "Completed an intensive bootcamp in Artificial Intelligence, covering machine learning fundamentals, data analysis, and practical implementation of AI solutions.",
  },
];


export function Education() {
  return (
    <section id="education"  className="   w-full   max-w-[970px]   mx-auto "  >

      <TextPresentation
        title="Education"
        description="Systems Engineering student at the University of Antioquia 
        with additional training in Artificial Intelligence through a 
        government-backed bootcamp focused on machine learning and practical applications."
      />

      <div
        className=" w-full max-w-[904px]  mx-auto  bg-white  flex  flex-col  px-4 sm:px-6 lg:px-8 " >

        {EducationData.map((item, index) => (
          <div key={index}>
            <Educationcard
              leftTitle={item.leftTitle}
              role={item.role}
              date={item.date}
              rightTitle={item.rightTitle}
              description={item.description} />

            {index !== EducationData.length - 1 && (
              <Divider  className=" my-3 w-full max-w-[500px] mx-auto " />
            )}
            
          </div>
        ))}
      </div>
    </section>
  )
}