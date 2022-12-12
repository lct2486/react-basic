import React from 'react'
import ChildComponent from './ChildComponent'
import OutputtingList from './OutputtingList'
import AddComponent from './AddComponent'


class MyComponent extends React.Component{

    state = {
        arrJob:[
            {id:"job1", title:"Develop", salary:'600000'},
            {id:"job2", title:"Manager", salary:'2100000'},
            {id:"job3", title:"Security", salary:'70000'}
        ]
    }    
  
    addNewJob = (job)=>{
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    delAJob = (job) => {
        let currentJob = this.state.arrJob;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currentJob
        })
    }
    
    render(){
        return(
            <> 
                <AddComponent addNewJob = {this.addNewJob}/>
                
                <OutputtingList arrJob={this.state.arrJob}  delAJob = {this.delAJob}/>
            </>
        )
    }
}

export default MyComponent;