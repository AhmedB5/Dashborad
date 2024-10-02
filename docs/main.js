let navContent = document.querySelector(".navContent");
let myhid = document.querySelector(".hid");

myhid.addEventListener("click", function () {
  if (navContent.classList.contains("max-h-[1100px]")) {
    navContent.classList.replace("max-h-[1100px]", "max-h-[0px]");
  } else {
    navContent.classList.replace("max-h-[0px]", "max-h-[1100px]");
  }

  if (myhid.classList.contains("bxs-chevrons-up")) {
    myhid.classList.replace("bxs-chevrons-up", "bxs-chevrons-down");
  } else {
    myhid.classList.replace("bxs-chevrons-down", "bxs-chevrons-up");
  }
});
