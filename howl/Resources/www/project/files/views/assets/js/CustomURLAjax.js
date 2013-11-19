$.ajax({
  url: "www.google.com",
  context: document.body
}).done(function() {
  alert("done");
});