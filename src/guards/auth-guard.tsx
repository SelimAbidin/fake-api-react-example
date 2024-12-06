import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { State } from "../store";
import { useSelector } from "react-redux";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const userId = useSelector((state: State) => state.user.value?.id);

  useEffect(() => {
    if (typeof userId !== "number") {
      navigate("/?error=required auth");
    }
  }, [navigate, userId]);

  return children;
};

export const wrapWithAuthGuard = (comp: JSX.Element) => {
  return <AuthGuard>{comp}</AuthGuard>;
};
