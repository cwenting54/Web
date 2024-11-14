let items = document.getElementsByClassName("item");
    let i;
    for (const item of items){
        item.addEventListener("click", function(){
            for(const itembtn of items){
                itembtn.style.transform = "scale(1)";
                itembtn.style.color = "#FFFFFF";
            }
            this.style.transform = "scale(1.5)";
            this.style.color = "#FDDF65";
            i = this.value;
            document.getElementById("btn").addEventListener("click", function(){
                let x = Math.floor(Math.random() * data[i].ans.length);
                document.getElementById("lists").remove();
                document.getElementsByTagName("h2")[0].textContent = data[i].title;
                let result = document.getElementById("result");
                result.style.display = "block";
                result.innerHTML = 
                "<p>" + data[i].ans[x] + "</p>";
                this.remove();
                document.getElementById("rebtn").style.display = "block";
                // console.log(data[i].title,  data[i].ans.length);
            })
        })
    }  