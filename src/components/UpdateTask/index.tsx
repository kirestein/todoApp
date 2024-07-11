import React from 'react';
import InputComponent from '../InputComponent';
import ButtonComponent from '../ButtonComponent';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConnetion';

// import { Container } from './styles';

interface IUpdateTaskComponentProps{
    task: string;
    setTask: (task: string) => void;
    id: string;
    setEditTask: (editTask: boolean) => void;
    user?: string | null;
    handleClose: () => void;
}

const UpdateTask: React.FC<IUpdateTaskComponentProps> = ({
    task,
    setTask,
    id,
    setEditTask,
    user,
    handleClose
}) => {

    const handleUpdate = async () => {
        const docRef = doc(db, "tasks", id);
        await updateDoc(docRef, {
          titulo: task,
          user: user,
        })
          .then(() => {
            setEditTask(false);
            setTask("");
          })
          .catch((error) => {
            alert(`Erro ao atualizar o documento: ${error}`);
          });
      };
    
    const handleDeleteTask = async () => {
        const docRef = doc(db, "tasks", id);
    
        await deleteDoc(docRef)
          .then(() => {
            alert("Documento deletado com sucesso");
            setEditTask(false);
            setTask("");
          })
          .catch((error) => {
            alert(`Erro ao deletar o documento: ${error}`);
          });
      };




  return (
    <>
      <InputComponent
        label="Task:"
        value={task}
        setValue={setTask}
        type="text"
      />
      <ButtonComponent text="Atualizar" onclick={handleUpdate} />
      <ButtonComponent text="Deletar" onclick={handleDeleteTask} />
      <ButtonComponent text="Close" onclick={handleClose} />
    </>
  );
}

export default UpdateTask;