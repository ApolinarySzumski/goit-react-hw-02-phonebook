const Filter = ({ filter, change }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="tel"
        name="filter"
        value={filter}
        title="Find contacts by name"
        onChange={change}
      />
    </>
  );
};

export default Filter;
