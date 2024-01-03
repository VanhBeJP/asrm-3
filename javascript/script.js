// check email co phu hop hay khong o phan thong tin ca nha

function handleSubmit() {
  //   lay input email
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  // check dieu kien email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = emailValue.match(regex);
  //   lay input
  const sectionPersonal = document.querySelector(".info");
  const sectionIcon = document.querySelector(".section-icon");
  //   hien ra phan input
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionIcon.style.display = "block";
    sectionPersonal.style.display = "block";
    submitControl.style.display = "none";
  } else {
    errorEmail.innerHTML = "vui long nhap dung mat khau";
  }
}

// js cho phan info
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view");
  if (!viewMore.classList.value.includes(`view-less`)) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parentElement = element.closest(`.parent`);
  const viewMore = parentElement.querySelector(`.view`);
  const sectionJob = parentElement.querySelectorAll(".job-content");
  if (viewMore.classList.value.includes(`view-more`)) {
    sectionJob.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove(`view-more`);
    viewMore.classList.add(`view-less`);
    viewMore.innerHTML = `View less`;
  } else {
    sectionJob.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove(`view-less`);
    viewMore.classList.add(`view-more`);
    viewMore.innerHTML = `View more`;
  }
}
