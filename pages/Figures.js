
import dynamic from "next/dynamic";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


export default function Figures(props) {

    const SlideLeft = MoveIn(-100, 0);

    return (
        <div>
            <ScrollPage>
                <Animator animation={SlideLeft}>
                    <section class="text-gray-600 font-['Georgia'] bg-primary">
                        <div class="container px-5 py-24 mx-auto flex flex-wrap">
                            <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div class="w-full sm:p-4 px-4 mb-6">
                                <h1 class="text-3xl mb-2 text-white pb-4">Urban flooding events in the United States have occured once every 2-3 days, for the past 25 years.</h1>
                                <div class="text-lg leading-relaxed text-white">Flooding has cost US taxpayers more than $850 billion since 2000 and is responsible for ⅔ of the cost from all natural disasters. In small towns and large cities, floods have inundated homes, cut-off communities, and left the scars of financial and emotional distress across the whole country.</div>
                            </div>
                            <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
                                <h2 class="font-medium text-3xl text-white">$1 Trillion</h2>
                                <p class="text-lg leading-relaxed text-white">since 1980</p>
                            </div>
                            <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
                                <h2 class="font-medium text-3xl text-white">$8 Billion</h2>
                                <p class="text-lg leading-relaxed text-white">since 2000</p>
                            </div>
                            </div>
                            <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img class="object-cover object-center w-full h-full" src="https://i.ibb.co/82z95Fx/figure1.png" alt="stats"/>
                            </div>
                        </div>
                    </section>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={SlideLeft}>
                    <section class="text-textDark font-['Georgia'] bg-white">
                        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <img class="object-cover object-center rounded" alt="hero" src="https://www.flooddefenders.org/hubfs/Flood-Defenders-2020/Flood_Risk02.png"/>
                                <div class="relative ml-8 mt-8">Number of properties at substantial flood risk by county in 2020.</div>
                            </div>
                            <div class="ml-20 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The scale is immense.
                                </h1>
                                <p class="pt-2 text-xl mb-8 leading-relaxed">
                                    A common misconception is that flooding only occurs in coastal regions or lands bordering rivers. In reality, flooding is happening all over the US, all the time.
                                </p>
                                <div class="flex">
                                    <div class="flex p-0 sm:w-full lg:w-full w-full">
                                        <h2 class="font-medium text-2xl">99%</h2>
                                        <p class="pl-2 pt-1 text-lg leading-relaxed"> of US counties are impacted by Flooding.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Animator>
            </ScrollPage>
        </div>
    );

    // //
}