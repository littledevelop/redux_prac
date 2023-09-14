import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchUserObj, functionUpdateUser } from '../Redux/Action';


const Updateuser = () => {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [id, idChange] = useState(0);
  const [role, roleChange] = useState("staff");
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const {code}  = useParams;

  const userobj=useSelector((state)=>state.user.userobj)

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(id)
    const userobj={id,name,email,role,phone};
    dispatch(functionUpdateUser(userobj,id))
    navigate('/user');
  }

  useEffect(()=>{
    dispatch(fetchUserObj(code));
  },[]);

  useEffect(()=>{
    if(userobj){
      console.log(userobj)
      idChange(userobj.id);
    }
  },[userobj])
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header" style={{ textAlign:'left' }}>
          <h2>Edit USer</h2>
        </div>
        <div className="card-body" style={{ textAlign:'left' }}>
        <div className="row">
        <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="">ID</label>
                  <input
                    type="text"
                    value={id}
                    onChange={e=>idChange(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e=>nameChange(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={e=>emailChange(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={e=>phoneChange(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="">Role</label>
                  <select
                    name=""
                    id=""
                    className="form-control"
                    value={role}
                    onChange={e=>roleChange(e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="staff">staff</option>
                    <option value="user">user</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">Submit</button>
            <Link className="btn btn-cancel" to={'/user'}>Back</Link>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Updateuser;
