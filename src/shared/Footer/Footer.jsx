import { Link, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 pt-10 pb-6 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-teal-600 sm:justify-start">
                                <Link to="/"><img className="w-[68px] md:w-[85px]" src="https://i.ibb.co/hffRDND/Logo-AI-file-V6.png" alt="" /></Link>
                            </div>

                            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                                Empower your future with Upbright Academy – where personalized guidance meets academic excellence, fostering confidence, growth, and success.
                            </p>

                            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                <li>
                                    <a
                                        href="https://www.facebook.com/upbrightacademybd"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-[#0096dc] transition hover:text-[#0096dcc8]"
                                    >
                                        <FaFacebook size={26} />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.instagram.com/upbrightacademy_edu/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-red-600 transition hover:text-red-500"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <FaInstagram size={26} />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-teal-700 transition hover:text-teal-700/75"
                                    >
                                        {/* <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            />
                                        </svg> */}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900">About Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <NavLink className="text-gray-700 transition hover:text-gray-700/75" to="/whoWeAre">Who We are</NavLink>
                                    </li>

                                    <li>
                                        <NavLink className="text-gray-700 transition hover:text-gray-700/75" to="/ourSuccessStory">Our Success Story</NavLink>
                                    </li>

                                    <li>
                                        <NavLink className="text-gray-700 transition hover:text-gray-700/75" to="/ourTeachers">Our Teachers</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900">Helpful Links</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <NavLink className="text-gray-700 transition hover:text-gray-700/75" to="/notice">Notice & Info</NavLink>
                                    </li>

                                    <li>
                                        <NavLink className="text-gray-700 transition hover:text-gray-700/75" to="/news">News</NavLink>
                                    </li>

                                    <li>
                                        <NavLink className="text-gray-700 transition hover:text-gray-700/75" to="/founderMessage">Founder & CEO's Message</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center items-center md:mb-24">
                                <p className="text-lg font-medium text-gray-900">Contact Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li
                                        className="flex items-center justify-center gap-1.5">
                                        <div>
                                            <MdEmail size={20} />
                                        </div>
                                        <a className="flex-1 text-gray-700 hover:underline" href="mailto:edu.upbrightacademy@gmail.com">edu.upbrightacademy@gmail.com</a>
                                    </li>

                                    <li
                                        className="flex items-center justify-center gap-1.5 ">
                                        <IoIosCall size={20} />
                                        <span className="flex-1 text-gray-700">01632-208843</span>
                                    </li>

                                    <li
                                        className="flex items-center justify-center gap-1.5 "
                                    >
                                        <FaLocationDot size={20} />
                                        <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                                            2/6, Lalmatia Block B, Dhaka, Bangladesh
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-100 pt-6">
                        <div className="text-center">
                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 text-center">Copyright ©2024 Upbright Academy. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;