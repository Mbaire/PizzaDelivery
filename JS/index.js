//user interface
var totalCosts = [];

function order(flavour, size, crust, vegTopping, nonVegTopping) {
    this.flavour=flavour;
    this.size = size;
    this.crust = crust;
    this.nonVegTopping = nonVegTopping;
    this.vegTopping = vegTopping;
    this.price = 0;

}
var pizzaFlavour = ["Chicken Tikka", "Hawaian", "Peperoni","Regina"];
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaNonVegTopping = ["Chicken", "Sausage", "Bacon", ];
var pizzaVegTopping = ["Mushrooms", "Onions", "Capsicum", ];

order.prototype.cost = function() {
    if (this.size === pizzaSize[0]) {
        this.price += 500;
    } else if (this.size === pizzaSize[1]) {
        this.price += 700;
    } else if (this.size === pizzaSize[2]) {
        this.price += 900;
    }

    if (this.crust === pizzaCrust[0]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[1]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[2]) {
        this.price += 50;
    }

    if (this.nonVegTopping === pizzaNonVegTopping[0]) {
        this.price += 300;
    } else if (this.nonVegTopping === pizzaNonVegTopping[1]) {
        this.price += 300;
    } else if (this.nonVegTopping === pizzaNonVegTopping[2]) {
        this.price += 300;
    }


    if (this.vegTopping === pizzaVegTopping[0]) {
        this.price += 200;
    } else if (this.vegTopping === pizzaVegTopping[1]) {
        this.price += 200;
    } else if (this.vegTopping === pizzaVegTopping[2]) {
        this.price += 200;
    }

    return this.price;
}


order.prototype.totalCost = function() {
    var orderTotal = 0;
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}


$(document).ready(function() {
    $("input#order1").click(function(event) {
        event.preventDefault();
        var flavour=$("select#flav").val();
        var sizes = $("select#piz").val();
        var crusts = $("select#crus").val();
        var noVegToppings = $("select#topnoveg").val();
        var vegToppings = $("select#topveg").val();

        var newPizzaOrder = new order(flavour,sizes, crusts, noVegToppings, vegToppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);

        $("#flv").text(flavour);
        $("#sz").text(sizes);
        $("#cr").text(crusts);
        $("#nvgs").text(noVegToppings);
        $("#vgs").text(vegToppings);
        $("#tc").text(newPizzaOrder.totalCost());


    });

    $("#order2").click(function() {
        prompt("What is your name?")
        prompt("Where would you like it delivered?")
        prompt("What number can we contact you on?")
        alert("Your delivery fee is 200ksh")
        alert("Thank you for choosing Peps Pizza!Your order ETA is 45 mins!")

    });


    $(".picha").click(function() {

        $(".jaza").fadeToggle("slow");

    });


    $(".eve1").hover(function() {
        $(".para").slideToggle(1000);
        $("#img1").slideToggle(1000);
        $(".para").show();
    });
    $(".eve2").hover(function() {
        $(".para1").slideToggle(1000);
        $("#img2").slideToggle(1000);
        $(".para1").show();
    });
    $(".eve3").hover(function() {
        $(".para2").slideToggle(1000);
        $("#img3").slideToggle(1000);
        $(".para2").show();
    });


    $(".eve4").hover(function() {
        $(".para3").slideToggle(1000);
        $("#img4").slideToggle(1000);
        $(".para3").show();

    });
})


function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("text").value;



    if (name === "") {
        alert("Please write your name!");

    } else if (email === "") {
        alert("Please write your name!");

    } else if (text === "") {

        alert("Please write a message");

    } else {

        alert("We have recieved  your message dear " + name + ", " + " thank you for getting in touch with us");
    };

}
