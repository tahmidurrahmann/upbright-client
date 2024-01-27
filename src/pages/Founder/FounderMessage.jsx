import SharedBanner from "../../shared/SharedBanner/SharedBanner";

const FounderMessage = () => {
    return (
        <div>
            <SharedBanner heading="Founder & CEO's Message" passage="Founder & CEO's Message" />
            <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-screen-xl mx-auto py-0 lg:py-28 px-8 2xl:px-0">  {/*--- main div of image ---*/}
                <img className="lg:h-[500px]" src="https://i.ibb.co/5kBj8yx/416125213-1588749148565538-4828389203211801692-n.jpg" alt="" />
                <div className="text-sm text-[#666666]">
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl lg:-mt-12">Message from <span className="text-[#E41937]">CEO & Founder</span></h1>
                    <div className="mt-2 flex bg-black h-0.5"></div>
                    <div>
                        <p className="pt-6">JOIN UPBRIGHT ACADEMY'S SPECIALIZED COACHING PROGRAM!

                            Dear HSC examinees,

                            Warm wishes and blessings from the entire UPBRIGHT ACADEMY family. In these challenging times, as you embark on the journey of making critical decisions for a successful career and fulfilling life ahead, we understand the deep emotional aspiration to become a physician.

                            For the past few years (11 October 2019; 5 October 2018), the medical admission test has been scheduled as the first among all undergraduate admission tests. This unique positioning allows you to prepare for Varsity exams following the medical admission test. Consequently, you must prepare for various institutions, considering the possibility of gaining admission to your desired medical college.

                            It's akin to navigating a ship without a rudder, and we strongly advise following textbooks, as most questions in medical admission tests are directly sourced from them. Choosing the right preparation center is crucial. Opt for one that emphasizes textbook-based preparation, offers optimal information, avoids unnecessary stress-inducing materials, and guides you effectively towards achieving your dream.

                            Evaluate UPBRIGHT ACADEMY based on its past experience and history of successful results. Consult with your senior peers in different medical and dental colleges to gain insights into the most suitable option for you. We believe that current students will highly appreciate UPBRIGHT ACADEMY for our continuous efforts, care, support, and unique teaching methods that have shaped the journey of aspiring physicians.

                            We are thrilled to announce that UPBRIGHT ACADEMY achieved unprecedented success and prosperity in 2019, and we are committed to surpassing those accomplishments in 2020. Our programs are better, more experienced, and well-equipped to guide you on your path to success. Choose UPBRIGHT ACADEMY - Your Path to Success Begins Here!</p>
                        <p className="font-bold pt-6">Thank you</p>
                        <p className="font-bold">Founder & CEO, UPBRIGHT ACADEMY</p>
                        <p className="font-bold pb-4">Salman Al Islam</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FounderMessage;