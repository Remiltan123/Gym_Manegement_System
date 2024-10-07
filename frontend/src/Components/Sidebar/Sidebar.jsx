import React, { useState } from 'react'
import { FaUser, FaCcAmazonPay, FaHome, FaSearch } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md"
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import { SearchMember } from '../SearchMember/SearchMember';

export const Sidebar = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false); 
   

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen); 
    };

    return (
        <>
            <div className='sidebar-contianer'>
                <div>
                    <h3>Admin Dashboad</h3>
                    <hr />
                </div>
                <ul className='sidebar-ul'>

                    <NavLink to='AddMember' className={({ isActive }) => isActive ? 'active-link' : 'non-active'}>
                        <li>
                            <FaUser />
                            <span >Add Member</span>
                        </li>
                    </NavLink>

                    <NavLink to='Trainer' className={({ isActive }) => isActive ? 'active-link' : 'non-active'}>

                        <li>
                            <MdSportsGymnastics />
                            <span>Add Trainer</span>
                        </li>

                    </NavLink>

                    <NavLink to='Equipment' className={({ isActive }) => isActive ? 'active-link' : 'non-active'}>
                        <li>
                            <GiWeightLiftingUp />
                            <span>Add Equipment</span>
                        </li>
                    </NavLink>

                    <NavLink to='Payment' className={({ isActive }) => isActive ? 'active-link' : 'non-active'}>
                        <li>
                            <FaCcAmazonPay />
                            <span>Payment</span>
                        </li>
                    </NavLink>

                    <li onClick={handleSearchClick} className='search-li'>
                        <FaSearch />
                        <span>Search</span>
                    </li>

                    {isSearchOpen && (
                        <div className='search-options'>
                            <NavLink to="SearchMember" className={({isActive})=> isActive ? 'active-link' : 'non-active'}>
                                <li >Member</li>
                            </NavLink>
                            <li >Trainer</li>    
                            <li > Equipment</li>
                               
                        </div>
                    )}


                    <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'non-active'}>
                        <li>
                            <IoLogOut />
                            <span>LogOut</span>
                        </li>
                    </NavLink>
                </ul>
            </div>


        </>
    )
}

