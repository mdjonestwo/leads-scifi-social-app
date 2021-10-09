


    const quotesEl = document.querySelector('.quotes');
    const loaderEl = document.querySelector('.loader');

    // get the CLIPS from API
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
            
        $("#next-post").append(
            `<div class="post-square">
            <div class="square">
            </div>
            <div class="title">
                <h3>${response[i].Title}</h3>
            </div>
            <div class="user"><h4>${response[i].User}</h4></div>
            <div class="caption"><p>${response[i].Caption}</p></div>
            </div>`
        );
        })
    };

    // Trigger Get One Cip On Scroll Event 
        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
                // $(window).unbind('scroll');
                // alert("near bottom!");
                getOneClip()
            }
         });
        

    