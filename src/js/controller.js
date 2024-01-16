import * as model from './model.js';
import recipeView from './views/recipeView.js';

// pollyfiling everything
import 'core-js/stable';
// polyfilling async-await
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //1) Loading recipe
    // This is an async function, so it will create a promise.
    await model.loadRecipe(id);

    //2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
// Same as :
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
