import { ButtonRow } from "../shared/ButtonRow";
import { DescriptionBlock } from "../shared/DescriptionBlock";
import { HighlightRow } from "../shared/HighlightRow";
import { PosterGrid } from "../shared/PosterGrid";
import { SectionBackground } from "../shared/SectionBackground";
import { SectionHeading } from "../shared/SectionHeading";

const homeStats = [
  { label: "2028" },
  { label: "28 season" },
  { label: "TV-HA", className: "border p-1 rounded" },
];

const homeButtons = [
  { label: "ðŸ”»Play", className: "btn btn-info " },
  { label: "More info", className: "btn btn-secondary" },
];

const homePosters = Array.from({ length: 4 }, () => "./peliculas.jpg");

export const HomeSection = () => {
  return (
    <SectionBackground>
      <div className="container mt-5">
        <SectionHeading
          eyebrow="Solo Para Valientes"
          title={
            <>
              BIENVENIDOS A LA ZONA <br /> DE TERROR
            </>
          }
        />

        <div className="d-flex gap-5">
          {homeStats.map(({ label, className }) => (
            <span key={label} className={className}>
              {label}
            </span>
          ))}
        </div>
        <br />

        <HighlightRow icon="./credit-card.svg" text="#1 in TV Shows Today" />

        <br />

        <DescriptionBlock>
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            molestiae, <br /> nulla placeat id officiis non consequuntur a, quos
            at, ipsam praesentium <br /> temporibus odit vel possimus eaque
            quidem quis eveniet sint.
          </>
        </DescriptionBlock>

        <ButtonRow buttons={homeButtons} />
        <PosterGrid posters={homePosters} />
        <br />
        <br />
        <br />
      </div>
    </SectionBackground>
  );
};
