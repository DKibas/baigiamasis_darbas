fetch("json/nba.json")
  .then((response) => response.json())
  .then((dataList) => {
    let dataList1=dataList;
    let navigateTo=location.hash.substring(1, location.hash.length);
    for (const data1 of dataList1) {
      console.log(data1.class);
      document.querySelector(".container").innerHTML+=`<table border="2" ><tr id="${data1.class}"><th>Team Name</th><td>${data1.name}</td></tr><tr><th>Team Logo</th><td><img src="${data1.logo}" "alt="artist photo"></td></tr><tr><th>Head coach</th><td>${data1.headCoach}</td></tr><tr><th>Arena/Stadium</th><td>${data1.arena}</td></tr><tr><th>More information</th><td>${data1.info}</td></tr></table>`;

      if(data1.class==navigateTo){
        document.querySelector("p").scrollIntoView();
      };
    }
  })

fetch("json/acb.json")
  .then((response) => response.json())
  .then((dataList) => {
    let dataList1=dataList;
    let navigateTo=location.hash.substring(1, location.hash.length);
    for (const data1 of dataList1) {
      document.querySelector(".container").innerHTML+=`<table border="2" ><tr><th>Team Name</th><td id="${data1.class}">${data1.name}</td></tr><tr><th>Team Logo</th><td><img src="${data1.logo}" "alt="artist photo"></td></tr><tr><th>Head coach</th><td>${data1.headCoach}</td></tr><tr><th>Arena/Stadium</th><td>${data1.arena}</td></tr><tr><th>More information</th><td>${data1.info}</td></tr></table>`;
      
      if(data1.class==navigateTo){
        document.querySelector("p").scrollIntoView();
      };
    }
  })

  fetch("json/lkl.json")
  .then((response) => response.json())
  .then((dataList) => {
    let dataList1=dataList;
    let navigateTo=location.hash.substring(1, location.hash.length);
    for (const data1 of dataList1) {
      document.querySelector(".container").innerHTML+=`<table border="2" ><tr><th>Team Name</th><td id="${data1.class}">${data1.name}</td></tr><tr><th>Team Logo</th><td><img src="${data1.logo}" "alt="artist photo"></td></tr><tr><th>Head coach</th><td>${data1.headCoach}</td></tr><tr><th>Arena/Stadium</th><td>${data1.arena}</td></tr><tr><th>More information</th><td>${data1.info}</td></tr></table>`;

      if(data1.class==navigateTo){
        document.querySelector("p").scrollIntoView();
      };
    }
  })

  fetch("json/euroleague.json")
  .then((response) => response.json())
  .then((dataList) => {
    let dataList1=dataList;
    let navigateTo=location.hash.substring(1, location.hash.length);
    for (const data1 of dataList1) {
      document.querySelector(".container").innerHTML+=`<table border="2" ><tr><th>Team Name</th><td id="${data1.class}">${data1.name}</td></tr><tr><th>Team Logo</th><td><img src="${data1.logo}" "alt="artist photo"></td></tr><tr><th>Head coach</th><td>${data1.headCoach}</td></tr><tr><th>Arena/Stadium</th><td>${data1.arena}</td></tr><tr><th>More information</th><td>${data1.info}</td></tr></table>`;
      
      if(data1.class==navigateTo){
        document.querySelector("p").scrollIntoView();
      };
    }
  })


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

  