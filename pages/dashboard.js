import MainGrid from '../components/grid/MainGrid';
import MoistureExposureForm from '../components/recommendations/MoistureExposureForm'
import axios from 'axios';

function Dashboard({ data }) {
    return (
        <div className="h-screen w-screen bg-green-400">
            <MainGrid dimensions={data.dimensions} localPlants={data.localPlants} />
            {/* <div className="bg-blue-500 h-96 w-full pl-20">
                <MoistureExposureForm/>
            </div> */}
        </div>
    )
}

export async function getStaticProps(context) {
    let dimensions = { x: 4, y: 4 };
    let res = await axios.get(process.env.API + 'plants/getplants');
    let localPlants = res.data.body;
    console.log('planty');
    console.log(localPlants);
    const data = {localPlants: localPlants, dimensions: dimensions};
    return { props: { data } };
}

export default Dashboard