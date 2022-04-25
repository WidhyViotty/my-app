const Content = (props) => {
  console.log(name + text);

  const name = props.name;
  const text = props.text;

  return (
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Content;
