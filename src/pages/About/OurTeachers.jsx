import SharedBanner from "../../shared/SharedBanner/SharedBanner";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";

const OurTeachers = () => {
    return (
        <div>
            <SharedBanner heading="Our Teachers" passage="Our Teachers" />
            <div className="pt-8 md:pt-20 px-4 lg:px-6 2xl:px-0"><SharedHeading  heading="Our Teachers"/></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 2xl:px-0 md:gap-8 lg:gap-12 max-w-screen-xl mx-auto py-12">
                <img className="rounded-lg" src="https://i.ibb.co/Y0Wk4vX/Salman-Poster.jpg" alt="" />
                <img className="rounded-lg" src="https://i.ibb.co/6wM1FFL/Tanvir-Poster.jpg" alt="" />
                <img className="rounded-lg" src="https://i.ibb.co/QMVLHcC/Rakib-Poster.jpg" alt="" />
                <img className="rounded-lg" src="https://i.ibb.co/dGPjVtW/416111892-1337514850233560-8955557412001043929-n.jpg" alt="" />
                <img className="rounded-lg" src="https://i.ibb.co/XkqBGGn/Mazhar-Poster.jpg" alt="" />
                <img className="rounded-lg" src="https://i.ibb.co/sq7BcWj/Sifat-Poster.jpg" alt="" />
                <img className="rounded-lg" src="https://i.ibb.co/Fb5VhJJ/Mahbuba-Poster.jpg" alt="" />
                <img className="rounded-lg" src="https://i.ibb.co/t2vHwtc/Imran-Poster.jpg" alt="" />
            </div>
        </div>
    );
};

export default OurTeachers;