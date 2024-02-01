
import login from '../api/login';
import BasePage from '../components/BasePage';
import Spinners from "react-spinners"
import { useState } from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../css/LoginPage.css'




const mobileLoginForm = () => {
    return (
        <>

        </>
    )
}


function desktopLoginForm(...props) {
    return (
        <>
            <div className="left-column">
                <p>This is meant to test this div and it's effects</p>
            </div>
            <div className='right-column'>
                <div>
                    <form onSubmit={props.handleLoginSubmit}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-2"
                            style={{ color: "gray" }}
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                            style={{ color: "gray" }}>
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </form>
                </div>
            </div>
        </>
    )
}




const LoginPage = ({ onLoginSuccess }) => {
    const [showForm, setShowForm] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showWelcome, setShowWelcome] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 768;

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            let res = await login();
            if (res.status !== 200) {
                setError('Invalid username or password');
                setIsLoading(false);
                return;
            }
            setShowForm(false);
            setTimeout(() => {
                setShowWelcome(true);
                setTimeout(() => {
                    setShowWelcome(false);
                    onLoginSuccess();
                }, 3000);
            }, 1000);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };

    const handleCallback = (childData) => {
        setWidth(childData)

    }


    return (
        <BasePage version="1.0" background="linear-gradient(0deg, #222629 0%, #ffffff00 50%, #222629 100%),
        linear-gradient(90deg, #222629,  40%, #86c232, 95%, #222629)" callbackFromParent2={handleCallback}>
            <div className="login-page">
                {width < breakpoint ? mobileLoginForm() : desktopLoginForm()}
            </div>
        </BasePage>
    )
};


export default LoginPage;