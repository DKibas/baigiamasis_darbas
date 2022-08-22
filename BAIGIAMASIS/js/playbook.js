fetch("json/nba.json")
  .then((response) => response.json())
  .then((dataList) => {
    let dataList1 = dataList;
    let navigateTo = location.hash.substring(1, location.hash.length);
    for (const data1 of dataList1) {
      document.querySelector(
        ".container"
      ).innerHTML += `<h2>${data1.name}</h2><img src="${data1.logo}" class="foto" ><div class="row"><div class="col1"><h3>How to play</h3><img src="${data1.playbookImg}" alt="" id="${data1.class}"></div><div class="col2"><h3>Video</h3><img src="${data1.playbookVid}" alt=""></div></div>`;

      if (data1.class == navigateTo) {
        document.querySelector("p").scrollIntoView();
      }
    }
  });

fetch("json/acb.json")
  .then((response) => response.json())
  .then((dataList) => {
    let dataList1 = dataList;
    let navigateTo = location.hash.substring(1, location.hash.length);
    for (const data1 of dataList1) {
      document.querySelector(
        ".container"
      ).innerHTML += `<h2>${data1.name}</h2><img src="${data1.logo}" class="foto" ><div class="row"><div class="col1"><h3>How to play</h3><img src="${data1.playbookImg}" alt="" id="${data1.class}"></div><div class="col2"><h3>Video</h3><img src="${data1.playbookVid}" alt=""></div></div>`;

      if (data1.class == navigateTo) {
        document.querySelector("p").scrollIntoView();
      }
    }
  });

fetch("json/euroleague.json")
  .then((response) => response.json())
  .then((dataList) => {
    let dataList1 = dataList;
    let navigateTo = location.hash.substring(1, location.hash.length);
    for (const data1 of dataList1) {
      document.querySelector(
        ".container"
      ).innerHTML += `<h2>${data1.name}</h2><img src="${data1.logo}" class="foto" ><div class="row"><div class="col1"><h3>How to play</h3><img src="${data1.playbookImg}" alt="" id="${data1.class}"></div><div class="col2"><h3>Video</h3><img src="${data1.playbookVid}" alt=""></div></div>`;

      if (data1.class == navigateTo) {
        document.querySelector("p").scrollIntoView();
      }
    }
  });

fetch("json/lkl.json")
  .then((response) => response.json())
  .then((dataList) => {
    let dataList1 = dataList;
    let navigateTo = location.hash.substring(1, location.hash.length);
    for (const data1 of dataList1) {
      document.querySelector(
        ".container"
      ).innerHTML += `<h2>${data1.name}</h2><img src="${data1.logo}" class="foto" ><div class="row"><div class="col1"><h3>How to play</h3><img src="${data1.playbookImg}" alt="" id="${data1.class}"></div><div class="col2"><h3>Video</h3><img src="${data1.playbookVid}" alt=""></div></div>`;

      if (data1.class == navigateTo) {
        document.querySelector("p").scrollIntoView();
      }
    }
  });


window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


function barClick() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav" || x.className ==="topnav sticky") {
    x.className += " responsive ";
  } else {
    x.className = "topnav sticky";
  }
}

function mouseLeave(){
  var y=document.querySelector("#navbar");
  y.classList.remove("responsive");
}


