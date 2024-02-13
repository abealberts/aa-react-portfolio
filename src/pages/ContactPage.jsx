import ContactForm from '../components/UI/ContactForm';

export default function ContactPage() {
    return (
      <div className="container">
        <div className="content">
            <h2>Let's Get In Touch!</h2>
            <div className='box'>
            <ContactForm />
            </div>
        </div>
      </div>
    );
  }