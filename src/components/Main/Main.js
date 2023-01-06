import "./Main.scss";
function Main() {
  return (
    <main className="main">
      <div className="main-video">
        <video src="" alt="Video" className="main__video"></video>
        <div className="main-video-controller"></div>
      </div>
      <div className="main-bio">
        <h1 className="main-bio__title">
          BMX Rampage: 2021 <br /> Highlights
        </h1>
        <hr className="main-bio__line" />
        <div className="main-bio-info">
          <div className="main-bio-info-descr">
            <h3 className="main-bio-info-descr__author">By Red Crow</h3>
            <p className="main-bio-info-descr__date">07/11/2021</p>
          </div>
          <div className="main-bio-views">
            <img src="" alt="" className="main-bio-views__icons" />
            <p clssName="main-bio-views__count">1,001,023</p>
          </div>
          <div className="main-bio-likes">
            <img src="" alt="" className="main-bio-likes__icons" />
            <p clssName="main-bio-likes__count">110,985</p>
          </div>
        </div>
        <hr className="main-bio__line" />

        <div className="main-bio-descr">
          <p className="main-bio-descr">
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
