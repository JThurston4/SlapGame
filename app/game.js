let target = {
  health: 10000,

}

document.getElementById("progress2").innerHTML = `<div id="targethealth" class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: ${target.health}%;"></div>`

let playerHealth = 100
document.getElementById("progress1").innerHTML = `<div class="progress-bar  bg-dark progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>`;

function refresh(punch, energy, ult) {
  let template = ''


  return
}

