import Link from "next/link";

export default function Main(props) {

    return (
        <div>
        <section class="text-gray-600 font-['Georgia'] bg-[#EDFFFD] shadow-innerShadow">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="garden" src="https://i.ibb.co/JKjBhbQ/garden.png"/>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is a rain garden?
                    </h1>
                    <p class="mb-8 leading-relaxed">Rain gardens are designed to capture rain water and prevent the rapid release of excess stormwater into municipal water systems. Well designed rain gardens are well known to reduce runoff and flooding, and filter pollutants carried in stormwater runoff. Along with the municipal benefits and the conservation of water as a valuable natural resource, rain gardens create excellent habitats for birds and butterflies. Anyone can create a rain garden in their backyard, as rain gardens are typically low cost, low maintenance, and don’t require a lot of space. 
</p>
                    <div class="flex justify-center">
                       <Link href='/calculatePage'>
                        <button class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primaryDark rounded text-lg">Build your rain garden</button>
                       </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );

}