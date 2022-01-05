// play sound function 'click'
function playSound(event) {
    const sound = document.getElementById(event).play();

    if (sound !== undefined) {
        sound.then(function() {
    
    }).catch(function(error) {
        console.log(error)
    });
    }
}

// sound text color 'click'
function colorSound(event) {
    const colorT = document.getElementById(event)
    colorT.style.color = '#ffbd35'
}

// choose backgroundImage 'click'
function chooseBackgroundImage(event) {
    if (event === 'img1') {
        document.body.style.backgroundImage ="url('/images/img1.png')";
    } else if (event === 'img2') {
        document.body.style.backgroundImage ="url('/images/img2.png')";
    } else if (event === 'img3') {
        document.body.style.backgroundImage ="url('/images/img3.png')";
    }
}

// choose avatar 'click'
function chooseAvatar(event) {
        const avatar = document.getElementById(event)
        avatar.style.backgroundColor = "#ffbd35"
}

// Cancel button clear everything
document.getElementById('cancel').addEventListener('click', cancel = () => {
    document.getElementById('avatar1').style.backgroundColor = ''
    document.getElementById('avatar3').style.backgroundColor = ''
    document.getElementById('avatar41').style.backgroundColor = ''
    document.getElementById('avatar4').style.backgroundColor = ''
    document.getElementById('avatar5').style.backgroundColor = ''
    document.getElementById('avatar6').style.backgroundColor = ''
    document.getElementById('avatar7').style.backgroundColor = ''
    document.getElementById('avatar13').style.backgroundColor = ''
    document.getElementById('avatar18').style.backgroundColor = ''
    document.getElementById('avatar14').style.backgroundColor = ''
    document.getElementById('avatar15').style.backgroundColor = ''
    document.getElementById('avatar16').style.backgroundColor = ''
    document.getElementById('avatar17').style.backgroundColor = ''
    document.getElementById('avatar21').style.backgroundColor = ''
    document.getElementById('avatar23').style.backgroundColor = ''
    document.getElementById('avatar24').style.backgroundColor = ''
    document.getElementById('avatar25').style.backgroundColor = ''
    document.getElementById('avatar26').style.backgroundColor = ''
    document.getElementById('avatar27').style.backgroundColor = ''
    document.getElementById('avatar33').style.backgroundColor = ''
    document.getElementById('avatar34').style.backgroundColor = ''
    document.getElementById('avatar35').style.backgroundColor = ''
    document.getElementById('avatar37').style.backgroundColor = ''
    document.getElementById('avatar38').style.backgroundColor = ''
    document.getElementById('avatar39').style.backgroundColor = ''
    document.getElementById('avatar40').style.backgroundColor = ''
    document.getElementById('aud8').style.color = '#502064'
    document.getElementById('aud7').style.color = '#502064'
    document.getElementById('aud6').style.color = '#502064'
    document.getElementById('aud5').style.color = '#502064'
    document.getElementById('aud4').style.color = '#502064'
    document.getElementById('aud3').style.color = '#502064'
    document.getElementById('aud2').style.color = '#502064'
    document.getElementById('aud1').style.color = '#502064'
    document.body.style.backgroundImage = ''
})
