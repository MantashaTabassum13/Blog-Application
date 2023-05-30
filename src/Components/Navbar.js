import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 my-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">My Blog Space</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <Link to="/add" className='nav-link'>Add a Blog</Link>
                            <Link to="/ab" className='nav-link'>Read Blogs</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
