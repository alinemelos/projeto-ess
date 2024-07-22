const { defineFeature, loadFeature } = require("jest-cucumber");
const axios = require("axios");
const { expect } = require("@jest/globals");
const maintenance_feature = loadFeature("./tests/features/maintenance.feature");

const getFilmeByName = async (name) => {
  const response = await axios.get("http://localhost:3000/");
  return response.data.find((filme) => filme.nome === name);
};

const getReviewFromFilme = (filme, userId, reviewText) => {
  return filme.posts.find(
    (post) => post.user_id === userId && post.review === reviewText,
  );
};

const updatePost = async (postTest) => {
  return await axios.put("http://localhost:3000/maintenance", postTest);
};

const deletePost = async (postTest) => {
  return await axios.delete("http://localhost:3000/maintenance", {
    data: postTest,
  });
};

defineFeature(maintenance_feature, (test) => {
  // Feature "Salvar edição de review"
  test("Salvar edição de review", ({ given, and, when, then }) => {
    let filme, postId, userId, nota, review, postTest, postFinal;

    given(/^Estou no post "(.*)" que já existe no sistema$/, async (arg0) => {
      filme = await getFilmeByName(arg0);
    });

    and(
      /^Existe uma review do usuario "(.*)" com texto "(.*)"$/,
      async (arg0, arg1) => {
        const reviewData = getReviewFromFilme(filme, arg0, arg1);
        postId = reviewData.post_id;
        userId = reviewData.user_id;
        nota = reviewData.nota;
        review = reviewData.review;
      },
    );

    and(/^Selecionei a opção "(.*)"$/, async (arg0) => {});

    when(/^Eu editar a review para que ela fique "(.*)"$/, (arg0) => {
      postTest = { post_id: postId, nota: nota, review: arg0 };
    });

    and(/^Selecionar a opção "(.*)"$/, async (arg0) => {
      postFinal = await updatePost(postTest);
    });

    then(/^Serei redirecionado a "(.*)"$/, () => {
      // Implement redirection check if needed
    });

    and(
      /^A review do usuario "(.*)" no post "(.*)" terá a review "(.*)"$/,
      async (arg0, arg1, arg2) => {
        filme = await getFilmeByName(arg1);
        const updatedReview = getReviewFromFilme(filme, arg0, arg2);
        expect(postFinal.data).toEqual(updatedReview);
      },
    );
  });

  // Feature "Remover review"
  test("Remover review", ({ given, and, when, then }) => {
    let filme, postId, userId, nota, review, postTest, postFinal;

    given(/^Estou no post "(.*)" que já existe no sistema$/, async (arg0) => {
      filme = await getFilmeByName(arg0);
    });

    and(
      /^Existe uma review do usuario "(.*)" com texto "(.*)"$/,
      async (arg0, arg1) => {
        const reviewData = getReviewFromFilme(filme, arg0, arg1);
        postId = reviewData.post_id;
        userId = reviewData.user_id;
        nota = reviewData.nota;
        review = reviewData.review;
      },
    );

    when(
      /^Eu selecionar a opção "(.*)" a review do usuario "(.*)"$/,
      async (arg0, arg1) => {
        postTest = {
          post_id: postId,
          user_id: arg1,
          filme_id: filme.filme_id,
          review: " ",
        };
        postFinal = await deletePost(postTest);
      },
    );

    then(
      /^A review do usuario "(.*)" no post "(.*)" estará em branco "(.*)"$/,
      async (arg0, arg1, arg2) => {
        filme = await getFilmeByName(arg1);
        const updatedReview = getReviewFromFilme(filme, arg0, arg2);
        expect(postFinal.data.message).toEqual(
          "Review post deleted successfully",
        );
      },
    );
  });

  // Feature "Falha na edição"
  test("Falha na edição", ({ given, and, when, then }) => {
    let filme;
    let post_id;
    let user_id;
    let nota;
    let response;
    let review;
    let post_test;
    let post_final;

    given(/^Estou no post "(.*)" que já existe no sistema$/, async (arg0) => {
      //requisição do GET
      response = await axios.get("http://localhost:3000/");
      //armazenando filme_id
      filme = response.data.find((filme) => filme.nome === arg0);
    });

    and(
      /^Existe uma review do usuario "(.*)" com texto "(.*)"$/,
      async (arg0, arg1) => {
        let user_id = null;
        review = null;
        // Iterando sobre todos os posts de cada filme
        for (let post of filme.posts) {
          // Verificando se o post corresponde ao user_id e à review fornecidos
          if (post.user_id === arg0 && post.review === arg1) {
            user_id = post.user_id;
            review = post.review;
            nota = post.nota;
            post_id = post.post_id;
            post_final = post;
            break; // Saindo do loop assim que encontramos a correspondência
          }
        }
      },
    );

    and(/^selecionei a opção "(.*)"$/, (arg0) => {});

    when(/^Eu editar a review para que ela fique "(.*)"$/, async (arg0) => {
      post_test = {
        post_id: post_id,
        nota: nota,
        review: arg0,
      };
    });

    and(/^Selecionar a opção "(.*)"$/, async (arg0) => {});

    then(/^Serei redirecionado a "(.*)"$/, (arg0) => {});

    and(
      /^A review do usuario "(.*)" no post "(.*)" terá a review "(.*)"$/,
      async (arg0, arg1, arg2) => {
        //requisição do GET
        const response = await axios.get("http://localhost:3000/");
        filme = response.data.find((filme) => filme.nome === arg1);
        let post_test;
        for (let post of filme.posts) {
          // Verificando se o post corresponde ao user_id e à review fornecidos
          if (post.user_id === arg0 && post.review === arg2) {
            post_test = post;
            break; // Saindo do loop assim que encontramos a correspondência
          }
        }
        expect(post_final).toEqual(post_test);
      },
    );
  });
});
