import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "redux/operations";
import { getContacts, getFilter } from "redux/selectors"
import { useEffect } from "react";
import css from "./ContactList.module.css"

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  useEffect(() => {
      dispatch(fetchContacts()); 
    }, [dispatch]);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );



  return (
    <ul className={css.contact_list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contact_list_item} key={id}>
          {name}:{number}
          <button className={css.contact_btn} onClick={() => dispatch(deleteContact(id))} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
  };

  ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func.isRequired,
};