export default function Main(props) {

    
    return (
        <div>
        <section class="text-gray-600 font-['Georgia'] bg-white">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="garden" src="https://i.ibb.co/JKjBhbQ/garden.png"/>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is a rain garden?
                    </h1>
                    <p class="mb-8 leading-relaxed">A rain garden is not your regular garden with pretty looking flowers and other plants. Rain garden is much more than that, it serves as a way for water to be absorbed into the ground. The garden allows for the excess water to seep into the ground and not go to the nearest drain system. Rain gardens have been effective in allowing 30% more water into the ground and decreasing the chance of flooding.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primaryDark rounded text-lg">Build your rain garden</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );

}