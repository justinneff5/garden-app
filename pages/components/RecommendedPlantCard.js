import Image from "next/image";
// import { useEffect, useState } from 'react';

export default function RecommendedPlantCard(props) {
  function makeUrl() {
    let url = `https://res.cloudinary.com/dkecm382m/image/fetch/${props.localPlant.image_link}`;
    if (props.localPlant.image_link.startsWith("https://m.media-amazon"))
      url = props.localPlant.image_link;
    console.log(url);
    return url;
  }

  const name = props.name;
  const comments = props.comments;
  const exposure = props.exposure;
  const moisture = props.moisture;
  const maturity = props.maturity;
  const bloom = props.bloom;
  const img = props.img;

  return (
    <div className="bg-green-300 h-auto m-auto  w-3/4 flex flex-row rounded-xl shadow-xl mb-4">
      <div className="p-5 flex w-1/4 h-auto">
        <Image src={makeUrl()} width='240px' height='240px' objectFit="cover"/>
      </div>
      <div className="text-left w-3/4 m-5">
        <div className="w-full float-left">
          <h2 className=" border-b-2 pb-3 mb-5 text-black font-semibold">Name of Plant:{" "}<span className='font-light'>{name}</span></h2>
          <div className="flex float-right w-1/2 pl-3 text-black">
            <div className=" w-full h-auto break-words">
              <h4 className="font-semibold">Comments: </h4>
              {comments}
            </div>
          </div>
          <p className="font-semibold text-black">
            Ideal Exposure:{" "}
            <span className=" text-black font-light">{exposure}</span>
          </p>
          <p className="font-semibold text-black">
            Ideal Moisture: <span className="font-light text-black">{moisture}</span>
          </p>
          <p className="font-semibold text-black">
            Maturity Size: <span className=" text-black font-light">{maturity}</span>
          </p>

          <p className="font-semibold text-black">
            Bloom: <span className=" text-black font-light">{bloom}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
