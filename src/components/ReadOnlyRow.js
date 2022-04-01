import React from "react";
const ReadOnlyRow = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.srNo}</td>
      <td>{contact.nameofbook}</td>
      <td>{contact.status}</td>
      <td>{contact.phoneno}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};
export default ReadOnlyRow;
