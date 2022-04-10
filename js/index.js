fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        //console.log(data)

        var feed = document.getElementById("wrapper");
        var i = 0;

        function showPost() {
            var div = document.createElement("div");
            div.className = "post";

            div.innerHTML =
                '<img class="profile" src="' +
                data[i].profile_image +
                '"/>' +
                '<p class="name">' +
                data[i].name +
                "</p>" +
                '<p class="date">' +
                data[i].date +
                "</p>" +
                '<img class="ig_logo" src="./img/instagram-logo.svg"/>' +
                '<img class="img" src="' +
                data[i].image +
                '"/>' +
                '<p class="caption">' +
                data[i].caption +
                "</p>" +
                '<img class ="heart" id="heart' +
                [i] +
                '" src="./img/heart.svg"/>' +
                '<span class="likes" id="heart' +
                [i] +
                'likes">' +
                data[i].likes +
                "</span>";

            feed.appendChild(div);
            i++;
        }

        //Display 4 posts when page is opened... display based on width(mobile,tablet,desktop)
        if (window.screen.width > 992) {
            showPost();
            showPost();
            showPost();
            showPost();
        } else if (window.screen.width < 768) {
            showPost();
        } else {
            showPost();
            showPost();
        }

        //Create button
        var btn = document.createElement("button");
        btn.id = "button";
        btn.innerHTML = "LOAD MORE";
        document.body.appendChild(btn);

        //Click events(load more, heart)
        document.addEventListener("click", function (e) {
        //Display load more ... display based on width(mobile,tablet,desktop)
            if (e.target && e.target.id == "button"){
                if (i >= data.length - 4) {
                    document.getElementById("button").style.display = "none";
                }
    
                if (window.screen.width > 992) {
                    showPost();
                    showPost();
                    showPost();
                    showPost();
                } else if (window.screen.width < 768) {
                    showPost();
                } else {
                    showPost();
                    showPost();
                }
            }


        //Heart(likes) event
            for (j = 0; j <= data.length; j++) {
                if (e.target && e.target.id == "heart" + [j]) {
                    var x = e.target.id;
                    var img = e.target.getAttribute("src");

                    if (img == "./img/heart.svg") {
                        document.getElementById(x + "likes").innerHTML =
                            parseInt(document.getElementById(x + "likes").innerHTML) + 1;
                        document.getElementById(e.target.id).src = "./img/liked.svg";
                    } else {
                        document.getElementById(x + "likes").innerHTML =
                            parseInt(document.getElementById(x + "likes").innerHTML) - 1;
                        document.getElementById(e.target.id).src = "./img/heart.svg";
                    }
                }
            }
        });
    });
