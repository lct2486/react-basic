import React from "react";
import './PuttingList.scss'
import { toast } from 'react-toastify';
class OutputtingList extends React.Component{

    state = {
        showJobs: false,
        editTodo:{},
    }
    handleShowHilde = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDel = (job) => {
        console.log(">>>>>", job)
        this.props.delAJob(job);
        toast.success("Deleted data!")
    }
    handleEdit = (job) => {
        let {arrJob} = this.props;
        let {editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === job.id){
            let arrJobCopy = [...arrJob];
            let objIndex = arrJobCopy .findIndex((item=>item.id === job.id));
            arrJobCopy[objIndex].title = editTodo.title;
            arrJobCopy[objIndex].salary = editTodo.salary;
            this.setState({
                arrJob : arrJobCopy,
                editTodo:{}
            })
            toast.success("Updata Success")
            return;
        }
        this.setState({
            editTodo: job
        })
        // console.log(">>> check edit", job)
    }

    handleOnChangeTitle = (event)=>{
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    handleOnChangeSalary = (event)=>{
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.salary = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render(){
        let {arrJob} = this.props;
        let {showJobs,editTodo} = this.state;    
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // console.log(">>check emtpy object", isEmptyObj)
        return(
            <div className = "outputtinglist">
                {/* <div className = "test-list">Title 1 - Salary 1</div>
                <div className = "test-list">Title 1 - Salary 1</div>
                <div className = "test-list">Title 1 - Salary 1</div> */}
            {showJobs === false ? 
            <button onClick = {() => this.handleShowHilde()}>Show</button>
            : 
            <>
            <div className="jobs-list">
            {  arrJob.map((item,index) => {
                return(
                    <div className = "single-job" key = {item.id}>
                        {isEmptyObj === true ? 
                        <span>{index + 1}. {item.title} - {item.salary}</span>
                        :
                         <>
                            {   editTodo.id === item.id ? 
                                <span>{index + 1}. <input value = {editTodo.title} onChange = {(event)=> this.handleOnChangeTitle(event)}/> 
                                - <input value = {editTodo.salary} onChange ={(event)=> this.handleOnChangeSalary(event)}/>$  </span>
                                :
                                <span>{index + 1}. {item.title} - {item.salary}$</span>
                            }
                         </>
                        }
                        

                        
                        &nbsp; 
                        <button className ="edit" onClick = {() => this.handleEdit(item)}>
                            {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                        </button>

                        <button className = "delete" onClick = {() => this.handleOnClickDel(item)}>Delete</button>
                    </div>
                )
              })  
            }   
            </div>
            <button onClick = {() => this.handleShowHilde()}>Hide</button>
            </>
            }
            
        </div>
        )
    }
}

export default OutputtingList;