const ContactListElement = ({ element, deleteElement }) => {
  return (
    <li>
      <p>
        {element.name}: {element.number}
        <button onClick={deleteElement}>Delete</button>
      </p>
    </li>
  );
};

export default ContactListElement;
