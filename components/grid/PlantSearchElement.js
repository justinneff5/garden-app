import Image from 'next/image';

export default function PlantSearchElement(props) {
    //console.log(props);

    const myLoader = () => {
        return "/images/animations/rainloader.gif"
    }
    return (
        <div className="h-full w-full flex justify-between border border-black">
            <div className="h-full w-16 object-cover relative">
                <Image src={`https://res.cloudinary.com/demo/image/fetch/${props.localPlant.Link}`} placeholder="blur" blurDataURL={myLoader} alt="no img loaded" layout="fill" className="border-2 border-blue-500 absolute top-2 left-2" />
            </div>
            <button className="h-full w-32 py-auto"><div className="h-auto w-16 bg-blue-300 mr-2">Select</div></button>
        </div>
    )
}