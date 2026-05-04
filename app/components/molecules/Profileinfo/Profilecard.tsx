"use client";


export function ProfileCard() {
  return (
    <div className=" w-full  max-w-[300px]  flex flex-col items-center  bg-white mx-auto
    ">
      <div className="relative mt-2 w-[90%] max-w-[150px]">
        
        <img
          src="/imagenprofile.png"
          alt="Profile"
          className=" w-full aspect-square  rounded-full object-cover " />

        <span className="absolute bottom-[8%] right-[8%] w-[12%] h-[12%] rounded-full bg-green-500" />
      </div>

      <h2 className="mt-4 text-[clamp(16px,2.5vw,20px)] font-medium text-[#2B2B2B] text-center">
        Jeferson Del Rio
      </h2>

      <p className=" mt-3 text-[clamp(13px,2vw,15px)] text-[#767676] text-center">
        System engineering
      </p>
    </div>
  )
}