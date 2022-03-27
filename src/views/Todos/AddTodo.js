import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component{
        state = {
            title: ''
        }

        handleOnChangeTitle = (event) => {
       
            this.setState({
                title : event.target.value
            })

        }
        handleAddTodo = () => {
            if(!this.state.title){
                // (undefined/null/empty) => false
     
                toast.error('Missing title todo')
                return;
            }

            let todo = {
                id: Math.floor(Math.random()* 10000),
                title: this.state.title
            }

            this.props.addNewTodo(todo)
            this.setState({
                title: ''
            })
        }

        render(){

            let {title} = this.state;
            return(
                <div className="add-todo">
                    <input type="text" value={this.state.title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                    />
                    <button type="button" className="add" onClick={() => this.handleAddTodo()}>
                         Add 
                    </button>
                </div>
            )
        }

}

export default AddTodo

// npm install --save-exact react-toastify@8.0.2 (cài thư viện hiển thị thông báo)