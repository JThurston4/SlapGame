let target = {
  health: 100,
  images: ["http://images.uncyc.org/pt/d/d2/Saitama_gif.jpg", "https://66.media.tumblr.com/b2a797807cf90d29461e2ab43e8068db/tumblr_o2aii68IB51tduux2o1_400.gif"]
}

let player = {
  playerHealth: 100,
  // powerLevel: ['normal', 'super', 'super3', 'god'],
  powerLevel: 0,
  images: ["https://orig00.deviantart.net/5e79/f/2011/355/4/1/goku_stand_by_arestwinblade-d4jrt05.gif", "https://www.andersonkenya1.net/uploads/monthly_2017_08/ssjsongoku2.thumb.gif.6e130b6857f18e52d6cbfead08cc9965.gif", "https://orig00.deviantart.net/c19c/f/2015/256/a/3/goku_ssj3___stance_by_hadesdiossupremo-d99gtpz.gif", "https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/d/df/Goku.gif/revision/latest?cb=20170504180205"]
}


document.getElementById("healthbar2").innerHTML = `<div id="targethealth" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: ${target.health}%;"></div>`

document.getElementById("healthbar1").innerHTML = `<div class="progress-bar  bg-dark progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>`;


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

  if (punch) {
    target.health -= punch
  } else if (energy) {
    target.health -= energy
  } else if (ult) {
    target.health -= ult
  }
  // }

  update()

}

function update() {
  let template = `<img src=${player.images[player.powerLevel]} style="height: 45vh;">`
  //update all data to the screen
  document.getElementById("healthbar2").innerHTML = `<div id="targethealth" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: ${target.health}%;"></div>`
  document.getElementById("goku").innerHTML = template
}

slap()