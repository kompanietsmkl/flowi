import Paragraph from "./components/paragraph";

const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="ml-[10%] mr-[10%] md:ml-[15%] md:mr-[15%] lg:ml-[20%] lg:mr-[20%] mt-[100px] mb-[100px]">
                <h1 className="text-4xl font-extrabold mb-0 pb-4">Privacy Policy</h1>
                <h2 className="text-2xl font-normal mb-0 pb-4">Last updated: May 29th, 2024</h2>
                <Paragraph />
            </section>
        </div>
    )
}

export default PrivacyPolicy;