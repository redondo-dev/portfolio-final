const link = document.querySelector("#link");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");

const formations = document.querySelector(".formations");
const experiences = document.querySelector(".experiences");
const centre = document.querySelector(".centre");

const text = document.getElementById("text");

const splitText = text.innerText.split("");

text.innerHTML = "";
i = 0;
setInterval(function () {
  AjoutDeLettre();
}, 100);

function AjoutDeLettre() {
  if (i < splitText.length) {
    text.innerHTML += splitText[i];
    i++;
  }
}

link.addEventListener("click", () => {
  //  formations.style.animation= "defilement 20s infinite linear";
  formations.style.display = "block";
  formations.style.color = "#ffff";
  formations.style.width = "90%";
  formations.style.borderRadius = "30px";
});
link.addEventListener("dblclick", () => {
  formations.style.display = "none";
});
link1.addEventListener("click", () => {
  experiences.style.display = "block";
  experiences.style.color = "#ffff";
  experiences.style.width = "70%";
  experiences.style.borderRadius = "40px";
});
link1.addEventListener("dblclick", () => {
  experiences.style.display = "none";
});

link2.addEventListener("click", () => {
  centre.style.display = "block";
  centre.style.color = "#ffff";
  centre.style.width = "50%";
  centre.style.borderRadius = "50px";
});
link2.addEventListener("dblclick", () => {
  centre.style.display = "none";
});
