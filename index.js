function roller(form)
{
    // EMPTY THE <UL></UL>
    let emptier = document.getElementById('rolls');
    emptier.innerHTML = '';

    //DECLARE THE INTEGERS FROM THE <FORM>
    let dc = form.dieCount.value;
    let low = Number(form.lowRange.value);
    let high = Number(form.highRange.value);
    
    //CALCULATING ANS WAS TREATED AS A STRING WITHOUT NUMBER() IDK
    let ans = Number();
    let myList = document.getElementById('rolls');

    //ADDS IN THE DICE ROLLS
    for (let i = 0; i < dc; i++){
        ans = Math.floor((Math.random() * (high - low + 1)) + low);
        console.log(ans)
        
        let entry = document.createElement('li');
        entry.textContent = ans;
        myList.appendChild(entry);
    }
}