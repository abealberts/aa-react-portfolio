import { useState } from "react";
import { validateEmail } from '../../utils/helpers';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    }

    return (
      <div className="container">
        <div className="content">
            <h2>Let's Get In Touch!</h2>
            <ContactForm />
        </div>
      </div>
    );
  }