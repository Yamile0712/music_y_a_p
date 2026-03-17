import { FavoritesGrid } from "./FavoritesGrid";
import { HighlightRow } from "../shared/HighlightRow";
import { IconRow } from "../shared/IconRow";
import { SectionBackground } from "../shared/SectionBackground";
import { SectionHeading } from "../shared/SectionHeading";

const favoriteIcons = [
  "./download.svg",
  "./heart.svg",
  "./pencil.svg",
  "./trash.svg",
];

const favoriteItems = [
  { image: "./descarga1.jpg", icon: "./heart.svg" },
  { image: "./descarga2.jpg", icon: "./heart.svg" },
  { image: "./descarga3.jpg", icon: "./heart.svg" },
  { image: "./descarga4.jpg", icon: "./heart.svg" },
  { image: "./descarga5.jpg", icon: "./heart.svg" },
  { image: "./descarga6.jpg", icon: "./heart.svg" },
  { image: "./descarga7.jpg", icon: "./heart.svg" },
  { image: "./descarga8.jpg", icon: "./heart.svg" },
].map((item) => ({
  ...item,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}));

export const FavoritesSection = () => {
  return (
    <SectionBackground>
      <div>
        <div className="container mt-5">
          <SectionHeading
            eyebrow="Recuerda Tu Mundo Sangriento"
            title="COLECCIÃ“N DE FAVORITOS"
          />

          <IconRow icons={favoriteIcons} />
          <br />

          <HighlightRow
            icon="./sparkles-2.svg"
            text="#2 Explore Your Created World "
          />
        </div>

        <FavoritesGrid items={favoriteItems} />
        <br />
        <br />
        <br />
      </div>
    </SectionBackground>
  );
};
