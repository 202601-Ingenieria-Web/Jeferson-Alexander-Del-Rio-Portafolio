"use client";


import { Input } from "@/app/components/atoms/buttons/Input";
import { Textarea } from "@/app/components/atoms/util/Textarea";
import { Label } from "@/app/components/atoms/util/Label";
import { cn } from "@/utils/Cn";


interface ContactFormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
  required?: boolean;
}


export function ContactFormField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  className,
  required,
}: ContactFormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>


      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </Label>
     
      {type === "textarea" ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "min-h-32 resize-none bg-input",
            error && "border-destructive"
          )}
          required={required}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn("bg-input", error && "border-destructive")}
          required={required}
        />
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
