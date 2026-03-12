const dropdownItems = ["Action", "Another action", "Something else here"];

export const HeaderActions = () => {
  return (
    <div className="h-100">
      <form className="d-flex ms-auto " role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <img src="./bell.svg" alt="" />
        <img src="./user.svg" alt="" />

        <li className="nav-item dropdown list-unstyled">
          <a
            className="nav-link "
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            {dropdownItems.slice(0, 2).map((item) => (
              <li key={item}>
                <a className="dropdown-item" href="#">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a className="dropdown-divider"></a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {dropdownItems[2]}
              </a>
            </li>
          </ul>
        </li>
      </form>
    </div>
  );
};
