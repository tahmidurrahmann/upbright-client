import { Helmet } from "react-helmet-async";
import FAQs from "../FAQs/FAQs";
import Specification from "../Specification/Specification";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HOME | UPBRIGHT</title>
            </Helmet>
            <Specification />
            <FAQs />
        </div>
    );
};

export default Home;