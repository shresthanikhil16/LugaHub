import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../assets/css/AdminProfile.css";

interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
    // Add other properties if needed
}

function AdminProfile() {
    const [userDetails, setUserDetails] = useState<UserDetails>({});

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {
            const userId = localStorage.getItem('userId');

            if (userId) {
                const response = await axios.get<UserDetails>(`http://localhost:8087/user/getById/${userId}`);
                setUserDetails(response.data);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };


    return (
        <div className={"Apro-container"}>
            <div className={"Apro-buttons"}>
                <div className={"Apro-top"}>
                    <a href="/admin/products">
                        <img src={"../images/Logo.png"}
                             width={100}
                             alt={"logo"}
                        />

                    </a>
                    <span>LugaHub</span>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={"Apro-btn"}>
                    <div className="ap-dropdown">
                        <button className="ap-dropbtn"><i className="fa-solid fa-clipboard"></i>Products<i className="fa-solid fa-caret-down" style={{ marginLeft: '57px' }}></i></button>
                        <div className="ap-dropdown-content">
                            <a href="/admin/products">View Product</a>
                            <a href="/admin/addproduct">Add Product</a>

                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-list"></i>Categories</button>*/}
                    <div className="cgr-dropdown">
                        <button className="cgr-dropbtn"><i className="fa-solid fa-list"></i>Categories<i className="fa-solid fa-caret-down" style={{ marginLeft: '40px' }}></i></button>
                        <div className="cgr-dropdown-content">
                            <a href="/admin/viewcategory">View Category</a>
                            <a href="/admin/addcategory">Add Category</a>
                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-tag"></i>Brands</button>*/}
                    <div className="brd-dropdown">
                        <button className="brd-dropbtn"><i className="fa-solid fa-tag"></i>Brands<i className="fa-solid fa-caret-down" style={{ marginLeft: '69px' }}></i></button>
                        <div className="brd-dropdown-content">
                            <a href="/admin/viewbrand">View Brand</a>
                            <a href="/admin/addbrand">Add Brand</a>
                        </div>
                    </div>
                    <Link to={"/admin/totalorders"}><button className={"products"}><i className="fa-solid fa-cart-shopping"></i>Total Orders</button></Link>
                    <Link to={"/admin/users"}><button className={"products"}><i className="fa-solid fa-users"></i>Users</button></Link>
                    {/*<button className={"products"}><i className="fa-solid fa-user"></i>Profile</button>*/}
                    <div className="pr-dropdown">
                        <button className="pr-dropbtn"><i className="fa-solid fa-user"></i>Profile<i className="fa-solid fa-caret-down" style={{ marginLeft: '70px' }}></i></button>
                        <div className="pr-dropdown-content">
                            <a href="/admin/profile">View Profile</a>
                            <a href="/admin/editprofile">Edit Profile</a>
                            <a href="/admin/changepassword">Change Password</a>
                        </div>
                    </div>
                    <Link to={"/admin/aboutus"}><button className={"products"}><i className="fa-regular fa-address-card"></i>About Us</button></Link>
                    <Link to={"/admin/login"}><button className={"products"}><i className="fa-solid fa-arrow-right"></i>Log Out</button></Link>
                </div>
            </div>
            <div className={"Apro-display"}>
                <h2>My Profile</h2>
                <div className={"Apro-display"}>
                    <h2>My Profile</h2>
                    <label>First name:</label>
                    <input type="text" value={userDetails.firstName} readOnly />
                    <label>Last Name:</label>
                    <input type="text" value={userDetails.lastName} readOnly />
                    <label>Email Address:</label>
                    <input type="text" value={userDetails.email} readOnly />
                </div>
            </div>
        </div>
    );
}

export default AdminProfile;