import React, { useState } from 'react';
import InputComponent from '../InputComponent';
import ButtonComponent from '../ButtonComponent';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConnetion';
// import { Container } from './styles';

interface INewUserProps{
  setNovoUsuario: (value: boolean) => void;
}

const NewUser: React.FC<INewUserProps> = ({ setNovoUsuario }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')

  const handleNewUser = async() => {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then((user) => {
      updateProfile(user.user, {
        displayName: nome
      })
      setNovoUsuario(false)
      setEmail('')
      setSenha('')
      setNome('')
    })
    .catch((error) => {
      if(error.code === 'auth/weak-password') {
        alert('Senha muito fraca')
      } else if (error.code === 'auth/email-already-in-use') {
        alert('Esse e-mail já está em uso')
      } else {
        alert(`Erro ao cadastrar o usuário: ${error}`)
      }
    })
    
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
          placeholder='Digite uma senha'
          value={senha}
          setValue={setSenha}
        />
        <InputComponent 
          label='Nome:'
          type='text'
          placeholder='Digite o nome'
          value={nome}
          setValue={setNome}
        />
        <ButtonComponent text='Cadastrar' onclick={handleNewUser} />
        <ButtonComponent text='Close' onclick={() => setNovoUsuario(false)} />
    </>
  );
}

export default NewUser;