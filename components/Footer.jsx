import React from 'react';
import { AiFillAlipaySquare, AiFillAppstore, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>ALL RIGHTS RESERVED 2022</p>
      <p>@ ADIEL THAIRU</p>
      <p className="icons">
        <AiFillAppstore/>
        
      </p>
    </div>
  )
}

export default Footer
