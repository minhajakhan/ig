import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase.js'
import * as ROUTES from '../constants/routes.js'

export default function Profile() {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [userExists, setUserExists] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
     async function checkUserExists() {
        const user = await getUserByUsername(username);
        if (user.length > 0) {
            setUser(user);
            setUserExists(true);
        } else {
            navigate(ROUTES.NOT_FOUND)
        }
     }

     checkUserExists();
    }, [username, navigate]);

    return userExists ? (
        <div className='bg-gray-background'>
            <div className='mx-auto max-w-screen-lg'>
                {username}
            </div>
        </div>
    ) : null;
}