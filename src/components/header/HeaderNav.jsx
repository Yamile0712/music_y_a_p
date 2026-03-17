const navItems = [
  { label: "Home", href: "#" },
  { label: "Favoritas", href: "#" },
  { label: "Catalogo", href: "#" },
  { label: "Crea", ariaDisabled: "true" },
];

export const HeaderNav = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {navItems.map(({ label, href, ariaDisabled }) => (
        <li className="nav-item" key={label}>
          <a className="nav-link" href={href} aria-disabled={ariaDisabled}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};
