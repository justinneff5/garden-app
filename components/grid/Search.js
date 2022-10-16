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
    function matchesSearch(file) {
        for (let i = 0; i < currSearch.length; i++) {
            if (file.charAt(i) != currSearch.charAt(i)) return false;
        }
        return true;
    }

    function filtered() {
        let temp = [];
        let i = 0;
        props.localPlants.forEach((plant) => {
            if (matchesSearch(plant.Name)) {
                temp.push(<div key={i} className="w-2/3 h-16 my-0.5">
                    <PlantSearchElement localPlant={plant} />
                </div>);
            }
            i++;
        })
        if (temp.length === 0 && searchHelp.charAt(0) != 'N') {
            setSearchHelp('No plants matched your search');
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
            temp.push(<div key={i} className="w-auto h-20 my-0.5 mx-4">
                <PlantSearchElement localPlant={plant} />
            </div>);
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
        <div className="h-full w-full ml-4 relative z-20 text-black bg-gray-100 overflow-hidden">
            {/* <button onClick={() => search(e.target.value)} className="w-20 h-20 bg-gray-400"> click to load plant</button> */}
            <div className="">
                <form className="flex sticky">
                    <input type="text" value={currSearch} className="w-32 h-10 ml-6 mt-8 text-black bg-green-300" onChange={(e) => setCurrSearch(e.target.value)} />
                    <button type="submit" onClick={(e) => search(e)} className="w-20 h-10 mt-8 ml-4 bg-green-300">Search</button>
                    <button onClick={ (e) => clearSearch(e)} className="w-16 h-10 mt-8 ml-4 mr-6 bg-green-400">Clear</button>
                </form>
                <div className="ml-12 h-full text-sm w-auto text-right mr-6 mb-4">{searchHelp}</div>
            </div>
            
            <div className="ml-6 h-full w-auto mr-6 overflow-x-hidden overscroll-none overflow-y-auto pt-4 pb-32">
                {searched ? 
                    filtered().map(x => x) : unfiltered().map(x => x)}
            </div>
            <div className="h-20 w-full"></div>
        </div>
    )
}
//<div className="ml-12 h-full text-sm w-auto text-right mr-6 overflow-y-auto">Try searching for something!</div>



export default Search;