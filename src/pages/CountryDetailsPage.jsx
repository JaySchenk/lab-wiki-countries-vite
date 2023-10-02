import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
  const alpha3 = useParams().countryId;

  const [countryInformation, setCountryInformation] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountry = async () => {
    const response = await fetch(
      `https://ih-countries-api.herokuapp.com/countries/${alpha3}`
    );

    if (response.ok) {
      const parsed = await response.json();
      setCountryInformation(parsed);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryInformation.alpha2Code.toLowerCase()}.png`}
      />
      <h1>Country name: {countryInformation.name.common}</h1>
      <h2>Capital: {countryInformation.capital}</h2>
      <h2>Area: {countryInformation.area} km²</h2>
      <ul>
        <h3>Borders:</h3>
        {countryInformation.borders.map((border) => (
          <li key={border}>
            <Link to={`/CountryDetailsPage/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CountryDetails;
