// import Sidebar from "../SideBar/Sidebar"
import HomeContent from "../Content/Content"
import {Switch,Route} from 'react-router-dom'
import Channel from "../Channel/Channel"
import NotFOund  from "../NotFound/";
import Video from "../Video/Video";

function Main() {
  return(
    <>
    <main>
    <div className="main-wrapper">
    <Switch>
      <Route path="/" component={HomeContent} exact/>
      <Route path="/channel" component={Channel}/>
      <Route path="/video/2" component={Video}/>
      <Route path="/page-not-found" component={NotFOund}/>
    </Switch>
    </div>
    </main>
    </>
  )
}

export default Main