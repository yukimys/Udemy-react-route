import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  console.log(search);
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>ぱらめーたは{id}です</p>
      <p>くえりぱらめーたは{query.get("name")}です</p>
    </div>
  );
};
