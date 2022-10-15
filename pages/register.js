import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';


function Register() {
    const router = useRouter();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/credentials/register', {
            username: user,
            password: password
        }).catch((err) => console.log(err)).then((res) => {
            if (!res) {
                console.log("uh oh");
            }
            else {
                router.push('/dashboard');
            }
        })
    }

    return (
        <div className="w-screen h-screen">
            <input type="text" className="w-24 text-blue-500" placeholder="username" onChange={ (e) => setUser(e.target.value)} />
            <input type="password" className="w-24 text-blue-500" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button className="mt-12" onClick={handleSubmit}>Register!</button>
        </div>
    )
}

export default Register;