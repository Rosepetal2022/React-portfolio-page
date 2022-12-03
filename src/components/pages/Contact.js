import React, { useState } from 'react'
import '../../style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { TabTitle, validateEmail } from '../../utils/helpers';

const Contact = () => {
    TabTitle('Contact');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit ran')
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log(formState)
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };
    return (
        <div className="contact-main-div">
            <h1 className="text-center font-second">Contact</h1>
            <div className="custom-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label className="font-second" column sm={2}>
                            Name:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control className="font" type="text" name="name" defaultValue={name} placeholder="Name" onBlur={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label className="font-second" column sm={2}>
                            Email:
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control className="font" type="email" name="email" defualtValue={email} placeholder="Email" onBlur={handleChange} />
                        </Col>
                    </Form.Group>
                    <FloatingLabel className="font" controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            name="message"
                            defualtValue={message}
                            onBlur={handleChange}
                            className="font"
                        />
                    </FloatingLabel>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <Button className="contact-button font" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Contact;