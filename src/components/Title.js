const Title = (props) => {
  console.log(props.name);
  const name = props.name;

  return <h1 className="title">{name}</h1>;
};

export default Title;
