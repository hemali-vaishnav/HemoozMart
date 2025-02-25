import React from 'react'

import './footer.scss'

import footerlogo from '../../assets/logo/hemooz-logo.png'

export default function Footer() {
  return (
    <>
      <div className="footer">
        

        <div className="copyright">
          <div className="footer-logo">
            <img src={footerlogo} alt="logo" />
          </div>
          <p>© 2024 All rights reserved. Hemooz Retail Ltd.</p>
        </div>
      </div>
    </>
  )
}
