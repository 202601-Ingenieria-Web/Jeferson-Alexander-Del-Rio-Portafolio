"use client";


import { useState } from "react";
import { Send } from "lucide-react";
import { SectionTitle } from "@/app/components/molecules/Contact/SectionTitle";
import { ContactFormField } from "@/app/components/molecules/Contact/ContactFormField";
import { Button } from "@/app/components/atoms/buttons/Button";
import { GeneralMessage } from "@/app/components/molecules/Contact/GeneralMessage";
import { Successendmessage } from "../../molecules/Contact/Successendmessage";


interface FormData {
  name: string;
  email: string;
  message: string;
}


interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}


export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({name: "",email: "",message: "",});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};


    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }


    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }


    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    if (!validateForm()) return;


    setIsSubmitting(true);


    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));


    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };


  return (
    <section id="contact" className="bg-white py-6 md:py-12">
      <div className="w-full max-w-[988px] mx-auto px-4 sm:px-6 lg:px-8">
        
        


        <div className="grid gap-12 lg:grid-cols-2">

          <GeneralMessage message="I'm always interested in hearing about
          new projects and opportunities. Whether you have a question or just want
          to say hi, I'll try my best to get back to you!" location="Medellín, Colombia" />


          <div>
          
            {isSubmitted ? (
             
              <Successendmessage setIsSubmitted={setIsSubmitted} />
            ) : (
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <ContactFormField
                  id="name"
                  label="Name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, name: value }))
                  }
                  error={errors.name}
                  required
                />
                <ContactFormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="youremail@email.com"
                  value={formData.email}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, email: value }))
                  }
                  error={errors.email}
                  required
                />
                <ContactFormField
                  id="message"
                  label="Message"
                  type="textarea"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, message: value }))
                  }
                  error={errors.message}
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
