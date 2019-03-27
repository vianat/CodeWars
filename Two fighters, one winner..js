// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
function declareWinner(f1, f2, fa) {
    if (fa === f1.name){
        for(;;){
            f2.health = f2.health - f1.damagePerAttack;
            if( f2.health  <= 0) return f1.name;

            f1.health = f1.health - f2.damagePerAttack;
            if( f1.health  <= 0) return f2.name;
        }
    }else{
        for(;;){
            f1.health = f1.health - f2.damagePerAttack;
            if( f1.health  <= 0) return f2.name;

            f2.health = f2.health - f1.damagePerAttack;
            if( f2.health  <= 0) return f1.name;
        }
    }
}
