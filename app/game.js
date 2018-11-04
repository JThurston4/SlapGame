let target = {
  health: 10000,
  images: ["http://images.uncyc.org/pt/d/d2/Saitama_gif.jpg", "https://vignette.wikia.nocookie.net/joke-battles/images/9/99/0BCA1A06-6F12-4060-BAED-E13FF8628D3D.gif/revision/latest?cb=20170923221029"
  /*"https://i.imgur.com/ndewDRQ.gif"*/],
  powerLevel: 0
}

let player = {
  playerHealth: 100,
  // powerLevel: ['normal', 'super', 'super3', 'god'],
  powerLevel: 0,
  animations: 0,
  images: [
    ["https://orig00.deviantart.net/5e79/f/2011/355/4/1/goku_stand_by_arestwinblade-d4jrt05.gif", "https://i.gifer.com/ZLBh.gif", "https://media.giphy.com/media/rArPDIllQwWly/giphy.gif", "https://i.skyrock.net/2646/12022646/pics/295155426.gif"],
    ["https://media.giphy.com/media/xG6UZwGnPaNYQ/giphy.gif", "https://www.picgifs.com/anime/dragon-ball-z/goku/anime-goku-511391.gif", "https://i.imgur.com/FOlSN2o.gif", "https://i.imgur.com/7RQSm9H.gif"],
    ["https://orig00.deviantart.net/c19c/f/2015/256/a/3/goku_ssj3___stance_by_hadesdiossupremo-d99gtpz.gif", "https://media.giphy.com/media/HUr19G7eOkyB2/200.gif", "http://www.gifs-animados.es/anime/dragon-ball-z/goku/gifs-animados-goku-611041.gif", "http://www.mytinyphone.com/uploads/users/nightwolve777/320342.gif"],
    ["https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/d/df/Goku.gif/revision/latest?cb=20170504180205", "https://media.giphy.com/media/3ohc0YpD0LR5wRyz1S/giphy.gif", "http://network.mugenguild.com/balthazar/images_gohan_ado/swirling-kamehamehas.gif", "https://i.gifer.com/4xjg.gif"], ["https://i.imgur.com/lNrJUlO.gif", "https://i.imgur.com/lNrJUlO.gif", "https://i.imgur.com/lNrJUlO.gif", "https://i.imgur.com/lNrJUlO.gif"]]
}


document.getElementById("healthbar2").innerHTML = `<div id="targethealth" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: ${target.health}%;"></div>`

document.getElementById("healthbar1").innerHTML = `<div class="progress-bar  bg-dark progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${player.playerHealth}%"></div>`;


function updatePower(super1, super3, god) {
  if (super1) {
    player.powerLevel = 1
  } else if (super3) {
    player.powerLevel = 2
  } else if (god) {
    player.powerLevel = 3
  } update()
}

function slap(punch, energy, ult) {
  //check if super sayan is activated
  // if (!sayan) {
  // debugger
  if (punch) {
    player.animations = 1
    if (player.powerLevel == 0) {
      target.health -= punch
    } else if (player.powerLevel == 1) {
      target.health -= punch * 10
    } else if (player.powerLevel == 2) {
      target.health -= punch * 100
    } else {
      target.health -= punch * 1000
    }
  } else if (energy) {
    player.animations = 2
    if (player.powerLevel == 0) {
      target.health -= energy
    } else if (player.powerLevel == 1) {
      target.health -= energy * 10
    } else if (player.powerLevel == 2) {
      target.health -= energy * 100
    } else {
      target.health -= energy * 1000
    }
  } else if (ult) {
    player.animations = 3
    if (player.powerLevel == 0) {
      target.health -= ult
    } else if (player.powerLevel == 1) {
      target.health -= ult * 10
    } else if (player.powerLevel == 2) {
      target.health -= ult * 100
    } else {
      target.health -= ult * 1000
    }
  }
  if (target.health <= 0) {
    target.health = 500
    target.powerLevel = 1
    player.playerHealth = 0
    player.powerLevel = 4
  }
  update()

}

function update() {
  //update all data to the screen
  document.getElementById("healthbar2").innerHTML = `<div id="targethealth" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: ${target.health / 100}%;"></div>`
  document.getElementById("healthbar1").innerHTML = `<div class="progress-bar  bg-dark progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ${player.playerHealth}%"></div>`;
  document.getElementById("goku").innerHTML = `<img src=${player.images[player.powerLevel][player.animations]} style="height: 45vh;">`
  document.getElementById("targetimg").innerHTML = `<img src=${target.images[target.powerLevel]} style="height: 45vh;">`
  player.animations = 0
}

slap()