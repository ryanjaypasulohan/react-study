import React from 'react'

const MainNavigation = () => {
    return (
        <ul className="flex justify-end gap-6">
            <li>
                <a className="text-gray-700 font-medium hover:text-blue-600 transition" href="#">Home</a>
            </li>
            <li>
                <a className="text-gray-700 font-medium hover:text-blue-600 transition" href="#">About</a>
            </li>
            <li>
                <a className="text-gray-700 font-medium hover:text-blue-600 transition" href="#">Services</a>
            </li>
            <li>
                <a className="text-gray-700 font-medium hover:text-blue-600 transition" href="#">Blog</a>
            </li>
            <li>
                <a className="text-gray-700 font-medium hover:text-blue-600 transition" href="#">Contact</a>
            </li>
        </ul>
    )
}

export default MainNavigation