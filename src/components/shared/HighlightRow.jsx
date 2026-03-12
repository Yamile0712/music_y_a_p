export const HighlightRow = ({ icon, text }) => {
  return (
    <div className="d-flex gap-3 align-items-center">
      <img src={icon} alt="" />
      <h3>{text}</h3>
    </div>
  );
};
