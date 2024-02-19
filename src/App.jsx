import { Layout } from "./components/layout/component";
import { restaurants } from "./constants/mock";
import { RestaurantsPage } from "./pages/restaurants-page/component";

export const App = () => {
   return (
      <Layout>
         <RestaurantsPage restaurants={restaurants} />
      </Layout>
   );
}