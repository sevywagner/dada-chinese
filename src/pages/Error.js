import Layout from '../components/layout/Layout';
import mainStyles from './../components/main.module.css';

const Error = () => {
    return (
        <div>
            <Layout>
                <h1 className={mainStyles.title}>404 not found</h1>
            </Layout>
        </div>
    );
}

export default Error;