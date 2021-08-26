import { Link, NavLink } from "react-router-dom";
import './Sidebar.css'

function Sidebar() {
return(
<>
  <div className="sidebar">
    <div className="sidebar-wrapper">
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-main-section main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/" className="main-nav__link sidebar__nav-link"
                  exact>
                  <svg className="icon" width="20" height="19">
                    <use href="#home-icon"></use>
                  </svg>
                  <span className="sidebar__link-text main-nav__link-text">Home</span>
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/page-not-found"
                  className="main-nav__link sidebar__nav-link">
                  <svg className="icon" width="16" height="21">
                    <use href="#trending-icon"></use>
                  </svg>
                  <span className="sidebar__link-text main-nav__link-text">Trending</span>
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/page-not-found"
                  className="main-nav__link sidebar__nav-link">
                  <svg className="icon" width="18" height="18">
                    <use href="#subscriptions-icon"></use>
                  </svg>
                  <span className="sidebar__link-text main-nav__link-text">Subscriptions</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="sidebar__nav-others-section others-nav">
            <ul className="others-nav__list">
              <li className="others-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/page-not-found"
                  className="others-nav__link sidebar__nav-link">
                  <svg className="icon" width="20" height="16">
                    <use href="#library-icon"></use>
                  </svg>
                  <span className="sidebar__link-text others-nav__link-text">Library</span>
                </NavLink>
              </li>
              <li className="others-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/page-not-found"
                  className="others-nav__link sidebar__nav-link">
                  <svg className="icon" width="20" height="18">
                    <use href="#history-icon"></use>
                  </svg>
                  <span className="sidebar__link-text others-nav__link-text">History</span>
                </NavLink>
              </li>
              <li className="others-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/page-not-found"
                  className="others-nav__link sidebar__nav-link">
                  <svg className="icon" width="17" height="19">
                    <use href="#later-icon"></use>
                  </svg>
                  <span className="sidebar__link-text others-nav__link-text">Watch later</span>
                </NavLink>
              </li>
              <li className="others-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/page-not-found"
                  className="others-nav__link sidebar__nav-link">
                  <svg className="icon" width="19" height="18">
                    <use href="#favourites-icon"></use>
                  </svg>
                  <span className="sidebar__link-text others-nav__link-text">Favourites</span>
                </NavLink>
              </li>
              <li className="others-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/page-not-found"
                  className="others-nav__link sidebar__nav-link">
                  <svg className="icon" width="18" height="17">
                    <use href="#like-icon"></use>
                  </svg>
                  <span className="sidebar__link-text others-nav__link-text">Liked videos</span>
                </NavLink>
              </li>
              <li className="others-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/page-not-found"
                  className="others-nav__link sidebar__nav-link">
                  <svg className="icon" width="18" height="20">
                    <use href="#music-icon"></use>
                  </svg>
                  <span className="sidebar__link-text others-nav__link-text">Music</span>
                </NavLink>
              </li>
              <li className="others-nav__item">
                <NavLink activeClassName="sidebar__nav-link--active" to="/page-not-found"
                  className="others-nav__link sidebar__nav-link">
                  <svg className="icon" width="22" height="16">
                    <use href="#games-icon"></use>
                  </svg>
                  <span className="sidebar__link-text others-nav__link-text">Games</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        <button type="button" className="sidebar__more-btn">
          <svg className="icon" width="18" height="8">
            <use href="#arrow-down-icon"></use>
          </svg>
          <span className="sidebar__link-text ">Show more</span>
        </button>
      </nav>
      <div className="sidebar__subscriptions subscriptions">
        <h2 className="subscriptions__title">Subscriptions</h2>
        <ul className="subscriptions__channels-list">
          <li className="subscriptions__channels-item">
            <Link to="/channel" className="subscriptions__channel-link">

            <picture className="subscriptions__channel-img">
              <source srcSet="./img/webps/1st-user.webp" type="image/webp" />
              <source srcSet="./img/1st-user.jpg 1x, ./img/1st-user@2x.jpg 2x" />
              <img src="./img/1st-user.jpg" alt="" className="subscriptions__channel-inner-img" />
            </picture>
            <span className="subscriptions__channels-name">Gussie Singleton</span>
            </Link>
          </li>
          <li className="subscriptions__channels-item">
            <Link to="/channel" className="subscriptions__channel-link">

            <picture className="subscriptions__channel-img">
              <source srcSet="./img/webps/2nd-user.webp" type="image/webp" />
              <source srcSet="./img/2nd-user.jpg 1x, ./img/2nd-user@2x.jpg 2x" />
              <img src="./img/2nd-user.jpg" alt="" className="subscriptions__channel-inner-img" />
            </picture>
            <span className="subscriptions__channels-name">Nora Francis</span>
            </Link>
          </li>
          <li className="subscriptions__channels-item">
            <Link to="/channel" className="subscriptions__channel-link">

            <picture className="subscriptions__channel-img">
              <source srcSet="./img/webps/3rd-user.webp" type="image/webp" />
              <source srcSet="./img/3rd-user.jpg 1x, ./img/3rd-user@2x.jpg 2x" />
              <img src="./img/3rd-user.jpg" alt="" className="subscriptions__channel-inner-img" />
            </picture>
            <span className="subscriptions__channels-name">Belle Briggs</span>
            </Link>
          </li>
          <li className="subscriptions__channels-item">
            <Link to="/channel" className="subscriptions__channel-link">

            <picture className="subscriptions__channel-img">
              <source srcSet="./img/webps/4th-user.webp" type="image/webp" />
              <source srcSet="./img/4th-user.jpg 1x, ./img/4th-user@2x.jpg 2x" />
              <img src="./img/4th-user.jpg" alt="" className="subscriptions__channel-inner-img" />
            </picture>
            <span className="subscriptions__channels-name">Eunice Cortez</span>
            </Link>
          </li>
          <li className="subscriptions__channels-item">
            <Link to="/channel" className="subscriptions__channel-link">

            <picture className="subscriptions__channel-img">
              <source srcSet="./img/webps/5th-user.webp" type="image/webp" />
              <source srcSet="./img/5th-user.jpg 1x, ./img/5th-user@2x.jpg 2x" />
              <img src="./img/5th-user.jpg" alt="" className="subscriptions__channel-inner-img" />
            </picture>
            <span className="subscriptions__channels-name">Emma Hanson</span>
            </Link>
          </li>
          <li className="subscriptions__channels-item">
            <Link to="/channel" className="subscriptions__channel-link">

            <picture className="subscriptions__channel-img">
              <source srcSet="./img/webps/6th-user.webp" type="image/webp" />
              <source srcSet="./img/6th-user.jpg 1x, ./img/6th-user@2x.jpg 2x" />
              <img src="./img/6th-user.jpg" alt="" className="subscriptions__channel-inner-img" />
            </picture>
            <span className="subscriptions__channels-name">Leah Berr2</span>
            </Link>
          </li>
        </ul>
      </div>
      <button type="button" className="sidebar__settings-btn">
        <svg className="icon" width="20" height="20">
          <use href="#settings-icon"></use>
        </svg>
        <span>settings</span>
      </button>
    </div>
  </div>
</>
)
}

export default Sidebar