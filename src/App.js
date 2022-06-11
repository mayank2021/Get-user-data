import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Nav from "./Components/Nav/Nav";
import { useSelector, useDispatch } from "react-redux";
import { addUser, selectedUser } from "./actions/index";

const App = () => {
  const initState = useSelector((state) => state.handleUsers);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  // fetch all users on loading of the page
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addUser(data.data));
        setLoading(false);
      });
  }, []);

  // on clicking the button retrieve that user data only
  const getUser = (id) => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(selectedUser(data.data));
        setLoading(false);
      });
  };

  //loader
  if (loading) {
    return (
      <div className="loader-container">
        <img
          src="https://media.giphy.com/media/grNkIEN4dkiMXFLIE9/giphy.gif"
          alt="loader"
        />
      </div>
    );
  }

  return (
    <div className="app">
      <Nav />
      {initState.selectedUser.avatar ? (
        <Card
          empty={false}
          img={initState.selectedUser.avatar}
          firstName={initState.selectedUser.first_name}
          lastName={initState.selectedUser.last_name}
          email={initState.selectedUser.email}
        />
      ) : (
        <Card empty={true} />
      )}
      <div className="btn-container">
        {initState.allUser &&
          initState.allUser.map((ele, ind) => (
            <button
              className="select-user--btn"
              key={ind}
              onClick={() => getUser(ele.id)}
            >
              {ind + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default App;
