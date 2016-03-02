$(document).ready(function(){
  var $buttons = $('.buttons span');
  var $screen = $('#screen');
  var divisionCode = $buttons[1].innerHTML.charCodeAt(0);
  var parseEquation = function(equation) {
    var eq = equation.split('');
    var operand = '';
    var idx = 0;

    for (var i = 0; i < eq.length; i++) {

      if (isNaN(parseInt(eq[i]))) {
        idx = i;
        operand = eq[i];
      };
    }

    var x = parseInt(eq.slice(0, idx).join(''));
    var y = parseInt(eq.slice(idx + 1).join(''));

    eq = {
      'operand': operand,
      'idx': idx,
      'x': x,
      'y': y
    }

    return eq;
  }
  var doMath = function(eq) {
    var eq = parseEquation(eq);

    if (eq.operand === 'x') {
      return $screen.empty().append(eq.x * eq.y);
    }
    else if (eq.operand === '+') {
      return $screen.empty().append(eq.x + eq.y);
    }
    else if (eq.operand === '-') {
      return $screen.empty().append(eq.x - eq.y);
    }
    else if (eq.operand.charCodeAt(0) === divisionCode) {
      return $screen.empty().append(eq.x / eq.y);
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
      var equation = $screen.text();

      doMath(equation);
    }
    else {
      $screen.append(opTxt);
    }
  }

  $buttons.on('click', calcClicked);
});
