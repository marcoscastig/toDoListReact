import { Select, Input, Button, Grid, Header, Icon} from 'semantic-ui-react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const options = [
  { key: "deporte", text: "Deporte", value: "deporte" },
  { key: "casa", text: "Casa", value: "casa" },
  { key: "ocio", text: "Ocio", value: "ocio" },
  { key: "depoestudiorte", text: "Estudio", value: "estudio" },
  { key: "oficina", text: "Oficina", value: "oficina" },
  { key: "otra", text: "Otra", value: "otra" },
]

export default function InputTask(props) {
    const [task, setTask] =useState({
        idTask: "",
        taskName:"",
        categoryTask: ""
    });

    const [error, setError] = useState(false);

    const {createTask}= props;

    const onChangeTask = (e)=> {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    const onChangeCategoryTask = (e, data)=> {
        setTask({
            ...task,
            [data.name]: data.value
        })
    }
    //console.log(task)
    const onSubmitTask = (e) =>{
        e.preventDefault();
        if(task.taskName.trim()=== ""){
            setError(true);
            return
        }
        
        setError(false)

        task.idTask =uuidv4()
       // console.log(uuidv4())
        createTask(task)

        setTask ({

            idTask: "",
            taskName:"",
            categoryTask: ""
        })

        console.log(task)


    }

    return (
        <>
        <div></div>
        <Grid centered columns={2}>
            <Input type='text' action >
                <Input
                size='small'
                icon='add'
                placeholder=' Escribe tu tarea...'
                iconPosition='left'
                name='taskName'
                value={task.taskName}
                onChange={onChangeTask}
                
                />
                <Select
                compact
                 options ={options}
                className='select-form-task'
                name='categoryTask'
                placeholder='Categoria'
                value={task.categoryTask}
                onChange={onChangeCategoryTask}
                />
                <Button type='submit' color='violet' onClick={onSubmitTask} >Agregar Tarea</Button>
            </Input>
        </Grid>
        {error && (
            <Grid centered>
                <br></br>
                <Header as="h4" color="red" className="alert-error-form">
                    <Icon name="close" />
                    <Header.Content>La tarea es obligatoria</Header.Content>
                    <Icon name="close" />
                </Header>    
                    
            </Grid>
            
        )}
        </>
    )
}