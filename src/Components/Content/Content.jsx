import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Content.css'
import New from '../NewChannel/New'
import Sidebar from '../SideBar/Sidebar'


function HomeContent() {
const [videos, setVideos] = useState([])
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(response => setVideos(response.splice(1, 15)))
}, [])
return (
<>
<Sidebar/>
  <div className="main__content-wrapper">
    <section className="subscribed">
      <div className="section-header">
        <Link to="/channel" className="subscribed__hero general-hero">
        <picture className="subscribed__hero-pic general-hero__pic">
          <source type="image/webp" srcSet="./img/subscribed-channel.webp 1x, ./img/subscribed-channel@2x.webp 2x" />
          <source srcSet="./img/subscribed-channel.jpg 1x, ./img/subscribed-channel@2x.jpg 2x" />
          <img src="./img/subscribed-channel.jpg" alt="Dollie Blair"
            className="subscribed__hero-img general-hero__img" />
        </picture>
        <span className="subscribed__hero-title general-hero__title">Dollie Blair</span>
        </Link>
        <div className="section-header__btns-container">
          <button className="section-header__main-btn section-header__left-btn">
            <svg className="icon" width="7" height="11">
              <use href="#side-arr"></use>
            </svg>
          </button>
          <button className="section-header__main-btn section-header__right-btn">
            <svg className="icon" width="7" height="11">
              <use href="#side-arr"></use>
            </svg>
          </button>
        </div>
      </div>
      {
      videos.length > 0 &&
      <ul className="subscribed__videos-list">
        {videos.map(video => (
        <New key={video.id} videoId={video.url} itemClass="subscribed"/>
        ))}
      </ul>
      }
    </section>
    <section className="recommended">
      <div className="section-header">
        <h2 className="recommended__main-title">Recommended</h2>
        <div className="section-header__btns-container">
          <button className="section-header__main-btn section-header__left-btn">
            <svg className="icon" width="7" height="11">
              <use href="#side-arr"></use>
            </svg>
          </button>
          <button className="section-header__main-btn section-header__right-btn">
            <svg className="icon" width="7" height="11">
              <use href="#side-arr"></use>
            </svg>
          </button>
        </div>
      </div>
      {
      videos.length > 0 &&
      <ul className="recommended__videos-list">
        {videos.map(video => (
        <New key={video.url} videoId={video.url} itemClass="recommended"/>
        ))}
      </ul>
      }
    </section>
    <section className="new-channel">
      <div className="section-header">

        <Link to="/channel" className="new-channel__hero general-hero">
        <picture className="new-channel__hero-pic general-hero__pic">
          <source type="image/webp" srcSet="./img/subscribed-channel.webp 1x, ./img/subscribed-channel@2x.webp 2x" />
          <source srcSet="./img/subscribed-channel.jpg 1x, ./img/subscribed-channel@2x.jpg 2x" />
          <img src="./img/subscribed-channel.jpg" alt="Dollie Blair"
            className="new-channel__hero-img general-hero__img" />
        </picture>
        <span className="new-channel__hero-title general-hero__title hero-title">Food & Drink <span
            className="hero-title__inner-text">Recommended for you</span></span>
            
        </Link>
        <div className="section-header__btns-container">
        <button className="section-header__subscribe-btn">Subscribe 2.3m</button>
          <button className="section-header__main-btn section-header__left-btn">
            <svg className="icon" width="7" height="11">
              <use href="#side-arr"></use>
            </svg>
          </button>
          <button className="section-header__main-btn section-header__right-btn">
            <svg className="icon" width="7" height="11">
              <use href="#side-arr"></use>
            </svg>
          </button>
        </div>
      </div>
      {
      videos.length > 0 &&
      <ul className="new-channel__videos-list">
        {videos.map(video => (
        <New key={video.url} videoId={video.url} itemClass="new-channel"/>
        ))}
      </ul>
      }
    </section>
  </div>
</>
)
}

export default HomeContent