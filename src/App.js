import { Fragment } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
