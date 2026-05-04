interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full min-h-[100px] border rounded-md px-3 py-2 text-sm outline-none ${className}`}
      {...props}
    />
  )
}