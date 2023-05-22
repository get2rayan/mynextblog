import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import Todo from '../components/Todo/Todo';
//import { TodoItems } from '../components/Todo/TodosData.js';

export default function App(){
    const [todosLst, setTodoLst]=useState([])
    const ref = useRef()

    useEffect(()=>{
        console.log('todoLst modified', todosLst)
    },[todosLst])

    const handleSubmit =(event)=>{
        event.preventDefault()
        setTodoLst(prevLst=>{
            return [...prevLst, {item : ref.current.value, complete : false}]
        })
        console.log('item added', todosLst)
        ref.current.value=""
    }

    return(
        //JSX
        <div className={styles.container}>
            <h2 className={styles.title}>
                This is TodoList page
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='item'>Add Item</label>
                    <input type="text" ref={ref} id='item' />
                </div>
                <input type="submit" />
            </form>
            <TodoList todos={todosLst} />
        </div>
    );    
}

function TodoList({todos}){
    const [todoLst, setTodoLst]=useState(todos)

    const handleToggle=(index)=>{
        let currTodos = [...todoLst]
        let selTodo = currTodos[index]
        selTodo.complete = !selTodo.complete
        setTodoLst(currTodos)    
    }
    return (
        <div>
            {
              Array.isArray(todoLst) && todoLst.length>0 ? todoLst.map((todo, i) => {
                return(
                    <Todo key={i} todoItem={todo} toggleComplete={handleToggle.bind(this, i)}/> 
                    // toggleComplete can also refer a method though arrow function
                    // as toggleComplete={()=>handleToggle(i)}
                )
            }) : null }
        </div>
    )
}
