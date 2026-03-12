import { HeaderActions } from "./HeaderActions";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom ">
        <div className="container">
          <a className="navbar-brand" href="#">
            MUSIC
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <HeaderNav />
            <HeaderActions />
          </div>
        </div>
      </nav>
    </>
  );
};
