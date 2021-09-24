import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { countriesAPI } from "../services/api";

function CountryDetail(props) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);

      try {
        const response = await countriesAPI.get(
          `/alpha/${props.countryCode}?fields=name,alpha2Code,flags,capital,population,latlng`
        );

        setCountry(response.data);
      } catch (e) {
        setError(false);
      }

      setLoading(false);
    };

    if (props.countryCode) {
      fetchCountry();
    }
  }, [props.countryCode]);

  return (
    <div
      style={{
        border: "solid 1px black",
        borderRadius: "5px",
        padding: "0 50px",
      }}
    >
      <h2>Country Detail</h2>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          {error ? (
            <div style={{ color: "red", fontWeight: "bold" }}>
              Ocurrió un error al intentar obtener el país, puede deberse a un
              problema de red o que su país ya no exista.
            </div>
          ) : (
            <>
              {country ? (
                <>
                  <img
                    style={{ width: "200px" }}
                    src={country.flags[0]}
                    alt={country.name}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <p>
                      <strong>Name:</strong>
                      <span>{country.name}</span>
                    </p>
                    <p>
                      <strong>Country Code:</strong>
                      <span>{country.alpha2Code}</span>
                    </p>
                    <p>
                      <strong>Capital:</strong>
                      <span>{country.capital}</span>
                    </p>
                    <p>
                      <strong>Population:</strong>
                      <span>{country.population}</span>
                    </p>
                    <p>
                      <strong>latitud:</strong>
                      <span>{country.latlng[0]}</span>
                    </p>
                    <p>
                      <strong>latitud:</strong>
                      <span>{country.latlng[1]}</span>
                    </p>
                  </div>
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <h3>Select a country</h3>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CountryDetail;
