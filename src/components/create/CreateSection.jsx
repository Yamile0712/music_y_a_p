import { ImagePairRow } from "./ImagePairRow";
import { DescriptionBlock } from "../shared/DescriptionBlock";
import { HighlightRow } from "../shared/HighlightRow";
import { IconRow } from "../shared/IconRow";
import { SectionBackground } from "../shared/SectionBackground";
import { SectionHeading } from "../shared/SectionHeading";

const createIcons = ["./paperclip.svg", "./pencil.svg", "./heart.svg"];
const createRows = [
  ["./ultima.avif", "./ultima.avif"],
  ["./ultima.avif", "./ultima.avif"],
];

export const CreateSection = () => {
  return (
    <SectionBackground>
      <div className="container mt-5">
        <SectionHeading
          eyebrow="Crea Un Nuevo Mundo Que Otros Puedan Ver"
          title="ZONA ESPECIAL"
        />

        <IconRow icons={createIcons} />
        <br />

        <HighlightRow icon="./credit-card.svg" text="#4 in TV Shows Today" />

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
      <br />
      <br />

      {createRows.map((images, index) => (
        <div key={index}>
          <ImagePairRow images={images} />
          <br />
          <br />
        </div>
      ))}

      <h1> bsckahbchabv</h1>

      <br />
      <br />
      <br />
    </SectionBackground>
  );
};
