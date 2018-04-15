var fetch = function () {
    $.ajax({
      method: "GET",
    //   url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + $("#intitle").val(),
      success: function(data) {          
        console.log(data);
            for (let i = 0; i < 10; i++) {
                if(data.items[i].volumeInfo){
                    var divBook = document.createElement("div");
                    var bookTitle = $(document.createElement("h1")).text(data.items[i].volumeInfo.title);;
                    var bookAuthor = $(document.createElement("p")).text(data.items[i].volumeInfo.description)
                    var bookDes = $(document.createElement("h2")).text(data.items[i].volumeInfo.authors[0]);
                    var bookImg = $(document.createElement("img")).width("304").height("236").attr("src",data.items[i].volumeInfo.imageLinks.smallThumbnail);

                    $(".book").after(divBook, bookTitle, bookAuthor, bookDes, bookImg);

                    // $(".book-title").text(data.items[i].volumeInfo.title);
                    // $(".book-author").text(data.items[i].volumeInfo.authors[0]);
                    // $(".book-description").text(data.items[i].volumeInfo.description);
                    // $(".book-img").attr("src",data.items[i].volumeInfo.imageLinks.smallThumbnail);
                    // $(".book-img").toggle();
                }                
            }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

$(".search-book").click(function(){
    fetch();
    
});

