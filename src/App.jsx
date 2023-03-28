import { faAddressBook, faCheck, faCoffee, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Title , Input, Button, Flex, Container, Spacer, Item, Emoji} from './styles/styles';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

  

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  console.log(list);

  if (list) {
      return JSON.parse(localStorage.getItem('lists'));
  } else {
    [];
  }
}

function App() {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState(getLocalItems());

const addTask = () => {
  if(!task) return toast.error('Digite uma tarefa!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  toast.success('Tarefa adicionada com sucesso!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  const newTask = {
    id: Math.random(),
    task: task,
    checked: false,
  }

  setListTask([...listTask, newTask])
  setTask('');
}

const removeTask = (id) => {
    toast.success('Tarefa removida com sucesso!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  const newList = listTask.filter(task => task.id != id);
  setListTask(newList);
}

const toggleChecked = (id, checked) => {
  toast.success('Tarefa concluída, parabéns!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",})

    const index = listTask.findIndex((task) => task.id == id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
    ;

  }
  
useEffect(() => {
  localStorage.setItem('lists', JSON.stringify(listTask))
}, [listTask]);

  return (
    <Container>
      <Flex direction= "row">
        <Emoji>&#9997;</Emoji>
        <Title>To-Do List</Title>
      </Flex>
      <Spacer/>
      <Flex direction= "row">
        <Input 
        value={task}
        placeholder= '&#128210; Qual a tarefa de hoje?' 
        onChange={(e) => setTask(e.target.value)}/>
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer/>
      <ul>
        {Object.keys(listTask).map((task) => (
        <>
          <Item checked={task.checked} key= {task.id}>
            <p>{task.task}</p>
              <Flex direction="row">
                <button onClick={() => {toggleChecked(task.id, task.checked)}}>
                  <FontAwesomeIcon icon={faCheck}/>
                </button>
                <button onClick={() => {removeTask(task.id)}}>
                  <FontAwesomeIcon icon={faTrashCan}/>
                </button>
              </Flex>
          </Item>
          <Spacer margin="10px"/>
        </>
        ))}  
      </ul>
    </Container>
  )
}

export default App
