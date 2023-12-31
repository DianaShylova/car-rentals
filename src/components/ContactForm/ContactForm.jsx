import css from "./ContactForm.module.css";
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { addContact } from "redux/operations";

export const ContactForm = () => {
   const contacts = useSelector(getContacts);
    const dispatch = useDispatch()
  

  const handleSubmit = event => {
    event.preventDefault();

     const contact = {
        id: nanoid(),
        name: event.currentTarget.elements.name.value,
        number: event.currentTarget.elements.number.value,
     };
    
    
       const isExist = contacts.find(
         ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
       );
    
       if (isExist) {
         return alert(`${contact.name} is already in contacts.`);
       }

       
    
    dispatch(addContact(contact));
    event.currentTarget.reset();

 };

    return (
      <form className={css.submit_form} onSubmit={handleSubmit}>
        <h3 className={css.name_title}>Name</h3>
        <input className={css.shape_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           id={nanoid()}
          required
        />
        <h3 className={css.number_title}>Number</h3>
        <input className={css.shape_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()}
          required
        />
        <button type="submit" className={css.add_contact_btn} >Add contact</button>
      </form>
    );
  
};