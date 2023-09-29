export const series = [
    {
      id: 1,
      title: "Breaking Bad",
      year: 2008,
      director: "Vince Gilligan",
      poster: "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg",
      description: "Un profesor de química se convierte en fabricante de metanfetaminas después de ser diagnosticado con cáncer."
    },
    {
      id: 2,
      title: "Stranger Things",
      year: 2016,
      director: "Hermanos Duffer",
      poster: "https://pics.filmaffinity.com/Stranger_Things_Serie_de_TV-875025085-large.jpg",
      description: "Un grupo de niños en un pequeño pueblo descubre eventos sobrenaturales y un mundo paralelo llamado el Mundo del Revés."
    },
    {
      id: 3,
      title: "Game of Thrones",
      year: 2011,
      director: "David Benioff, D.B. Weiss",
      poster: "https://sm.ign.com/ign_es/tv/j/juego-de-t/juego-de-tronos_d4p4.png",
      description: "Basada en las novelas de George R.R. Martin, la serie sigue las luchas de poder entre familias nobles en el continente ficticio de Westeros."
    },
    {
      id: 4,
      title: "The Crown",
      year: 2016,
      director: "Peter Morgan",
      poster: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/03/crown-portada.jpg",
      description: "Drama biográfico que sigue el reinado de la Reina Isabel II del Reino Unido desde sus inicios en los years 40 hasta la actualidad."
    },
    {
      id: 5,
      title: "Black Mirror",
      year: 2011,
      director: "Charlie Brooker",
      poster: "https://c8.alamy.com/comp/2F3P2D5/black-mirror-tv-series-2011-uk-created-by-charlie-brooker-2011-season-1-poster-dvd-box-spain-2F3P2D5.jpg",
      description: "Serie de antología que explora una distopía tecnológica y sus posibles impactos en la sociedad."
    },
    {
      id: 6,
      title: "Friends",
      year: 1994,
      director: "David Crane, Marta Kauffman",
      poster: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/07/poster-friends.jpg?tf=1200x",
      description: "La vida, amores y desventuras de un grupo de amigos en Nueva York."
    },
    {
      id: 7,
      title: "Sherlock",
      year: 2010,
      director: "Mark Gatiss, Steven Moffat",
      poster: "https://pics.filmaffinity.com/Sherlock_Serie_de_TV-635342236-large.jpg",
      description: "Adaptación moderna de las historias clásicas de Sherlock Holmes."
    },
    {
      id: 8,
      title: "The Mandalorian",
      year: 2019,
      director: "Jon Favreau",
      poster: "https://pics.filmaffinity.com/The_Mandalorian_Serie_de_TV-526462730-large.jpg",
      description: "Un cazarrecompensas en las fronteras de la galaxia se encuentra con un misterioso bebé de la misma especie que Yoda."
    },
    {
      id: 9,
      title: "The Office",
      year: 2005,
      director: "Greg Daniels",
      poster: "https://pics.filmaffinity.com/the_office-862602609-mmed.jpg",
      description: "Una mirada cómica a la vida cotidiana en una oficina de ventas."
    },
    {
      id: 10,
      title: "Westworld",
      year: 2016,
      director: "Jonathan Nolan",
      poster: "https://pics.filmaffinity.com/Westworld_Serie_de_TV-603666311-large.jpg",
      description: "En un parque temático futurista, los huéspedes interactúan con androides en historias ambientadas en el viejo oeste, la época romana y otros mundos."
    },
    {
      id: 11,
      title: "Narcos",
      year: 2015,
      director: "Chris Brancato, Carlo Bernard, Doug Miro",
      poster: "https://es.web.img3.acsta.net/pictures/15/07/29/14/33/086520.jpg",
      description: "La historia del auge y caída de los carteles de drogas en Colombia, centrada en la vida del infame narcotraficante Pablo Escobar."
    },
    {
      id: 12,
      title: "El Chapo",
      year: 2017,
      director: "Ernesto Contreras",
      poster: "https://es.web.img3.acsta.net/pictures/17/05/03/09/11/348326.jpg",
      description: "La serie narra los inicios de Joaquín El Chapo Guzmán en 1985, cuándo era un miembro de nivel bajo del Cártel de Guadalajara, hasta su aumento de poder y su última caída."
    },
    {
      id: 13,
      title: "Fargo",
      year: 2014,
      director: "Noah Hawley",
      poster: "https://pics.filmaffinity.com/Fargo-790243981-large.jpg",
      description: "Inspirada en la película homónima, la serie sigue diferentes historias con personajes retorcidos y eventos violentos en el área de Fargo, Dakota del Norte."
    },
    {
      id: 14,
      title: "The Witcher",
      year: 2019,
      director: "Lauren Schmidt Hissrich",
      poster: "https://es.web.img2.acsta.net/pictures/19/11/22/09/33/5060052.jpg",
      description: "Basada en la serie de libros y videojuegos, sigue las aventuras del cazador de monstruos Geralt de Rivia en un mundo lleno de magia y criaturas peligrosas."
    },
    {
      id: 15,
      title: "The Umbrella Academy",
      year: 2019,
      director: "Steve Blackman",
      poster: "https://sm.ign.com/ign_es/cover/t/the-umbrel/the-umbrella-academy_p489.jpg",
      description: "Un grupo disfuncional de superhéroes se reúne para resolver el misterio de la muerte de su padre y prevenir un apocalipsis inminente."
    }
    
  ];
  export const getSerie = (title) => {
    const foundSerie = series.find((serie) => serie.title === title);
    return foundSerie;
  };
  
  
  