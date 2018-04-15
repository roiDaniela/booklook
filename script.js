var fetch = function () {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
      success: function(data) {          
        console.log(data);
        $(".book-title").text(data.items[0].volumeInfo.title);
        $(".book-author").text(data.items[0].volumeInfo.authors[0]);
        $(".book-description").text(data.items[0].volumeInfo.description);
        $(".book-img").attr("src",data.items[0].volumeInfo.imageLinks.smallThumbnail);
        $(".book-img").toggle();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

$(".search-book").click(function(){
    fetch();
    
});

