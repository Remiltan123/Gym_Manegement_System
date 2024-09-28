import React from 'react'
import { FaUser, FaCcAmazonPay } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md"
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import './Sidebar.css'

export const Sidebar = () => {
    return (
        <div className='sidebar-contianer'>
            <div>
                <h3>Admin Dashboad</h3>
                <hr />
            </div>
            <ul className='sidebar-ul'>
                <li>
                    <FaUser />
                    <span >Add Member</span>
                </li>
                <li>
                    <MdSportsGymnastics />
                    <span>Add Trainer</span>
                </li>
                <li>
                    <GiWeightLiftingUp />
                    <span>Add Equipment</span>
                </li>
                <li>
                    <FaCcAmazonPay />
                    <span>Payment</span>
                </li>
                <li>
                    <IoLogOut />
                    <span>LogOut</span>
                </li>
            </ul>
        </div>
    )
}

