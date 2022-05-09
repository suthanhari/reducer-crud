// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Create() {


    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [parent, setParent] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        // axios.post("https://6275e78815458100a6a8bcee.mockapi.io/crud", {
        //     name: "",
        //     slug: "",
        //     parent: "",
        //     description: ""
        // })
        
        try {
            await axios.post("https://627658a9bc9e46be1a15c55a.mockapi.io/user", {
                name,
                slug,
                parent,
                description
            })
            // console.log(name,slug,parent,description);

        } catch (error) {
            console.log(error);
        }
        e.preventDefault();
    }




    return (
        <>
            <div className='row '>

                <div className='col-md-6'>
                    <div className="mb-3 mt-3">
                        <Link to={'/userlist'}>
                            <button className='btn btn-primary btn-lg'>Userlist</button>
                        </Link>
                    </div>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name='name' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="slug" className="form-label">Slug</label>
                            <input type="text" className="form-control" id="slug" name='slug' onChange={(e) => setSlug(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="parent" className="form-label">Parent</label>
                            <input type="text" className="form-control" id="parent" name='parent' onChange={(e) => setParent(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" name='description' onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <button type="submit"  className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create