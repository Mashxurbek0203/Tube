import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Channel.css'
import Sidebar from "../SideBar/Sidebar";
function Channel() {
  const [videos, setVideos] = useState([])
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(response => setVideos(response.splice(1, 15)))
}, [])
return (
<>
  <Sidebar/>
  <section className="channel">
    <div className="channel-wrapper">
      <div className="channel-intro">
        <div className="channel-intro__hero">
          <picture className="channel__hero-pic">
            <source srcSet="./img/Cover.webp 1x, ./img/Cover@2x.webp 2x" />
            <img src="./img/Cover.jpg 1x, ./img/Cover@2.jpg 2x" alt="channel-poster"
              className="channel-intro__hero-img" />
          </picture>
        </div>
        <div className="channel-intro__header">
          <div className="channel-intro__header-main-info header-main">
            <Link className="header-main__channel-link" to='/channel'>
            <picture className="header-main__pic">
              <source srcSet="./img/channel-pic.jpg 1x, ./img/channel-pic@2x.jpg 2x" />
              <img src="./img/channel-pic.jpg 1x, ./img/channel-pic@2x.jpg 2x" alt="channel-pic"
                className="header-main__img" />
            </picture>
            <p className="header-main__channel-title">Food & Drink <span
                className="header-main__channel-title-inner">245K subscribed</span></p>
            </Link>
            <div className="header-main__btns">
              <input type="checkbox" className="header-main__bell-check" id="bell-check" />
              <label htmlFor="bell-check" className="header-main__bell-label">
                <svg className="icon" width="22" height="26">
                  <use href="#bell-icon"></use>
                </svg>
              </label>
              <button className="header-main__subsc-btn">Subscribe 2.3m</button>
            </div>
          </div>
          <div className="channel-intro__body intro-body">
            <div className="intro-body__main">
              <nav className="intro-body__nav">
                <ul className="intro-body__nav-list">
                  <li className="intro-body__nav-item">
                    <NavLink to="/channel" activeClassName='intro-body__nav-item--active'
                      className="intro-body__nav-link">Home</NavLink>
                  </li>
                  <li className="intro-body__nav-item">
                    <NavLink to="/channel" activeClassName='intro-body__nav-item--activ'
                      className="intro-body__nav-link">Videos</NavLink>
                  </li>
                  <li className="intro-body__nav-item">
                    <NavLink to="/channel" activeClassName='intro-body__nav-item--activ'
                      className="intro-body__nav-link">Channels</NavLink>
                  </li>
                  <li className="intro-body__nav-item">
                    <NavLink to="/channel" activeClassName='intro-body__nav-item--activ'
                      className="intro-body__nav-link">Discussion</NavLink>
                  </li>
                  <li className="intro-body__nav-item">
                    <NavLink to="/channel" activeClassName='intro-body__nav-item--activ'
                      className="intro-body__nav-link">About</NavLink>
                  </li>
                </ul>
                <button type="button" className="intro-body__nav-search-btn">
                  <img src="../../img/search-ico.svg" alt="Search-icon" className="intro-body__nav-search-icon" />
                </button>
              </nav>
              <div className="intro-body__hero">
                <div >
                  <iframe width="440" height="250" src="https://www.youtube.com/embed/xJZa2_aldDs"
                    title="YouTube video player" frameBorder=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className="intro-body__hero-video"></iframe>
                </div>
                <div className="intro-body__hero-info">
                  <Link to="/video/2">
                    <h2 className="intro-body__hero-title">Choosing The Best Audio Player Software For Your Computer</h2>
                  </Link>
                  <p className="intro-body__hero-description">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                  <p className="intro-body__hero-dates">11k views  ·  6 months ago</p>
                </div>
              </div>
              <div className="intro-body__recommends recommended-channels">
                <h2 className="recommended-channels__header">Recommended channel</h2>
                <ul className="recommended-channels__list">
                  <li className="recommended-channels__item">
                    <Link to="/channel" className="recommended-channels__link">
                    <picture>
                      <source srcSet="./img/benson-channel.jpg 1x, ./img/benson-channel@2x.jpg 2x"/>
                      <img src="./img/benson-channel.jpg " alt="Benson" className="recommended-channel__img" />
                    </picture>
                    <p className="recommended-channel__title">Flora Benson</p>
                    </Link>
                  </li>
                  <li className="recommended-channels__item">
                    <Link to="/channel" className="recommended-channels__link">
                    <picture>
                    <source srcSet="./img/cobb-channel.jpg 1x, ./img/cobb-channel@2x.jpg 2x"/>
                      <img src="./img/cobb-channel.jpg " alt="cobb" className="recommended-channel__img" />
                    </picture>
                    <p className="recommended-channel__title">Violet Cobb</p>
                    </Link>
                  </li>
                  <li className="recommended-channels__item">
                    <Link to="/channel" className="recommended-channels__link">

                    <picture>
                    <source srcSet="./img/phillip-channel.jpg 1x, ./img/phillip-channel@2x.jpg 2x"/>
                      <img src="./img/phillip-channel.jpg " alt="phillip" className="recommended-channel__img" />
                    </picture>
                    <p className="recommended-channel__title">Phillip Mullins</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  <div className="related-videos">
    <h2 className="related-videos__title">Food & Drink videos</h2>
    {
      videos.length > 0 && <ul className="realted-videos__list">
        {
          videos.map(video => {
            return <li className="realted-videos__item">
          <Link to="/video/2" className="related-videos__link">
          <img src={video.url} alt={video.title} className="realted-videos__img"/>
          <div className="video-description">
          <p className="realted-videos__item-description ">Advertising Outdoors</p>
          <p className="video-description__details video-details">
            <span className="video-details__statistics">40k views  ·  4 months ago</span>
            <span className="video-details__channel-name">Food & Drink</span>
          </p>
          </div>
          </Link>
        </li>
            
          })
        }
      </ul>
    }
  </div>
  </section>
</>
)
}

export default Channel