var team = new XMLHttpRequest();
team.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(team.response));
        var obj = JSON.parse(team.response);
        for(let i=1; i<Object.keys(obj).length + 1; i++){
            var data1 = obj[i];
            var block =  document.createElement('div',);
            block.setAttribute("id","block");
            block.setAttribute("class","block");
            var name = document.createElement("h2");
            name.innerHTML += data1.employeefname;
            name.classList.add("title");
            var blockWrapper = document.createElement('div');
            blockWrapper.setAttribute("class", "block-wrapper")
            var ghost = document.createElement('div');
            ghost.setAttribute("class","ghost");
            var features = document.createElement('div');
            features.setAttribute("class", "box");
            features.setAttribute("id","box");
            features.innerHTML += data1.employeeisfeatured;
            if ( features.innerHTML == "1"){
                features.innerHTML ="👑";
            } else{
                features.innerHTML = "";
            }
            blockWrapper.appendChild(ghost);
            blockWrapper.appendChild(features);
            var title = document.createElement('p');
            title.setAttribute("id", "title")
            title.innerHTML += '<p>' + data1.employeebio + '</p>';
            var images = document.createElement('img');
            images.setAttribute("width","150");
            images.setAttribute("class","images");
            images.setAttribute("src","http://sandbox.bittsdevelopment.com/code1/employeepics/"+i+".jpg");
            var tags = document.createElement("div");
            tags.setAttribute("class", "tag");
            tags.setAttribute("id", "tag");
            var details = document.createElement("p");
            details.setAttribute("class", "color");
            tags.appendChild(details);

            var num = Object.keys(data1.roles).length;
            for(var t=0; t<num; t++){
                var p = document.getElementById("tag");
                details.innerHTML  += "<p style='background: "+data1.roles[t].rolecolor+"' > " +data1.roles[t].rolename + "</p>";
            }
            block.appendChild(blockWrapper);
            block.appendChild(images);
            block.appendChild(name);
            block.appendChild(title);
            block.appendChild(tags);
            var wrapper = document.getElementById("wrapper");
            wrapper.appendChild(block);
        }
    }
}
team.onerror = function() {
    console.log("Error while loading...");
}
team.open("GET", "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php ");
team.send();
