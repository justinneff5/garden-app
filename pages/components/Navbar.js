import {useState, useEffect, useMemo} from 'react';
import Link from 'next/link';

export default function Navbar(props) {

    const currentTab = props.currentTab;

    const [selected, setSelected] = useState(currentTab);

    const handleClick = (path) => {
        setSelected(path);
    };

    return (
        <div>
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" class="flex items-center">
                        <img src="https://i.ibb.co/hZMcrxN/BB.png" class="mr-6 h-12 absolute left-6" alt="" />
                        <span class="pl-4 self-center text-xl font-['Gill_Sans'] font-extralight whitespace-nowrap dark:text-white">Backyard Babylon</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <Link href="/">
                            <a href="#" onClick={(e)=>{handleClick('home')}} class={selected === 'home' ? ("block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white") : ("block py-2 pr-4 pl-3 text-primary rounded hover:text-green-200 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:bg-transparent")} aria-current="page">Home</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/calculatePage">
                            <a href="#" onClick={(e)=>{handleClick('calculate')}} class={selected === 'calculate' ? ("block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white") : ("block py-2 pr-4 pl-3 text-primary rounded hover:text-green-200 md:hover:bg-transparent md:border-0  md:p-0 dark:text-primary md: dark:hover:bg-gray-700  md:dark:hover:bg-transparent")}>Build Your Garden</a>
                        </Link>
                        </li>
                        <Link href="/plantid">
                        <li>
                        <a href="#" onClick={(e)=>{handleClick('plantid')}} class={selected === 'plantid' ? ("block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white") : ("block py-2 pr-4 pl-3 text-primary rounded hover:text-green-200 md:hover:bg-transparent md:border-0  md:p-0 md: dark:hover:bg-gray-700  md:dark:hover:bg-transparent")}>Plant Info Search</a>
                        </li>
                        </Link>
                        <Link href="/garden">
                            <li>
                            <a href="#" onClick={(e)=>{handleClick('grid')}} class={selected === 'grid' ? ("block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white") : ("block py-2 pr-4 pl-3 text-primary rounded hover:text-green-200 md:hover:bg-transparent md:border-0  md:p-0 md: dark:hover:bg-gray-700  md:dark:hover:bg-transparent")}>Design Your Garden</a>
                            </li>
                        </Link>
                    
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

}