import React from "react";

class AddComponent extends React.Component {
    state = {
      title: '',
      salary: ''
    }
   
    handleChangeTitle = (event) => {
        this.setState({
            title : event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
    }



render(){
     return(
            <form>
            <label htmlFor="fname">First name:</label><br />
            <input type="text" value={this.state.title} 
            onChange={(event)=> this.handleChangeTitle(event)} />
            <br/>
            <label htmlFor="lname">Last name:</label>
            <br /> 
            <input type="text" value={this.state.salary} 
            onChange={(event) => this.handleChangeSalary(event)} />
            <br/><br/>
            <input type="submit" value="Submit" 
            onClick={(event) => this.handleSubmit(event)}
            />
            </form> 
        )
    }

}

export default AddComponent