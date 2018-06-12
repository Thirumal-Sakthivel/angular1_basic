const app = angular.module("myBookApp", []);
const newLocal = "bookController";

app.controller(newLocal, function($scope) {
  $scope.names = {
      genreName: '',
      bookName: '',
  };
  $scope.booksList = [{"type":"Romance","books":[{"name":"Beautiful Disaster"},{"name":"Fifty Shades of Grey"},{"name":"Hopeless"},{"name":"The Fault in Our Stars"},{"name":"Divergent"}]},{"type":"Thriller","books":[{"name":"And Then There Were None"},{"name":"The Da Vinci Code"},{"name":"The Hunger Games"},{"name":"Fight Club"},{"name":"Gone Girl"}]},{"type":"History","books":[{"name":"And Then There Were None"},{"name":"The Da Vinci Code"},{"name":"The Hunger Games"},{"name":"Fight Club"},{"name":"Gone Girl"}]}]
  $scope.selectedGenre = $scope.booksList[0].type;
  $scope.addNewBook = function (){
    if($scope.names.bookName) {
      var genre_type = _.find($scope.booksList, function(book){ return book.type == $scope.selectedGenre });
      genre_type.books.push({name: $scope.names.bookName})
      $scope.names.bookName = '';
    }
  }
  $scope.addNewGenre = function (genres){
      genres.push({type: $scope.names.genreName, books: []})
      $scope.names.genreName = '';
  }
});

app.filter("addTextLast", function() {
  return function(x) {
    return x + " - Genre";
  }
});

app.directive("headerText", function() {
  return {
    restrict: 'E',
    template: '<h4 class="text-center">Books List</h4>'
  };
});

