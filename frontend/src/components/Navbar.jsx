import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // ← Viteならここでimport
import '../styles/Navbar.css'

const Navbar = () => {
  useEffect(() => {
    const collapseEl = document.getElementById('navbarNav');
    const navbar = document.querySelector('.navbar');

    const handleShow = () => {
      navbar?.classList.add('expanded-bg');
    };

    const handleHide = () => {
      navbar?.classList.remove('expanded-bg');
    };

    collapseEl?.addEventListener('show.bs.collapse', handleShow);
    collapseEl?.addEventListener('hide.bs.collapse', handleHide);

    return () => {
      collapseEl?.removeEventListener('show.bs.collapse', handleShow);
      collapseEl?.removeEventListener('hide.bs.collapse', handleHide);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg py-3 fixed-top bg-transcript">
      <div className="container">
        <a className="navbar-brand accent fs-4" href="/">Meat Freshness Classification</a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto navber-items text-end">
            <li className="nav-item underline-hover mx-2">
              <a className="nav-link accent" aria-current="page" href="/">ホーム</a>
            </li>
            <li className="nav-item underline-hover mx-2">
              <a className="nav-link accent" href="/profile">プロフィール</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
