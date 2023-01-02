import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>Ooops Page not Found!</h1>
      <Link to="/" className="btn btn-primary px-2">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
