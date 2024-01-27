import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import "./styles.css"
import { FaHome } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
// import { CgLogOut } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
// import { FaPeopleGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
    );

    const handletoggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const [isOpen, setIsOpen] = useState(false);
    const navItems = <div className="flex flex-col lg:flex-row justify-center items-center mt-4 gap-2 lg:gap-0">
        <NavLink
            onClick={() => setIsOpen(false)}
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#0098dc] px-4 py-2 rounded-[30px] text-center text-white font-medium text-[13px] w-full md:w-3/4 lg:w-auto mt-20 lg:mt-0" : "hover:bg-[#0098dc] px-4 py-2 rounded-[30px] text-center hover:text-white font-medium text-[13px] text-[#333333] mt-20 lg:mt-0"
            }
        >
            <span className="flex justify-center items-center gap-1"><FaHome />Home</span>
        </NavLink>
        <div className="dropdown dropdown-hover w-full lg:w-auto">
            <div tabIndex={0} role="button" className="text-[#333333] hover:bg-[#0098dc] px-4 py-2 text-center rounded-[30px] hover:text-white font-medium text-[13px] w-full md:w-3/4 lg:w-auto mx-auto"><span className="flex justify-center items-center gap-1"><FaAngleDown />About Us</span></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu w-40 bg-base-100 shadow space-y-0.5">
                <NavLink
                    onClick={() => setIsOpen(false)}
                    to="/whoWeAre"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#0098dc] text-center text-white font-medium text-[13px] p-2" : "hover:bg-[#0098dc] p-2 text-center hover:text-white font-medium text-[13px] text-[#333333]"
                    }
                >
                    <span className="flex justify-evenly items-center gap-1"><TbListDetails size={20} />Who We are</span>
                </NavLink>
                <NavLink
                    onClick={() => setIsOpen(false)}
                    to="/ourSuccessStory"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#0098dc] text-center text-white font-medium text-[12px] p-2" : "hover:bg-[#0098dc] p-2 text-center hover:text-white font-medium text-[12px] text-[#333333]"
                    }
                >
                    <span className="flex justify-between items-center gap-1"><BsGraphUpArrow size={20} />Our Success Story</span>
                </NavLink>
                <NavLink
                    onClick={() => setIsOpen(false)}
                    to="/ourTeachers"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#0098dc] text-center text-white font-medium text-[12px] p-2" : "hover:bg-[#0098dc] p-2 text-center hover:text-white font-medium text-[12px] text-[#333333]"
                    }
                >
                    <span className="flex justify-center items-center gap-1"><GiTeacher size={20} />Our Teachers</span>
                </NavLink>
            </ul>
        </div>
        <NavLink
            onClick={() => setIsOpen(false)}
            to="/founderMessage"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#0098dc] px-4 py-2 rounded-[30px] text-center text-white font-medium text-[13px] w-full md:w-3/4 lg:w-auto" : "hover:bg-[#0098dc] px-4 py-2 rounded-[30px] text-center hover:text-white font-medium text-[13px] text-[#333333]"
            }
        >
            <span className="flex justify-center items-center gap-1"><MdOutlineAdminPanelSettings size={20} />Founder & CEO's Message</span>
        </NavLink>
        <div className="dropdown dropdown-hover w-full lg:w-auto">
            <div tabIndex={0} role="button" className="text-[#333333] hover:bg-[#0098dc] px-4 py-2 text-center rounded-[30px] hover:text-white font-medium text-[13px] w-full md:w-3/4 lg:w-auto mx-auto"><span className="flex justify-center items-center gap-1"><FaAngleDown />Gallery</span></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu w-40 bg-base-100 shadow space-y-0.5">
                <NavLink
                    onClick={() => setIsOpen(false)}
                    to="/photoGallery"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#0098dc] text-center text-white font-medium text-[13px] p-2" : "hover:bg-[#0098dc] p-2 text-center hover:text-white font-medium text-[13px] text-[#333333]"
                    }
                >
                    <span className="flex justify-evenly items-center gap-1"><MdPhotoLibrary size={20} />Photo Gallery</span>
                </NavLink>
                <NavLink
                    onClick={() => setIsOpen(false)}
                    to="/videoGallery"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#0098dc] text-center text-white font-medium text-[12px] p-2" : "hover:bg-[#0098dc] p-2 text-center hover:text-white font-medium text-[12px] text-[#333333]"
                    }
                >
                    <span className="flex justify-evenly items-center gap-1"><MdOndemandVideo size={20} />Video Gallery</span>
                </NavLink>
            </ul>
        </div>
        <NavLink
            onClick={() => setIsOpen(false)}
            to="/news"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#0098dc] px-4 py-2 rounded-[30px] text-center text-white font-medium text-[13px] w-full md:w-3/4 lg:w-auto" : "hover:bg-[#0098dc] px-4 py-2 rounded-[30px] text-center hover:text-white font-medium text-[13px] text-[#333333]"
            }
        >
            <span className="flex justify-center items-center gap-1"><FaRegNewspaper size={20} />News</span>
        </NavLink>
        <NavLink
            onClick={() => setIsOpen(false)}
            to="/notice"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#0098dc] px-4 py-2 rounded-[30px] text-center text-white font-medium text-[13px] w-full md:w-3/4 lg:w-auto" : "hover:bg-[#0098dc] px-4 py-2 rounded-[30px] text-center hover:text-white font-medium text-[13px] text-[#333333]"
            }
        >
            <span className="flex justify-center items-center gap-1"><TfiAnnouncement size={20} />Notice & Info</span>
        </NavLink>
        <NavLink
            onClick={() => setIsOpen(false)}
            to="/contactUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#0098dc] px-4 py-2 rounded-[30px] text-center text-white font-medium text-[13px] w-full md:w-3/4 lg:w-auto" : "hover:bg-[#0098dc] px-4 py-2 rounded-[30px] text-center hover:text-white font-medium text-[13px] text-[#333333]"
            }
        >
            <span className="flex justify-center items-center gap-1"><IoCallOutline size={20} />Contact Us</span>
        </NavLink>
        <NavLink
            onClick={() => setIsOpen(false)}
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#0098dc] px-4 py-2 rounded-[30px] text-center text-white font-medium text-[13px] w-full md:w-3/4 lg:w-auto" : "hover:bg-[#0098dc] px-4 py-2 rounded-[30px] text-center hover:text-white font-medium text-[13px] text-[#333333]"
            }
        >
            <span className="flex justify-center items-center gap-1"><CgLogIn size={20} />Login</span>
        </NavLink>
        <label className="swap swap-rotate">
            <input onChange={handletoggle} type="checkbox" />
            <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
        </label>
    </div>

    return (
        <div className="fixed z-10 w-full bg-white">
            <div className="px-6 2xl:px-0 max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center py-1">
                    <div>
                        <Link to="/"><img className="w-[68px] md:w-[85px]" src="https://i.ibb.co/hffRDND/Logo-AI-file-V6.png" alt="" /></Link>
                    </div>
                    <div className="hidden lg:flex">
                        {navItems}
                    </div>
                    <button
                        className="flex lg:hidden"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <HiOutlineMenuAlt3 size={26} className="text-black" />
                    </button>
                    <Drawer
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        position="right"
                    >
                        <div className="demo-content w-screen">
                            <button
                                type="button"
                                className="hover:scale-105 hover:bg-gray-400 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <IoMdClose size={30} />
                            </button>
                            {navItems}
                        </div>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default Navbar;