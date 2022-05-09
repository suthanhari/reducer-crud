import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {

    const [fetchData, setFetchData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

            const response = await axios.get("https://627658a9bc9e46be1a15c55a.mockapi.io/user");
                setFetchData(response.data);
                console.log(response.data);

            } catch (err) {
                console.log("Err", err);
            }

        }
        fetchData();
        // axios.get(`https://627658a9bc9e46be1a15c55a.mockapi.io/user`)
        // .then((response)=>{
        //     setFetchData(response.data);
        //     console.log(response.data);
        // })
        // .catch((err)=>{
        //     console.log("Err:",err)
        // })
    }, []);





    return (
        <>
            <div className='row '>

                <div className='col-md-6'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Parent</th>
                                <th scope="col">Description</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                fetchData.map((data) => {
                                    return <tr>
                                        {/* <td>{index}</td> */}
                                        <td>{data.name}</td>
                                        <td>{data.slug}</td>
                                        <td>{data.parent}</td>
                                        <td>{data.description}</td>
                                        
                                        <td>
                                            
                                            <button className='btn btn-sm btn-primary me-2'>Edit</button>
                                            <button className='btn btn-sm btn-primary'>Delete</button>
                                        </td>
                                    </tr>

                                })

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserList