import Sidebar from "../SideBar/Sidebar"
function  NotFound(params){
  return (
    <>
    <Sidebar/>
      <div className="main-wrapper">
        <div className="not-found-wrapper">
          <p className="not-found-text">Not - Found 404</p>
          </div>
      </div>
    </>
  )
}

export default NotFound