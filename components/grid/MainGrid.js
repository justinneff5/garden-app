import GridBox from './GridBox';
import Search from './Search';
import Image from 'next/image';
import {useState} from 'react'

let valids = [];

export default function MainGrid(props) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [moisture, setMoisture] = useState('');
    const [exposure, setExposure] = useState('');
    let gridBoxLayout = [];
    let size;
    let gridCss = '';

    // console.log(name);

    // function isPlantable(i) {
    //     props.garden_plants.forEach((plant) => {
    //         if (plant.idx === i) {
    //             return false;
    //         }
    //         if (plant.idx === i - 1 || plant.idx === i - 4 || plant.idx === i - 5) {
    //             return false;
    //         }
    //     })
    //     return true;
    // }

    if (!size) {
        size = { w: `${40 / props.x}rem`, h: `${40 / props.y}rem` }
        // for (let i = 0; i < (props.x * props.y); i++){
        //     valids.push(isPlantable(i));
        // }
        for (let i = 0; i < (props.x * props.y); i++){
            gridBoxLayout.push(<GridBox i={i} size={size} garden_links={props.garden_links} name={name} image_link={link} moisture={moisture} exposure={exposure}></GridBox>)
        }
        gridCss = `h-full w-full grid grid-cols-${props.x} grid-rows-${props.y}`;
    }
    
    return (
        <div className="flex h-screen w-screen justify-center">
            <div className="w-[28rem] h-[36rem] mt-20 mr-2">
                <Search localPlants={props.localPlants} setName={setName} setLink={setLink} setExposure={setExposure} setMoisture={setMoisture}/>
            </div>
            <div className="h-[36rem] w-[36rem] mt-20 ml-8 mr-4 relative rounded-md drop-shadow-2xl">
                <div className={gridCss}>
                    {gridBoxLayout.map(el => el)}
                </div>
            </div>
        </div>
    )
}