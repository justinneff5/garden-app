import React from "react";
import Image from "next/image";
import plantImage from "./assets/images/plant.png";
import { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";

export default function identification() {
  const [plantInfo, setPlantInfo] = useState({
    name: "",
    description: "",
    propagation: "",
    link: "",
    probability: "",
    disease: {},
    imgSrc: "",
  });

  const [healthInfo, setHealthInfo] = useState({
    health_probability: "",
    diseases: [],
  });

  useEffect(() => {
    console.log("diseases", healthInfo.health_probability);
  }, [healthInfo.health_probability]);

  const healthProbabilitySlice = healthInfo.health_probability.slice(3, 10);

  const apikey = "3usAS78Qx4rzJpqLsvY9Iz8pZoJoDJzBo5zt8cKlqNafP7EDVQ";
  const test = "w-[94.783%]";
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
        disease_details: [
          "cause",
          "common_names",
          "classification",
          "description",
          "treatment",
          "url",
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
          setPlantInfo({
            name: data.suggestions[0].plant_name,
            description:
              data.suggestions[0].plant_details.wiki_description.value,
            propagation: "",
            link: data.suggestions[0].plant_details.wiki_description.citation,
            probability:
              (data.suggestions[0].probability * 100 + "").slice(0, 6) + "%",
            imgSrc: data.images[0].url,
          });
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      fetch("https://api.plant.id/v2/health_assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setHealthInfo({
            health_probability:
              "w-[" +
              ("" + data.health_assessment.is_healthy_probability * 100).slice(
                0,
                6
              ) +
              "%]",
            diseases: data.health_assessment.diseases,
          });
          console.log("Success 2", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }

  return (
    <div className="bg-primary shadow-innerShadow">
      <Navbar currentTab="plantid" />
      <div className="relative w-2/3 p-1 m-auto">
        <div className="flex justify-center bg-backdropLight rounded-t-lg items-center">
          <label
            class="flex mr-4 p-2 rounded-lg text-sm font-medium text-textDark"
            for="file_input"
          >
            Upload a picture of a plant
          </label>
          <input
            class="mr-4 block w-auto h-7 text-sm text-textDark bg-secondaryDark rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="fileSelect"
            type="file"
            label="Upload a picture of a plant"
            multiple
          />
          <button
            type="button"
            onClick={(e) => {
              sendIdentification();
            }}
            className="mt-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Upload
          </button>
        </div>
        <div className="bg-backdropLight shadow-innerLess h-auto m-auto flex flex-row rounded-b-lg">
          <div className="p-5 w-1/3 mt-64 h-auto">
            <Image
              src={plantInfo.imgSrc === "" ? plantImage : plantInfo.imgSrc}
              width="450px"
              height="450px"
              objectFit="cover"
            />
          </div>
          <div className="text-left text-textDark w-2/3 m-5">
            <div className="">
              <h2 className=" border-b-2 pb-3 mb-5 font-semibold text-xl text-black">
                Plant Info
              </h2>
              <p className="font-semibold text-black">
                Name:{" "}
                <span className="text-black font-light">{plantInfo.name}</span>
              </p>
              <p className="font-semibold text-black">
                Description:{" "}
                <span className=" text-black font-light">
                  {plantInfo.description}
                </span>
              </p>
              <p className="font-semibold text-black">
                Link:{" "}
                <a
                  className="text-blue-300 font-light"
                  href={plantInfo.link ?? "#"}
                >
                  {plantInfo.link}
                </a>
              </p>
              <p className="font-semibold text-black">
                Probability of Plant:{" "}
                <a className="text-black font-light" href="#">
                  {plantInfo.probability}
                </a>
              </p>
              <h2 className="border-b-2 mt-5 font-medium text-xl text-black"></h2>
            </div>
            <div className="pb-3 mt-4">
              <h2 className="pb-3 font-semibold text-xl text-black">
                Plant Health
              </h2>
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block px-2 py-1 uppercase rounded-lg text-pink-600 bg-pink-200">
                      health %
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-pink-600">
                      {healthProbabilitySlice}
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                  <div
                    class={`${healthInfo.health_probability} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500`}
                  ></div>
                </div>
              </div>
              <p className="font-semibold text-black">
              </p>
              <p className="font-semibold mt-4 mb-2 text-lg text-black">
                Likely Diseases:{" "}
              </p>
              <h2 className="border-b-2 mb-4 font-medium text-xl text-black"></h2>
              <div className="text-black w-3/4 ml-7">
                <h3>
                  <span class="font-semibold">Disease name: </span>
                  {healthInfo.diseases[0]?.name}
                </h3>
                <h3>
                  <span class='font-semibold'>Probability:{" "}</span>
                  {(healthInfo.diseases[0]?.probability * 100 + "").slice(
                    0,
                    6
                  ) + "%"}
                </h3>
                <ul className="list-disc ml-10 text-black">
                  <li>
                  <span class='font-semibold'>Description:{" "}</span>
                    {healthInfo.diseases[0]?.disease_details.description ?? ""}
                  </li>
                  <li>
                  <span class='font-semibold'>Treatment:{" "}</span>
                    {healthInfo.diseases[0]?.disease_details?.treatment
                      ?.biological
                      ? healthInfo.diseases[0]?.disease_details?.treatment
                          ?.biological[0]
                      : ""}
                  </li>
                  <li>
                  <span class='font-semibold'>Prevention:{" "}</span>
                    {healthInfo.diseases[1]?.disease_details?.treatment
                      ?.prevention
                      ? healthInfo.diseases[1]?.disease_details?.treatment
                          ?.prevention[0]
                      : ""}
                  </li>
                  <li>
                    <a
                      href={healthInfo.diseases[0]?.disease_details.url ?? "#"}
                    >
                      <span class='font-semibold'>Link:{" "}</span>
                      <span className="text-blue-300 font-light">
                        {healthInfo.diseases[0]?.disease_details.url ?? "N/A"}
                      </span>
                    </a>
                  </li>
                </ul>
                <h3 class='mt-4'>
                  <span class='font-semibold'>Disease name:{" "}</span><span>{healthInfo.diseases[1]?.name}</span>
                </h3>
                <h3>
                <span class='font-semibold'>Probability:{" "}</span>
                  {(healthInfo.diseases[1]?.probability * 100 + "").slice(
                    0,
                    6
                  ) + "%"}
                </h3>
                <ul className="list-disc ml-10 text-black">
                  <li>
                  <span class='font-semibold'>Description:{" "}</span>
                    {healthInfo.diseases[1]?.disease_details?.description ?? ""}
                  </li>
                  <li>
                  <span class='font-semibold'>Treatment:{" "}</span>
                    {healthInfo.diseases[1]?.disease_details?.treatment
                      ?.biological
                      ? healthInfo.diseases[1]?.disease_details?.treatment
                          ?.biological[0]
                      : ""}
                  </li>
                  <li>
                  <span class='font-semibold'>Prevention:{" "}</span>
                    {healthInfo.diseases[1]?.disease_details?.treatment
                      ?.prevention
                      ? healthInfo.diseases[1]?.disease_details?.treatment
                          ?.prevention[0]
                      : ""}
                  </li>
                  <li>
                    <a
                      href={healthInfo.diseases[1]?.disease_details.url ?? "#"}
                    >
                      <span class='font-semibold'>Link:{" "}</span>
                      <span className="text-blue-300 font-light">
                        {healthInfo.diseases[1]?.disease_details.url ?? "N/A"}
                      </span>
                    </a>
                  </li>
                </ul>
                <h3 class='mt-4'>
                <span class='font-semibold'>Disease name:{" "}</span><span>{healthInfo.diseases[2]?.name}</span>
                </h3>
                <h3>
                <span class='font-semibold'>Probability:{" "}</span>
                  {(healthInfo.diseases[2]?.probability * 100 + "").slice(
                    0,
                    6
                  ) + "%"}
                </h3>
                <ul className="list-disc ml-10 text-black">
                  <li>
                  <span class='font-semibold'>Description:{" "}</span>
                    {healthInfo.diseases[2]?.disease_details.description ?? ""}
                  </li>
                  <li>
                  <span class='font-semibold'>Treatment:{" "}</span>
                    {healthInfo.diseases[2]?.disease_details?.treatment
                      ?.biological
                      ? healthInfo.diseases[2]?.disease_details?.treatment
                          ?.biological[0]
                      : ""}
                  </li>
                  <li>
                  <span class='font-semibold'>Prevention:{" "}</span>
                    {healthInfo.diseases[2]?.disease_details?.treatment
                      ?.prevention
                      ? healthInfo.diseases[2]?.disease_details?.treatment
                          ?.prevention[0]
                      : ""}
                  </li>
                  <li>
                    <a
                      href={healthInfo.diseases[2]?.disease_details.url ?? "#"}
                    >
                      <span class='font-semibold'>Link:{" "}</span>
                      <span className="text-blue-300 font-light">
                        {healthInfo.diseases[2]?.disease_details.url ?? "N/A"}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
