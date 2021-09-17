function Article(props) {
  console.log("props.params",props.params)
  return (
    <div>
      <h1>Article {props.params.id}</h1>
    </div>
  );
}

export default Article;
