"use client";

import TextBlock from "../../atoms/texts/TextBlock";




export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">

                Designed & Built by Jeferson Del Rio        
            </p>
            <p className="mt-1 text-sm text-textcolor">

              © {currentYear} All rights reserved.
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
