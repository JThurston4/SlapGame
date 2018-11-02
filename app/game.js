let target = {
  health: 100,
}

document.getElementById("healthbar2").innerHTML = `<div id="targethealth" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: ${target.health}%;"></div>`

let playerHealth = 100
document.getElementById("healthbar1").innerHTML = `<div class="progress-bar  bg-dark progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>`;

function slap(punch, energy, ult) {
  //check if super sayan is activated
  // if (!sayan) {

  if (punch) {
    console.log(target.health -= punch)
  } else if (energy) {
    console.log(target.health -= energy)
  } else if (ult) {
    console.log(target.health -= ult)
  }
  // }

  update()

}

function update() {
  //update all data to the screen
  document.getElementById("healthbar2").innerHTML = `<div id="targethealth" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: ${target.health}%;"></div>`
}