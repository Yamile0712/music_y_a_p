const sectionBackgroundStyle = {
  backgroundImage: `url("./portada-final.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  color: "white",
};

export const SectionBackground = ({ children }) => {
  return <div style={sectionBackgroundStyle}>{children}</div>;
};
