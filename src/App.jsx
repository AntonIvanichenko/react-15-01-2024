import { Layout } from "./components/layout/component";
import { Restaurants } from "./components/restaurants/restaurants";
import { restaurants } from "./constants/mock";

export const App = () => {
   return (
      <Layout>

         <Restaurants restaurants={restaurants} />

      </Layout>
   );
}