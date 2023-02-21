"use strict";

const modal = document.getElementById("myModal");
const btn = document.querySelector(".mainButton");
const btn2 = document.querySelector(".mainButton2");
const btn3 = document.querySelector(".mainButton3");
const buy1 = document.querySelector(".buy_button--1");
const buy2 = document.querySelector(".buy_button--2");
const buy3 = document.querySelector(".buy_button--3");
const buy4 = document.querySelector(".buy_button--4");
const buy5 = document.querySelector(".buy_button--5");
const span = document.getElementsByClassName("close")[0];
const body = document.querySelector("body");

buy1.addEventListener("click", () => {
  modal.style.display = "flex";
  body.style.position = "fixed";
});

buy2.addEventListener("click", () => {
  modal.style.display = "flex";
  body.style.position = "fixed";
});

buy3.addEventListener("click", () => {
  modal.style.display = "flex";
  body.style.position = "fixed";
});

buy4.addEventListener("click", () => {
  modal.style.display = "flex";
  body.style.position = "fixed";
});

buy5.addEventListener("click", () => {
  modal.style.display = "flex";
  body.style.position = "fixed";
});

btn.addEventListener("click", () => {
  modal.style.display = "flex";
  body.style.position = "fixed";
});

btn2.addEventListener("click", () => {
  modal.style.display = "flex";
  body.style.position = "fixed";
});

btn3.addEventListener("click", () => {
  modal.style.display = "flex";
  body.style.position = "fixed";
});

span.onclick = function () {
  modal.style.display = "none";
  body.style.position = "";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
