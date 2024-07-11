import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase/firebaseConnetion';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

// import { Container } from './styles';
interface IPrivateProps{
    children: React.ReactNode
}

const Private: React.FC<IPrivateProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [signed, setSigned] = useState<boolean>(false);

    useEffect(() => {
        async function checkLogin() {
            onAuthStateChanged(auth, (user) => {
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                        name: user.displayName
                    }

                    localStorage.setItem("@detailUser", JSON.stringify(userData))
                    setSigned(true);
                    setLoading(false);
                } else {
                    setSigned(false);
                    setLoading(false);
                }
            })
        }
        checkLogin();
    }, [])

    if(loading){
        return (
            <h1>Carregando...</h1>
        )
    }

    if(!signed){
        return (
                <Navigate to='/' />
        )
    }

  return (
    <>
        { children }
    </>
  );
}

export default Private;