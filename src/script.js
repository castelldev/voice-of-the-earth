$(document).ready(function() {
  new WOW().init();
  let tabImages = [
    "https://images.unsplash.com/photo-1520525003249-2b9cdda513bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1505682128212-a6a59a6abbae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1534844624972-72af3082566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
  ];
  let changeTab = ind => {
    console.log(ind);
    $("#viewport").css("background", "center / cover url(" + tabImages[ind] + ")");
  };

  for (let i = 1; i <= 3; i++)
    $(".tab:nth-child(" + i + ")").hover(() => changeTab(i - 1));
  
  //Menu
  let toggleMenu = () => {
    $(".menu").toggleClass("menu-open");
    $("body").toggleClass("behind-modal");
  };
  $(".menu,#menu-close").click(toggleMenu);
  $("#menu-close").click(toggleMenu);
});

