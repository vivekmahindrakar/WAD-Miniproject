import React, { useState,useContext, useEffect} from 'react'
import Axios from 'axios'
import './style.css'

const Users = () => {
    const [data,setData] = useState([]);

    useEffect(()=>
    {
        Axios.get('/users').then(res =>
            {
                setData(res.data);
            })
            .catch(err=>
                {
                    console.log(err);
                })
    })
  return (
    <div className='Table_of_users'>

    <table class="main-table">
    <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Event</th>
    </tr>
        {
            data.map(dataItem =>
            (
                <tr key={dataItem._id}>
                    <td> {dataItem.FirstName}</td>
                    <td> {dataItem.LastName}</td>
                    <td> {dataItem.Email}</td>
                    <td> {dataItem.Type_of_event}</td>
                </tr>
            ))
        }
    </table>
    </div>
  )
}

export default Users