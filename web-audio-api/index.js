async function getDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const deviceElements = document.createDocumentFragment();
    for (const device of devices) {
        const { kind, label, groupId, deviceId } = device;
        const deviceElement = document.createElement('li');
        deviceElement.innerText = String(deviceId);
        deviceElement.dataset.deviceId = deviceId;
        deviceElements.appendChild(deviceElement);
    }
    document.getElementById('devices').appendChild(deviceElements);
}

async function captureMedia() {
    try {
        const [start, stop, audio] = ['start', 'stop', 'audio'].map(id => document.getElementById(id));
        const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(mediaStream);
        console.log({ mediaStream, recorder });
        const chunks = [];
        recorder.ondataavailable = (e) => {
            console.log(e);
            chunks.push(e.data);
        };
        start.onclick = () => recorder.start(1000);
        stop.onclick = () => {
            recorder.stop();
            console.log(chunks);
            const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
            const audioUrl = window.URL.createObjectURL(blob);
            audio.src = audioUrl;
        };
    } catch (err) {
        console.error(err);
    }
}

getDevices();
captureMedia();
