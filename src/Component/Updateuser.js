import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Updateuser = () => {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [role, roleChange] = useState("staff");

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
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
            <Link className="btn btn-cancel">Back</Link>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Updateuser;
