const Title = (props) => {
  console.log(props.name);
  const name = props.name;

  return <p className="title">{name}</p>;
};

export default Title;
