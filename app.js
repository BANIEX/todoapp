window.addEventListener("load", function () {
  let note_app_content = JSON.parse(localStorage.getItem("note_app_content"));
  let array = [];
  if (note_app_content) {
    // note_app_content = JSON.parse(note_app_content);
    let array_length = note_app_content.length;
    console.log(array_length);
    for (let strings of note_app_content) {
      var $newdiv1 = $(
        `<li class='list-group-item d-flex justify-content-between'> <span class='px-2'>${strings}</span> <input type='checkbox' name='' id=''></li>`
      );

      $(".note-list").append($newdiv1);
    }
  }
  if(note_app_content == null){
    console.log("empty ll")
    
  }
  document
    .getElementsByClassName("plus")[0]
    .addEventListener("click", function () {
      let note_text = document.getElementById("note_text").value;
      alert("hi");
      if (note_app_content == null) {
        array.push(note_text);
        // console.log(note_text);
        // console.log(note_text);
        // console.log(array);
        localStorage.setItem("note_app_content", JSON.stringify(array));
        var $newdiv1 = $(
          `<li class='list-group-item d-flex justify-content-between'> <span class='px-2'>${note_text}</span> <input type='checkbox' name='' id=''></li>`
        );
        $(".note-list").append($newdiv1);
      } else {
        
        note_app_content.push(note_text);
        localStorage.setItem(
          "note_app_content",
          JSON.stringify(note_app_content)
        );
        var $newdiv1 = $(
          `<li class='list-group-item d-flex justify-content-between'> <span class='px-2'>${note_text}</span> <input type='checkbox' name='' id=''></li>`
        );
        $(".note-list").append($newdiv1);
      }
      

      let currentArray = JSON.parse(localStorage.getItem("note_app_content"));
      console.log(currentArray.length);

      document.getElementById("note_text").value = "";
    });
});



