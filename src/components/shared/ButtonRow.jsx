export const ButtonRow = ({ buttons }) => {
  return (
    <div className="d-flex gap-5">
      {buttons.map(({ label, className }) => (
        <button key={label} type="button" className={className}>
          {label}
        </button>
      ))}
    </div>
  );
};
