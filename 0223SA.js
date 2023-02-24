const infoForm = document.querySelector("#info-form");
const infoFN = document.querySelector("#firstName");
const infoLN = document.querySelector("#lastName");
const infoEM = document.querySelector("#email");
const infoBr = document.querySelector("#browser");
const infoDate = document.querySelector("#birthday");
const infoGD = 



console.log()

function onLoginSubumit(event) {
  let infolist = []
  event.preventDefault();
  infolist.push(infoFN.value, infoLN.value, infoEM.value, infoBr.value, infoDate.value)
  localStorage.setItem("infomation", JSON.stringify(infolist))
  alert("제출완료")
  window.location.reload()
}

infoForm.addEventListener("submit", onLoginSubumit)