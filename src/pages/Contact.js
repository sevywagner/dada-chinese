import mainStyles from './../components/main.module.css';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
    return (
        <div>
            <p className={mainStyles.title}>Contact</p>
            <ContactForm />
        </div>
    );
}

export default Contact;