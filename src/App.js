import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.data);
  console.log(data);
  const dispatch = useDispatch();

  dispatch({ type: "FETCH_DATA_REQUEST" });

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const responseData = await response.json();

      dispatch({ type: "FETCH_DATA_SUCCESS", payload: responseData });
      // console.log(responseData);
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error });
    }
  }

  return (
    <div className="App">
      <button onClick={fetchData}>Get Users' Names</button>

      <div>
        {data?.map((item) => (
          <div key={item?.id}>{item?.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
