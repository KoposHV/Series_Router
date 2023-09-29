import "./Series.css";
import { series } from "../../data/data";
import { NavLink } from "react-router-dom";

const Series = () => {
  return (
    <main className="series">
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <NavLink to={`/series/${serie.title}`}>
              <img
                src={serie.poster}
                alt={serie.title}
                referrerPolicy="no-referrer"
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Series;