import { useSelector } from "react-redux";
import { State } from "../store";

export const Lists = () => {
  const userId = useSelector((state: State) => state.user.value?.id);

  return <div>Listeler {userId ?? "no user is found"}</div>;
};
