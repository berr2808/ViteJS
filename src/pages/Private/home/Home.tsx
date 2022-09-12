import { createUser } from "@/redux/slices/user.slice";

import { useDispatch } from "react-redux";

const Home = () => {
  const Dispatch = useDispatch();

  const userActions = async () => {
    Dispatch(createUser({ id: "1", name: "ds" }));
  };

  return (
    <div>
      <button onClick={userActions}>Click</button>
      Home
    </div>
  );
};

export default Home;
