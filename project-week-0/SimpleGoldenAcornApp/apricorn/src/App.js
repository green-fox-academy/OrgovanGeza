import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  return (
    <>
      <Button name="Buy one" action="-1" />
      <Display />
      <Button name="Eat one" action="+1"/>
    </>
  );
}
export default App;
