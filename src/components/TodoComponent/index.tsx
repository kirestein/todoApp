import React, { useState, useEffect } from 'react';
import { auth, db } from "../../firebase/firebaseConnetion";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import * as C from './styles';
import InputComponent from '../InputComponent';
import ButtonComponent from '../ButtonComponent';
import Modal from '../Modal';
import NewTaskComponent from '../NewTaskComponent';
import UpdateTask from '../UpdateTask';


const TodoComponent: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [task, setTask] = useState<string>('');
  const [id, setId] = useState<string>('')
  const [editTask, setEditTask] = useState<boolean>(false)
  const [newTask, setNewTask] = useState<boolean>(false)


  useEffect(() => {
    async function loadTasks() {
      await onSnapshot(collection(db, "tasks"), (snapshot) => {
        let lista: any = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            task: doc.data().task,
            user: doc.data().user
          });
        });
        setTasks(lista);
      });
    }

    loadTasks();
  }, []);

  const [item, setItem] = useState<string>('')

  const handleEdit = async (post: any) => {
    setEditTask(true);
    setTask(post.task);
    setId(post.id);
  };

  const handleClose = () => {
    setTask("");
    setEditTask(false);
    setNewTask(false);
  };

  // const handleGetById = async () => {
  //   const docRef = doc(db, "tasks", id);

  //   await getDoc(docRef).then((snapshot) => {
  //     setTask(snapshot.data()?.titulo);
  //   });
  // };

  

  




  return (
    <C.Container>
      <C.Line>
      <InputComponent
        type="text"
        placeholder="Digite um item"
        label='Buscar item'
        value={item}
        setValue={setItem}
      />
      <ButtonComponent 
        onclick={() => setNewTask(true)} 
        text='Nova Task' 
      />
      </C.Line>
      <C.Ul>
      <C.H2>Tasks</C.H2>
      {
        tasks.map((task) => {
          return (
            <C.Li key={ task.id }>
                <C.Text>
                <C.H3>{ task.task }</C.H3> <br />
                Criada por {task.user}
                </C.Text>
                <C.Buttons>
                  <ButtonComponent
                  text={<FontAwesomeIcon icon={faPenToSquare}/>}
                    onclick={() => handleEdit(task)}
                  />
                  <ButtonComponent
                    text={<FontAwesomeIcon icon={faTrash}/>}
                    onclick={() => handleEdit(task)}
                  />
                </C.Buttons>
            </C.Li>
          )
        })
      }
      {
        newTask && (
          <Modal>
            <NewTaskComponent
              task={task}
              setTask={setTask}
              id={id}
              setEditTask={setEditTask}
              user={auth.currentUser?.displayName}
              handleClose={handleClose}
            />
          </Modal>
        )
      }
      {
        editTask && (
          <Modal>
            <UpdateTask
              task={task}
              setTask={setTask}
              id={id}
              setEditTask={setEditTask}
              user={auth.currentUser?.displayName}
              handleClose={handleClose}
            />
          </Modal>
        )
      }
    </C.Ul>
    </C.Container>
  );
}

export default TodoComponent;


