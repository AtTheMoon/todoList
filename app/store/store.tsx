import { create } from "zustand";

export const useTodoStore = create((set, get:any) =>(
    {
        todos:[
                {
                    id: 123,
                    text: 'qwerty qwerty qwerty',
                    done: false,
                    isChanged: false
                }
            ],
            addTodo: (title: string, id: number) => set ((state: any) =>{
                const newTodo = {id: id, text: title, done: false, isChanged: false} 

                return {todos: [...state.todos, newTodo]}
            }),
            toggleTodo: (id:number) => set({
                todos: get().todos.map((todo:any) => id == todo.id ? {...todo, done: !todo.done} : todo)
            }),
            saveChange: (title: string | number, id:number) => set({
                todos: get().todos.map((todo:any)=> id == todo.id ? {...todo, text: title, isChanged: false} : todo)
            })
    }
))