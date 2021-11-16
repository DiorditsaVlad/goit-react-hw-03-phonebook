import PropTypes from 'prop-types';
const Filter = ({ filter, filterContact }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        onChange={filterContact}
        value={filter}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
