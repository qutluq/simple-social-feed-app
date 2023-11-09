import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center bg-white py-3">
      <div className="flex w-[800px] flex-row  items-start">
        <Link href={'/'}>
          <div className="flex flex-row gap-3">
            <Image src="/assets/logo.png" alt="Logo" width={48} height={48} />

            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-2">
                <span className="text-[#ef2626]">Social</span>
                <span className="text-[#6e7721]">Feed</span>
              </div>
              <span className="text-[#26ef58]">World</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
