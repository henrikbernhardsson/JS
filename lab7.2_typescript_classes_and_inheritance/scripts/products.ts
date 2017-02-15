declare var angular: any;

var app = angular.module("productsApp", []);
app.controller("HomeController", HomeController); //registering homecontroller

//CLASSES ---START

module Classes {
    export class Product {
        public Name: string;
        public Category: string;
        public Price: number;
        public ArticleNumber: string;

        constructor(name: string, category: string, price: number, articleNumber: string) {
            this.Name = name;
            this.Category = category;
            this.Price = price;
            this.ArticleNumber = articleNumber;
        }

        //arrays of product types
        public static books: Array<Book> = [];
        public static dvds: DVD[] = [];
        public static games: Game[] = [];
    }
    export class Book extends Product {
        public Author: string;
        public Year: string;

        constructor(name: string, category: string, price: number, articleNumber: string, author: string, year: string) {
            super(name, category, price, articleNumber)
            this.Author = author;
            this.Year = year;
        }
    }
    export class DVD extends Product {
        public Length: number;
        //public mainActors: string[];

        constructor(name: string, category: string, price: number, articleNumber: string, length: number) {
            super(name, category, price, articleNumber);
            this.Length = length;
        }
    }
    export class Game extends Product {
        public HasSplitscreen: boolean;

        constructor(name: string, category: string, price: number, articleNumber: string, hassplitscreen: boolean) {
            super(name, category, price, articleNumber);
            this.HasSplitscreen = hassplitscreen;
        }
    }
}

class Product {
    public Name: string;
    public Category: string;
    public Price: number;
    public ArticleNumber: string;

    constructor(name: string, category: string, price: number, articleNumber: string) {
        this.Name = name;
        this.Category = category;
        this.Price = price;
        this.ArticleNumber = articleNumber;
    }

    //arrays of product types
    public static books: Array<Book> = [];
    public static dvds: Array<DVD> = [];
    public static games: Array<Game> = [];
}
class Book extends Product {
    public Author: string;
    public Year: string;

    constructor(name: string, category: string, price: number, articleNumber: string, author: string, year: string) {
        super(name, category, price, articleNumber)
        this.Author = author;
        this.Year = year;
    }
}
class DVD extends Product {
    public Length: number;
    //public mainActors: string[];

    constructor(name: string, category: string, price: number, articleNumber: string, length: number) {
        super(name, category, price, articleNumber);
        this.Length = length;
    }
}
class Game extends Product {
    public HasSplitscreen: boolean;

    constructor(name: string, category: string, price: number, articleNumber: string, hassplitscreen: boolean) {
        super(name, category, price, articleNumber);
        this.HasSplitscreen = hassplitscreen;
    }
}
//CLASSES ---END

var HomeController = app.controller("HomeController", function ($scope) {//using homecontroller
    $scope.ShowBooks = function () {
        $scope.retrieved = function () {
            var retrievedProducts: Product[] = [];

            for (var book of Product.books) {
                retrievedProducts.push(book);
            }

            return retrievedProducts;
        } ();//immediately run this method (iief)
    };
    $scope.ShowProducts = function () {
        $scope.retrieved = function () {
            let retrievedProducts: Array<Product> = [];

            for (var book of Product.books) {
                retrievedProducts.push(book);
            }
            for (var game of Product.games) {
                retrievedProducts.push(game);
            }
            for (var dvd of Product.dvds) {
                retrievedProducts.push(dvd);
            }

            return retrievedProducts;
        } ();//immediately run this method (iief)
    };

    $scope.SaveBook = function () {
        let name: string = $scope.Name;

        let newBook: Book = new Book($scope.Name, $scope.Category,
            $scope.Price, $scope.ArticleNumber, $scope.Author, $scope.Year);

        Product.books.push(newBook);

        console.log(newBook);

        //clear the input boxes after submitting new book
        //var inputs = document.getElementsByTagName("form")[0].getElementsByTagName("input");
        //for (var input of inputs) {
        //    input.value = "";
        //}
    }

});


window.onload = function () {
    //seed some default products into arrays
    Product.books.push(new Book("Rich dad poor dad", "educative", 299, "1612680011", "Robert Kiyosaki", "1997"));
    Product.books.push(new Book("Think and grow rich", "educative", 499, "1585424331", "Napoleon Hill", "2005"));
    Product.dvds.push(new DVD("Blood in blood out", "Crime", 29, "9345395734953", 119));
    Product.dvds.push(new DVD("Great Gatsby", "Drama", 49, "9345395734953", 100));
    Product.games.push(new Game("Half-Life", "First Person", 79, "29038452394857", false));

};