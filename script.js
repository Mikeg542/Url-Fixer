function convert() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  var manipulate = copyText.value;
  manipulate = manipulate.split("?")[0];

  manipulate = manipulate.replace("https://", "https://bench-");

  manipulate = manipulate.replace("/jobs/", "/admin/jobs/");

  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = manipulate;
  dummy.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the converted URL");
}

function goto() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  var manipulate = copyText.value;
  manipulate = manipulate.split("?")[0];

  manipulate = manipulate.replace("https://", "https://bench-");

  manipulate = manipulate.replace("/jobs/", "/admin/jobs/");

  window.location = manipulate;
}
