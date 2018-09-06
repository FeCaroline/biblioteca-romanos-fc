exports.intToRoman = function intToRoman(num) {
  var result = '';
  var decimal = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["V̅","I̅V̅","M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (num%decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result;
}

exports.romanToInt = function romanToInt(rom){

  var result = 0;
  var decimal = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["V̅","I̅V̅","M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  rom = rom.toUpperCase();
  for (var i = 0;i<=decimal.length;i++) {
    while (rom.indexOf(roman[i]) === 0){
      result += decimal[i];
      rom = rom.replace(roman[i],'');

    }
  }
  return result;
}
