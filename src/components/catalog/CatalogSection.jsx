import { CatalogGrid } from "./CatalogGrid";
import { DescriptionBlock } from "../shared/DescriptionBlock";
import { HighlightRow } from "../shared/HighlightRow";
import { SectionBackground } from "../shared/SectionBackground";
import { SectionHeading } from "../shared/SectionHeading";

const catalogItems = [
  "./descarga9.jpg",
  "./descarga10.jpg",
  "./descarga11.jpg",
  "./descarga12.jpg",
  "./descarga13.jpg",
  "./descarga15.jpg",
  "./descarga16.webp",
  "./descarga17.jpg",
].map((image) => ({
  image,
  title: "Card title",
  text: "Some quick example text to build on the card title and make up the bulk of the cardâ€™s content.",
  buttonLabel: "Explora...",
}));

export const CatalogSection = () => {
  return (
    <SectionBackground>
      <div className="container mt-5">
        <SectionHeading
          eyebrow="Recuerda Que puedes Expander Tu Dominio"
          title="EXPLORA NUEVOS MUNDOS MUSICALES"
        />

        <br />

        <HighlightRow
          icon="./sparkles-2.svg"
          text="#3 Explore Your Created World "
        />
        <br />

        <DescriptionBlock>
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            molestiae, <br /> nulla placeat id officiis non consequuntur a, quos
            at, ipsam praesentium <br /> temporibus odit vel possimus eaque
            quidem quis eveniet sint.
          </>
        </DescriptionBlock>
      </div>

      <CatalogGrid items={catalogItems} />
      <br />
      <br />
      <br />
    </SectionBackground>
  );
};
