var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app = angular.module("productsApp", []);
app.controller("HomeController", HomeController); //registering homecontroller
//CLASSES ---START
var Classes;
(function (Classes) {
    var Product = (function () {
        function Product(name, category, price, articleNumber) {
            this.Name = name;
            this.Category = category;
            this.Price = price;
            this.ArticleNumber = articleNumber;
        }
        //arrays of product types
        Product.books = [];
        Product.dvds = [];
        Product.games = [];
        return Product;
    })();
    Classes.Product = Product;
    var Book = (function (_super) {
        __extends(Book, _super);
        function Book(name, category, price, articleNumber, author, year) {
            _super.call(this, name, category, price, articleNumber);
            this.Author = author;
            this.Year = year;
        }
        return Book;
    })(Product);
    Classes.Book = Book;
    var DVD = (function (_super) {
        __extends(DVD, _super);
        //public mainActors: string[];
        function DVD(name, category, price, articleNumber, length) {
            _super.call(this, name, category, price, articleNumber);
            this.Length = length;
        }
        return DVD;
    })(Product);
    Classes.DVD = DVD;
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game(name, category, price, articleNumber, hassplitscreen) {
            _super.call(this, name, category, price, articleNumber);
            this.HasSplitscreen = hassplitscreen;
        }
        return Game;
    })(Product);
    Classes.Game = Game;
})(Classes || (Classes = {}));
var Product = (function () {
    function Product(name, category, price, articleNumber) {
        this.Name = name;
        this.Category = category;
        this.Price = price;
        this.ArticleNumber = articleNumber;
    }
    //arrays of product types
    Product.books = [];
    Product.dvds = [];
    Product.games = [];
    return Product;
})();
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(name, category, price, articleNumber, author, year) {
        _super.call(this, name, category, price, articleNumber);
        this.Author = author;
        this.Year = year;
    }
    return Book;
})(Product);
var DVD = (function (_super) {
    __extends(DVD, _super);
    //public mainActors: string[];
    function DVD(name, category, price, articleNumber, length) {
        _super.call(this, name, category, price, articleNumber);
        this.Length = length;
    }
    return DVD;
})(Product);
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(name, category, price, articleNumber, hassplitscreen) {
        _super.call(this, name, category, price, articleNumber);
        this.HasSplitscreen = hassplitscreen;
    }
    return Game;
})(Product);
//CLASSES ---END
var HomeController = app.controller("HomeController", function ($scope) {
    $scope.ShowBooks = function () {
        $scope.retrieved = function () {
            var retrievedProducts = [];
            for (var _i = 0, _a = Product.books; _i < _a.length; _i++) {
                var book = _a[_i];
                retrievedProducts.push(book);
            }
            return retrievedProducts;
        }(); //immediately run this method (iief)
    };
    $scope.ShowProducts = function () {
        $scope.retrieved = function () {
            var retrievedProducts = [];
            for (var _i = 0, _a = Product.books; _i < _a.length; _i++) {
                var book = _a[_i];
                retrievedProducts.push(book);
            }
            for (var _b = 0, _c = Product.games; _b < _c.length; _b++) {
                var game = _c[_b];
                retrievedProducts.push(game);
            }
            for (var _d = 0, _e = Product.dvds; _d < _e.length; _d++) {
                var dvd = _e[_d];
                retrievedProducts.push(dvd);
            }
            return retrievedProducts;
        }(); //immediately run this method (iief)
    };
    $scope.SaveBook = function () {
        var name = $scope.Name;
        var newBook = new Book($scope.Name, $scope.Category, $scope.Price, $scope.ArticleNumber, $scope.Author, $scope.Year);
        Product.books.push(newBook);
        console.log(newBook);
        //clear the input boxes after submitting new book
        //var inputs = document.getElementsByTagName("form")[0].getElementsByTagName("input");
        //for (var input of inputs) {
        //    input.value = "";
        //}
    };
});
window.onload = function () {
    //seed some default products into arrays
    Product.books.push(new Book("Rich dad poor dad", "educative", 299, "1612680011", "Robert Kiyosaki", "1997"));
    Product.books.push(new Book("Think and grow rich", "educative", 499, "1585424331", "Napoleon Hill", "2005"));
    Product.dvds.push(new DVD("Blood in blood out", "Crime", 29, "9345395734953", 119));
    Product.dvds.push(new DVD("Great Gatsby", "Drama", 49, "9345395734953", 100));
    Product.games.push(new Game("Half-Life", "First Person", 79, "29038452394857", false));
};
//# sourceMappingURL=products.js.map