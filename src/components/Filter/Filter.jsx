export const Filter = ({ onFilterChange, value }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilterChange} />
    </label>
  );
};
