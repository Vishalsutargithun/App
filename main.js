let a = document.getElementsByTagName("img");
let bb = Array.from(a);
bb.forEach((b)=>{
  let be = b.getAttribute("data-name");
  b.addEventListener("click", (e)=>{
    location.replace(`Apps.html`);
  });
});