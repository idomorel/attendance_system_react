


import React, { useState, useEffect } from 'react';
import getTeachers from '../api/teachers';
import BasePage from '../components/BasePage';


const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await getTeachers();
        setTeachers(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (isLoading) return <BasePage version='1.1'><div>Loading...</div></BasePage>;
  if (error) return <div>Error: {error}</div>;

  return (
    <BasePage version="0.5">
    <div>
      <h1 style={{paddingBottom: "40px"}}>Teachers</h1>
      {/*<h1>{JSON.stringify(teachers)}</h1>*/}
      <table className='table table-dark table-hover'>
        <thead className='thead-dark'>
        <th scope='col'>Teacher ID</th>
        <th scope='col'>Name</th>
        <th scope='col'>Email</th>
        <th scope='col'>Phone</th>
        <th scope='col'>Address</th>
        </thead>
        
        <tbody>

      
      {teachers ? teachers.map(teacher => (
          <tr key={teacher.teacherId}>
            <td>{teacher.teacherId}</td>
            <td>{teacher.name}</td>
            <td>{teacher.email}</td>
            <td>{teacher.phone}</td>
            <td>{teacher.address}</td>
        </tr>
      )): <h1>No Available Teachers</h1>}
      </tbody>
      </table>
    </div>
    </BasePage>
  );
}

export default TeachersPage;
