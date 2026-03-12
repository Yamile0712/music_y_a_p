import { CatalogSection } from "../components/catalog/CatalogSection";
import { CreateSection } from "../components/create/CreateSection";
import { FavoritesSection } from "../components/favorites/FavoritesSection";
import { Header } from "../components/header/Header";
import { HomeSection } from "../components/home/HomeSection";

export const App = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <FavoritesSection />
      <CatalogSection />
      <CreateSection />
    </>
  );
};
