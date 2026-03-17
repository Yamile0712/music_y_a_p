export const PosterGrid = ({ posters }) => {
  return (
    <div className="container text-center">
      <div className="row mt-5">
        {posters.map((poster, index) => (
          <div className="col-3" key={`${poster}-${index}`}>
            <img className="border rounded" src={poster} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
