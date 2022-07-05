window.addEventListener("DOMContentLoaded", function () {
  let note_app_content = JSON.parse(localStorage.getItem("note_app_content"));
  let array = [];
  if (note_app_content) {
    // note_app_content = JSON.parse(note_app_content);
    let array_length = note_app_content.length;
    // console.log(array_length);
    for (let strings of note_app_content) {
      var $newdiv1 = $(
        `<li class='to_do_item list-group-item d-flex justify-content-between'> <span class='px-2'>${strings}</span> <input type='checkbox'  class='to_do_tick' name='' id=''></li>`
      );

      $(".note-list").append($newdiv1);
    }
  }
  if (note_app_content == null) {
    console.log("empty ll");
  }

  document
    .getElementsByClassName("plus")[0]
    .addEventListener("click", function () {
      sup = 2;
      let note_text = document.getElementById("note_text").value;
      // alert("hi");
      if (note_app_content == null) {
        array.push(note_text);
        localStorage.setItem("note_app_content", JSON.stringify(array));
        var $newdiv1 = $(
          `<li class='to_do_item list-group-item d-flex justify-content-between'> <span class='px-2'>${note_text}</span> <input type='checkbox'  class='to_do_tick' name='' id=''></li>`
        );
        $(".note-list").append($newdiv1);
      } else {
        note_app_content.push(note_text);
        localStorage.setItem(
          "note_app_content",
          JSON.stringify(note_app_content)
        );
        var $newdiv1 = $(
          `<li class='to_do_item list-group-item d-flex justify-content-between'> <span class='px-2'>${note_text}</span> <input type='checkbox' class='to_do_tick' name='' id='td'></li>`
        );
        $(".note-list").append($newdiv1);
      }

      let currentArray = JSON.parse(localStorage.getItem("note_app_content"));
      // console.log(currentArray.length);

      document.getElementById("note_text").value = "";
      updater();
    });

  function updater() {
    let no_of_to_do_ticks = document.querySelectorAll(".to_do_tick").length;
    let to_do_ticks_div = document.querySelectorAll(".to_do_item");

    console.log(no_of_to_do_ticks);
    for (let i = 0; i < no_of_to_do_ticks; i++) {
      document
        .querySelectorAll(".to_do_tick")
        [i].addEventListener("change", function () {
          // alert(`hi div${i}`);
          to_do_ticks_div[i].remove();

          lsEditor();
        });
    }
  }
  updater();

  function lsEditor() {
    let updateArray = [];
    for (
      let i = 0;
      i < document.getElementsByClassName("to_do_item").length;
      i++
    ) {
      console.log(document.getElementsByClassName("to_do_item")[i].innerText);
      updateArray.push(
        document.getElementsByClassName("to_do_item")[i].innerText
      );
    }
    console.log(updateArray);
    localStorage.setItem("note_app_content", JSON.stringify(updateArray));
  }
});
