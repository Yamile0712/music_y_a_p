export const ImagePairRow = ({ images }) => {
  return (
    <div className=" container d-flex gap-3 ">
      {images.map((image, index) =>
        index === 0 ? (
          <img
            key={`${image}-${index}`}
            src={image}
            className=" w-25 border rounded"
            alt="..."
          />
        ) : (
          <div key={`${image}-${index}`}>
            <img src={image} className=" w-25 border rounded" alt="..." />
          </div>
        ),
      )}
    </div>
  );
};
