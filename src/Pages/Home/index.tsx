/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebaseConnetion";
import ButtonComponent from "../../components/ButtonComponent";
import Modal from "../../components/Modal";
import NewUser from "../../components/NewUser";
import { onAuthStateChanged, signOut } from "firebase/auth";
import HeaderComponent from "../../components/HeaderComponent";
import { useNavigate } from "react-router-dom";

import * as C from "./styles";
import TodoComponent from "../../components/TodoComponent";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [novoUsuario, setNovoUsuario] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [user, setUser] = useState<boolean>(false);
  const [userDetail, setUserDetail] = useState<any>({});

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("Usuário logado");
          setUser(true);
          setUserDetail({
            uid: user.uid,
            email: user.email,
            userName: user.displayName,
          });
          setUserName(user.displayName);
        } else {
          console.log("Usuário não logado");
          setUser(false);
          setUserDetail({});
          navigate("/");
        }
      });
    }
    checkLogin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const handleGetAll = async () => {
  //   const docRef = collection(db, "tasks");

  //   await getDocs(docRef)
  //     .then((snapshot) => {
  //       let lista: any = [];
  //       snapshot.forEach((doc) => {
  //         lista.push({
  //           id: doc.id,
  //           titulo: doc.data().titulo,
  //           autor: doc.data().autor,
  //         });
  //       });
  //       setPosts(lista);
  //       alert("Busca realizada com sucesso!");
  //     })
  //     .catch((error) => {
  //       alert(`Erro ao buscar os documentos: ${error}`);
  //     });
  // };

  

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        alert("Usuário deslogado com sucesso!");
      })
      .catch((error) => {
        alert(`Erro ao deslogar o usuário: ${error}`);
      });
  };

  return (
    <C.Container>
      <HeaderComponent>
        <h1>Bem vindo(a) {userName} </h1>
        <ButtonComponent
          text="Cadastrar novo usuário"
          onclick={() => setNovoUsuario(true)}
        />
        <ButtonComponent text="Sair" onclick={logout} />
      </HeaderComponent>
      <C.Content>
        <TodoComponent />
        {novoUsuario && (
          <Modal>
            <NewUser setNovoUsuario={setNovoUsuario} />
          </Modal>
        )}
      </C.Content>
      <img src="" alt="" />
    </C.Container>
  );
};

export default Home;
