import React from "react";
const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Srno..."
          name="srNo"
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Nameofbook..."
          name="nameofbook"
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Status..."
          name="status"
        ></input>
      </td>
      <td>
        {" "}
        <input
          type="text"
          required="required"
          placeholder="Enter a Phoneno..."
          name="phoneno"
        ></input>{" "}
      </td>
    </tr>
  );
};
export default EditableRow;
