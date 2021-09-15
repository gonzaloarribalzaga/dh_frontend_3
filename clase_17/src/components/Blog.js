import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs.json";

function Blog(props) {
  let { id } = props.match.params;

  let blog = null;

  if (id !== undefined) {
    blog = blogs.find((item) => {
      return item.id.toString() === id;
    });
  }

  return (
    <div>
      <h2>Blogs</h2>
      <>
        <ul>
          {blogs.map((blog) => (
            <li key={`vlog_${blog.id}`}>
              <Link to={`/main/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </>
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.text}</p>
        </div>
      )}
    </div>
  );
}

export default Blog;
