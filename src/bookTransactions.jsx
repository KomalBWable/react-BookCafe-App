import React, { useState, Fragment } from "react";
import "./bookTransactions.css";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
const BookTransactions = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    srNo: "",
    nameofbook: "",
    status: "",
    phoneno: "",
  });
  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      srNo: addFormData.srNo,
      nameofbook: addFormData.nameofbook,
      status: addFormData.status,
      phoneno: addFormData.phoneno,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
  };
  return (
    <div className="app-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>SrNo</th>
              <th>Name Of Book</th>
              <th>Status</th>
              <th>Phone No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h4>Add a Contact</h4>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="srNo"
          required="required"
          placeholder="Enter a Srno..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="nameofbook"
          required="required"
          placeholder="Enter a Nameofbook..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="status"
          required="required"
          placeholder="Enter a Status..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneno"
          required="required"
          placeholder="Enter a Phoneno..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default BookTransactions;
