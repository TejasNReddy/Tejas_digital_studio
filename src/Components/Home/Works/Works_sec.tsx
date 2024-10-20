import { Link } from "react-router-dom";
import Works_gallery from "./Works_gallery";

const Works_sec = () => {
  return (
    <div className="font-primary-font w-[100%] lg:p-10">
      <div className="p-6">
        <h2 className="text-5xl font-bold text-primary_purple">Our Works</h2>
        <p className="text-lg mt-4 text-gray-500">
          Discover some of our incredible work
        </p>
      </div>
      <div>
        <Works_gallery />
      </div>
      <div>
        <div className="flex justify-center mt-3 mb-3">
          <Link
            to="/Works"
            className="bg-primary_purple text-white p-3 pt-2 pb-2 rounded-md font-medium cursor-pointer shadow-md"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Works_sec;
