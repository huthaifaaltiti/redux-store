import "./App.css";
// react-redux
import { useDispatch, useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.data);

  // console.log(data);

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  async function fetchData() {
    try {
      // API data request
      dispatch({ type: "FETCH_DATA_REQUEST" });

      const response = await fetch(
        // Fake API: https://jsonplaceholder.typicode.com/
        "https://jsonplaceholder.typicode.com/users"
      );

      const responseData = await response.json();

      // console.log("Response data is:", responseData);

      dispatch({ type: "FETCH_DATA_SUCCESS", payload: responseData });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
      console.log(error);
    }

    if (loading) return "Loading ...";
    if (error) return "Fetching Error!";
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
