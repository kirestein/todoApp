import React from 'react';

// import * as C from './styles';
import ButtonComponent from '../ButtonComponent';
import InputComponent from '../InputComponent';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConnetion';

interface INewTaskComponentProps{
  task: string;
  setTask: (task: string) => void;
  id: string;
  setEditTask: (editTask: boolean) => void;
  user?: string | null
  handleClose: () => void;

}

const NewTaskComponent: React.FC<INewTaskComponentProps> = ({
  task,
  setTask,
  id,
  setEditTask,
  user,
  handleClose
}) => {

  const handleAdd = async () => {
    await addDoc(collection(db, "tasks"), {
      task: task,
      user: user,
    })
      .then(() => {
        alert("Documento adicionado com sucesso");
        setTask("");
      })
      .catch((error) => {
        alert(`Erro ao adicionar o documento: ${error}`);
      });
  };


  

  



  return (
    <>
      <InputComponent
        label="Título:"
        value={task}
        setValue={setTask}
        type="text"
      />
      <ButtonComponent text="Salvar" onclick={handleAdd} />
      <ButtonComponent text="Close" onclick={handleClose} />
    </>
  );
}

export default NewTaskComponent;