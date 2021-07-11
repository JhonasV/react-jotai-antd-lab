import {atom, useAtom} from 'jotai';
import { message } from 'antd'
import { ITodo } from '../models/todo';

const todosAtom = atom<ITodo[]>([]);

const addTodoAtom = atom("", (get, set, msg: string ) => set(todosAtom, addTodo(get(todosAtom), msg)))
const removeTodoAtom = atom("", (get, set, id: number) =>  set(todosAtom, removeTodo(get(todosAtom), id)))
const updateTodoAtom = atom("", (get, set, id: number)  => set(todosAtom, updateTodo(get(todosAtom), id) ))



  const addTodo = (todos: ITodo[],value: string) : ITodo[] => {

    message.success("Todo added!");

    return [
        ...todos,
        {
           id: todos.length + 1,
           completed: false,
           message: value,
         }
       
   ];
  }

  const updateTodo = (todos: ITodo[], id: number): ITodo[] => {
    message.success("Todo Updated");
    return todos.map((item) => ({
      ...item,
      completed: item.id === id ? !item.completed : item.completed,
    }));

  };

  const removeTodo = (todos: ITodo[], id: number): ITodo[] => {
    message.error("Todo removed");
    return todos.filter((item) => item.id !== id);
  }

// hooks
  export const useTodosAtom = () => useAtom(todosAtom);
  export const useAddTodoAtom = () => useAtom(addTodoAtom);
  export const useRemoveTodoAtom = () => useAtom(removeTodoAtom);
  export const useUpdateTodoAtom = () => useAtom(updateTodoAtom);