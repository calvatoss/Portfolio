function activate(tab_id){
  var navTabs = document.getElementsByTagName('li');

  for (var i = 0; i < navTabs.length; i++) {
    navTabs[i].classList.remove("active");
  }

  var link = document.getElementById(tab_id);
  link.classList.add("active");
}
