const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;
let inBetween = false;

function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    // loop over every checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck);
});
