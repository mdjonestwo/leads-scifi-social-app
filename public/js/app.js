    const quotesEl = document.querySelector('.quotes');
    const loaderEl = document.querySelector('.loader');

    //GET all the clips from API
    function getClips(){
        var settings = {
            url: "/api/clips",
            method: "GET"
        }; 

          $.ajax(settings).done(function (response) {
            console.log(response);
            response.forEach((element) => {

                $("#post-list").append(
                    `<div class="post-square">
                    <div class="square">
                    </div>
                    <div class="title">
                        <h3>${element.Title}</h3>
                    </div>
                    <div class="user"><h4>${element.User}</h4></div>
                    <div class="caption"><p>${element.Caption}</p></div>
                </div>`
                    );
              });
          });
    }

    var i = -1;

       
    //Get One Clip 
    function getOneClip(){
        var settings = {
            url: "/api/clips",
            method: "GET"
        }; 

        $.ajax(settings).done(function (response) {
        
        function increment(n){
            n++;
            return n;
        }

        i=increment(i);
        console.log(response[i])
        console.log(i)

        if (response[i] === undefined){
            $(window).unbind('scroll');
            console.log("unbind")
        }else{
            $("#next-post").append(
                `<div class="post-square" id=${i}>
                <div class="square">
                ${response[i].Video}
                </div>
                <div class="title">
                    <h3>${response[i].Title}</h3>
                </div>
                <div class="user"><h4>${response[i].User}</h4></div>
                <div class="caption"><p>${response[i].Caption}</p></div>
                <div class="btn-row">
                <a onclick="">Keep Watching</a>
                <a id='next' class="next" href="#1" onclick="nextVideo()">Next Video</a>
                </div>
                </div>`
            );
        }
        })
    };

    // Trigger Get One Cip after 3 seconds on Scroll Event 
        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
                setTimeout(function(){getOneClip()},3000);
            }
         });


    //Play next video 
        function nextVideo(){
            var x = i++;
            $('.next').attr("href", `#${x}`)
        }   

  


    