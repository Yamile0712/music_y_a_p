export const IconRow = ({ icons }) => {
  return (
    <div className="d-flex gap-5">
      {icons.map((icon, index) => (
        <img key={`${icon}-${index}`} src={icon} alt="" />
      ))}
    </div>
  );
};
