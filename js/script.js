$(function () {
    var priceIngridients = [[6.00, 7.20, 8.00], [2.40, 1.80, 2.70, 2.20, 2.00, 3.00], [0.60, 0.25, 0.30, 0.25, 0.27, 0.20], [0.25, 0.30, 0.20]]; //цена ингридиентов
    var totalPrice = 0;
    var stoim = $(".price");

    //Выбор основы пиццы
    var elem1 = $(".elements > ul:nth-child(1)");
    var osnova = $(".osnova > li");

    osnova.click(function () {
        var newElem = $("<li></li>");
        for (var k = 0; k < priceIngridients[0].length; k++) {
            if (this.innerText == osnova[k].innerText) {
                var priceIng = priceIngridients[0][k];
            };
        };
        if (elem1.children().length == 1) {
            return newElem = $();
        } else {
            newElem.text(this.innerText + " - " + priceIng + " " + "p.");
            elem1.append(newElem);
            totalPrice = Math.round(totalPrice * 100 + priceIng * 100) / 100;
            stoim.children().remove();
            var newStoim = $("<div></div>");
            newStoim.text(totalPrice + "p.");
            stoim.append(newStoim);
            $(".pizza > div:nth-child(1)").css("visibility", "hidden");
            newElem.click(function () {
                this.remove(newElem);
                var arr = newElem.text().split(" ");
                var price = arr[arr.length - 2];
                totalPrice = Math.round(totalPrice * 100 - price * 100) / 100;
                stoim.children().remove();
                newStoim.text(totalPrice + "p.");
                stoim.append(newStoim);
                if (elem1.children().length < 1) {
                    $(".pizza > div:nth-child(1)").css("visibility", "visible");
                };
                btn();
            });
        };
        btn();
    });

    //Выбор начинки1
    var elem2 = $(".elements > ul:nth-child(2)");
    var nach1 = $(".nach1 > li");

    nach1.click(function () {
        var newElem = $("<li></li>");
        for (var k = 0; k < priceIngridients[1].length; k++) {
            if (this.innerText == nach1[k].innerText) {
                var priceIng = priceIngridients[1][k];
            };
        };
        if (elem2.children().length == 2) {
            return newElem = $();
        } else {
            newElem.text(this.innerText + " - " + priceIng + " " + "p.");
            elem2.append(newElem);
            totalPrice = Math.round(totalPrice * 100 + priceIng * 100) / 100;
            stoim.children().remove();
            var newStoim = $("<div></div>");
            newStoim.text(totalPrice + "p.");
            stoim.append(newStoim);
            $(".pizza > div:nth-child(2)").css("visibility", "hidden");
            newElem.click(function () {
                this.remove(newElem);
                var arr = newElem.text().split(" ");
                var price = arr[arr.length - 2];
                totalPrice = Math.round(totalPrice * 100 - price * 100) / 100;
                stoim.children().remove();
                newStoim.text(totalPrice + "p.");
                stoim.append(newStoim);
                if (elem2.children().length < 1) {
                    $(".pizza > div:nth-child(2)").css("visibility", "visible");
                };
                btn();
            });
        };
        btn();
    });

    //Выбор начинки2
    var elem3 = $(".elements > ul:nth-child(3)");
    var nach2 = $(".nach2 > li");

    nach2.click(function () {
        var newElem = $("<li></li>");
        for (var k = 0; k < priceIngridients[2].length; k++) {
            if (this.innerText == nach2[k].innerText) {
                var priceIng = priceIngridients[2][k];
            };
        };
        if (elem3.children().length == 2) {
            return newElem = $();
        } else {
            newElem.text(this.innerText + " - " + priceIng + " " + "p.");
            elem3.append(newElem);
            totalPrice = Math.round(totalPrice * 100 + priceIng * 100) / 100;
            stoim.children().remove();
            var newStoim = $("<div></div>");
            newStoim.text(totalPrice + "p.");
            stoim.append(newStoim);
            $(".pizza > div:nth-child(3)").css("visibility", "hidden");
            newElem.click(function () {
                this.remove(newElem);
                var arr = newElem.text().split(" ");
                var price = arr[arr.length - 2];
                totalPrice = Math.round(totalPrice * 100 - price * 100) / 100;
                stoim.children().remove();
                newStoim.text(totalPrice + "p.");
                stoim.append(newStoim);
                if (elem3.children().length < 1) {
                    $(".pizza > div:nth-child(3)").css("visibility", "visible");
                };
                btn();
            });
        };
        btn();
    });

    //Выбор соуса
    var elem4 = $(".elements > ul:nth-child(4)");
    var sous = $(".sous > li");
    sous.click(function () {
        var newElem = $("<li></li>");
        for (var k = 0; k < priceIngridients[3].length; k++) {
            if (this.innerText == sous[k].innerText) {
                var priceIng = priceIngridients[3][k];
            };
        };
        if (elem4.children().length == 1) {
            return newElem = $();
        } else {
            newElem.text(this.innerText + " - " + priceIng + " " + "p.");
            elem4.append(newElem);
            totalPrice = Math.round(totalPrice * 100 + priceIng * 100) / 100;
            stoim.children().remove();
            var newStoim = $("<div></div>");
            newStoim.text(totalPrice + "p.");
            stoim.append(newStoim);
            $(".pizza > div:nth-child(4)").css("visibility", "hidden");
            newElem.click(function () {
                this.remove(newElem);
                var arr = newElem.text().split(" ");
                var price = arr[arr.length - 2];
                totalPrice = Math.round(totalPrice * 100 - price * 100) / 100;
                stoim.children().remove();
                newStoim.text(totalPrice + "p.");
                stoim.append(newStoim);
                if (elem4.children().length < 1) {
                    $(".pizza > div:nth-child(4)").css("visibility", "visible");
                };
                btn();
            });
        };
        btn();
    });

    //Функция появления кнопки
    function btn() {
        if (elem1.children().length >= 1 && elem2.children().length >= 1 && elem3.children().length >= 1 && elem4.children().length >= 1) {
            $(".order > .button").css("visibility", "visible");
        } else {
            $(".order > .button").css("visibility", "hidden");
        };
    };

});
