import React from 'react'
import { toast } from 'react-toastify';
class AddComponent extends React.Component{
    state = {
        title:'',
        salary:'',
    }

    handleOnChangeName = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    hangleOnChangeAddress = (event)=>{
        this.setState({
            salary: event.target.value
        })
    }

    handleOnClickSubmit = (event) => {
        event.preventDefault();
        if(!this.state.title||!this.state.salary){
       
            toast.error("Missing required data")
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random()*1000),
            title: this.state.title,
            salary: this.state.salary
        })
        
        console.log(">>> check data submit:", this.state) 
        
        this.setState({
            title:'',
            salary:''
        })
        toast.success("Adding success")
    }
render(){
    return(
        <>
        <form action="/action_page.php">
                    <label htmlFor="fname">Title:</label><br></br>
                    <input type="text"
                    onChange={(event)=>this.handleOnChangeName(event)}
                    />
                    <br></br>

                    <label htmlFor="lname">Salary:</label><br></br>
                    <input type="text"
                    onChange={(event)=>this.hangleOnChangeAddress(event)}
                    />
                    <br></br>

                    <input type="submit" value="Submit"
                    onClick={(event)=>this.handleOnClickSubmit(event)}/>
                    </form>

        </>
    )
}
}

export default AddComponent;