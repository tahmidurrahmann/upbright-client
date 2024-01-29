import SharedBanner from "../../shared/SharedBanner/SharedBanner";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./ContactUs.css"

const ContactUs = () => {

    const handleSendEmail = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <SharedBanner heading="Contact Us" passage="Contact Us" />
            <div className="pt-6 pb-10 md:pt-20 px-4 2xl:px-0"><SharedHeading heading="Contact Us" /></div>
            <div className="bg-[#f6f6f6] shadow-xl">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row px-4 2xl:px-0 items-start lg:items-center justify-center lg:justify-between py-28 gap-6">
                    <div className="flex items-center justify-center gap-4">
                        <FaLocationDot className="text-[#0096dc]" size={46} />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-xl">Address</h1>
                            <p className="text-medium text-neutral-950">2/6, Lalmatia Block B, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <IoIosCall className="text-[#0096dc]" size={46} />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-xl">Contact Number</h1>
                            <p className="text-medium text-neutral-950">01632-208843</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <MdEmail className="text-[#0096dc]" size={46} />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-xl">Email</h1>
                            <a className="flex-1 text-gray-700 hover:underline" href="mailto:edu.upbrightacademy@gmail.com">edu.upbrightacademy@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center max-w-screen-xl mx-auto gap-12 py-12 md:py-24">
                <div className="flex-1 px-4 2xl:px-0">
                    <form onSubmit={handleSendEmail} className="mt-4 form-container p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="input-container flex-1 w-full">
                                <input className="py-1.5" required id="input" type="text" name="name" />
                                <label className="label -my-2" htmlFor="input">Your Name</label>
                                <div className="underline"></div>
                            </div>
                            <div className="input-container flex-1 w-full">
                                <input className="py-1.5" required id="input" type="email" name="email" />
                                <label className="label -my-2" htmlFor="input">Your Email Address</label>
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="input-container flex-1 w-full">
                                <input className="py-1.5" required id="input" type="text" name="subject" />
                                <label className="label -my-2" htmlFor="input">Subject Field</label>
                                <div className="underline"></div>
                            </div>
                            <div className="input-container flex-1 w-full">
                                <input className="py-1.5" required id="input" type="number" name="phone" />
                                <label className="label -my-2" htmlFor="input">Phone Number</label>
                                <div className="underline"></div>
                            </div>
                        </div>
                        <textarea placeholder="Your Message" className="w-full p-4 border-2 border-gray-200 rounded-lg mt-6 hover:border-[#0098dc]" name="message" id="input" cols="30" rows="10" required></textarea>
                        <div className="flex justify-center items-center">
                            <button type="submit" className="button"><i className="animation"></i>Send Message <FaMessage /><i className="animation"></i>
                            </button>
                        </div>
                    </form>

                </div>
                <div className="flex-1" style={{ width: '100%' }}>
                    <iframe
                        width="100%"
                        height="600"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Upbright%20Academy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.maps.ie/population/">Find Population on Map</a>
                    </iframe>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;