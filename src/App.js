import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Recipes } from "./components/Recipes";
import { CategoryProvider } from "./context/CategoryContext";
import { ModalProvider } from "./context/ModalContext";
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  return (
    <CategoryProvider>
      <RecipeProvider>
        <ModalProvider>
          <Header />
          <div className="container">
            <Form />
            <Recipes />
          </div>
        </ModalProvider>
      </RecipeProvider>
    </CategoryProvider>
  );
}

export default App;
