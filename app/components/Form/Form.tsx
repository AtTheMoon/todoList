import React, { FC, useState } from 'react'
import style from '../Form/Form.module.scss'


interface IFormProps{
    addTodo: (e: string, id: number) => void
}

export const Form: FC<IFormProps> = ({addTodo}) => {

    const [value, setValue] = useState('')

  return (
    <form
        onClick={(e)=>{e.preventDefault()}}
        className={style.form}>
        <div className={style.form__container}>
            <input type="text" name="" placeholder='Введите текст' value={value}
                onChange={(e)=>{setValue(e.target.value)}}
            />
            <input type="submit" 
                onClick={()=>{
                    addTodo(value, Date.now())
                    setValue('')
                }}
            />
        </div>
    </form>
  )
}