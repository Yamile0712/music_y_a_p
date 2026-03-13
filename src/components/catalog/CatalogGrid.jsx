import { CatalogCard } from "./CatalogCard";

const chunkItems = (items, size) => {
  const rows = [];

  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }

  return rows;
};

export const CatalogGrid = ({ items }) => {
  const rows = chunkItems(items, 4);

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div className="container texte-center mt-5 d-flex gap-3" key={rowIndex}>
          {row.map((item, itemIndex) => (
            <CatalogCard
              key={`${item.image}-${itemIndex}`}
              image={item.image}
              title={item.title}
              text={item.text}
              buttonLabel={item.buttonLabel}
            />
          ))}
        </div>
      ))}
    </>
  );
};
