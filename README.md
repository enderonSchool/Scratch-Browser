# Scratch-Browser
## A free Scratch Browser where you can see your favorite scratch projects and discover new ones
---
#Version 1.0.0 Initial Relese
- Search up any scratch project ID and play it
- The most basic idea for this project
---
### Its all open sorce anyway so i'll share my code
#### This is everything important
I used an div tag with nothing in it. When the button is pressed it runs a function that gets the id
`let id = document.getElementById("the text boxes id").value`
Then combines it with other things to make a link
`let link = "https://scratch.mit.edu/projects/" + id.toString() + "/embed"`
Then it makes an iframe, but because the src is a variable it has to add it seprately
`document.getElementById("id of the empty div").innerHTML = '<iframe /*iframe stuff */></iframe>`
Finally, it sets the src of the iframe to the link
`document.getElementById("iframe id").src = link`
