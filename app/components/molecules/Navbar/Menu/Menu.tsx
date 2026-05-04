import {Button} from '@/app/components/atoms/buttons/Button'
import Link from 'next/dist/client/link'


const Index = () => {
  return (
    <nav className=" w-full max-w-[700px] mx-auto flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3
        transition-colors hover:text-foreground " >
      <Button asChild variant="default" className="w-full sm:w-auto">
        <Link href="#knowledge">Knowledge</Link>
      </Button>

      <Button asChild variant="default" className="w-full sm:w-auto">
        <Link href="#education">Education</Link>
      </Button>

      <Button asChild variant="default" className="w-full sm:w-auto">
        <Link href="#projects">Projects</Link>
      </Button>

      <Button asChild variant="default" className="w-full sm:w-auto">
        <Link href="#contact">Contact</Link>
      </Button>
    </nav>
  )
}


export default Index