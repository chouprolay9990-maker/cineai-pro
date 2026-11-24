function createRecap() {
window.location.href = "create.html";
}

function openTool(tool) {
const name = tool.toLowerCase();

if (name.includes("voice")) {
window.location.href = "voice.html";
}
else if (name.includes("subtitle")) {
window.location.href = "subtitle.html";
}
else if (name.includes("translate")) {
window.location.href = "translate.html";
}
else if (name.includes("export")) {
window.location.href = "export.html";
}
else if (name.includes("project")) {
window.location.href = "projects.html";
}
else if (name.includes("pro")) {
window.location.href = "pro.html";
}
else if (name.includes("studio")) {
window.location.href = "studio.html";
}
else {
window.location.href = "studio.html";
}
}

console.log("CINEAI PRO Started");

// Button click animation
document.querySelectorAll("button").forEach(button => {
button.addEventListener("click", function() {
this.style.opacity = "0.7";

setTimeout(() => {
  this.style.opacity = "1";
}, 150);

});
});