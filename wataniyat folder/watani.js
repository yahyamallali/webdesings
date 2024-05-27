

const BTN = document.getElementById("BTN-1");
let isObjectVisible = false;

BTN.addEventListener("click",
 () => {  
 
    // Toggle the visibility of the object with the specified ID
    const objectId = document.getElementById("cont-2");
    if (isObjectVisible) {
        objectId.style.display = "none"; // Hide the object
    } else {
        objectId.style.display = "block"; // Show the object
    }
    isObjectVisible = !isObjectVisible; // Toggle the visibility flag
});
