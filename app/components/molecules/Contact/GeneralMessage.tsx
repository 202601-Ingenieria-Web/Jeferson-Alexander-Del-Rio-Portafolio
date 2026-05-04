"use client";


interface GeneralMessageProps {
  message?: string;
  location?: string;
}


export function GeneralMessage({ message = "Default message", location }: GeneralMessageProps) {
  return (
    <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {message}
            </p>
            <div className="space-y-4">
             
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">{location}</p>
              </div>
            </div>
          </div>
  );
}
