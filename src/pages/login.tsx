import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <h1 className="grid grid-cols-12 ">
      <div className="container mx-auto">
        <div>Login Page</div>
        <button onClick={() => navigate("/products")}>Login</button>
      </div>
    </h1>
  );
};
