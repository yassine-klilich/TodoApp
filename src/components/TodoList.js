import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import TodoItem from './TodoItem'

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../style.css';

class TodoList extends Component {
    componentDidMount()
	{ 
		$('[data-toggle="tooltip"]').tooltip({
            placement:"top", 
            title:"Add TODO", 
            trigger:"hover", 
            delay: { 'show': 600 }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="clearfix">
                    <button className="btn btn-primary float-right rounded-circle plus" data-toggle="tooltip">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="todo-container">
                    <TodoItem/>
                </div>
            </div>
        )
    }
}

export default TodoList;
