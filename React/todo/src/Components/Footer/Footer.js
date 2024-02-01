import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className='container-fluid foot footer footer-expand-lg bg-body-tertiary'>
        <footer className="d-flex flex-wrap justify-content-around align-items-center py-3  border-top bg-light">
          <p className="col-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

          <ul className="nav justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
          </ul>
        </footer>
      </div>
    </>
  )
}
