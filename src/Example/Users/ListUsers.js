import React from 'react'
import axios from 'axios'
import "./ListUser.scss"
import {withRouter} from 'react-router-dom'
class ListUsers extends React.Component{
    state = {
        listUsers:[]
    }
    async componentDidMount(){
    
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })

     }

    handleOnClick = (data)=>{
        this.props.history.push(`/users/${data.id}`)
        console.log(">> check props", this.props);
    }
    render(){
        let {listUsers} = this.state;
       
        return(
            <div className='list-users'>
                <div className='title'>Fetch all list users:</div>
                <div className='user-data'>
                    {listUsers && listUsers.length>0 && 
                    listUsers.map((item,index)=>{
                        return(
                            <div className='child-1' key={item.id} onClick={()=> this.handleOnClick(item)}>
                                <span>{index + 1} - {item.first_name} - {item.last_name}</span>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(ListUsers);