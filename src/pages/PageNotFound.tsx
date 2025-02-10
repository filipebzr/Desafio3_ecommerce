
import { Link } from "react-router-dom";
import errPaper from "../assets/images/Header/errPaper.png";

const PageNotFound = () => {
  return (
    <section className="flex flex-col justify-between h-screen">
      <main className="flex flex-1 justify-center items-center">
        <div className="flex flex-col flex-1 tablet:flex-row justify-center items-center gap-11 full:m-auto tablet:w-auto tablet:justify-evenly tablet:px-5 full:w-w_956 full:justify-evenly ">
          <img
            src={errPaper}
            alt="not Found warning"
            className="mt-9 w_202 h_189 tablet:w-72 tablet:h-60 full:w-96 full:h-64"
          />
          <div className="flex flex-col text-3xl items-center tablet:items-start full:w-w_440 full:justify-between full:gap-3">
            <h1 className="text-5xl flex tablet:text-start tablet:text-8xl">404</h1>
            <p className="text-basic leading-basic w-w_230 text-center tablet:text-start tablet:w-80 tablet:items-center tablet:text-2xl full:text-2xl full:w-w_440">
              Oops! Nothing to see here.
            </p>
            <Link
              to="/"
              className="text-blue-800 underline text-bold tablet:ml-auto tablet:px-10 full:text-xl full:text-end"
            >
              Go back to home
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default PageNotFound;
