//Creamos una interfaz para definir la forma de una tarea
export interface Task {
    id?: number;  //? para indicar que es opcinal
    text: string;
    day: string;
    reminder: boolean;
}