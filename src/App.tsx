import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userEmptyState } from "./models";
import { Invoice } from "./pages";
import { AppStore } from "./redux/store";

function App() {
  const [user, setUser] = useState(userEmptyState);

  const userStore = useSelector((store: AppStore) => store.user);

  useEffect(() => {
    setUser(userStore);
  }, [userStore]);

  return (
    <div className="App">
      {JSON.stringify(user)}
      <Invoice />
    </div>
  );
}

export default App;

