import React from "react";


class ChildComponent extends React.Component {
    
    state = {
        showJobs : false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDeleted = (job) => {
        this.props.deleteJob(job)

    }


    render(){
     
        let {arrJobs} = this.props
        let {showJobs} = this.state

        return (
           <>
                {showJobs === false ?
                    <div>
                        <button onClick={ () => this.handleShowHide() }>Show</button>
                    </div>
              
                :
                    <>
                    <div className="job-list">
                    {
                        arrJobs.map( (item, index) =>{
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} 
                                        <> </> <span onClick={ () => this.handleOnClickDeleted(item) }>X</span>
                                    </div>
                                )
                            }
                        )
                    }
                    </div>
                    <div>
                        <button onClick={ () => this.handleShowHide() } >Hide</button>
                    </div>
                    </>
                }
                
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props
//     return (
//        <div className="job-lists">
           
//             {
//                 arrJobs.map( (item, index) =>{
//                     if(item.salary >= 500){
//                         return (
                                                
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary }$
//                                 </div>

//                             )

//                     }
                    
//                 })
//             }

//        </div>
      

//     )
// }


export default ChildComponent;