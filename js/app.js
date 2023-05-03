let toggleDrop1 = () => {
  let drop1 = document.getElementById("drop1");
  // let overlayDrop = document.getElementById("overlayDrop");
  let parent = document.getElementById("parent");
  parent.classList.toggle("is-open");
  drop1.classList.toggle("show-it");
  // overlayDrop.classList.toggle("show-it");
};
let removedrop = () => {
  // let drop1 = document.getElementById("drop1");
  // // let overlayDrop = document.getElementById("overlayDrop");
  let parent = document.getElementById("parent");
  let drop2 = document.getElementById("drop2");
  // let parent2 = document.getElementById("parent2");
  parent.classList.remove("is-open");
  // drop1.classList.remove("show-it");
  // overlayDrop.classList.remove("show-it");

  // parent2.classList.remove("is-open");
  drop2.classList.remove("show-it");
  // overlayDrop.classList.remove("show-it");
};

let toggleDrop2 = () => {
  let drop2 = document.getElementById("drop2");
  // // let overlayDrop = document.getElementById("overlayDrop");
  let parent2 = document.getElementById("parent2");
  parent2.classList.toggle("is-open");
  drop2.classList.toggle("show-it");
  // overlayDrop.classList.toggle("show-it");
};
let toggleNav = () => {
  let max = document.getElementById("max");
  max.classList.toggle("max-height");
};
$(".link-option").hover(
  function () {
    $(this).addClass("active-link");
    $("#parent2").addClass("is-open");
  },
  function () {
    $(this).removeClass("active-link");
    $("#parent2").removeClass("is-open");
  }
);
$("#drop2").hover(
  function () {
    $(this).addClass("show-it");
  },
  function () {
    $(this).removeClass("show-it");
    $(".default-active").addClass("active-link");
  }
);
