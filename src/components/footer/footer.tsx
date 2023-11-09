export const Footer = () => {
  return (
    <div className="flex w-full flex-row justify-center">
      <div className="flex w-[800px] flex-row justify-between text-sm">
        <span>Social Feed World Corp. © 2022-2023</span>
        <div className="flex flex-row gap-3">
          <span className="cursor-pointer">About us</span>
          <span className="cursor-pointer">Terms</span>
        </div>
        <div className="flex flex-row gap-3">
          <span className="cursor-pointer">Қазақ</span>
          <span className="cursor-pointer">Русский</span>
          <span className="cursor-pointer">English</span>
        </div>
      </div>
    </div>
  )
}
