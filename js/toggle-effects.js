// Inicialmente, o valor do lng-tag é "valor-1"
var currentType = "yearly";

$("#toggle-type").click(function () {
  if (currentType === "yearly") {

    $(".plans-type").attr("lng-tag", "plans-/monthly");
    $("#plans-basic-price").attr("lng-tag", "plans-monthly-basic");
    $("#plans-professional-price").attr("lng-tag", "plans-monthly-basic");
    $("#plans-premium-price").attr("lng-tag", "plans-monthly-basic");
    $("#plans-basic-eco").attr("lng-tag", "plans-monthly-basic-eco");
    $("#plans-professional-eco").attr("lng-tag", "plans-monthly-professional-eco");
    $("#plans-premium-eco").attr("lng-tag", "plans-monthly-premium-eco");

    if ($(".lngSelect").val() == "pt") {
      $(".lngSelect").val("pt").change();
    } else if ($(".lngSelect").val() == "es") {
      $(".lngSelect").val("es").change();
    } else {
      $(".lngSelect").val("en").change();
    }

    currentType = "monthly";

  } else {

    $(".plans-type").attr("lng-tag", "plans-/yearly");
    $("#plans-basic-price").attr("lng-tag", "plans-yearly-basic");
    $("#plans-professional-price").attr("lng-tag", "plans-yearly-basic");
    $("#plans-premium-price").attr("lng-tag", "plans-yearly-basic");
    $("#plans-basic-eco").attr("lng-tag", "plans-yearly-basic-eco");
    $("#plans-professional-eco").attr("lng-tag", "plans-yearly-professional-eco");
    $("#plans-premium-eco").attr("lng-tag", "plans-yearly-premium-eco");

    if ($(".lngSelect").val() == "pt") {
      $(".lngSelect").val("pt").change();
    } else if ($(".lngSelect").val() == "es") {
      $(".lngSelect").val("es").change();
    } else {
      $(".lngSelect").val("en").change();
    }

    currentType = "yearly";

  }
});

$("#toggle-ethusdt").click(function () {
  $(".ethusdt").toggleClass("d-none");
});

$("#toggle-btcusdt").click(function () {
  $(".btcusdt").toggleClass("d-none");
});

$("#toggle-bnbusdt").click(function () {
  $(".bnbusdt").toggleClass("d-none");
});

$("#toggle-poupanca").click(function () {
  $(".poupanca").toggleClass("d-none");
});