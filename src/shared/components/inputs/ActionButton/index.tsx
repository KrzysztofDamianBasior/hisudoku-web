import "./index.scss";

type Props = {
  content: string;
};

const ActionButton = ({ content }: Props) => {
  return <button className="action-button__button">{content}</button>;
};

export default ActionButton;
