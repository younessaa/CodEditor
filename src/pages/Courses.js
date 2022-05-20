import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CoursesTable from '../components/CoursesTable/CoursesTable';
import UsersOnligne from '../components/UsersOnligne/UsersOnligne';

const Courses = () => {

  return (
    <>
      <Header />

      <div className='container-fliud mt-3'>
        <div className='row'>
          <div className='col-8 ml-5 mr-1'>
            <CoursesTable />
          </div>
          <div className='col-3'>
            <UsersOnligne />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default Courses
