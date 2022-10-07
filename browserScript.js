function getID() {
    let id = document.getElementById("projectID").value;
    let link = "https://scratch.mit.edu/projects/" + id.toString() + "/embed";
    document.getElementById("iframeContainer").innerHTML = '<iframe id="projectContainer" width="1200" height="750" frameborder="0" scrolling="no" allowfullscreen></iframe>'
    document.getElementById("projectContainer").src = link;
}