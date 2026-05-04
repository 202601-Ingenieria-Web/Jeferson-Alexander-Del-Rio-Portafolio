"use client";


import {Button} from "@/app/components/atoms/buttons/Button";


interface GeneralMessageProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}


export function Successendmessage ({ setIsSubmitted }: GeneralMessageProps) {
  return (
    <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
      <h3 className="mb-2 text-xl font-semibold text-foreground">
        Thank you for your message!
      </h3>


      <p className="text-muted-foreground">
        I&apos;ll get back to you as soon as possible.
      </p>


      <Button variant="outline"  className="mt-4"
       onClick={() => setIsSubmitted(false)}
      >
        Send another message
      </Button>
    </div>
  );
}
