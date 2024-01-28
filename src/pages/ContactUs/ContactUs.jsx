import SharedBanner from "../../shared/SharedBanner/SharedBanner";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div>
            <SharedBanner heading="Contact Us" passage="Contact Us" />
            <div className="pt-12 pb-16 md:pt-20 px-4 2xl:px-0"><SharedHeading heading="Contact Us" /></div>
            <div className="bg-[#f6f6f6]">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row px-4 2xl:px-0 items-start lg:items-center justify-center lg:justify-between py-32 gap-6">
                    <div className="flex items-center justify-center gap-4">
                        <FaLocationDot className="text-[#0096dc]" size={46} />
                        <div  className="flex flex-col gap-2">
                            <h1 className="font-bold text-xl">Address</h1>
                            <p className="text-medium text-neutral-950">2/6, Lalmatia Block B, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <IoIosCall className="text-[#0096dc]" size={46} />
                        <div  className="flex flex-col gap-2">
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
        </div>
    );
};

export default ContactUs;