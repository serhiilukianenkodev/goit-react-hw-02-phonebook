import PropTypes from 'prop-types';

export const ContactList = ({ list, removeContact }) => {
  return (
    <ul>
      {list.map(({ id, name, number }) => {
        console.log();
        return (
          <li key={id}>
            <p>
              {name}: {number}
              <button type="button" onClick={() => removeContact(id)}>
                Delete
              </button>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  removeContact: PropTypes.func.isRequired,
};
