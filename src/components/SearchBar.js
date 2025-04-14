const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <input
        type="text"
        placeholder="🔍 Search by description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', width: '100%' }}
      />
    );
  };
  
  export default SearchBar;
  