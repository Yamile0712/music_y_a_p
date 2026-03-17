export const FavoriteCard = ({ image, icon, text }) => {
  return (
    <div className="col-3">
      <img className="border rounded" src={image} alt="" />
      <br />
      <br />
      <img className="d-flex text-end" src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
};
