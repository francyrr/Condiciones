document
  .querySelector("#border")
  .addEventListener("click", handleChangeStyleBtn);

function handleChangeStyleBtn() {
  const element = this;

  const classList = element.classList;

  const hasClassActive = classList.contains("border_active");

  if (hasClassActive) {
    classList.remove("border_active");
  } else {
    classList.add("border_active");
  }
}
/// Segundo ejercicio

document
  .querySelectorAll("input")
  .forEach((element) => element.addEventListener("input", handleGetCategories));

document.getElementById("calcular").addEventListener("click", verifyCategories);

let category_1 = 0,
  category_2 = 0,
  category_3 = 0;

function handleGetCategories(event) {
  const element = event.target;
  const id = element.id;
  const value = Number(element.value);

  if (id === "category_1") {
    category_1 = value;
  } else if (id === "category_2") {
    category_2 = value;
  } else {
    category_3 = value;
  }
}

function verifyCategories() {
  if (!category_1 && !category_2 && !category_3) {
    if (
      category_1 == -1 ||
      category_1 == 0 ||
      category_1 > 10 ||
      category_2 == -1 ||
      category_2 == 0 ||
      category_2 > 10 ||
      category_3 == -1 ||
      category_3 == 0 ||
      category_3 > 10
    ) {
     
      document.getElementById("mensaje").innerHTML =
        "Agrega un número entre 1 y 10";
    }
  }

  if (
    category_1 == undefined &&
    category_2 == undefined &&
    category_3 == undefined
  ) {
    
	document.getElementById("mensaje").innerHTML =
        "Agrega un número entre 1 y 10";
  } else if (
    category_1 == -1 ||
    category_1 > 10 ||
    category_2 == -1 ||
    category_2 > 10 ||
    category_3 == -1 ||
    category_3 > 10
  ) {
    document.getElementById("mensaje").innerHTML =
        "Agrega un número entre 1 y 10";
  } else {
    const suma = category_1 + category_2 + category_3;

    if (suma > 10) {
		document.getElementById("mensaje").innerHTML =
        "Has excedido el límite de stickers 🚫";
      
    } else {
      alert("Llevas " + suma + " stickers 🤟");
      
    }
  }
}
//tercer ejercicio

document.addEventListener("DOMContentLoaded", function () {
  let selectedValues = { select1: null, select2: null, select3: null };

  document
    .querySelectorAll("#ejercicio3 select")
    .forEach(function (selectElement) {
      selectElement.addEventListener("change", function (event) {
        const selectedValue = event.target.value;
        const selectId = event.target.id;

        console.log(
          `seleccionado: ${selectedValue} del <select> con ID: ${selectId}`
        );

        selectedValues[selectId] = parseInt(selectedValue, 10);

        console.log(selectedValues);
      });
    });

  document.getElementById("ingresar").addEventListener("click", function () {
    if (
      selectedValues.select1 === 9 &&
      selectedValues.select2 === 1 &&
      selectedValues.select3 === 1
    ) {
      document.getElementById("mensajepassword").innerHTML =
        "Password 1 correcto";
    } else if (
      selectedValues.select1 === 7 &&
      selectedValues.select2 === 1 &&
      selectedValues.select3 === 4
    ) {
      document.getElementById("mensajepassword").innerHTML =
        "Password 2 correcto";
    } else {
      document.getElementById("mensajepassword").innerHTML =
        "Password incorrecto";
    }
  });
});
