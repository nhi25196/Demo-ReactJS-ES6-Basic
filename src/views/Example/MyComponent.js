import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    
    state = {
        arrJobs: [
            { id : 'job1', title : 'developer', salary: '500'},
            { id : 'job2', title : 'Testers', salary: '400'},
            { id : 'job3', title : 'Project Managers', salary: '1000'}
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent', job)

        // let currenJob = this.state.arrJobs
        // currenJob.push(job)

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currenJob = this.state.arrJobs;
        currenJob = currenJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJob
        })
    }


    render(){
        console.log('>>> call render' , this.state)
        return (
            
            <>
                <AddComponent 
                addNewJob = {this.addNewJob}
                />
                <ChildComponent
                arrJobs = {this.state.arrJobs}
                deleteJob = {this.deleteJob}
                />
            </>
      
        )
    }
}

export default MyComponent;