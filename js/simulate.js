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

    for (let i = 1; i <= 8; i++) {
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
        }, 8000);
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
});