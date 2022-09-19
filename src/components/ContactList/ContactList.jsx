export const ContactList = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, name, number }) => {
        console.log();
        return (
          <li key={id}>
            <p>
              {name} {number}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
