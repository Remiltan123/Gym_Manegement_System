import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './SearchMember.css';

export const SearchMember = () => {
  const [Members, SetMembers] = useState([]);
  const [formId, setFormId] = useState("");
  const [Onemember, SetOneMember] = useState({});

  // Get All Members
  const feachMember = async () => {
    try {
      const response = await fetch("http://localhost:8080/SearchMember", {
        method: "GET",
        headers: {
          "Content-Type": 'application/json'
        }
      })

      if (response.ok) {
        const Data = await response.json();
        SetMembers(Data);
      } else {
        alert("Somethig error please try again later")
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    feachMember();
  }, [])

  // Get One Member
  const GetOneMember = async (Mid) => {
    try {
      const response = await fetch(`http://localhost:8080/Member/${Mid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const Data = await response.json();
        SetOneMember(Data);
      } else {
        alert("Member Not found");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMember = async(id)=>{
    try{
      const response = await fetch(`http://localhost:8080/RemoveMember/${id}`,{
        method:"DELETE",
        headers:{
          'Content-Type':'application/json'
        }
      })
      if(response.ok){
        alert("Deleted succesfully")
        feachMember();

      }else{
        alert("Member not found")
      }

    }catch(err){
      console.error(err)
    }
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formId) {
      GetOneMember(formId);
    } else {
      alert("Please enter a member ID");
    }
  };

  return (
    <div className='Member-Container'>
      <div className='Member-Search-Div'>
        <form className="d-flex" onSubmit={handleFormSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search member using Id"
            aria-label="Search"
            name='id'
            value={formId}
            onChange={(e) => setFormId(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>

      {/* One Members */}
      <div className='continer'>
        {Onemember.id && (
          <table className='table table-striped table-light table-hover'>
            <thead className='table-dark'>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th>Trainer</th>
                <th>Workout day</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{Onemember.id}</th>
                <td>{Onemember.name}</td>
                <td>{Onemember.email}</td>
                <td>{Onemember.address}</td>
                <td>{Onemember.trainer}</td>
                <td>{Onemember.workDay}</td>
                <td className='Action-buttons'>
                  <FaEdit className='edit-icon' />
                  <MdDelete className='delete-icon'/>
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {/* all Members*/}
        <div className='continer'>
          <table className='table table-striped table-light table-hover'>
            <thead className='table-dark'>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th>Trainer</th>
                <th>Workout day</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Members.map((member, index) => {
                return(
                <tr key={index}>
                  <th scope="row">{member.id}</th>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.address}</td>
                  <td>{member.trainer}</td>
                  <td>{member.workDay}</td>
                  <td className='Action-buttons'>
                    <FaEdit className='edit-icon' />
                    <MdDelete className='delete-icon'  onClick={()=>{deleteMember(member.id)}}/>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
};
