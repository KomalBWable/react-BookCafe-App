const validation = (values) => {
  let errors = {};
  if (!values.nameofbook) {
    errors.nameofbook = "Name is required.";
  }
  if (!values.author) {
    errors.author = "Author is required.";
  }
  if (!values.publisher) {
    errors.publisher = "Publisher is required.";
  }
  if (!values.submitSucess) {
    errors.submitSucess = "Not Submitted.";
  }
  return errors;
};
export default validation;
