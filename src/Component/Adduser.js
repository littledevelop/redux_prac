import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { functionAddUser } from "../Redux/Action";
import { useDispatch } from "react-redux";

const Adduser = () => {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [role, roleChange] = useState("staff");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    const userobj = {name, email, phone, role};
    console.log(userobj);
    dispatch(functionAddUser(userobj))
    navigate('/user');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header"></div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
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
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">Submit</button>
            <Link className="btn btn-cancel">Back</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
