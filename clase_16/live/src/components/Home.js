import NavBar from "./NavBar";

function Home(props) {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default Home;
