
  document.querySelector("#main p").style.display="none";
  document.querySelector("#main").classList.add("spinner-1");



  //mimic server req.

  setTimeout(()=>{
    document.querySelector("#main").classList.remove("spinner-1");
    document.querySelector("#main p").style.display="block";
  },2000);
