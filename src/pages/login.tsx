import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserActionCreator } from "../store/slices/user";
import { useCallback } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(setUserActionCreator({ id: 999 }));
    navigate("/products");
  }, [dispatch, navigate]);

  return (
    <h1 className="grid grid-cols-12 ">
      <div className="container mx-auto">
        <div>Login Page</div>
        <button onClick={onClick}>Login</button>
      </div>
    </h1>
  );
};
