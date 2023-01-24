import { useParams } from "react-router";
import classes from "../components/classes/dummy-classes";
import mainStyles from './../components/main.module.css';

const OurClassesDetail = () => {
    const params = useParams();
    const classData = classes.find((c) => c.id === params.classId);

    return (
        <div>
            <p className={mainStyles.title}>{classData.name}</p>
        </div>
    );
}

export default OurClassesDetail;