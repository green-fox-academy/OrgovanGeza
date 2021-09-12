import Component from "./Component";
import RenderableComponent from "./RenderableComponent";

function App() {
  return (
    <>
      <Component name="Sally" age={15} />
      <div></div>
      <RenderableComponent renderable="5" />
    </>
  );
}

export default App;
