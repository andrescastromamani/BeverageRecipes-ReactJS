import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { CategoryProvider } from "./context/CategoryContext";
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  return (
    <CategoryProvider>
      <RecipeProvider>
        <Header />
        <div className="container">
          <Form />
        </div>
      </RecipeProvider>
    </CategoryProvider>
  );
}

export default App;
