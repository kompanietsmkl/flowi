import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="mb-16 md:mb-32 lg:mb-48">
            <div className="flex items-center">
                <div className="relative w-[400px] h-[200px] sm:w-[700px]
            sm:h-[230px] md:w-[750px] md:h-[300px] lg:w-[1020px] md:h-[300px]">
                <Image 
                    src ="/marketing.png"
                    fill
                    className="object-contain dark:hidden"
                    alt="Marketing"

                />
                <Image 
                    src ="/marketing-dark.png"
                    fill
                    className="object-contain hidden dark:block"
                    alt="Marketing"

                />
                </div>
            </div>
        </div>
    )
}