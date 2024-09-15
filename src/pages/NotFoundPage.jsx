import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <h2>
      Ooops, this page is not a found, please coming on
      <Link to="/">home page</Link>
    </h2>
  );
}
