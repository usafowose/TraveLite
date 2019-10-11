var settings = {
  async: true,
  crossDomain: true,
  url:
    "http://api.travelpayouts.com/v1/prices/monthly?currency=USD&origin=ATL&destination=LAX&token=15b8d8251f337fc45164a04b18f5025a",
  method: "GET"
};

$.ajax(settings).done(function(response) {
  console.log(response);
  var data = response.data;
  console.log(data);
  var monthsPrice = {
    thisMonth: data["2019-10"].price,
    nextMonth: data["2019-11"].price,
    December: data["2019-12"].price,
    February: data["2020-02"].price,
    March: data["2020-03"].price
  };
  console.log(monthsPrice);

  // var priceRubles = response.data;
  // console.log(priceRubles);
  // console.log(`The price of the flight is $${priceDollars} USD`);
});
