import { Navbar } from "./_components/navbar";


const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) =>{
    return(
        <div className="bg-[#F9F6F2] dark:bg-[#1F1F1F]">
            <Navbar />
            <main className="h-full">
                {children}
            </main>

        </div>
    );
}

export default MarketingLayout;