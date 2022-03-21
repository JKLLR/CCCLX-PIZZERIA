$(document).ready(function() {

    var n = 1
    $("#n").text(n)

    $("#plusBtn").click(function() {
        

        if (n < 50) {
                n += 1;
                $("#n").text(n)
                $("#totalNumbers").text(sumTotal * n);
        } else {
                $("#n").text(n)
                $("#totalNumbers").text(sumTotal * n);
        }

     })
            // minus button
    $("#minusBtn").click(function() {

        if (n > 1) {
                n -= 1;
                $("#n").text(n)
                $("#totalNumbers").text(sumTotal * n);
        } else {
            $("#n").text(n)
            $("#totalNumbers").text(sumTotal * n);
        }
    
    })
    
    function Cart(pizza_crust, pizza_size, pizza_topping) {
        (this.pizzaCrust = pizza_crust),
        (this.pizzaSize = pizza_size),
        (this.pizzaToppings = pizza_topping);
    }

    Cart.prototype.SizeAmount = function() {
        var pizzaSizeAmount = [];

        switch (this.pizzaSize) {
            case "small":
                pizzaSizeAmount.push(500);
                break;
            case "medium":
                pizzaSizeAmount.push(800);
                break;
            case "large":
                pizzaSizeAmount.push(1000)
                break;
            default:
                pizzaSizeAmount.push(0)
        }

        return pizzaSizeAmount;

    }

    Cart.prototype.CrustAmount = function() {
        var pizzaCrustAmount = []

        switch (this.pizzaCrust) {
            case "crispy":
                pizzaCrustAmount.push(200);
                break;
            case "Stuffed":
                pizzaCrustAmount.push(250);
                break;
            case "glutten_free":
                pizzaCrustAmount.push(300);
                break;
            case "Tasmania":
                pizzaCrustAmount.push(300);
                break;
            default:
                pizzaCrustAmount.push(0);

        }

        return pizzaCrustAmount;
    }

    $("#form1").submit(function() {
        event.preventDefault();
        //Collect user Inputs and place them in a constructor
        var toppingArray = [];

        var pTopping = $('input[name="topping"]:checked').map(function() {
            toppingArray.push($(this).val());
        });

        var userSelection = new Cart(
            $("#crust").val(),
            $("#size").val(),
            toppingArray
        );

        if (
            userSelection.pizzaCrust === "blank" ||
            userSelection.pizzaSize === "blank"
        ) {
            alert("Error, select the starred options");
        }
    
        else {
            $("#txt_crust").css("display", "flex");
            $("#txt_crust").text(userSelection.pizzaCrust + " Crust");
            $("#txt_amount").text(userSelection.CrustAmount());

            $("tbody").prepend(
                " <tr><td id='txt_size' class='ps-3 pb-3'><span>" +
                userSelection.pizzaSize +
                "</span></td><td align='center' class='ps-3 pb-3'>" + userSelection.SizeAmount() + "</td><td align='center' class='ps-3 pb-3 pe-3'>-</td > < /tr>"
            );



            var totalToppingsArray = [userSelection.SizeAmount(), userSelection.CrustAmount()];

            userSelection.pizzaToppings.forEach((topping) => {

                switch (userSelection.pizzaSize) {
                    case "small":
                        toppingAmount = 100;
                        break;
                    case "medium":
                        toppingAmount = 200;
                        break;
                    case "large":
                        toppingAmount = 300;
                        break;
                    default:
                        toppingAmount = 0;
                }

                $("tbody").append(
                    '<tr><td class="pb-3 ps-3">' +
                    topping +
                    '</td><td align="center" class="ps-3 pb-3">' + toppingAmount + '</td><td align = "center" class = "ps-3 pb-3 pe-3"></td></tr>');

                totalToppingsArray.push(toppingAmount)

            });


            sumTotal = 0;

            for (i = 0; i < totalToppingsArray.length; i++) {
                sumTotal += parseInt(totalToppingsArray[i]);
            }

            //APPEND TOTAL AMOUNT TO HTML TABLE

            $("#total").text(sumTotal);

            //TOTAL AMOUNT BY NUMBER
            $("#totalNumbers").text(sumTotal * n);


            $("form").trigger("reset");
            $("#form").css("display", "none");
            $("#summary").css("display", "flex");



        }

    });

    $("#btn_order").click(function() {
        $("#summary").css("display", "none");
        $(".delivery_container").css("display", "flex");
    })

    $("#form2").submit(function() {
        event.preventDefault();
        if ($("#bool").val() === "blank") {
            alert("Please Select a Yes or a No!");
        } else {
            alert(sumTotal * n);
        }
    })
    
});

$("#submit0").click(function () {
    
    let message = $("input#message").val();

    if (message !== "") {
      alert ("Enter a message to submit");
  }
    else {
      alert("your message has been recieved and we will get back to you as soon as possible!")
    };

  });