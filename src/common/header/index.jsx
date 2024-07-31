import React from "react";

import './header.scss';
import { Link, NavLink } from "react-router-dom";

import headerlogo from '../../assets/logo/hemooz-logo.png'
import { BsCart3 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";




export default function Header() {
    const cartCount = useSelector(state => state.cart.count)
    const favCartCount = useSelector(state => state.favourite.favCount)
    return (
        <>
            <header>
                <div className="top-header">
                    <div className="top-header-left">
                        <div id="header-logo">
                            <img src={headerlogo} alt="logo" />
                        </div>
                    </div>
                    <div className="top-header-rigth">
                        <div id="search-bar">
                            <div className="search-icon">
                                <IoSearchOutline className="submit-search-icon" />
                            </div>
                            <input type="text" placeholder="Search HemoozMart" className="search-input" />
                        </div>
                        <div className="header-icon">
                            <Link to={"/cart"} className="icons cart-icon" >
                                <BsCart3 />
                                <div className="cart-count">
                                    <span>{cartCount}</span>
                                </div>
                            </Link>
                            <div className="icons favorite-icon">
                                <Link to={"/favourite"}>
                                    <MdFavoriteBorder />
                                    <div className="cart-count">
                                        <span>{favCartCount}</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="icons user-icon">
                                <Link to={"/"}>
                                    <FaRegUser />
                                </Link>
                                <span className="user-name">Sign In</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-bar-for-mobile">
                    <div id="search-bar">
                        <div className="search-icon">
                            <IoSearchOutline className="submit-search-icon" />
                        </div>
                        <input type="text" placeholder="Search HemoozMart" className="search-input" />
                    </div>
                </div>

                <div className="bottom-header">
                    <div className="nav-bar">
                        <nav>
                            <NavLink activeclassname="active" to={"/"} className="manu-item" >Home</NavLink>
                            <a className="manu-item">Groceries</a>
                            <a className="manu-item">Home & Kitchen</a>
                            <NavLink activeclassname="active" to={"/fashionpage"} className="manu-item" >Fashion</NavLink>
                            <a className="manu-item">Electronics</a>
                            <a className="manu-item">Beauty</a>
                            <a className="manu-item">All Categories</a>
                        </nav>

                    </div>
                </div>


            </header>
        </>
    )
}