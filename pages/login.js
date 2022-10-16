import axios from 'axios';
import { useState } from 'react';
import { signIn, getCsrfToken } from 'next-auth/react';
import { useRouter } from 'next/router';


function SignIn({csrfToken}) {
    const router = useRouter();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await signIn('credentials', {
            username: user,
            password: password
        })
        if (!res) {
            setError('not logged in');
        }
        else if (res.ok) {
            router.push('/dashboard');
        }
    }

    return (
        <div className="w-screen h-screen">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
            <input type="text" className="w-24 text-blue-500" placeholder="username" onChange={ (e) => setUser(e.target.value)} />
            <input type="password" className="w-24 text-blue-500" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button className="mt-12" onClick={handleSubmit}>Login!</button>
        </div>
    )
}

export async function getServerSideProps(context) {
    return { props: {csrfToken: await getCsrfToken(context) }}
}

export default SignIn;