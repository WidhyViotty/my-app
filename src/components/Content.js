import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  const name = props.name;
  const text = props.text;

  return (
    <div className="content">
      <Title name={name} />
      <Description text={text} />
    </div>
  );
};

export default Content;
