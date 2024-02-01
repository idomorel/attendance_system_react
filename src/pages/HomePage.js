import BasePage from '../components/BasePage';
import Button from 'react-bootstrap/Button';

import {Routes, Route, useNavigate} from 'react-router-dom';




const HomePage = () => {
  const navigate = useNavigate();
  return (
    <BasePage version="0.5">
      <h1 className='text-center' style={{paddingBottom: "20px"}}>Welcome to Attendance Manager!</h1>
      <div className='text-center'>
      <Button variant="primary" size='lg' onClick={() => {navigate('/login');}}>Primary</Button>{' '}
      </div>
      <h4 className='text-center' style={{paddingTop: "40px"}}>This system was written by Ido Morel. API and server in Node.js (express) and web Frontend in React</h4>
      
      {/* Rest of your home page content */}
    </BasePage>
  );
};

export default HomePage;