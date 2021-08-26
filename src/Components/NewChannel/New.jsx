import {Link} from 'react-router-dom'
import './New.css'
function New({videoId, itemClass}) {
return (
<>
  <li className={`${itemClass}__video`}>
    <Link className={`${itemClass}__video-link`} to="/video/2">
    <img src={videoId} alt="" className={`${itemClass}__video-poster`}/>
    <div className={`${itemClass}__video-inner`}>
      <h3 className={`${itemClass}__video-title`}>A Brief History Of Creation</h3>
      <p className={`${itemClass}__video-description`}>
        <span className={`${itemClass}__video-description`}>34k views  ·  5 months ago</span>
        <span className={`${itemClass}__video-details ${itemClass}__video-autor`}>Dollie Blair</span></p>
    </div>
    </Link>
  </li>
</>
)
}

export default New