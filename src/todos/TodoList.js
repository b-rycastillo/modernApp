import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './ToDoList.css';

const TodoList = ( { todos = [ {text: 'Hello' } ] } ) => (
    <div className="list-wraper">
        <NewTodoForm/>
        { todos.map( todo => < TodoListItem todo={ todo } /> )}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});
export default connect( newStateProps, ) (TodoList);