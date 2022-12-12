import React from 'react'
import {withRouter} from "react-router";
import {connect} from 'react-redux';
class HomePage extends React.Component{
    // componentDidMount (){
    //     setTimeout(()=>{
    //         this.props.history.push('/Contact')
    //         console.log(">>>> check position")
    // }, 3000)
// }
    handleDelUser = (user) =>{
        //console.log(">>> check click", user);
        this.props.deleteUserRedux(user);
    }
    render(){
        console.log("check props:", this.props.dataRedux);
        let listUsers = this.props.dataRedux;

        return(
            <>
                <div>Hello world from Home Page</div>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item,index)=>{
                        return(
                            <div key={item.id}>
                                {index + 1} - {item.Name} <button onClick={()=> this.handleDelUser(item)}>x</button>
                            </div>
                        )
                    }
                    )}
            </>
        )        
    }
}

const mapStateToProps = (state) => {
    return{dataRedux: state.users}
}
const mapDispatchToProps  = (dispatch) => {
    return{
        deleteUserRedux: (userDelete)=> dispatch({type:'DELETE_USERS', payload: userDelete})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);