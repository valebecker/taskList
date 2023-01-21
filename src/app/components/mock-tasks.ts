//Con este archivo vamos a emular la BD
//Creamos un arreglo que vamos a exportar para que puedan usarlo los componentes

import { Task } from "./Task"

export const TASKS: Task[] = [
    {
        id: 1,
        text: "Tarea 1",
        day: 'Agosto 5 a las 12:00',
        reminder: true
    },
    {
        id: 2,
        text: "Tarea 2",
        day: 'Agosto 10 a las 12:00',
        reminder: true
    },
    {
        id: 3,
        text: "Tarea 3",
        day: 'Agosto 15 a las 12:00',
        reminder: false
    },
    {
        id: 4,
        text: "Tarea 4",
        day: 'Marzo 5 a las 12:00',
        reminder: false
    },

]