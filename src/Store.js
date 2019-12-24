import {createStore} from "redux";



const initialState = {
            "todolists": [
                {"id":0,"title":"evry day", tasks: []},
                {"id":1,"title":"tomorrow", tasks: []},
                {"id":2,"title":"sfdsdf", tasks: []},
            ]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case    "ADD-TODOLIST":
            return {
                ...state,
                todolists: [...state.totolists, action.newTodolist]

            }


case     "ADD-TASK":
    return {
        ...state,
        todolists: state.todolists.map(tl => {
            if (tl.id === action.todolistsId) {
                return {...tl, tasks: [...tl.tasks, action.newTask]}
            } else {
                return tl
            }
        })
    }
}
    console.log("reducer: ", action);
    return state;
}

const store = createStore(reducer);

export default store;




