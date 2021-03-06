// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// Delete these if you don't need them

// Enable popovers (popovers aren't going to work without this)
// $(function () {
//   $('[data-toggle="popover"]').popover()
// })
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


// Check if jquery is working
function checkJquery() {
  const btn = document.getElementById("check-jquery-button");
  if (window.jQuery) {
    btn.innerHTML = 'Jquery is working <i class="fas fa-smile"></i>';
  } else {
    alert("jQuery isn't working");
  }
}

// Check if fontawesome is working
function checkFontAwesome() {
  const btn = document.getElementById("check-font-awesome-button");
  const fa = document.createElement("svg");

  fa.className = "fa fa-ambulance";
  fa.style.position = "absolute";
  fa.style.left = 0;
  fa.style.top = 0;
  fa.style.visibility = "hidden";
  document.body.appendChild(fa);

  window.setTimeout(function() {
    let widthBefore = fa.offsetWidth;
    fa.style.fontFamily = "asdf";
    let widthAfter = fa.offsetWidth;
    if (widthBefore === widthAfter) {
      alert("Font Awesome isn't working");
    } else {
      btn.innerHTML = 'Font Awesome is working <i class="fas fa-smile"></i>';
    }
    // document.body.removeChild(fa);
  }, 50);
}

// Check if jquery is working
function checkBootstrap() {
  const btn = document.getElementById("check-bootstrap-button");
  if (typeof($.fn.modal) !== 'undefined') {
    btn.innerHTML = 'Bootstrap is working <i class="fas fa-smile"></i>';
  } else {
    alert("Bootstrap isn't working");
  }
}
