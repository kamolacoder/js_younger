const form=document.querySelector(`.form`);
const input=document.querySelector(`.input`);
const box=document.querySelector(`.box`);
const h2=document.querySelector(`.h2`);
const img1=document.querySelector(`.img1`);
const img2=document.querySelector(`.img2`);
const img3=document.querySelector(`.img3`);
const img4=document.querySelector(`.img4`);
const img5=document.querySelector(`.img5`);

form.addEventListener(`submit`, (a) => {
    a.preventDefault();

    let val=Number(input.value);
    input.value='';

      if(val<0){
        img4.classList.add(`pic`);
        h2.textContent='ALDAMANG!'
        h2.classList.add(`alda`);

        h2.classList.remove(`red`);
        h2.classList.remove(`blue`);
        h2.classList.remove(`green`);

        img1.classList.remove(`pic`);
        img2.classList.remove(`pic`);
        img3.classList.remove(`pic`);
        img5.classList.remove(`pic`);
    }
    else if(val>58){
        img3.classList.add(`pic`);
        h2.textContent='NOTO`G`RI! Kichikroq son kiriting!'
        h2.classList.add(`blue`);

        h2.classList.remove(`red`);
        h2.classList.remove(`alda`);
        h2.classList.remove(`green`);

        img1.classList.remove(`pic`);
        img2.classList.remove(`pic`);
        img4.classList.remove(`pic`);
        img5.classList.remove(`pic`);
    }
    else  if(val<58){
        img2.classList.add(`pic`);
        h2.textContent='NOTO`G`RI! Kattaroq son kiriting!'
        h2.classList.add(`red`);
        h2.classList.remove(`alda`);
        h2.classList.remove(`blue`);
        h2.classList.remove(`green`);

        img1.classList.remove(`pic`);
        img3.classList.remove(`pic`);
        img4.classList.remove(`pic`);
        img5.classList.remove(`pic`);
    }
       else  if(val=58){
        img5.classList.add(`pic`);
        h2.textContent='Yoshni to`g`ri topdingiz!'
        h2.classList.add(`green`);

        h2.classList.remove(`red`);
        h2.classList.remove(`blue`);
        h2.classList.remove(`alda`);

        img1.classList.remove(`pic`);
        img2.classList.remove(`pic`);
        img3.classList.remove(`pic`);
        img4.classList.remove(`pic`);
    }
});