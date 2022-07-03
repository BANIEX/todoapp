window.addEventListener("load", function(){
    let note_app_content = localStorage.getItem("note_app_content");
    let array = [];
    document.getElementsByClassName("plus")[0].addEventListener("click", function(){
        let note_text = document.getElementById("note_text").value;
        alert("hi");
        if ( note_app_content == null){
            array.push(note_text);
            console.log(note_text);
            console.log(note_text);
            console.log(array);
            localStorage.setItem("note_app_content", JSON.stringify(array));


        }
        else{
            let array_from_storage = JSON.parse(localStorage.getItem("note_app_content"));
            array_from_storage.push(note_text)
            localStorage.setItem("note_app_content", JSON.stringify(array_from_storage));
            console.log(array_from_storage);
        }
      
       
        
        document.getElementById("note_text").value = ''

    })
    
})