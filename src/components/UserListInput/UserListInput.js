import styles from "./UserListInput.module.css";
import { useState } from "react";
import Card from "../../UI/Card";
import ErrorModule from "../../UI/ErrorModule";
function UserListInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter an invalid name or age(non-empty).",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid Age",
        message: "Age can not be a negative number.",
      });
      return;
    }
    props.onAddUser(enteredValue, enteredAge);
    setEnteredValue("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            onChange={userInputChangeHandler}
            value={enteredValue}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={userAgeChangeHandler}
            value={enteredAge}
          ></input>
          <button className={styles.button} type="submit">
            Add User
          </button>
        </form>
      </Card>
    </div>
  );
}
export default UserListInput;
