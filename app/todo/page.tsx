'use client'

import React, { useState } from 'react'
import {Form} from '../components/Form/Form'
import { Todo } from '../components/Todo/Todo'
import {ITodos} from '../components/types/types'
import { useTodoStore } from '../store/store'

const App = () => {

    const myTodos = useTodoStore((state: any) => state.todos)

    const addToStore = useTodoStore((state: any)=> state.addTodo)
    const toggleToStore = useTodoStore((state:any)=> state.toggleTodo)
    const saveToStore = useTodoStore((state:any)=> state.saveChange)
    
    
    const [todos, setTodos] = useState<ITodos[]>(myTodos)

    const addTodo = (val: string, id: number) =>{
        if(val){
            addToStore(val, id)
            setTodos([...todos, {id: id, text: val, done: false, isChanged: false}])
        }else{
            alert('Заполните поле, пожалуйста!')
        }
    }

    const toggleTodo = (id: number) =>{
      toggleToStore(id)
        setTodos(
            todos.map(todo=>{
                if(todo.id !== id) return todo
                else{
                    return {...todo, done: !todo.done}
                }
        })
    )
    }

    const deleteTodo = (id: number) =>{
        setTodos(
            todos.filter(todo => todo.id !==id)
        )
    }

    const toggleChange = (id:number) =>{
        setTodos(
            todos.map(todo=>{
                if(todo.id !== id) return todo
                else{
                    return {...todo, isChanged: !todo.isChanged}
                }
        })
    )
    }

    const saveChange = (title: string, id:number) =>{
      if(!title && title){
        alert ('Поле не может оставаться пустым!')
      }else{
        saveToStore(title, id)
        setTodos(
            todos.map(todo=>{
                if(todo.id !== id) return todo
                else{
                    return{...todo, text: title, isChanged: false}
                }
            })
        )
      }
    }

  return (
    <div className='home'>
        <div className="home__container">
            <div className="home__title">Список заданий</div>
            <Form addTodo={addTodo}></Form>
            <div className="home__content">
                {todos.map((el, ind)=>{
                    return(
                        <Todo key={ind} id={el.id} text={el.text} done = {el.done} isChanged = {el.isChanged} toggleTodo={toggleTodo} toggleChange={toggleChange} deleteTodo={deleteTodo} saveChange={saveChange}></Todo>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default App

