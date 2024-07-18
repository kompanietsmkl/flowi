import Image from "next/image";

export const Body = () =>{
    return(
        <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                Why choose us
            </h1>
            <h3 className="text-sm sm:text-lg md:text-xl font-normal text-muted-foreground dark:text-white">
                By using Flowi you obtain true freedom. <br />
                No ads, no limitations, free forever!
            </h3>
            <div className="sm:md:max-w-lg md:max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                lg:gap-x-[50px] gap-y-12 lg:gap-y-14 py-10">
                    <div className="flex h-full w-full flex-col items-center md:gap-y-3 lg:gap-y-4">
                        <div className="mb-2">
                            <Image
                                src ="/pinpoint.png"
                                height = "48"
                                width="32"
                                className="object-contain dark:hidden"
                                alt="Globe"
                            />
                            <Image
                                src ="/pinpoint-dark.png"
                                height = "48"
                                width="32"
                                className="object-contain hidden dark:block"
                                alt="Globe"
                            />
                        </div>
                        <h2 className="text-l sm:text-xl md:text-2xl font-semibold ">
                            Work anytime, anywhere
                        </h2 >
                        <p className="lg:text-justify">
                            Keep important info handy - all your notes are
                            automaticly synced and stored on our servers.
                        </p>
                    </div>
                    <div className="flex h-full w-full flex-col items-center md:gap-y-3 lg:gap-y-4">
                        <div className="mb-2">
                            <Image
                                src ="/binocular.png"
                                height = "48"
                                width="48"
                                className="object-contain dark:hidden"
                                alt="Globe"
                            />
                            <Image
                                src ="/binocular-dark.png"
                                height = "48"
                                width="48"
                                className="object-contain hidden dark:block"
                                alt="Globe"
                            />
                        </div>
                        <h2 className="text-l sm:text-xl md:text-2xl font-semibold">
                            Expand possibilities
                        </h2>
                        <p className="lg:text-justify">
                            Explore new tools and make yournotes more
                            useful by adding text, images,audio etc.
                        </p>
                    </div>
                    <div className="flex h-full w-full flex-col items-center md:gap-y-3 lg:gap-y-4">
                        <div className="mb-2">
                            <Image
                                src ="/organize.png"
                                height = "48"
                                width="48"
                                className="object-contain dark:hidden"
                                alt="Globe"
                            />
                            <Image
                                src ="/organize-dark.png"
                                height = "48"
                                width="48"
                                className="object-contain hidden dark:block"
                                alt="Globe"
                            />
                        </div>
                        <h2 className="text-l sm:text-xl md:text-2xl font-semibold">
                            Organize your workflow
                        </h2>
                        <p className="lg:text-justify">
                            Bring your notes, tasks and schedules together
                            to get things done more easily.
                        </p>
                    </div>
                    <div className="flex h-full w-full flex-col items-center md:gap-y-3 lg:gap-y-4">
                        <div className="mb-2">
                            <Image
                                src ="/no-ads.png"
                                height = "48"
                                width="48"
                                className="object-contain dark:hidden"
                                alt="Globe"
                            />
                            <Image
                                src ="/no-ads-dark.png"
                                height = "48"
                                width="48"
                                className="object-contain hidden dark:block"
                                alt="Globe"
                            />
                        </div>
                        <h2 className="text-l sm:text-xl md:text-2xl font-semibold">
                            Zero Ads
                        </h2>
                        <p className="lg:text-justify">
                        Enjoy using Flowi for free without
                        any banners and distracting ads.
                        </p>
                    </div>
            </div>
        </div>
    )

}