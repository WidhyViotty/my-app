const Description = (props) => {
  console.log(props.text);
  const text = props.text;

  return <p className="text">{text}</p>;
};

export default Description;
