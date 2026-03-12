import { FavoriteCard } from "./FavoriteCard";

const chunkItems = (items, size) => {
  const rows = [];

  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }

  return rows;
};

export const FavoritesGrid = ({ items }) => {
  const rows = chunkItems(items, 4);

  return (
    <div className="container text-center ">
      {rows.map((row, rowIndex) => (
        <div className="row mt-5" key={rowIndex}>
          {row.map((item, itemIndex) => (
            <FavoriteCard
              key={`${item.image}-${itemIndex}`}
              image={item.image}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
