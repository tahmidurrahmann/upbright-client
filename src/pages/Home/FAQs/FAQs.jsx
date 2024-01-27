import { MdQuestionAnswer } from "react-icons/md";

const FAQs = () => {
    return (
        <div className="py-20 max-w-screen-xl mx-auto px-4 2xl:px-0">
            <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4">
                <div className="space-y-4 flex-1">
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                        >
                            <h2 className="font-medium">What are the qualifications and experience of your instructors?</h2>

                            <svg
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="flex justify-center items-center gap-4 mt-4 px-4 leading-relaxed text-gray-700">
                           <div><div><MdQuestionAnswer size={26} /></div></div> <span>Our instructors are highly qualified and experienced in their respective fields. You can learn more about each instructor on our About Us page, where we provide detailed profiles.</span>
                        </p>
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                        >
                            <h2 className="font-medium">Can I view the class schedule online?</h2>

                            <svg
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="flex justify-center items-center gap-4 mt-4 px-4 leading-relaxed text-gray-700">
                        <div><MdQuestionAnswer size={26} /></div>  Yes, you can view and download the class schedule from our Class Schedule page. We keep it updated regularly to provide you with the latest information on class timings and dates.
                        </p>
                    </details>
                </div>
                <div className="space-y-4 flex-1">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                        >
                            <h2 className="font-medium">How can I contact your coaching center for more information?</h2>

                            <svg
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="flex justify-center items-center gap-4 mt-4 px-4 leading-relaxed text-gray-700">
                        <div><MdQuestionAnswer size={26} /></div> You can reach us through our Contact Us page, where you'll find our address, phone number, and an online contact form. Feel free to get in touch with any questions or inquiries.
                        </p>
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                        >
                            <h2 className="font-medium"> Are there any extracurricular activities or events organized by the coaching center?</h2>

                            <svg
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>

                        <p className="flex justify-center items-center gap-4 mt-4 px-4 leading-relaxed text-gray-700">
                        <div><MdQuestionAnswer size={26} /></div>  Yes, we regularly organize extracurricular activities and events to enhance the overall learning experience. Stay updated on our Blog/News section for announcements and details about upcoming events.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default FAQs;