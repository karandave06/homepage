import { useEffect, useState } from "react";
import Home from "./components/Home";
import PreLoader from "./components/Loader/PreLoader";
import { Audio, Triangle } from "react-loader-spinner";
import './app.scss';

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
       
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#ffffff"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          {" "}
          <Home />{" "}
        </>
      )}
    </>
  );
}

export default App;
