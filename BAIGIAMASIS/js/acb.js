fetch("json/acb.json")
  .then((response) => response.json())
  .then((dataList) => {
    for (let index = 0; index < dataList.length; index++) {
      const data = dataList[index];
      document.querySelector(
        ".row"
      ).innerHTML += `<div class="col" onclick="showModal('${data.logo}', '${data.name}', '${data.class}')"><div class="image"><img src="${data.logo}"    "alt="artist photo"></div><h3>${data.name}</h3></div>`;
    }
  });

document.querySelector("#close").onclick = function () {
  document.querySelector(".modal").style.display = "none";
  document.querySelector(".container").style.display = "block";
  document.querySelector(".content").innerHTML = "";
};

function showModal(image, text, ref) {
  document.querySelector(".modal").style.display = "block";
  document.querySelector("h1").style.display = "none";
  document.querySelector(".container").style.display = "none";
  document.querySelector(".content").innerHTML += `<p>${text}</p>`;
  document.querySelector(".content").innerHTML += `<img src="${image}">`;
  document.querySelector(
    ".content"
  ).innerHTML += `<div id="info"><a href="info.html#${ref}">Info</a></div>`;
  document.querySelector(
    ".content"
  ).innerHTML += `<div id="play"><a href="playbook.html#${ref}">Playbook</a></div>`;
}

