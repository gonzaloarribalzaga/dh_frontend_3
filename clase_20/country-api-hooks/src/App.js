import { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";
import Loader from "./components/Loader";
import { countriesAPI } from "./services/api";

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const listCountries = async () => {
      try {
        const response = await countriesAPI.get(
          "/regionalbloc/usan?fields=name,alpha2Code,flags"
        );
        setCountryList(response.data);
      } catch (err) {
        setError(true);
      }

      setLoading(false);
    };

    listCountries();
  }, []);

  const handleSelectCountry = (code) => {
    setSelectedCountry(code);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-around",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {error ? (
            <div>
              <h2>Ocurrió un Error</h2>
            </div>
          ) : (
            <>
              <CountryList
                countries={countryList}
                onSelect={handleSelectCountry}
              />
              <CountryDetail countryCode={selectedCountry} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
