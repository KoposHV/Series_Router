import "./SerieDetail.css";
import { useParams } from "react-router-dom";
import { getSerie } from "../../data/data";

const SerieDetail = () => {
  const { title } = useParams();
  const serie = getSerie(title);

  if (!serie) {
    return (
      <main>
        <h2>Serie no encontrada</h2>
      </main>
    );
  } else {
    return (
      <main>
        <div>
          <h2>{serie.title}</h2>
          <h3>{serie.year}</h3>
          <h3>{serie.director}</h3>
          <img src={serie.poster} alt={serie.title} />
          <p>{serie.description}</p>
        </div>
      </main>
    );
  }
};

export default SerieDetail;