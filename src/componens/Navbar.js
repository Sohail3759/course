import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}

              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">{props.aboutText}</Link>
                {/* <a className="nav-link" href="/aboutus">{props.aboutText}</a> */}

              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.color}`}>
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">{`Enable ${props.name} mode`}</label>
        </div>

      </nav>
    </div>
  )
}

Navbar.propTypesropTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "set about here"
}


