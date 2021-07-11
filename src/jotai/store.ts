import {atom, useAtom} from 'jotai';
import { message } from 'antd'
import { ITodo } from '../models/todo';

const todosAtom = atom<ITodo[]>([]);
const newTodoAtom = atom<string>("");
const removeTodoAtom = atom<number>(0);
const updateTodoAtom = atom<number>(0);

const addNewTodoCallback = atom("", (get, set) => set(todosAtom, addTodo(get(todosAtom), get(newTodoAtom))))
const removeTodoCallback = atom("", (get, set) =>  set(todosAtom, removeTodo(get(todosAtom), get(removeTodoAtom))))
const updateTodoCallback = atom("", (get, set) => set(todosAtom, updateTodo(get(todosAtom), get(updateTodoAtom)) ))



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
  export const useAddTodoAtom = () => useAtom(newTodoAtom);
  export const useAddTodoCallback = () => useAtom(addNewTodoCallback);
  export const useRemoveTodoAtom = () => useAtom(removeTodoAtom)
  export const useRemoveTodoCallback = () => useAtom(removeTodoCallback);
  export const useUpdateTodoAtom = () => useAtom(updateTodoAtom);
  export const useUpdateTodoCallback = () => useAtom(updateTodoCallback);