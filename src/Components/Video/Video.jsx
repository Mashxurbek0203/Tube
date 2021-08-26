import './video.css'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
function Video() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(response => setVideos(response.splice(1, 15)))
  }, [])
  console.log(videos);
return(
<>
  <div className="media-view">
    <div className="media-view__main current">
      <div className="current__video-wrapper">
        <iframe width="1000" height="500" src="https://www.youtube.com/embed/arM9KEDi2iY" title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen className="current__video"></iframe>
      </div>
      <div className="current__video-info">
        <h2 className="current__video-title">23 - Hook useEffect / React JS - Путь Самурая 2.0 (+github api)</h2>
        <div className="current__video-details">
          <span className="current__video-views">+10k views</span>
          <div className="curremt__video-btns">
            <button className="current__video-btn">
              <svg className="icon" width="12" height="11">
                <use href="#like"></use>
              </svg>
              806
            </button>
            <button className="current__video-btn">
              <svg className="icon" width="12" height="11">
                <use href="#like"></use>
              </svg>
              4
            </button>
            <button className="current__video-btn">
              <svg className="icon" width="12" height="11">
                <use href="#share"></use>
              </svg>
              Share
            </button>
            <button className="current__video-btn current__video-more-btn">
              <img src="../img/MOre.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="currnet__video-description">
          <img src="../img/kamasutra.jpg" alt="IT-KAMASUTRA" className="currnet__video-description-img"/>
          <div className="current__video-description-inner">
            <Link to="/channel" className="current__video-channel-link">IT-KAMASUTRA</Link>
            <span className="current__video-description-date">Published on 16 Aug 2021</span>
            <p className="current__video-description-text">
            useEffect - самый важный хук. Хук для синхронизации, хук, который как и методы жизненного цикла классовых компонентов даёт нам возможность делайть сайд-эффекты прямо внутри функционального компонента. Легально
            </p>
            <button className="current__video-description-btn">Show more</button>
          </div>
      </div>
    </div>
    
    <div className="media-view__following following-videos">
      <div className="following-videos__header">
        <p className="following-videos__header-title">Next</p>
        <div className="following-videos__header-btn autoplay-btn">
          <span className="autoplay-btn__text">Autoplay</span>
          <input type="checkbox" id="autoplay" className="autoplay-btn__input"/>
        </div>
      </div>
        {
          videos.length > 0 && <ul className="following-videos__list"> 
            {
              videos.map(video => {
                return <li className="following-videos__item following-video">
                  <Link to="/video/2" className="following-video__link">
                    <img src={video.url} alt="" className="following-video__img" />
                    <div className="following-video__text-wrap">
                      <p className="following-video__text-title">Baby Monitor Technology</p>
                      <div className="following-video__text-details">
                        <span className="following-video__text-views">123k views</span>
                        <span>
                          <Link to="/channel" className="following-video__channel-link">Dollie Blair</Link>
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              })
            }
          </ul>
        }
    </div>
  </div>
</>
)
}

export default Video