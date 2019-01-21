let score;

submitBtn.onlick = (x) => {
    for(let c = 6; c <= 10; c++){
        let quest = document.getElementsByName(`q${[c]}`);
        
        if(q[c] == 6){
            if(ans == 'middleware' || 'Middleware' || 'MIDDLEWARE'){
                score += 1;
            }
        }
    }
}