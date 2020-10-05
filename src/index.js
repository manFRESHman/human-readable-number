function toReadable1(number){
    let ans;
    switch(number[0]){
        case '1':
            ans = ' one';
            break;
        case '2':
            ans = ' two';
            break;
        case '3':
            ans = ' three';
            break;
        case '4':
            ans = ' four';
            break;
        case '5':
            ans = ' five';
            break;
        case '6':
            ans = ' six';
            break;
        case '7':
            ans = ' seven';
            break;
        case '8':
            ans = ' eight';
            break;
        case '9':
            ans = ' nine';
            break;
        default:
            ans = '';
            break;
  }
  return ans;
}

function toReadable2(number){
    let ans;
    switch(number[1]){
        case '1':
            switch(number[0]){
                case '1':
                    ans = ' eleven';
                    break;
                case '2':
                    ans = ' twelve';
                    break;
                case '3':
                    ans = ' thirteen';
                    break;
                case '4':
                    ans = ' fourteen';
                    break;
                case '5':
                    ans = ' fifteen';
                    break;
                case '6':
                    ans = ' sixteen';
                    break;
                case '7':
                    ans = ' seventeen';
                    break;
                case '8':
                    ans = ' eighteen';
                    break;
                case '9':
                    ans = ' nineteen';
                    break;
                default:
                    ans = ' ten';
                    break;
            }
            break;
        case '2':
            ans = ' twenty';
            break;
        case '3':
            ans = ' thirty';
            break;
        case '4':
            ans = ' forty';
            break;
        case '5':
            ans = ' fifty';
            break;
        case '6':
            ans = ' sixty';
            break;
        case '7':
            ans = ' seventy';
            break;
        case '8':
            ans = ' eighty';
            break;
        case '9':
            ans = ' ninety';
            break;
        default:
            ans = '';
            break;
  }
  return ans;
}

function toReadable3(number){
    return toReadable1(number.slice(2)) + " hundred";
}

module.exports = function toReadable (number) {
    if(number === 0) return "zero";
    let ans;
    number = "" + number;
    number = number.split("").reverse().join("");
    switch(number.length){
        case 1:
            ans = toReadable1(number);
            break;
        case 2:
            ans = toReadable2(number)
            if(number[1] !== '1') ans += toReadable1(number);
            break;
        case 3:
            ans = toReadable3(number) + toReadable2(number);
            if(number[1] !== '1') ans += toReadable1(number);
            break;         
    }
    return ans.trim();
}
