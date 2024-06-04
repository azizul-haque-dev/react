import { createContext,useContext } from "react";

export const Todocontext = createContext({
    todos:[
        {
            id:1,
            todo :'Good morning',
            complete:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    completeTodo:(id)=>{}
})
export function useTodo(){
    return useContext(Todocontext)
}
export const TodoProvider = Todocontext.Provider