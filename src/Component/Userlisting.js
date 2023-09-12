import React from 'react';

const Userlisting = () => {
  return (
    <div>
       <div className="card">
          <div className="card-header">
            <h2>User Listing</h2>
          </div>
          <div className="card-body">
<table className="table table-bordered">
  <thead className='bg-dark text-white'>
    <tr>Code</tr>
    <tr>Name</tr>
    <tr>Email</tr>
    <tr>Phone</tr>
    <tr>Role</tr>
    <tr>Action</tr>
  </thead>
</table>
          </div>
        </div> 
    </div>
  );
}

export default Userlisting;
