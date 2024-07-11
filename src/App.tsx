/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Routes from './Routes';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseConnetion';
import { GlobalStyle } from './styles/Globals';
import { ThemeProvider } from 'styled-components';
import main from './styles/themes/index'

function App() {

  const [user, setUser] = useState<boolean>(false);
  const [userDetail, setUserDetail] = useState<any>({})

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('Usuário logado')
          setUser(true)
          setUserDetail({
            uid: user.uid,
            email: user.email
          })
          
        } else {
          console.log('Usuário não logado')
          setUser(false)
          setUserDetail({})
        }
      })
    }
    checkLogin()
  }, [])

  return (
    <ThemeProvider theme={main}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
