function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function yesss(btn) {
    btn.classList.add('green');
    document.getElementById('text').innerText = 'QUIEEET HONESTT PERSON YOU ARE ';
    document.getElementById('count').innerText = '3';
    document.getElementById('btn1').style.display='none';
    document.getElementById('btn2').style.display='none';

    await delay(1000);
    document.getElementById('count').innerText = '2';

    await delay(1000);
    document.getElementById('count').innerText = '1';

    await delay(1000);
    document.getElementById('count').innerText = '0';
    await delay(1000);
    document.getElementById('count').innerText = '';
    document.body.classList.add('bg1')
    document.getElementById('text').innerText = 'Heres ur reward lil one.. 5';
    await delay(1000);
    document.getElementById('text').innerText = 'Heres ur reward lil one.. 4';
    await delay(1000);
    document.getElementById('text').innerText = 'Heres ur reward lil one.. 3';

    await delay(1000);
    document.getElementById('text').innerText = 'Heres ur reward lil one.. 2';

    await delay(1000);
    document.getElementById('text').innerText = 'Heres ur reward lil one.. 1';
    await delay(1000)
    document.getElementById('text').style.display='none';
    
    document.getElementById('monday').play()
    document.body.classList.remove('bg1');
    document.body.classList.add('bg2')
    
}
async function noooo(btn) {
    btn.classList.add('green');
    btn.innerText='YES';
    document.getElementById('text').innerText = 'HAWWWWWWW TRYNA LIE??';
    document.getElementById('count').innerText = '3';
    document.getElementById('btn1').style.display='none';
    await delay(1000);
    document.getElementById('count').innerText = '2';
    document.getElementById('btn2').style.display='none';

    await delay(1000);
    document.getElementById('count').innerText = '1';

    await delay(1000);
    document.getElementById('count').innerText = '0';
    await delay(1000);
    document.getElementById('count').innerText = '';
    document.body.classList.add('bg3')
    document.getElementById('text').innerText = 'Punishment incoming in 5';
    await delay(1000);
    document.getElementById('text').innerText = 'Punishment incoming in 4';
    await delay(1000);
    document.getElementById('text').innerText = 'Punishment incoming in 3';

    await delay(1000);
    document.getElementById('text').innerText = 'Punishment incoming in 2';

    await delay(1000);
    document.getElementById('text').innerText = 'Punishment incoming in 1';
    await delay(1000)
    document.getElementById('text').style.display='none';
    document.getElementById('rickroll').play()
    document.body.classList.remove('bg3');
    document.body.classList.add('bg4')
    
    
}