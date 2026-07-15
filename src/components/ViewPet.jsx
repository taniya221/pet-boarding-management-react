import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewPet = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-pet").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )
  return (
    
         <div>
            <NavBar />
          
        <div className="container">

    <div className="row">
        <div className="col-12">

            <table className="table table-bordered">
                <thead>
                    <tr>
                            <th scope="col">Booking ID</th>
                            <th scope="col">Pet Name</th>
                            <th scope="col">Pet Type</th>
                            <th scope="col">Breed</th>
                            <th scope="col">Age</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Vaccination Status</th>
                            <th scope="col">Owner Name</th>
                            <th scope="col">Owner Phone</th>
                            <th scope="col">Owner Email</th>
                            <th scope="col">Check In Date</th>
                            <th scope="col">Check Out Date</th>
                            <th scope="col">Kennel Number</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                                <td>{value.bookingId}</td>
                                <td>{value.petName}</td>
                                <td>{value.petType}</td>
                                <td>{value.breed}</td>
                                <td>{value.age}</td>
                                <td>{value.weight}</td>
                                <td>{value.vaccinationStatus}</td>
                                <td>{value.ownerName}</td>
                                <td>{value.ownerPhone}</td>
                                <td>{value.ownerEmail}</td>
                                <td>{value.checkInDate}</td>
                                <td>{value.checkOutDate}</td>
                                <td>{value.kennelNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
</div>
    </div>
  )
}


export default ViewPet