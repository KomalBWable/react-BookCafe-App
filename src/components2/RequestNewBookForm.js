import React, { useEffect, useState } from "react";
import validation from "./validation";
const RequestNewBookForm = () => {
  const [values, setValues] = useState({
    nameofbook: "",
    author: "",
    publisher: "",
    submitSuccess: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
      submitSuccess: false,
    });
    console.log(values);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
    setValues({
      ...values,
      submitSuccess: true,
    });
  };
  useEffect(() => {
    console.log("useEffect", values);
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      //submitForm(true);
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">RequestNewBookForm</h2>
        </div>
        <form className="form-wrapper">
          <div className="Name">
            <lable className="lable">NameOfBook</lable>
            <input
              className="input"
              type="text"
              name="nameofbook"
              value={values.nameofbook}
              onChange={handleChange}
            />
            {errors.nameofbook && <p className="error">{errors.nameofbook}</p>}
          </div>
          <div className="Author">
            <lable className="lable">Author</lable>
            <input
              className="input"
              type="Author"
              name="author"
              value={values.author}
              onChange={handleChange}
            />
            {errors.author && <p className="error">{errors.author}</p>}
          </div>
          <div className="Publisher">
            <lable className="lable">Publisher</lable>
            <input
              className="input"
              type="Publisher"
              name="publisher"
              value={values.publisher}
              onChange={handleChange}
            />
            {errors.publisher && <p className="error">{errors.publisher}</p>}
          </div>
          {values.submitSuccess && (
            <div>
              <h6 className="form-success">FormSubmittedSuccesfully!</h6>
            </div>
          )}
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              RequestNewBook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RequestNewBookForm;
