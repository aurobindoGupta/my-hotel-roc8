import { Carousel } from "bootstrap";

const Home = () => {
  return (
    <div className="Home">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            MY-HOTEL
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="d-flex justify-content-end">
              <ul className="navbar-nav nav-tabs me-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
          <div id="Carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../ht1.jpg" className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src="../ht2.jpg" className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src="../ht3.jpg" className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src="../ht4.jpg" className="d-block w-100" alt=""/>
                </div>

            </div>
          </div>
      </div>
    </div>
  );
};
export default Home;