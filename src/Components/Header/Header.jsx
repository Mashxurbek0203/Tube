import {Link} from "react-router-dom"
import './Header.css'
function Header() {
return(
<header className="main-header">
  <div className="header__container">
    <button className="header__burger-btn">
      <span className="visually-hidden"></span>
      <span></span>
    </button>
    <Link to="/" className="header__logo-link"><img src="../img/main-logo.svg" alt="" /></Link>
    <div className="header__search-wrapper"><input type="search" className="header__search-input"
        placeholder="Search" /><span className="header__search-icon"><img src="../img/search-ico.svg"
          alt="" /></span></div>
    <div className="header__personal-wrapper">
      <Link to="/page-not-found" className="header__personal-link">
        <svg className="icon" width="27" height="20">
          <use href="#cam-icon"></use>
        </svg>
      </Link>
      <Link to="/page-not-found" className="header__personal-link">
        <svg className="icon" width="21" height="21">
          <use href="#menu-icon"></use>
        </svg>
      </Link>
      <Link to="/page-not-found" className="header__personal-link">
        <svg className="icon" width="22" height="26">
          <use href="#bell-icon" ></use>
        </svg>
      </Link>
      <Link to="/" className="header__personal-link " exact="true">
        <picture >
          <source srcSet="../img/account-img.webp" type="image/webp" />
          <img src="../img/account-img.jpg" alt="account-img"  className="header__personal-account-link"/>
          </picture>
      </Link>
    </div>
  </div>
</header>
)
}

export default Header