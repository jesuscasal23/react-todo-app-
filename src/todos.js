import React from "react"

const Todos = (props) => {
    const{todos} = props;
    const{deleteTodo} = props;
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <button className="right" onClick={() => {deleteTodo(todo.id)}}>Delete</button>
                </div>
            )
        })
    ) : (
        <p className="center">you have no todo's left, yay!</p>
    )
    return (
        <div className= "todos collection">
            {todoList}
        </div>  
    )
}

export default Todos