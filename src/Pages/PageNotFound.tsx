import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const PageNotFound = () => {
  const [timer, setTimer] = useState<number>(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    if (timer === 6) {
      navigate("/"); 
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, navigate]); 

  return (
    <div className="w-full h-[70vh] bg-primary_purple font-primary-font flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-9xl text-white">404</h1>
        <h1 className="font-medium text-3xl text-white">PAGE NOT FOUND</h1>
        <h2 className="text-xl text-white">Redirecting in {5 - timer} seconds...</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
