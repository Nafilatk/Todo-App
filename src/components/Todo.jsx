import { useState } from "react";
import { Trash2 } from "lucide-react";
function Todo() {
  const [data, setdata] = useState("");
  const [storedata, setstoredata] = useState([]);

  const handlesub = (event) => {
    event.preventDefault();
  };

  const addData = () => {
    setstoredata([...storedata, data]);
    console.log(storedata);
    setdata("");
  };

  const deleteTodo = (indexToDelete) => {
    const updatedTodos = storedata.filter(
      (_, index) => index !== indexToDelete
    );
    setstoredata(updatedTodos);
  };

  return (
    <div className="container">
      <div className="head">
        <h2>TODO APP</h2>
        <form onSubmit={handlesub}>
          <input
            type="text"
            value={data}
            placeholder="Enter as you like..."
            onChange={(e) => setdata(e.target.value)}
          />

          <button onClick={addData}>ADD</button>
        </form>
        <div>
          <ul>
            {storedata.map((todo, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span>{todo}</span>
                <button
                  onClick={() => deleteTodo(index)}
                  title="Delete"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#80c0c7",
                  }}
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
