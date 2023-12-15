import "./App.css";
import image1 from  './Components/images/team-1.jpg' ;
import image2 from  './Components/images/team-2.jpg' ;
import image3 from  './Components/images/team-3.jpg' ;
import image4 from  './Components/images/team-4.jpg' ;


function App() {
  return (
    <div className="container">
      <h3>OUR TEAM</h3>
      <div className="underline"></div>
      <div className="notes">
        <p>Magnam dolores commodi suscipit.Necessitatibus eius consequater ex aliquid fuga eum quidem.Sit sint consectutur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipi alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="cards">
        <div className="card m-2  w-25">
          <img
            className="card-img-top"
            width="150"
            height="250"
            src={image1}
            alt="Not Found"
          />
          <div
            className="card-header "
            style={{
              height: "100px",
              background: "white",
              textAlign: "center",
            }}
          >
            <h5>Walter White</h5>
            <p>Chief Executive Officer</p>
          </div>
        </div>

        <div className="card m-2  w-25">
          <img
            className="card-img-top"
            width="150"
            height="250"
            src={image2}
            alt="Not Found"
          />
          <div
            className="card-header "
            style={{
              height: "100px",
              background: "white",
              textAlign: "center",
            }}
          >
            <h5>Sarah Johnson</h5>
            <p>Product Manager</p>
          </div>
        </div>

        <div className="card m-2  w-25">
          <img
            className="card-img-top"
            width="150"
            height="250"
            src={image3}
            alt="Not Found"
          />
          <div
            className="card-header "
            style={{
              height: "100px",
              background: "white",
              textAlign: "center",
            }}
          >
            <h5>William Anderson</h5>
            <p>CTO</p>
          </div>
        </div>

        <div className="card m-2  w-25">
          <img
            className="card-img-top"
            width="150"
            height="250"
            src={image4}
            alt="Not Found"
          />
          <div
            className="card-header "
            style={{
              height: "100px",
              background: "white",
              textAlign: "center",
            }}
          >
            <h5>Amanda Jepson</h5>
            <p>Accountant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

