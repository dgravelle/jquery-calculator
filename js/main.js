// $(document).ready(function(){

  var $buttons = $('.buttons span');
  var $screen = $('#screen');
  var decodeHtml = function(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;

    return txt.value;
  }
  var doMath = function(eq) {
    // var eq = decodeHtml(eq);
    console.log(eq);
    var getNumbers = function(str, index) {
      var x = parseInt(eq.slice(0, idx));
      var y = parseInt(eq.slice(idx + 1));
      return { 'x': x, 'y': y };
    }
    console.log(eq.includes('÷'));
    if (eq.includes('x')) {
      var idx = eq.indexOf('x');
      var numbers = getNumbers(eq, idx);

      return $screen.empty().append(numbers.x * numbers.y);
    }
    else if (eq.includes('+')) {
      var idx = eq.indexOf('+');
      var numbers = getNumbers(eq, idx);

      return $screen.empty().append(numbers.x + numbers.y);
    }
    else if (eq.includes('-')) {
      var idx = eq.indexOf('-');
      var numbers = getNumbers(eq, idx);

      return $screen.empty().append(numbers.x - numbers.y);
    }
    else if (eq.includes('÷')) {
      console.log('division');
    }
  }
  var calcClicked = function(event) {
    var $eTarget = $(event.target);

    if (!$eTarget.hasClass('operator')) {
      $screen.append($eTarget.text());
    }
    else {
      getOperator($eTarget);
    }
  };

  var getOperator = function(operator) {
    var opTxt = operator.text();

    if (opTxt === 'C') {
      $screen.empty();
    }
    else if (opTxt === '=' ) {
      doMath($screen.text());

    }
    else {
      $screen.append(opTxt);
    }
  }


  $buttons.on('click', calcClicked);





// });
