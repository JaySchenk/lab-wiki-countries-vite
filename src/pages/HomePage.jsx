import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const fetchAllCountries = async () => {
    const response = await fetch(
      `https://ih-countries-api.herokuapp.com/countries`
    );
    if (response.ok) {
      const parsed = await response.json();
      setCountries(parsed);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <>
      <h1>All the characters</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/CountryDetailsPage/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />
              <h4>{country.name.common}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
