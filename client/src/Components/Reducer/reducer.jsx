import React, { useReducer, useState } from "react";

// const reducerFn = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const Reducer = () => {
//   const [count, dispatchCount] = useReducer(reducerFn, 0); // useReducer(dispatchFn, initialState)

//   return (
//     <>
//       <p>Use Reducers</p>
//       <p>{count}</p>
//       <button onClick={() => dispatchCount({ type: "increment" })}>Plus</button>
//       <button onClick={() => dispatchCount({ type: "decrement" })}>
//         Minus
//       </button>
//     </>
//   );
// };

const initialState = { todos: [], todoCount: 0 };

const reducerFn = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        todos: [
          ...state.todos,
          {
            payload: action.payload,
            completed: false,
          },
        ],
        todoCount: state.todoCount + 1,
      };
    case "toggle":
      return {
        todos: state.todos.map((item, index) =>
          index === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState); // useReducer(dispatchFn, initialState)
  const [text, setText] = useState("");

  return (
    <>
      <p>Use Reducers</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add", payload: text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <div>Todo List</div>
      <div>Number of todos: {state.todoCount}</div>
      <div>
        {state.todos.map((item, index) => (
          <div
            key={item.payload}
            onClick={() => dispatch({ type: "toggle", payload: index })}
            style={{
              textDecoration: item.completed ? "line-through" : "",
            }}
          >
            {item.payload}
          </div>
        ))}
      </div>
      <div>JSON Format</div>
      <pre>{JSON.stringify(state.todos, null, 2)}</pre>
    </>
  );
};

export default Reducer;
