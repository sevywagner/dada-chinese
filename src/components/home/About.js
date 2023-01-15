import mainStyles from './../main.module.css';

const About = () => {
    return (
        <div className={mainStyles.wrap}>
            <div className={mainStyles['half-width-block']}>
                <p className={mainStyles.subtitle}>More About Us</p>
                <hr />
                <p className={mainStyles.pg}>Dada Chinese is a leader in today’s PreK-2 online Mandarin learning industry. We’re committed to providing unparalleled access to high quality live online classes to kids from 2-8 years old to their parents, grandparents, and caregivers. Our courses are well-designed to tailor young learners' curiosity, creativity, and capability. Through years of experience, our high interactive online courses make learning fun, engaging and effective.</p>
            </div>
        </div>
    );
}

export default About;