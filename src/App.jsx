import Background from "./component/Background.jsx";
import Fourground from "./component/Fourground.jsx";
const App = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
        <Background />
        <Fourground/>
      </div>
    </>
  );
};

export default App;
