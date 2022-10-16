import React from "react";
import Image from "next/image";
import plantImage from "./assets/images/plant.png";
import {useState, useEffect, useMemo} from 'react';

export default function identification() {
    const [plantInfo, setPlantInfo] = useState({
        name: '',
        description: '',
        propagation: '',
        link: '',
        probability: '',
        disease: {},
        imgSrc: '',
    });

  const apikey = "agZyAlVi1rxRmNdE2QA0AY13cDXOyUAqWxAPNc3KwfdCZuzajc";
  function sendIdentification() {
    const files = [...document.querySelector("input[type=file]").files];
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const res = event.target.result;
          console.log(res);
          resolve(res);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then((base64files) => {
      console.log(base64files);

      const data = {
        api_key: apikey,
        images: base64files,
        // modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        // plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details
        plant_details: [
          "common_names",
          "url",
          "name_authority",
          "wiki_description",
          "taxonomy",
          "synonyms",
        ],
      };

      fetch("https://api.plant.id/v2/identify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setPlantInfo(
            {name: data.suggestions[0].plant_name,
                description: data.suggestions[0].plant_details.wiki_description.value,
                propagation: '',
                link: data.suggestions[0].plant_details.wiki_description.citation,
                probability: (data.suggestions[0].probability*100 + '').slice(0, 6)+'%',
                imgSrc: data.images[0].url}
          )
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }

  return (
    <div className="w-2/3 h-[340px] p-1 m-auto ">
      <div className="rounded-sm w-10 bg-green-700 m-auto">
        <input
          id="fileSelect"
          type="file"
          multiple
          className="input text-black bg-green-500"
        />
        <button type="button" onClick={(e)=>{sendIdentification()}}>Submit</button>
      </div>

      <div className="bg-green-100 h-auto m-auto border-2 flex flex-row rounded-xl shadow-2xl">
        <div className="p-5 flex w-1/2 h-auto">
          <Image src={plantInfo.imgSrc === '' ? plantImage : plantInfo.imgSrc} width='250px' height='250px' />
        </div>

        <div className="text-left w-1/2 m-5">
          <div className="">
            <h2 className=" border-b-2 pb-3 mb-5 text-black">Plant Info</h2>
            <p className="font-semibold text-black">
              Name: <span className="text-black font-light">{plantInfo.name}</span>
            </p>
            <p className="font-semibold text-black">
              Description:{" "}
              <span className=" text-black font-light">
                {plantInfo.description}
              </span>
            </p>
            <p className="font-semibold text-black">
              Propagation: <span className="font-light text-black">Seeds</span>
            </p>
            <p className="font-semibold text-black">
              Link:{" "}
              <span className="text-blue-300 font-light" href="#">
                {plantInfo.link}
              </span>
            </p>
            <p className="font-semibold text-black">
              Probability of Plant:{" "}
              <a className="text-black font-light" href="#">
                {plantInfo.probability}
              </a>
            </p>
          </div>
          <div className="pb-3 mt-10">
            <h2 className="border-b-2 pb-3 mb-5 text-black">Plant Health</h2>
            <p className="font-semibold text-black">
              Probability of Health:{" "}
              <span className="text-black font-light">98.45%</span>
            </p>
            <p className="font-semibold text-black">Diseases: </p>
            <div className="text-black">
              <h3>
                Disease name:<span>Mo</span>
              </h3>
              <ul className="list-disc ml-10 text-black">
                <li>Description</li>
                <li>Treatment</li>
                <li>
                  <a>Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
