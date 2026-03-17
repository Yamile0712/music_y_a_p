export const CatalogCard = ({ image, title, text, buttonLabel }) => {
  return (
    <div className="card" style={{ width: "18rem", background: "black" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "white" }}>
          {title}
        </h5>
        <p className="card-text" style={{ color: "white" }}>
          {text}
        </p>
        <a href="#" className="btn btn-secondary">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};
