
export function ProfileInfo() {
  return (
    <div
      className="w-[80%] max-w-[260px] min-w-[150px] space-y-2 text-[clamp(13px,2vw,14px)] text-[#2B2B2B]">
        
      <div className="flex justify-between gap-4">
        <span>Age:</span>
        <span>27</span>
      </div>

      <div className="flex justify-between gap-4">
        <span>Residence:</span>
        <span>Mdedellín</span>
      </div>

      <div className="flex justify-between gap-4">
        <span>Freelance:</span>
        <span className="text-green-500">Available</span>
      </div>

      <div className="flex justify-between gap-4">
        <span>Address:</span>
        <span className="text-right break-words">
          Mdedellín, Colombia
        </span>
      </div>
    </div>
  )
}