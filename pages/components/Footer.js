export default function Footer() {
  return (
    <footer class="bg-primary text-textDark font-['Georgia']">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a class="flex title-font font-medium items-center md:justify-start justify-center ">
            <img src="https://i.ibb.co/hZMcrxN/BB.png" class="w-20 h-20" alt="" />
            <span class="ml-3 text-xl">Backyard Babylon</span>
          </a>
          <p class="mt-2 text-sm">
            A Hack WashU Project
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium  tracking-widest text-sm mb-3">
              SOURCES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class=" hover:">Montgomery Country MD</a>
              </li>
              <li>
                <a class=" hover:">USDA Plant Database</a>
              </li>
              <li>
                <a class=" hover:">United States EPA</a>
              </li>
              <li>
                <a class=" hover:">Flood Defenders </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium  tracking-widest text-sm mb-3">
              LIBRARIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class=" hover:">Next.js</a>
              </li>
              <li>
                <a class=" hover:">MongoDB</a>
              </li>
              <li>
                <a class=" hover:">Pandas</a>
              </li>
              <li>
                <a class=" hover:">Tailwind CSS</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium  tracking-widest text-sm mb-3">
              TOOLS
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class=" hover:">Plant.id API</a>
              </li>
              <li>
                <a class=" hover:">Beautiful Soup</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium  tracking-widest text-sm mb-3">
              CONTRIBUTORS
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class=" hover:">Michael Yang</a>
              </li>
              <li>
                <a class=" hover:">Justin Neff</a>
              </li>
              <li>
                <a class=" hover:">Moyesh Khanal</a>
              </li>
              <li>
                <a class=" hover:">Hoang Ha Minh</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-900">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-primary text-sm text-center sm:text-left">
            © 2022 Backyard Babylon
          </p>
        </div>
      </div>
    </footer>
  );
}
