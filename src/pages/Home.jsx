import Cover from "@pages/Cover";

const App = () => {
  return (
    <>
      <nav className="flex justify-between z-40 fixed top-0 w-full">
        <button>버튼1</button>
        <button>버튼2</button>
      </nav>
      <Cover />
    </>
  );
};

export default App;
