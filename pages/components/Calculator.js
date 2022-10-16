import React from "react";
import { useRef } from "react";
import styles from "/styles/measurements.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize, faRuler, faCloudShowersHeavy, faChartSimple, faSeedling, faDollarSign } from "@fortawesome/free-solid-svg-icons";

export default function Calculator() {
  // Calculate stats and send to server

  let expInput = useRef([]);

//   for (let i = 0; i < expInput.length; i++) {
//     expInput[i].addEventListener("change", runExperimentStats);
//   }

  function runTrueStats() {
    let totLength = parseFloat(document.getElementById("totLength").value);
    let totWidth = parseFloat(document.getElementById("totWidth").value);
    let rainfall = parseFloat(document.getElementById("rainfall").value);
    let downSpouts = parseFloat(document.getElementById("downSpouts").value);
    let ribbonLength = parseFloat(
      document.getElementById("ribbonLength").value
    );
    let degree = parseFloat(document.getElementById("slope").value);

    // Area
    let surfaceArea = totLength * totWidth; // TO FIX

    // Soil type
    let soilType = null;
    let soilVal = null;
    if (ribbonLength == 0) {
      soilType = "Sandy";
      soilVal = 1;
    } else if (ribbonLength <= 1.5) {
      soilType = "Slity";
      soilVal = 1.5;
    } else {
      soilType = "Clay";
      soilVal = 2;
    }

    // Slope
    let slopePercentage = Math.abs(Math.tan((degree * Math.PI) / 180)) * 100;
    let slopeCategory = "Invalid";
    let gardenDepth = null;
    if (slopePercentage <= 5) {
      slopeCategory = "Flat";
      gardenDepth = 4;
    } else if (slopePercentage <= 8) {
      slopeCategory = "Moderate";
      gardenDepth = 6;
    } else if (slopePercentage <= 12.5) {
      slopeCategory = "Steep";
      gardenDepth = 8;
    }

    updateExperimentStats(
      totLength,
      totWidth,
      rainfall,
      downSpouts,
      soilType,
      slopeCategory
    );
  }

  function updateExperimentStats(
    length,
    width,
    rainfall,
    downSpouts,
    soilType,
    slopeCategory
  ) {
    document.getElementById("expLength").value = length;
    document.getElementById("expWidth").value = width;
    document.getElementById("expRainfall").value = rainfall;
    document.getElementById("expDownSpouts").value = downSpouts;

    let soilRadios = document.getElementsByName("expSoil");
    for (let i = 0; i < soilRadios.length; i++) {
      if (soilRadios[i].id.includes(soilType)) soilRadios[i].checked = true;
    }

    let slopeRadios = document.getElementsByName("expSlope");
    for (let i = 0; i < slopeRadios.length; i++) {
      if (slopeRadios[i].id.includes(slopeCategory))
        slopeRadios[i].checked = true;
    }

    runExperimentStats();
  }

  function runExperimentStats() {
    console.log("Running");
    let length = document.getElementById("expLength").value;
    let width = document.getElementById("expWidth").value;
    let rainfall = document.getElementById("expRainfall").value;
    let downSpouts = document.getElementById("expDownSpouts").value;
    let soilVal;
    let gardenDepth;

    let surfaceArea = length * width;

    let soilRadios = document.getElementsByName("expSoil");
    for (let i = 0; i < soilRadios.length; i++) {
      if (soilRadios[i].checked) soilVal = soilRadios[i].value;
    }

    let slopeRadios = document.getElementsByName("expSlope");
    for (let i = 0; i < slopeRadios.length; i++) {
      if (slopeRadios[i].checked) gardenDepth = slopeRadios[i].value;
    }

    calculateEstimations_and_updateUI(
      surfaceArea,
      rainfall,
      downSpouts,
      soilVal,
      gardenDepth
    );
  }

  function calculateEstimations_and_updateUI(
    surfaceArea,
    rainfall,
    downSpouts,
    soilVal,
    gardenDepth
  ) {
    console.log("inputs: " + surfaceArea, downSpouts, soilVal, gardenDepth);

    // calculate rainfall captured
    let drainageArea = surfaceArea / downSpouts;
    let rainVolume = drainageArea * rainfall * 144 * 0.00433;
    let rainfallCaptured =
      drainageArea * rainfall * 144 * 0.00433 + surfaceArea / 7.5; // gallons
    rainfallCaptured = Math.round(rainfallCaptured * 100) / 100;

    // calculate the garden size
    let gardenSize = ((rainVolume / 0.00433) * soilVal) / gardenDepth / 144;
    gardenSize = Math.round(gardenSize * 100) / 100;

    // calculate the number of plants
    let numPlants = Math.round(gardenSize * 0.44);

    // calculate the garden costs
    let gardenCost = numPlants * 5.5 + gardenSize;
    gardenCost = Math.round(gardenCost * 100) / 100;

    // update UI
    document.getElementById("gardenSize").innerText = gardenSize;
    document.getElementById("gardenDepth").innerText = gardenDepth;
    document.getElementById("rainfallCaptured").innerText = rainfallCaptured;
    document.getElementById("numPlants").innerText = numPlants;
    document.getElementById("gardenCost").innerText = gardenCost;
  }

  return (
    <div>
      <div className="font-light text-textDark w-full h-auto">
        <div class="grid grid-col-4 m-auto grid-flow-col gap-4 pb-10 justify-center ml-20 mr-20">
          <div class="shadow-innerShadow col-span-2 m-auto h-auto bg-backdropLight mr-10 rounded-md">
            <div className="">
              <h3 className="text-center p-5 text-xl">
                <span className="underline  font-bold">Step 1</span>: Measure
                the available surface area
              </h3>
            </div>
            <div className="mt-1 p-5">
              <p>Constraints:</p>
              <ul className="text-sm list-disc list-inside">
                <li className="list-item">
                  At least 10 feet away from buildings with basements
                </li>
                <li>At least 15 feet away from septic tank or leach field</li>
                <li>Away from tree roots and drinking water wells</li>
                <li>
                  No underground obstructions such as gas or electrical lines
                  (contact DigSafe here)
                </li>
              </ul>

              <div class="input-group input-group-outline pt-5 flex float-left items-center">
                <label class="form-label text-sm font-semibold">
                  Enter the measured length (feet):{" "}
                </label>
                <input
                  type="text"
                  id="totLength"
                  name="totLength"
                  className="form-control bg-white h-8 w-14 ml-2 mr-2 float-right rounded-lg p-4"
                />
              </div>
              <div class="input-group input-group-outline pt-5 flex float-left items-center pb-5">
                <label class="form-label text-sm font-semibold pr-4">
                  Enter the measured width (feet):
                </label>
                <input
                  type="text"
                  id="totWidth"
                  name="totWidth"
                  class="form-control"
                  className="w-14 bg-white h-8 rounded-lg p-2"
                />
              </div>
            </div>
          </div>

          <div class="shadow-innerShadow col-span-2 h-auto   bg-backdropLight ml-10 rounded-md drop-shadow-lg">
            <div className="">
              <h3 className="text-center p-5 text-xl">
                <span className="underline  font-bold">Step 2</span>: Identify
                the intensity of rainfall
              </h3>
            </div>
            <div className="p-5">
              <p>Note that:</p>
              <ul className="text-sm list-disc list-inside">
                <li className="list-item">
                  The usual rainfall depth of per event is around 1-4 inches
                </li>
                <li>
                  Most roofs are symmetrical so you can enter the number of
                  downspouts attached to the surface area that you just
                  measured.
                </li>
              </ul>

              <div class="input-group input-group-outline pt-5 flex float-left items-center">
                <label class="form-label text-sm font-semibold pr-4">
                  Enter the depth of rainfall per event (inches):{" "}
                </label>
                <input
                  type="text"
                  id="rainfall"
                  name="rainfall"
                  class="form-control"
                  className="w-14 bg-white h-8 mr-2 float-right rounded-lg p-4"
                />
              </div>
              <div class="input-group input-group-outline pt-5 flex float-left items-center">
                <label class="form-label text-sm font-semibold">
                  Enter the number of downspouts:{" "}
                </label>
                <input
                  type="text"
                  id="downSpouts"
                  name="downSpouts"
                  class="form-control"
                  className="w-14  bg-white h-8float-right rounded-lg ml-2 p-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-col-4 m-auto grid-flow-col gap-4 pb-10 justify-center ml-20 mr-20">
          <div class="shadow-innerShadow col-span-2 m-auto h-auto  bg-backdropLight mr-10 rounded-md drop-shadow-lg">
            <div className="">
              <h3 className="text-center p-5 text-xl">
                <span className="underline  font-bold">Step 3</span>: Identify
                soil type (Sandy, Slity, Clayey)
              </h3>
            </div>
            <div className="p-5">
              <p>Steps:</p>
              <ul className="text-sm list-disc list-inside">
                <li className="list-item">
                  Grab a handful of moist soil and roll it into a ball in your
                  hand
                </li>
                <li>
                  Place the ball of soil between your thumb and the side of your
                  forefinger and gently push the soil forward with your thumb,
                  squeezing it upwards to form a ribbon about 1/4 inch thick
                </li>
                <li>
                  Try to keep the ribbon uniform in thickness and width. Repeat
                  the motion to lengthen the ribbon until it breaks under its
                  own weight. Measure the ribbon length and input it below
                </li>
                <li>
                  No underground obstructions such as gas or electrical lines
                  (contact DigSafe here)
                </li>
              </ul>

              <div class="input-group input-group-outline pt-5 pb-5 flex float-left items-center">
                <label class="form-label text-sm font-semibold pr-4">
                  Enter ribbon length (inches):{" "}
                </label>
                <input
                  type="text"
                  id="ribbonLength"
                  name="ribbonLength"
                  class="form-control"
                  className="w-14  bg-white h-8 float-right rounded-lg p-4"
                />
              </div>
            </div>
          </div>

          <div class="shadow-innerShadow col-span-2 h-auto  bg-backdropLight ml-10 rounded-md drop-shadow-lg">
            <div className="">
              <h3 className="text-center p-5 text-xl">
                <span className="underline font-bold">Step 4</span>: Measure
                the slope of your garden
              </h3>
            </div>
            <div className="p-5">
              <p>Note that:</p>
              <ul className="text-sm list-disc list-inside">
                <li className="list-item">
                  If you have an Android phone, download any Clinometer app from
                  the Playstore. If you have an Iphone, use the default measuring app.
                </li>
                <li>
                  Place your phone onto the surface of your garden, on top of
                  something flat such as a book or a wooden plank.
                </li>
                <li>Read the measured slope from your clinometer app.</li>
                <li>
                  Note that iff your garden has a slope that is greater than{" "}
                  <em className="text-red-600">7 degree</em>, having a
                  raingarden is not recommended and you should find a different
                  location
                </li>
              </ul>

              <div class="input-group input-group-outline pt-5 flex float-left items-center">
                <label class="form-label text-sm font-semibold pr-4">
                  Enter the measure slope (degree):
                </label>
                <input
                  type="text"
                  id="slope"
                  name="slope"
                  class="form-control"
                  className="w-14  bg-white h-8 float-right rounded-lg p-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-10">
          <button
            onClick={(e) => {
              runTrueStats();
            }}
            className=" text-xl bg-backdropLight shadow-lg hover:bg-gray-100 focus:ring-green-300 dark:focus:ring-green-400 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Calculate
          </button>
        </div>

        {/* CALCULATED RESULTS */}
        <div class="w-full h-full flex">
          <div class={styles.estimations} className="w-3/4 rounded-lg bg-backdropLight shadow-innerShadow m-auto">
            <h2 class="text-center font-semibold text-xl mt-6 mb-4">
              {" "}
              Recommended/estimated stats for your rain garden{" "}
            </h2>
            <div class={styles.estimationsRes}>
              <div class={styles.estLogoContainer}>
                {/* <i class="fa-solid fa-chart-simple est-logo"></i> */}
                <FontAwesomeIcon icon={faChartSimple} className={styles.estLogo}></FontAwesomeIcon>
              </div>

              <div class={styles.estimatedRes}>
                <FontAwesomeIcon icon={faMaximize} className={styles.estimatedRes_i}></FontAwesomeIcon>
                <span class={styles.category}> Garden Size: </span>
                <span class={styles.numeric}>
                  {" "}
                  <span id="gardenSize">100</span>{" "}
                  <span class={styles.unit}> SQ.FT. </span>{" "}
                </span>
              </div>

              <div class={styles.estimatedRes}>
                {/* <i class="fa-solid fa-ruler"></i> */}
                <FontAwesomeIcon icon={faRuler} className={styles.estimatedRes_i}></FontAwesomeIcon>
                <span class={styles.category}> Garden Depth: </span>
                <span class={styles.numeric}>
                  {" "}
                  <span id="gardenDepth">6</span>{" "}
                  <span class={styles.unit}> IN. </span>{" "}
                </span>
              </div>

              <div class={styles.estimatedRes}>
                {/* <i class="fa-solid fa-cloud-showers-heavy"></i> */}
                <FontAwesomeIcon icon={faCloudShowersHeavy} className={styles.estimatedRes_i}></FontAwesomeIcon>
                <span class={styles.category}> Rainfall Captured: </span>
                <span class={styles.numeric}>
                  {" "}
                  <span id="rainfallCaptured">138</span>{" "}
                  <span class={styles.unit}> GALS </span>
                </span>
              </div>

              <div class={styles.estimatedRes}>
                {/* <i class="fa-solid fa-seedling"></i> */}
                <FontAwesomeIcon icon={faSeedling} className={styles.estimatedRes_i}></FontAwesomeIcon>
                <span class={styles.category}> Number of plants: </span>
                <span class={styles.numeric}>
                  {" "}
                  <span id="numPlants"> 29 </span>{" "}
                </span>
              </div>

              <div class={styles.estimatedRes}>
                {/* <i class="fa-solid fa-dollar-sign"></i> */}
                <FontAwesomeIcon icon={faDollarSign} className={styles.estimatedRes_i}></FontAwesomeIcon>
                <span class={styles.category}> Garden Costs: </span>
                <span class={styles.numeric}>
                  {" "}
                  <span id="gardenCost"> 228 </span>{" "}
                  <span class={styles.unit}> DOLLARS </span>
                </span>
              </div>
            </div>

            <div class={styles.experiment}>
              <div class={styles.experimentHeader}>
                <h4> Experiment with different stats! </h4>
                <p> (Results will not be saved) </p>
              </div>
                <label>
                  {" "}
                  - Surface length (feet):
                  <input
                    class={styles.expInput}
                    className='bg-white'
                    ref={expInput.current[0]}
                    type="text"
                    id="expLength"
                    name="expLength"
                    onChange={(e) => {runExperimentStats()}}
                  />
                </label>

                <label>
                  {" "}
                  - Surface width (feet):
                  <input
                    class={styles.expInput}
                    className='bg-white'
                    ref={expInput.current[1]}
                    type="text"
                    id="expWidth"
                    name="expWidth"
                    onChange={(e) => {runExperimentStats()}}
                  />
                </label>

                <label>
                  {" "}
                  - Rainfall per event (inches):
                  <input
                    class={styles.expInput}
                    className='bg-white'
                    ref={expInput.current[2]}
                    type="text"
                    id="expRainfall"
                    name="expRainfall"
                    onChange={(e) => {runExperimentStats()}}
                  />
                </label>

                <label>
                  {" "}
                  - Downspouts:
                  <input
                    class={styles.expInput}
                    className='bg-white'
                    ref={expInput.current[3]}
                    type="text"
                    id="expDownSpouts"
                    name="expDownSpouts"
                    onChange={(e) => {runExperimentStats()}}
                  />
                </label>

                <div class={styles.expRadio}>
                  <p> - Soil type: </p>
                  <div>
                    <label className='p-2'>
                      <input
                        class={styles.expInput}
                        
                        ref={expInput.current[4]}
                        type="radio"
                        id="expSandy"
                        value="1"
                        name="expSoil"
                        onChange={(e) => {runExperimentStats()}}
                      />
                      Sandy
                    </label>

                    <label className='p-2'>
                      <input
                        class={styles.expInput}
                        ref={expInput.current[5]}
                        type="radio"
                        id="expSlity"
                        value="1.5"
                        name="expSoil"
                        onChange={(e) => {runExperimentStats()}}
                      />
                      Slity
                    </label>

                    <label className='p-2'>
                      <input
                        class={styles.expInput}
                        ref={expInput.current[6]}
                        type="radio"
                        id="expClayey"
                        value="2"
                        name="expSoil"
                        onChange={(e) => {runExperimentStats()}}
                      />
                      Clayey
                    </label>
                  </div>
                </div>

                <div class={styles.expRadio}>
                  <p> - Slope: </p>
                  <div>
                    <label className='p-2'>
                      <input
                        class={styles.expInput}
                        ref={expInput.current[7]}
                        type="radio"
                        id="expFlat"
                        value="4"
                        name="expSlope"
                        onChange={(e) => {runExperimentStats()}}
                      />
                      Flat
                    </label>

                    <label className='p-2'>
                      <input
                        class={styles.expInput}
                        ref={expInput.current[8]}
                        type="radio"
                        id="expMod"
                        value="6"
                        name="expSlope"
                        onChange={(e) => {runExperimentStats()}}
                      />
                      Moderate
                    </label>

                    <label className='p-2'>
                      <input
                        class={styles.expInput}
                        ref={expInput.current[9]}
                        type="radio"
                        id="expSteep"
                        value="8"
                        name="expSlope"
                        onChange={(e) => {runExperimentStats()}}
                      />
                      Steep
                    </label>
                  </div>
                </div>
                <button type="button" name="resetButton" className='ml-16 bg-primary hover:bg-primaryDark'>
                  {" "}
                  Reset{" "}
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
