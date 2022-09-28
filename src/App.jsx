import { Container, Input, Button, Flex, Spacer, Item } from "./styles";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([])

  const addTask = () => {
    if (!task) return toast.error('Preencha uma tarefa!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    }

    setListTask([...listTask, newTask])
    setTask("");

    if (task) return toast.success('Tarefa adicionada com sucesso!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  }

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);

    if (newList) return toast.warn('Tarefa apagada com sucesso!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,

    });
  }

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex(task => task.id === id)
    const newList = listTask
    newList[index].checked = !checked
    setListTask([...newList])

  }

  return (
    <Container>
      <h1 className="title">
        TO-DO LIST
      </h1>
      <Spacer />

      <Flex direction="row">
        <Input value={task} placeholder="Digite sua tarefa"
          onChange={(e) => setTask(e.target.value)} />
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer margin="16px" />

      <ul>
        {listTask.map((task) => (
          <>
            <Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  <i class='bx bxs-check-square'></i>
                </button>
                <button onClick={() => removeTask(task.id)}>
                  <i class='bx bxs-trash-alt'></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}

      </ul>
      <ToastContainer />
    </Container>
  )
}

export default App;
