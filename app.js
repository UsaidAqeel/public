function load() {
  var nav = document.getElementById("navbarBox");
  var image = document.getElementById("image");
  var none = document.getElementById("none");
  var anchor = nav.getElementsByTagName("a");

  addEventListener("scroll", function () {
    if (this.window.scrollY >= 50) {
      image.src = "./img/Pakmaco_2_Final_Logo-removebg-preview.png";
      for (var i = 0; i < anchor.length; i++) {
        anchor[i].className += " text-dark";
        none.style.display = "block";
        nav.style.borderBottom = "1px solid lightgray";
      }
      nav.style.backgroundColor = "white";
    } else if (this.window.scrollY <= 50) {
      nav.style.backgroundColor = "transparent";
      image.src = "./img/image.png";
      none.style.display = "none";
      nav.style.border = "none";
      for (var i = 0; i < anchor.length; i++) {
        anchor[i].classList.remove("text-dark");
      }
    }
  });
}

// Form Check

var flag = false;
var email_flag = false;
var option = false;
var check = false;

function foucs(e, r) {
  if (e.value.length >= 5) {
    e.style.borderBottom = "2px solid #65e526";
    flag = true;
  } else {
    e.style.borderBottom = "2px solid  #ff0303";
  }
  if (r == "place") {
    e.style.border = "2px solid #ff0303";
    if (e.value.length > 10) {
      e.style.border = "2px solid #65e526";
    }
  }
}

function checkemail(e) {
  var value = e.value;
  for (var i = 0; i < value.length; i++) {
    if (value.charAt(i) == "@") {
      e.style.borderBottom = "2px solid #65e526";
      email_flag = true;
    }
  }
  if (email_flag == false) {
    e.style.borderBottom = "2px solid #ff0303";
  }
}

function foo(e) {
  if (e.selectedIndex > 0) {
    option = true;
    e.style.borderBottom = "2px solid #65e526";
  } else {
    e.style.borderBottom = "2px solid #ff0303";
  }
}
function no(e) {
  if (e.value.length > 10 && e.value.length <= 13) {
    e.style.borderBottom = "2px solid #65e526";
  } else {
    e.style.borderBottom = "2px solid #ff0303";
  }
}

// check box
function formcheck() {
  var red_alert = document.getElementById("red_alert");
  var radio = document.getElementById("checkBox");
  var checkBox = radio.getElementsByTagName("input");
  var box = document.getElementById("agree");
  var sub = document.getElementById("sub");
  var done = document.getElementById("done");
  for (var i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked == true && box.checked == true) {
      check = true;
      break;
    }
  }
  if (check == false) {
    red_alert.style.display = "block";
  }
  if (flag == true && email_flag == true && check == true && option == true) {
    sub.style.filter = "blur(2px)";
    done.style.display = "block";
    done.style.top = "50%";
  }
}
function cr() {
  location.replace("./index.html");
}

function page(page) {
  location.assign(page);
}

function getthing(e) {
  // card item
  var card_img = e.parentNode.previousElementSibling.firstElementChild;
  var card_para = e.nextElementSibling.nextElementSibling;
  var card_h5 = e.previousElementSibling.previousElementSibling;
  // Ul
  var card_list = e.nextElementSibling.firstElementChild;
  var card_li = card_list.getElementsByTagName("li");
  // card item end
  // modal item
  var modal_h1 = document.getElementById("modal_h1");
  var modal_para = document.getElementById("modal_para");
  var product_view = document.getElementById("product_view").firstElementChild;
  var product_li = product_view.getElementsByTagName("li");
  var modal_img = document.getElementById("modal_img");

  modal_para.innerHTML = card_para.innerHTML;
  modal_h1.innerHTML = card_h5.innerHTML;
  modal_img.src = card_img.src;
  for (var i = 0; i < card_li.length; i++) {
    product_li[i].innerHTML = card_li[i].innerHTML;
  }
  // console.log(card_img);
}

function color(e) {
  var icon = document.getElementById("icon");
  var ic = icon.getElementsByTagName("i");

  for (var i = 0; i < ic.length; i++) {
    ic[i].style.color = "initial";
  }

  e.style.color = "#ff0303";
}

function border(e) {
  var opti = document.getElementById("opti");
  var h6 = opti.getElementsByTagName("h6");

  for (var i = 0; i < h6.length; i++) {
    h6[i].style.color = "initial";
  }

  e.style.color = "#ff0303";
}
function place(e) {
  e.style.border = "1px solid #65e526";
}
function todo() {
  var sub = document.getElementById("sub");
  var done = document.getElementById("done");
  done.style.top = "50%";
  sub.style.filter = "blur(2px)";
}
