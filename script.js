var repos = document.getElementById("repos");

fetch("https://api.github.com/users/Szigeti817/repos")
.then(response => response.json())
.then(function(data){
      console.log(data);
      var text = "";
        for (i=0; i<data.length; i++)
        {console.log(data[i].name);       
        
        text = text + data[i].name + " <br>";
          }
        repos.innerHTML = text;
     
  } ) 

.catch(err=>console.log(err))