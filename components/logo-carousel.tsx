import Image from "next/image"

export function LogoCarousel() {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <figure className="w-[170px]">
                <Image src="/logo-2-300x250.png" alt="logo 2" width={170} height={142} className="w-full h-auto" />
              </figure>
              <figure className="w-[170px]">
                <Image src="/logo-3-300x250.png" alt="logo 3" width={170} height={142} className="w-full h-auto" />
              </figure>
              <figure className="w-[170px]">
                <Image src="/logo-1-1-300x250.png" alt="logo 1" width={170} height={142} className="w-full h-auto" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

