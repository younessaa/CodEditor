import React, { useState,  } from 'react';
import { useDispatch } from 'react-redux';

import { updateStudent } from '../actions/student';
import { updateTutor } from '../actions/tutor';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Profil = () => {

    const [isStudent, setIsStudent] = useState(JSON.parse(localStorage.getItem('isStudent')));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user)
    const dispatch = useDispatch();

    const [profil, setProfil] = useState({...user.result, firstName: user.result.name.split(" ")[0], lastName: user.result.name.split(" ")[1]});
    
    const handleChange = (e) => {
        setProfil({ ...profil, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(profil) {
            isStudent.result ? dispatch(updateStudent(profil._id, profil)) : dispatch(updateTutor(profil._id, profil));
            alert("Votre profil mis à jour");
        }
    }

    return (
        <>
            <Header />

            <div className='container p-4 m-4'>
                <div className='row justify-content-md-center'>
                    <div className='col-5'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">Prénom</label>
                                <input value={profil.firstName} onChange={handleChange} type="text" className="form-control" name="firstName" id="firstName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Nom</label>
                                <input value={profil.lastName} onChange={handleChange} type="text" className="form-control" name="lastName" id="lastName" />
                            </div>
                            {
                                isStudent.result &&
                                <div className="form-group">
                                    <label htmlFor="sector">Filière</label>
                                    <input value={profil.sector} onChange={handleChange} type="text" className="form-control" name="sector" id="sector" />
                                </div>
                            }
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input value={profil.email} onChange={handleChange} type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Profil
