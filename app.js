// SELECTORS
const inputNumber = document.querySelector("#inputNumber");
const submit = document.querySelector("#submit");
const error = document.querySelector("#error");
const nombreCoups = document.querySelector("#nombreCoups");

// tirage au sort nombre entier entre 1 et 10
let randomChiffre = Math.floor(Math.random() * 10 + 1);
let coups = 0;

//console.log("chiffre du tirage : " + randomChiffre);

function comparaison() {
  let chiffre = Number(inputNumber.value);
  if (chiffre > randomChiffre) {
    plus.classList.remove("plus-display");
    plus.classList.add("plus");
    moins.classList.remove("moins");
    moins.classList.add("moins-display");
  } else if (chiffre < randomChiffre) {
    moins.classList.remove("moins-display");
    moins.classList.add("moins");
    plus.classList.remove("plus");
    plus.classList.add("plus-display");
  } else if (chiffre === randomChiffre) {
    alert(
      `C'EST GAGNÉ ! Bravo ! vous avez trouvé le nombre ${randomChiffre} en ${
        coups + 1
      } coups !`
    );
  }
  coups++;
  nombreCoups.innerHTML = `<h3>${coups}</h3>`;
  inputNumber.value = "";
}

// verification si la saisie est un chiffre sinon erreur
inputNumber.addEventListener("keyup", () => {
  if (!isNaN(inputNumber.value || (inputNumber.value = ""))) {
    error.classList = "error";
  } else {
    error.classList.remove("error");
    error.classList.add("error-display");
  }
});

submit.addEventListener("click" || "keypress", (e) => {
  e.preventDefault();
  comparaison();
  console.log("Nombre de coups : " + coups);
});
