import React from "react";

function Myservices() {
  return (
    <div id="services" className="services">
      <h1>Our Services</h1>
      <hr />
      <div className="row scroll-anim">
        <div className="card col-xs-12 col-md-2">
          <h3 className="card-title">Ui/Ux</h3>
          <div className="card-body">
            <img src={require("../assets/cardimg1.png")} alt="" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              omnis dolore aperiam fuga? Id asperiores dolores non nemo
              voluptate placeat.
            </p>
          </div>
        </div>
        <div className="card col-xs-12 col-md-2">
          <h3 className="card-title">this is title</h3>
          <div className="card-body">
            <img src={require("../assets/cardimg1.png")} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              omnis dolore aperiam fuga? Id asperiores dolores non nemo
              voluptate placeat.
            </p>
          </div>
        </div>
        <div className="card col-xs-12 col-md-2">
          <h3 className="card-title">this is title</h3>
          <div className="card-body">
            <img src={require("../assets/cardimg1.png")} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              omnis dolore aperiam fuga? Id asperiores dolores non nemo
              voluptate placeat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myservices;
