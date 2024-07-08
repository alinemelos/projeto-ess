const { v1: uuidv1, v4: uuidv4 } = require('uuid');

const filme1_id = uuidv1();
const filme2_id = uuidv1();

module.exports = [
    {
      filme_id: filme1_id,
      poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
      nome: "Oppenheimer",
      ano: 2023,
      duracao: 181,
      sinopse: "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
      diretor: "Christopher Nolan",
      plataformas: [
      {
          filme1_id: filme1_id,
          nome: "Globoplay",
          url: "https://globoplay.com/oppenheimer",
          image: "https://globoplay.com/logo.png",
      },
      {
          filme1_id: filme1_id,
          nome: "Netflix",
          url: "https://netflix.com/oppenheimer",
          image: "https://netflix.com/logo.png",
      }
      ],
      genero: "comedia",
      posts: [
        {
          post_id: uuidv4(),
          user_id: "Elian Rodriguez",
          filme_id: filme1_id,
          nota: 0.5,
          review: "Horrivel!",
          comments: []
        },
        {
          post_id: uuidv4(),
          user_id: "Yumi Kinoshita",
          filme_id: filme1_id,
          nota: 5,
          review: "Absolute Cinema!",
          comments: []
        },
      ]
    },
    {
      filme_id: filme2_id,
      poster: "https://a.ltrbxd.com/resized/film-poster/5/1/5/6/8/51568-fight-club-0-1000-0-1500-crop.jpg?v=768b32dfa4",
      nome: "Fight Club",
      ano: 1999,
      duracao: 260,
      sinopse: "Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.",
      diretor: "David Fincher",
      plataformas: [],
      genero: "comedia",
      posts: []
    },
    {
      filme_id: "d9a92df2-2d0e-11ef-85cc-15bfccf04c98",
      poster: "https://a.ltrbxd.com/resized/sm/upload/10/u6/42/pa/cezWGskPY5x7GaglTTRN4Fugfb8-0-1000-0-1500-crop.jpg?v=9ec74891d9",
      nome: "Os Vingadores",
      ano: 2012,
      duracao: 130,
      sinopse: "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
      diretor: "Joss Whedon",
      plataformas: [],
      genero: "Ação",
      posts: []
    },
    {
      filme_id: "d9a92df3-2d0e-11ef-85cc-15bfccf04c99",
      poster: "https://a.ltrbxd.com/resized/film-poster/2/2/6/6/6/0/226660-avengers-endgame-0-1000-0-1500-crop.jpg?v=250ab286a3",
      nome: "Vingadores Ultimato",
      ano: 2019,
      duracao: 130,
      sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
      diretor: "Anthony Russo, Joe Russo",
      plataformas: [],
      genero: "comedia",
      posts: []
    },
    {
      filme_id: "d9a92df3-2d0e-11ef-85cc-15bfccf04c00",
      poster: "https://a.ltrbxd.com/resized/film-poster/5/1/6/7/0/51670-ice-age-0-1000-0-1500-crop.jpg?v=e24a5fb66e",
      nome: "A era do gelo",
      ano: 2002,
      duracao: 120,
      sinopse: "Vinte mil anos atrás, num mundo coberto de gelo, o mamute Manfred e a preguiça Sid resgatam um bebê humano órfão. Agora, os dois vão enfrentar muitas aventuras até devolver o filhote de gente à sua tribo, que migrou para um novo acampamento.",
      diretor: "Chris Wedge",
      plataformas: [],
      genero: "comedia",
      posts: []
    },
    {
      filme_id: "40028922",
      poster: "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      nome: "1984",
      ano: 1984,
      duracao: "1h33",
      sinopse: "Placeholder",
      genero: "Comédia",
    },
    {
      filme_id: "12345678",
       nome: "Barbie2",
       ano: 2023, 
       duracao: "1h54m",
       genero: "2",
       sinopse: "Barbie parte para o mundo humano em busca da verdadeira felicidade.",
       poster: "https://image.tmdb.org/t/p/original/uUbdc9TMwbazp1zCNzGtXoBHhUa.jpg" 
    },
    {
      filme_id: "a7b8c9d0-1e2f-11ef-3a4b-5c6d7e8f9a0b",
      poster: "https://example.com/poster3.jpg",
      nome: "Enrolados",
      ano: 2010,
      duracao: "1h40",
      sinopse: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.",
      diretor: "Nathan Greno",
      plataformas: [],
      genero: "Animation",
      posts: []
    },
    { 
      filme_id: "d9a92df3-2d0e-11ef-85cc-15bfccf04c22",
      poster: "https://a.ltrbxd.com/resized/film-poster/2/2/5/8/4/5/225845-the-flash-0-1000-0-1500-crop.jpg?v=be50db18ec",
      nome: "Flash",
      ano: 2023,
      duracao: 180,
      sinopse: "Os mundos colidem quando Flash viaja no tempo para mudar os eventos do passado. No entanto, quando sua tentativa de salvar sua família altera o futuro, ele fica preso em uma realidade na qual o General Zod voltou, ameaçando a aniquilação.",
      diretor: "Andy Muschietti",
      plataformas: [],
      genero: "comedia",
      posts: []
    },
    {
      filme_id: "d9a92df3-2d0e-11ef-85cc-15bfccf04c11",
      poster: "https://a.ltrbxd.com/resized/film-poster/2/7/7/0/6/4/277064-barbie-0-1000-0-1500-crop.jpg?v=1b83dc7a71",
      nome: "Barbie",
      ano: 2023,
      duracao: 300,
      sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
      diretor: "Greta Gerwig",
      plataformas: [],
      genero: "comedia",
      posts: []
    },
  ];
  