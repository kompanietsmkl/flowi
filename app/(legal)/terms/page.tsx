import Paragraph from "./components/paragraph";

const Terms = () => {
    return ( 
        <div className="flex flex-col w-full">
            <section className="ml-[10%] mr-[10%] md:ml-[15%] md:mr-[15%] lg:ml-[20%] lg:mr-[20%] mt-[100px] mb-[100px]">
                <h2 className="text-2xl font-bold mb-0 pb-4 text-purple-600">Legal</h2>
                <h1 className="text-4xl font-extrabold mb-0 pb-4">Terms & Conditions</h1>
               <Paragraph /> 
            </section>
        </div>
    );
}
 
export default Terms;