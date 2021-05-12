function whereIs(element) {
    const rect = element.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
      return "v"; 
    if (rect.top < 0 || rect.left < 0) return "b"; 
    return "a"; 
  }
  
  function loadBars() {
    let imgs = document.querySelectorAll("main img"); 
    let bar_before = document.querySelector("#bar_before ul");
    let bar_after = document.querySelector("#bar_after ul");
    for (let i = 0; i < imgs.length; i++) {
      let img = imgs[i];
      let where_is = whereIs(img);
      bar_before.insertAdjacentHTML(
        "beforeend",
        `<li ${where_is == "b" ? "" : "class='hidden'"} id="bb_${
          img.id
        }"> <a href="#${img.id}"><img src="${img.src}" alt="${
          img.alt
        }" /></a></li>`
      ); 
      bar_after.insertAdjacentHTML(
        "beforeend",
        `<li ${where_is == "a" ? "" : "class='hidden'"} id="ba_${
          img.id
        }"> <a href="#${img.id}"><img src="${img.src}" alt="${
          img.alt
        }" /></a></li>`
      );
    }
  }
  
  window.onload = loadBars; 
  
  function refreshBars() {
    let imgs = document.querySelectorAll("main img"); 
  
    /* For each img */
    for (let i = 0; i < imgs.length; i++) {
      let img = imgs[i];
      let where_is = whereIs(img);
  
      document.querySelector(`#bb_${img.id}`).className =
        where_is == "b" ? "" : "hidden"; 
  
      document.querySelector(`#ba_${img.id}`).className =
        where_is == "a" ? "" : "hidden"; 
    }
  }
  
