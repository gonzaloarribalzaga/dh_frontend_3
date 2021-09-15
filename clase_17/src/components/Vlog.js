import { useParams, Link } from "react-router-dom";
import vlogs from "../data/vlogs.json";

function Vlog() {
  let { id } = useParams();
  let vlog = null;

  if (id !== undefined) {
    vlog = vlogs.find((item) => {
      return item.id.toString() === id;
    });
  }

  return (
    <div>
      <h2>vlogs</h2>
      <>
        <ul>
          {vlogs.map((vlog) => (
            <li key={`vlog_${vlog.id}`}>
              <Link to={`/main/vlog/${vlog.id}`}>{vlog.title}</Link>
            </li>
          ))}
        </ul>
      </>
      {vlog && (
        <div>
          <h2>{vlog.title}</h2>
          <video key={vlog.id} controls>
            <source src={vlog.src} />
          </video>
        </div>
      )}
    </div>
  );
}

export default Vlog;
