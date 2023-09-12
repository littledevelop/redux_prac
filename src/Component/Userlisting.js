import React, { useEffect } from 'react';
import { fetchUserList, removeUser } from '../Redux/Action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Userlisting = (props) => {
  useEffect(()=>{
props.loaduser();
console.log(props)
  },[]);
const handledelete=(code)=>{
if(window.confirm('Do You Want To Delete User')){
props.removeuser(code);
props.loaduser();
toast.success('User Removed Successfully');
}
}

  return (
    props.user.loading?<div><h2>loading...</h2></div>:
    props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div> :
        <div>
       <div className="card">
          <div className="card-header">
            <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>
          </div>
          <div className="card-body">
<table className="table table-bordered">
  <thead className='bg-dark text-white'>
    <th>Code</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Role</th>
    <th>Action</th>
  </thead>
  <tbody>
    {
      props.user.userlist && props.user.userlist.map(item=>
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.role}</td>
          <td><Link to={'/user/edit/'+item.id} className='btn btn-primary'>Edit</Link>  &nbsp; 
          <button onClick={()=>handledelete(item.id)} className="btn btn-danger">Delete</button>
          </td>
        </tr>
        )
    }
  </tbody>
</table>
          </div>
        </div> 
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    user:state.user
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    loaduser:()=>dispatch(fetchUserList()),
    removeuser:(code)=>dispatch(removeUser(code))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Userlisting);
