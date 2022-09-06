import { Link } from "react-router-dom";

type ComponentProps = {
  location: string;
  value: string;
};

const ButtonLink = ({ location, value }: ComponentProps) => {
  return <Link to={location}>{value}</Link>;
};

export default ButtonLink;
