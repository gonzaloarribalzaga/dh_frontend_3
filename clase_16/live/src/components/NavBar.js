import { Link } from "react-router-3";

function NavBar() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 1,
          padding: "20px",
          textAlign: "center",
          border: "2px solid black",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/main">Main</Link>
        <Link to="/article/127">Article 127</Link>
        <Link to="/article/128">Article 128</Link>
      </div>
    </div>
  );
}

export default NavBar;
