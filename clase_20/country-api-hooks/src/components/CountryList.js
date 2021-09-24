function CountryList(props) {
  return (
    <div>
      <h2>Countries</h2>
      <ul style={{ listStyle: "none" }}>
        {props.countries.map((country) => (
          <li
            key={country.alpha2Code}
            style={{ padding: "5px", cursor: "pointer" }}
            onClick={() => props.onSelect(country.alpha2Code)}
          >
            <img
              style={{ width: "20px" }}
              src={country.flags[1]}
              alt={country.alpha2Code}
            />
            <span style={{ marginLeft: "10px" }}>{country.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
