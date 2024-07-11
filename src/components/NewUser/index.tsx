import React, { useState } from 'react';
import InputComponent from '../InputComponent';
import ButtonComponent from '../ButtonComponent';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConnetion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import * as C from './styles';

interface INewUserProps{
  setNovoUsuario: (value: boolean) => void;
}

const NewUser: React.FC<INewUserProps> = ({ setNovoUsuario }) => {
  const [email, setEmail] = useState<string>('')
  const [senhaRepetida, setSenhaRepetida] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [nome, setNome] = useState<string>('')
  const [type, setType] = useState<string>('password')
  const [icon, setIcon] = useState<any>(faEye)

  const handleNewUser = async() => {
    if (senha === senhaRepetida) {
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
    } else {
      alert('As senhas não são iguais')
      setSenha('')
      setSenhaRepetida('')
    }
    
  }

  const handleIcon = () => {
    if (type === 'password') {
      setType('text')
      setIcon(faEyeSlash)
    } else {
      setType('password')
      setIcon(faEye)
    }
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
          type={type}
          placeholder='Digite uma senha'
          value={senha}
          setValue={setSenha}
          children={
          <C.Icon>
            <FontAwesomeIcon 
              onClick={handleIcon} 
              icon={icon} 
            />
          </C.Icon>}
        />
        {/* <C.Icon onClick={handleIcon}>
          <FontAwesomeIcon icon={faEye} />
        </C.Icon> */}
        <InputComponent 
          label='Confirme a sua senha:'
          type={type}
          placeholder='Digite a mesma senha'
          value={senhaRepetida}
          setValue={setSenhaRepetida}
          children={
          <C.Icon>
            <FontAwesomeIcon 
              onClick={handleIcon} 
              icon={icon} 
            />
          </C.Icon>}
        />
        {
          ((senha !== senhaRepetida && senhaRepetida.toString().length === senha.toString().length) || senhaRepetida.toString().length > senha.toString().length) && 
          <C.Span>Senhas não conferem</C.Span>
        }
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