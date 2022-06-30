import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Recipes } from "./components/Recipes";
import { CategoryProvider } from "./context/CategoryContext";
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  return (
    <CategoryProvider>
      <RecipeProvider>
        <Header />
        <div className="container">
          <Form />
          <Recipes />
        </div>
      </RecipeProvider>
    </CategoryProvider>
  );
}

export default App;
