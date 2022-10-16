import GridBox from './GridBox';
import Search from './Search';
import Image from 'next/image'

export default function MainGrid(props) {
    let gridBoxLayout = [];
    let size;
    let gridCss = '';
    if (!size) {
        size = { w: `${40 / props.dimensions.x}rem`, h: `${40 / props.dimensions.y}rem` }
        for (let i = 0; i < (props.dimensions.x * props.dimensions.y); i++){
            gridBoxLayout.push(<GridBox i={i} size={size} localPlants={props.localPlants}></GridBox>)
        }
        gridCss = `h-full w-full grid grid-cols-${props.dimensions.x} grid-rows-${props.dimensions.y} gap-px`;
    }
    
    return (
        <div className="flex h-screen w-screen">
            <div className="w-auto h-[36rem] mt-20 mr-4">
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