import axios from 'axios';
import { useState, useEffect } from 'react';
import PlantSearchElement from './PlantSearchElement';

function Search(props) {
    const [currSearch, setCurrSearch] = useState('');
    const [searched, setSearched] = useState(false);
    const [searchHelp, setSearchHelp] = useState('Try searching for something!')

    function search(e) {
        e.preventDefault();
        setSearched(true);
    }
    function matchesSearch(name) {
        let nameLoc = name.toLowerCase();
        let searchLoc = currSearch.toLowerCase();
        for (let i = 0; i < currSearch.length; i++) {
            if (nameLoc.charAt(i) != searchLoc.charAt(i)) return false;
        }
        return true;
    }

    function select(plant) {
        props.setName(plant.name);
        props.setLink(plant.image_link);
        props.setMoisture(plant.moisture);
        props.setExposure(plant.exposure);
        setSearchHelp('Select a square of dirt to plant your ' + plant.name + '!')
    }

    function filtered() {
        let temp = [];
        let i = 0;
        props.localPlants.forEach((plant) => {
            if (matchesSearch(plant.name)) {
                temp.push(<button key={i} className="w-full h-24 my-1 mx-4 bg-green-100 focus:bg-green-300" onClick={() => select(plant)}>
                    <PlantSearchElement localPlant={plant} />
                </button>);
            }
            i++;
        })
        if (temp.length === 0 && searchHelp.charAt(0) != 'N') {
            setSearchHelp('No plants matched your search.');
        }
        if (temp.length != 0 && searchHelp.charAt(0) != 'T') {
            setSearchHelp('Try searching for something!')
        }
        return temp;
    }

    function unfiltered() {
        let temp = [];
        let i = 0;
        props.localPlants.forEach((plant) => {
            temp.push(<button key={i} className="w-full h-24 my-1 mx-4 bg-green-100 focus:bg-green-300" onClick={() => select(plant)}>
                <PlantSearchElement localPlant={plant} />
            </button>);
            i++;
        });
        return temp;
    }

    function clearSearch(e) {
        e.preventDefault();
        setCurrSearch('');
        setSearched(false);
    }

    return (
        <div className="h-full w-full ml-4 relative z-20 text-black bg-gray-100 overflow-hidden rounded-md drop-shadow-2xl">
            {/* <button onClick={() => search(e.target.value)} className="w-20 h-20 bg-gray-400"> click to load plant</button> */}
            <div className="m-2">
                <form className="flex sticky justify-between px-2">
                    <input placeholder="Enter plant name" type="text" value={currSearch} className="border-2 border-green-500 pl-2 rounded-md w-64 h-10 ml-7 mt-8 text-black bg-gray-100" onChange={(e) => setCurrSearch(e.target.value)} />
                    <button type="submit" onClick={(e) => search(e)} className="w-32 rounded-md h-10 mt-8 ml-4 mr-4 bg-green-300">Search</button>
                </form>
                <div className="ml-10 mt-1 h-full text-sm w-auto text-left mr-8">{searchHelp}</div>
            </div>
            
            <div className="ml-6 h-full w-auto mr-6 overflow-x-hidden overscroll-none overflow-y-auto pt-4 pb-32">
                {searched ? 
                    filtered().map(x => x) : unfiltered().map(x => x)}
            </div>
            <div className="h-20 w-full bg-green-300"></div>
        </div>
    )
}
//<div className="ml-12 h-full text-sm w-auto text-right mr-6 overflow-y-auto">Try searching for something!</div>



export default Search;