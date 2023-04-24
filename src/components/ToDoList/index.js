import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import './styles.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
    }

   addNewItem = (data) => {
    const {todoList} = this.state;
    this.setState({
        todoList: [...todoList,{
            ...data,
            id: todoList.length
        }]
    })
   }

   changeDoneItem = (newIsDone, id) => {
    const {todoList} = this.state;
    const newList = todoList.map((td) => {
        if (td.id === id) {
            td.isDone = newIsDone
        }
        return td
    });
    this.setState({
        todoList: newList
    })
   }

   changeTextItem = (newText, id) => {
    console.log(newText, id);
    const {todoList} = this.state;
    const newList = todoList.map((td) => {
        if (td.id === id) {
            td.todoBody = newText
        }
        return td
    });
    this.setState({
        todoList: newList
    })
   }


   deleteItem = (id) => {
    const {todoList} = this.state;
    const filtered = todoList.filter(td => td.id !== id);
    this.setState({
        todoList: filtered
    })
   }

    render() {
        const {todoList} = this.state;
        const liMap = todoList.map(todo => <ToDoItem 
                                                todo={todo} key={todo.id} 
                                                change={this.changeDoneItem}
                                                delete={this.deleteItem}
                                                changeText={this.changeTextItem} />)
        return (
            <>
                <ToDoForm callback={this.addNewItem}/>
                <ul className='container'>
                {liMap}
                </ul>
            </>
        );
    }
}

export default ToDoList;



/*
Реалізувати:
1. Можливість оновлення isDone в кожної ToDoItem окремо
2. Можливість видалення ToDoItem

*/




/*
Задачка з *:
Покращити ToDoList, додавши сортування елементів по найближчому дедлайну


*/