/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { auth } from '../../firebase/firebaseConnetion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import InputComponent from '../InputComponent';
import ButtonComponent from '../ButtonComponent';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import NewUser from '../NewUser';

// import { Container } from './styles';

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const [user, setUser] = useState<boolean>(false);
  const [userDetail, setUserDetail] = useState<any>({})
  const [showModal, setShowModal] = useState<boolean>(false)

  const navigate = useNavigate()


  
  const login = async() => {
    
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      setUserDetail({
        uid: value.user.uid,
        email: value.user.email
      })
      setUser(true)
      navigate('/home')
      // caso o login esteja ok, deverá ir para página home
      
      setEmail('')
      setSenha('')
    })
    .catch((error) => {
      if(error.code === 'auth/wrong-password') {
        alert('Senha incorreta')
      } else if (error.code === 'auth/user-not-found') {
        alert('Usuário não encontrado')
      } else {
        alert(`Erro ao logar o usuário: ${error}`)
      }
    })
  }

  const handleModal = () => {
    setShowModal(true)
  }
  
  return (
    <>
        <InputComponent
          label='E-mail:'
          type='email'
          placeholder='Digite o e-mail'
          value={email}
          setValue={setEmail}
        />
        <InputComponent
          label='Senha:'
          type='password'
          placeholder='Digite a senha'
          value={senha}
          setValue={setSenha}
        />
        <ButtonComponent text='Entrar' onclick={login} />
        <p>Não possui uma conta</p><ButtonComponent text='Registre-se' onclick={handleModal} />
        {
          showModal && (
            <Modal>
              <NewUser setNovoUsuario={setShowModal} />
            </Modal>
          )
        }
    </>
  );
}

export default LoginComponent;