import React, { FC, useState } from 'react'
import style from '../Todo/Todo.module.scss'
import Link from 'next/link'

interface ITodoProps{
    id: number,
    text: string,
    done: boolean,
    isChanged: boolean,
    toggleTodo: (e: number) => void,
    toggleChange: (e: number) => void,
    saveChange: (str: string, id: number) => void,
    deleteTodo: (e: number) => void
}

export const Todo: FC<ITodoProps> = ({id, text, done, isChanged, toggleTodo, deleteTodo, toggleChange, saveChange}) => {

    const [str, setStr] = useState<string>('')

    return (
        <div className={style.todo}>
            <div className={style.todo__container}>
                <div className={done ? style.active : style.todo__text}>
                    {isChanged ? <input type="text" value={str}
                        onChange={(e)=>{setStr(e.target.value)}}
                    /> : text}</div>
                <div className={style.todo__btns}>
                    <button className={style.todo__btn}
                        onClick={() => toggleTodo(id)}
                    >Выполнено</button>
                    {isChanged ? 
                        <button className={style.todo__btn}
                            onClick={()=>{if(str.trim() !== ''){
                                saveChange(str, id)
                            }else{
                                setStr('')
                                alert('Поле не может оставаться пустым!')
                            }
                        }}
                        >Сохранить</button>:
                        <button className={style.todo__btn}
                            onClick={()=>{toggleChange(id); setStr(text)}}
                        >Изменить</button>
                    }
                    
                    <button className={style.todo__btn}
                        onClick={()=>{deleteTodo(id)}}
                    >Удалить</button>
                    <Link href={`/todo/${id}`}><button className={style.todo__btn}>Подробнее</button></Link>
                </div>
            </div>
        </div>
    )
    }