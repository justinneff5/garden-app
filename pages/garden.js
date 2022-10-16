import MainGrid from '../components/grid/MainGrid';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Garden({ data }) {
    const [x, setx] = useState('');
    const [y, sety] = useState('');
    useEffect(() => { 
        setx(data.dimensions.x);
        sety(data.dimensions.y);
    }, [data])

    return (
        <div className="h-screen w-screen bg-green-400">
            <MainGrid x={x} y={y} localPlants={data.localPlants} garden_plants={data.garden_plants} />
        </div>
    )
}

export async function getStaticProps(context) {
    let resG = await axios.get(process.env.API + 'garden/getgarden');
    let resP = await axios.get(process.env.API + 'plants/getplants');
    let garden = resG.data.body;
    let localPlants = resP.data.body
    const data = { garden_plants: garden.plants,localPlants: localPlants, dimensions: { x: garden.cols, y: garden.rows } };
    return { props: { data } };
}

export default Garden;