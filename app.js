const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

const dragstart = (e) => {
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"), 0);
};

const dragend = (e) => {
  e.target.className = "item";
};

const dragover = (e) => {
  e.preventDefault();
};
const dragenter = (e) => {
  e.target.classList.add("hovered");
};
const dragleave = (e) => {
  e.target.classList.remove("hovered");
};
const dragdrop = (e) => {
  e.target.append(item);
  e.target.classList.remove("hovered");
};

placeholders.forEach((el) => {
  el.addEventListener("dragover", dragover);
  el.addEventListener("dragenter", dragenter);
  el.addEventListener("dragleave", dragleave);
  el.addEventListener("drop", dragdrop);
});

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);
