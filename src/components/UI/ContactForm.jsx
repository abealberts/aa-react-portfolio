import { useState } from "react";
import { validateEmail } from '../../utils/helpers';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleInputChange = (e) => {

        //Get name & value of input event
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //Update state according to input information
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
            if (email) {
                handleEmailValidation(email)
            }
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    //Updates email field with error if invalid - used to render invalid email warning
    const handleEmailValidation = (e) => {
        if (!validateEmail(e)) {
            setValidEmail(false);
        } else {
            setValidEmail(true);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //Check for valid email / missing values
        if (!validateEmail(email) || !name || !message) {
            setError('Please enter a valid email address and try again.');
            setSuccess('')
            return;
        } else if (!name || !message) {
            setError('Please be sure to enter your name and leave a message before submitting.');
            setSuccess('')
            return;
        }

        //Reset form values on successful submission
        setName('');
        setEmail('');
        setMessage('');
        setError('');
        //Show success message
        setSuccess('Your message has been sent! Thanks for reaching out!');
    };

    return (
        <div className="mb-4">
            <form onSubmit={handleFormSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        className="input"
                        type="text"
                        placeholder="Please enter your full name"
                        />
                    </div>
                </div>
                {validEmail ? (
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            className="input"
                            type="email"
                            placeholder="Please enter your email address"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-right">
                            <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            className="input is-danger"
                            type="email"
                            placeholder="Please enter your email address"
                            />
                        </div>
                        <p className="help is-danger">This email is invalid</p>
                    </div>
                )}
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        className="textarea"
                        placeholder="Please enter your message"
                        />
                    </div>
                </div>
                {error ? (
                <div className="notification is-warning">{error}</div>
                ) : (<div></div>)}
                {success ? (
                <div className="notification is-success">{success}</div>
                ) : (<div></div>)}
                <div className="control">
                    <button className="button is-primary">Submit</button>
                </div>
            </form>
        </div>
        
    );
  }