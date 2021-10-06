

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
          });
    }

    

