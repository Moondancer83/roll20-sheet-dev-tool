/**
 * Project selection
 */
var project;

function submit() {
  if(event.key === 'Enter') {
    setProject();
  }
}

const setProject = () => {
  project = $("#roll20-dev-tool-project-name").val();
  console.log("Project name is set to", project);
  load(project);
}

function clear() {
  $("#custom-sheet-container").empty();
}

function load(projectName) {
  console.log("Project", projectName);
  clear();
  $.get(`../src/${projectName}/sheet.html`, function(data){
    console.debug("Fetched HTML", data);
    $("#custom-sheet-container").append(data);
    $("#roll20-dev-tool-notification")
      .empty()
      .removeClass();
  }).fail(() => {
    $("#roll20-dev-tool-notification")
      .empty()
      .append("<div>No such project.</div>")
      .addClass("error")
  });

  $.get(`../src/${projectName}/sheet.css`, function(data){
    console.debug("Fetched CSS", data);
    const styles = $("<style>").append(data);
    $("#custom-sheet-container").append(styles);
  });
}


/**
 * View size
 */
let width = 768;
function widthChange() {
  const width = $("#roll20-dev-tool-view-width").val();
  console.debug("width", width);
  $("#dialog-window").css("width", `${width}px`);
}

$(document).ready(widthChange);
