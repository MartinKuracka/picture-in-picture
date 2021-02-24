const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to media element and play
async function selectStreamToDisplay() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
        videoElement.requestPictureInPicture();
        videoElement.play();
        }
    } catch(error) {
        console.log('SOMETHING WENT WRONG:', error)
    }
};

//  event listener to button press
button.addEventListener('click',() => {
    selectStreamToDisplay();

} )
// On load
// selectStreamToDisplay();