import React from "react";
import Semaforo from "../Semaforo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const Home = () => {
	return (
		 <div className="d-flex flex-column align-items-center mt-5">
           <h1 className="mb-4">🚦 Semáforo en React</h1>
          <Semaforo />
         </div>
	);
};

export default Home;