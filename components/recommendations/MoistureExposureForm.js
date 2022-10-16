import { useState } from 'react';
import axios from 'axios';

export default function MoistureExposureForm() {
    const [moisture, setMoisture] = useState(0);
    const [exposure, setExposure] = useState(0);
    async function makeRecommendation(e) {
        e.preventDefault();
        let res = await axios.post('/api/plants/getrecommended_plants', {moisture: moisture, exposure: exposure})
        console.log('rec data');
        console.log(res.data);
    }

    return (
        <div className="h-64 w-96 bg-gray-50">
            <form>
                <input type="number" className="my-2 w-64 h-24" placeholder="moisture" onChange={(e) => setMoisture(e.target.value)} />
                <input type="number" className="my-2 w-64 h-24" placeholder="exposure" onChange={(e) => setExposure(e.target.value)} />
                <button type="submit" onClick={(e) =>  makeRecommendation(e)} className="bg-red-500 mt-6 h-auto w-auto">Submit</button>
            </form>
        </div>
    )
}