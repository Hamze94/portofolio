import React from 'react';

export default function Navbar() {
    return (
        <nav className='grid grid-cols-2 p-4 bg-slate-400'>
            <div>
                <a href="">HM</a>
            </div>
            <div className=''>
                <ul className='grid grid-cols-3 '>
                    <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">About me</a>
                    </li>
                    <li>
                        <a href="">Work</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
