import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={20} />
                </>
            ),
            href: 'https://www.linkedin.com/in/ayolanre/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={20} />
                </>
            ),
            href: 'https://github.com/oluwatob1',

        },
        {
            id: 3,
            child: (
                <>
                    <FaTwitter size={20} />
                </>
            ),
            href: 'https://twitter.com/oluwat0b1',

        },
        {
            id: 4,
            child: (
                <>
                    <HiOutlineMail size={20} />
                </>
            ),
            href: 'mailto:codesbytobi@gmail.com',

        },

    ];

    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <p className="text-center">© 2024 codesByTobi. All rights reserved.</p>
                <div className="flex justify-center mb-4">
                    <ul className='flex justify-between items-center '>
                        {links.map(({ id, child, href, style, download }) => (
                            <li
                                key={id}
                                className={`mx-2 hover:scale-105 duration-300 ${style}`}
                            >
                                <a
                                    href={href}
                                    download={download}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <>
                                        {child}
                                    </>
                                </a>
                            </li>

                        ))}

                    </ul >
                </div>
            </div>
        </footer>
    );
};

export default Footer;