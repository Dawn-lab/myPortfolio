import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from "./../119094618_padded_logo-removebg-preview.svg";
// import logo from "./../119094618_padded_logo-removebg-preview.ico"
// import logo from "./../119094618_padded_logo-removebg-preview.png"


export default function Footer() {
    return (
        <>
            <footer className="mt-40 bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="https://myportfolio-nine-rho.vercel.app/" className="my-links flex items-center">
                                <img src={logo} className="h-14 mr-3" alt="JGI Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark">Let's code</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark">TOOLS OF WORK</h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://nodejs.org/en" className="my-links hover:dark my-links">Node JS</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://www.typescriptlang.org/" className="my-links hover:dark">TypeScript</a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindcss.com/" className="my-links hover:dark my-links">Tailwind CSS</a>
                                    </li>
                                    <li className="mb-4">
                                        <span className='mt-4'>Basically MERN Stack</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark">More tools</h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://git-scm.com/" className="hover:dark my-links my-links">Git</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://www.mongodb.com/" className="hover:dark my-links my-links">MongoDB</a>
                                    </li>
                                    <li>
                                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="hover:dark my-links my-links">JavaScript</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark">Follow me</h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/Dawn-Lab" className="hover:dark my-links my-links">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://discordapp.com/users/Julieus#3692" className="hover:dark my-links my-links">Discord</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark">Legal</h2>
                                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/" className="hover:dark my-links">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/" className="my-links hover:dark my-links">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="my-links text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/Dawn-lab/" className="hover:dark my-links">Julius Githinji</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="https://github.com/Dawn-lab/" className="my-links text-gray-500 hover:text-gray-900 dark:hover:dark">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/julieus/" className="my-links text-gray-500 hover:text-gray-900 dark:hover:dark">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://twitter.com/Julieus_G" className="my-links text-gray-500 hover:text-gray-900 dark:hover:dark">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}