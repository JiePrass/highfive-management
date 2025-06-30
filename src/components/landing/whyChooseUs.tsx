import { RiCustomerServiceFill } from "react-icons/ri";

export default function WhyChooseUs() {
    return (
        <section className="mx-auto container px-6 md:px-0">
            <div className="flex justify-between items-center mb-4 md:mb-8">
                <h1 className="text-2xl md:text-5xl font-bold w-full">Kenapa Memilih Kita?</h1>
                <span className="hidden md:block text-sm text-end text-subtle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est exercitationem accusamus aspernatur maiores voluptates, ut</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col bg-accent/50 p-8 rounded-xl gap-2">
                    <RiCustomerServiceFill size={72} />
                    <h2 className="text-2xl font-medium md:text-3xl">Lorem Ipsum Dolor Sit Amet</h2>
                    <p className="text-subtletext-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet deserunt minus quae ea ut quam molestias, reprehenderit est beatae molestiae</p>
                </div>
                <div className="flex flex-col bg-muted p-8 rounded-xl gap-2">
                    <RiCustomerServiceFill size={72} />
                    <h2 className="text-2xl font-medium md:text-3xl">Lorem Ipsum Dolor Sit Amet</h2>
                    <p className="text-subtletext-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet deserunt minus quae ea ut quam molestias, reprehenderit est beatae molestiae</p>
                </div>
                <div className="flex flex-col bg-muted p-8 rounded-xl gap-2">
                    <RiCustomerServiceFill size={72} />
                    <h2 className="text-2xl font-medium md:text-3xl">Lorem Ipsum Dolor Sit Amet</h2>
                    <p className="text-subtletext-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet deserunt minus quae ea ut quam molestias, reprehenderit est beatae molestiae</p>
                </div>
                <div className="flex flex-col bg-muted p-8 rounded-xl gap-2">
                    <RiCustomerServiceFill size={72} />
                    <h2 className="text-2xl font-medium md:text-3xl">Lorem Ipsum Dolor Sit Amet</h2>
                    <p className="text-subtletext-xs md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet deserunt minus quae ea ut quam molestias, reprehenderit est beatae molestiae</p>
                </div>
            </div>
        </section>
    )
}