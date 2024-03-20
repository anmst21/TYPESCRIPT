import axios from "axios";

interface Todos {
    id: number;
    title: string;
    completed: boolean;

}

const url = "https://jsonplaceholder.typicode.com/todos/1"

axios.get(url).then(response => 
    {
        const {id, title, completed} = response.data as Todos
        logTodo(id, title, completed)
    }
    )

    const logTodo =( id: number,title: string, completed: boolean) => {
                console.log(`Id: ${id}, TITLE:${title}, ISCOMPLETED: ${completed}`);

    }