$(document).ready(function() {
    //Form Length
    const steps = $('.form-step');
    const formLength = steps.length - 3;
    $('#form-lenght').text("/" + formLength);
    $('.form-progress').css("width", 100/formLength + "%");
    
    //Input Inside a Checkbox
    $(".other").change(function () {
        if (this.value === "Sonstiges") {
            $("#other-toggle").toggleClass("d-none");
        }
    });

    //Next Step
    $('.next-step').on('click', function() {
        var currentQuestion = $('#steps').find(':visible');
        $('#formStep-' + parseInt(currentQuestion.attr('id').split('-')[1])).toggleClass("d-none");
        
        var nextQuestionId = parseInt(currentQuestion.attr('id').split('-')[1]) + 1;
        $('#formStep-' + nextQuestionId).toggleClass("d-none");
        $('.last-step').removeClass("d-none");

        $('#form-progress-text').text("Step " + nextQuestionId);
        $('.form-progress').css("width", nextQuestionId * 100/formLength + "%");

        if( lastQuestionId == 10 ){
            $('#step-header').addClass("d-none");
        }
    });

    //Last Step
    $('.last-step').on('click', function() {
        var currentQuestion = $('#steps').find(':visible');
        $('#formStep-' + parseInt(currentQuestion.attr('id').split('-')[1])).toggleClass("d-none");
        
        var lastQuestionId = parseInt(currentQuestion.attr('id').split('-')[1]) - 1;
        $('#formStep-' + lastQuestionId).toggleClass("d-none");

        $('#form-progress-text').text("Step " + lastQuestionId);
        $('.form-progress').css("width", lastQuestionId * 100/formLength + "%");

        if( lastQuestionId == 1 ){
            $('.last-step').addClass("d-none");
        }
    });

    for (let i = 1; i <= 9; i++) {
        const formStepId = `#formStep-${i}`;
        
        $(formStepId).find('input').on('keyup change', function() {
          var isFilled = false;
      
          $(formStepId).find('input').each(function() {
            if ($(this).is(':checked')) {
                isFilled = true;
                return false;
            } else if(i>=7 && $.trim($(this).val()) !== ''){
                isFilled = true;
                return false;
            } else {
                isFilled = false;
            }
          });
      
          const formStepBtnId = `#formStep-${i}-btn`;
      
          if (isFilled) {
            $(formStepBtnId).removeClass('disabled-btn');
          } else {
            $(formStepBtnId).addClass('disabled-btn');
          }
        });
    }

    $('#only-numb').on('input', function() {
        $(this).val($(this).val().replace(/[^0-9]/g, '').slice(0, 5));
    });

    $('.final-answer').on('click', function() {
        console.log('da');
        var currentQuestion = $('#steps').find(':visible');
        $('#formStep-' + parseInt(currentQuestion.attr('id').split('-')[1])).toggleClass("d-none");
        $("#step-header").remove();
        $("#checklist").remove();

        $('#formStep-searching').toggleClass("d-none");

        setTimeout(function() {
            $('#formStep-searching').toggleClass("d-none");
            $('#formStep-result').toggleClass("d-none");
        }, 3000);
    });

    $('#formStep-result').find('input').on('keyup change', function() {
        var isFilled = false;
        
        $('#formStep-result').find('input').each(function() {
            if ($.trim($(this).val()) !== '') {
                isFilled = true;
                return false;
                
            } else {
                isFilled = false;
            }
        });
        
        if (isFilled) {
            $('#formStep-result-btn').addClass('next-step');
            $('#formStep-result-btn').removeClass('disabled-btn');
        } else {
            $('#formStep-result-btn').addClass('disabled-btn');
            $('#formStep-result-btn').removeClass('next-step');
        }
    });

    $('#calculate').submit(function(event) {
        event.preventDefault();
            
        $('#formStep-result').toggleClass("d-none");
        $('#formStep-congratulation').toggleClass("d-none");
    });

    $('#dateInput').keydown(function(e) {
        // Permitir: backspace, delete, tab, escape, enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
            // Permitir: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Permitir: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
            // Permitir: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
            // Permitir: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // Deixar acontecer, não faça nada
            return;
        }
        // Verificar se é número ou não
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
        // Não permitir digitar mais se o tamanho for 10
        if (this.value.replace(/[^0-9]/g,"").length>=8){
            e.preventDefault();
        }
    }).keyup(function(e){
        var input = this.value;
        // Adiciona o traço a cada 2 e 4 dígitos
        input = input.replace(/^(\d{2})(\d)/, "$1-$2");
        input = input.replace(/^(\d{2}-\d{2})(\d)/, "$1-$2");
        // Limitar a entrada a 10 caracteres
        if (input.length > 10) {
            input = input.substr(0, 10);
        }
        this.value = input;
    });

});