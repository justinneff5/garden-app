import MainGrid from '../components/grid/MainGrid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function Garden({ data }) {
    const [x, setx] = useState('');
    const [y, sety] = useState('');
    useEffect(() => { 
        setx(data.dimensions.x);
        sety(data.dimensions.y);
    }, [data])

    return (
        <div className="min-h-screen w-screen bg-green-400 overscroll-none">
            <Navbar currentTab='grid'/>
            <MainGrid x={x} y={y} localPlants={data.localPlants} garden_links={data.garden_links} />
        </div>
    )
}

export async function getStaticProps(context) {
    let resG = await axios.get(process.env.API + 'garden/getgarden');
    let resP = await axios.get(process.env.API + 'plants/getplants');
    let garden = resG.data.body;
    let localPlants = resP.data.body
    const data = { garden_links: garden.image_links,localPlants: localPlants, dimensions: { x: garden.cols, y: garden.rows } };
    return { props: { data } };
}

export default Garden;