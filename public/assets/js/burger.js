
$(function() {
    $(".change-swallow").on("click", function(event) {
      var id = $(this).data("id");
      var swallow = $(this).data("swallow");
  
      var swallowedState = {
        swallowed: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: swallowedState
      }).then(
        function() {
          console.log("changed swallowed to", swallow);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        type: $("#burger").val().trim(),
        swallowed: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Dreamt of a new sandwhich");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  