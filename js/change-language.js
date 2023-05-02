function translate(lng, tagAttr) {
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();
}

$(".lngSelect").on("change", function () {
  $('.lngSelect').val(this.value);

  if (this.value == "pt") {
    translate('pt', 'lng-tag');
    document.querySelector("#name").setAttribute("placeholder", "Como podemos te chamar?");
    document.querySelector("#email").setAttribute("placeholder", "Seu melhor email para conversarmos");
    document.querySelector("#message").setAttribute("placeholder", "Como podemos te ajudar?");
  } else if (this.value == "es") {
    translate('es', 'lng-tag');
    document.querySelector("#name").setAttribute("placeholder", "Como podemos te chamar?");
    document.querySelector("#email").setAttribute("placeholder", "Seu melhor email para conversarmos");
    document.querySelector("#message").setAttribute("placeholder", "Como podemos te ajudar?");
  } else {
    translate('en', 'lng-tag');
    document.querySelector("#name").setAttribute("placeholder", "Como podemos te chamar?");
    document.querySelector("#email").setAttribute("placeholder", "Seu melhor email para conversarmos");
    document.querySelector("#message").setAttribute("placeholder", "Como podemos te ajudar?");
  }
});

$(document).ready(function () {
  var userlang = navigator.language || navigator.userLanguage;

  if (userlang == "pt") {
    translate('pt', 'lng-tag');
    $(".lngSelect").val("pt").change();
  } else if (userlang == "es") {
    translate('es', 'lng-tag');
    $(".lngSelect").val("es").change();
  } else {
    translate('en', 'lng-tag');
    $(".lngSelect").val("en").change();
  }
});