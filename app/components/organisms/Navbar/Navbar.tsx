"use client";


import Link from "next/link";
import Menu from '@/app/components/molecules/Navbar/Menu/Menu'




export function Navbar() {
 
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-foreground backdrop-blforegroundur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-background transition-colors hover:text-primary"
        >
          JD
        </Link>


        {/* Desktop navigation */}
       
       
        <div className="hidden items-center gap-8 md:flex">
         
          <div className="flex items-center justify-end gap-6">
            <Menu />
          </div>
         
        </div>
           
      </div>


    </nav>
  );
}
