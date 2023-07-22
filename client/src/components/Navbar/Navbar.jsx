import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector} from "react-redux"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import "./Navbar.scss"

const Navbar = () => {

  const[open,setOpen] = useState(false)
  const products = useSelector(state=>state.cart.products)

  return (
    <div className='navbar'>
        <div className='wrapper'>

            <div className='left'>
                <div className='item'>
                    <img src="/public/images/Ind.webp" className='logo-img'/>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className='item'>
                    <span>INR</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className="link" to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/2">Men</Link>
                </div>
                
            </div>

            <div className='center'>
                <Link className="link" to="/">QSTORE</Link>
            </div>

            <div className='right'>
                <div className='item'>
                    <Link className="link" to="/">Sale</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/">Contact</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="/">Stores</Link>
                </div>
                <div className='icons'>
                    <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className="cartIcon" onClick={()=>setOpen(!open)}>
                        <ShoppingCartOutlinedIcon/>
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar