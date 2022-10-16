import GridBox from './GridBox';
import Search from './Search';
import Image from 'next/image';
import {useState} from 'react'

export default function MainGrid(props) {
    const [x, setX] = useState(props.dimensions.x);
    const [y, setY] = useState(props.dimensions.y);
    let gridBoxLayout = [];
    let size;
    let gridCss = '';
    if (!size) {
        size = { w: `${40 / x}rem`, h: `${40 / y}rem` }
        for (let i = 0; i < (x * y); i++){
            gridBoxLayout.push(<GridBox i={i} size={size} localPlants={props.localPlants}></GridBox>)
        }
        gridCss = `h-full w-full grid grid-cols-${x} grid-rows-${y} gap-px`;
    }
    
    return (
        <div className="flex h-screen w-screen">
            <div className="w-[28rem] h-[36rem] mt-20 mr-4">
                <Search localPlants={props.localPlants}/>
            </div>
            <div className="h-[36rem] w-[36rem] border-black border-2 mt-20 ml-8 mr-4 relative">
                <div className={gridCss}>
                    {gridBoxLayout.map(el => el)}
                </div>
            </div>
        </div>
    )
}