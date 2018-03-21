const faceDetector = new window.FaceDetector();
const wrap = document.querySelector('.wrap');
detect();

async function detect() {
  console.log('OK');
  const img = document.querySelector('img');
  const faces = await faceDetector.detect(img);
  drawFaces(faces);
}

async function drawFaces(faces) {
  faces.forEach(face => {
    console.log(face);
    const { width, height, top, left } = face.boundingBox;

    // create the face
    const faceBox = document.createElement('div');
    faceBox.classList.add('face');
    faceBox.style.cssText = `
                width: ${width}px;
                height: ${height}px;
                top: ${top}px;
                left: ${left}px;
            `;

    //create the eyes and mouth
    face.landmarks.forEach(landmark => {
      const el = document.createElement('div');
      el.classList.add('landmark', landmark.type);
      el.style.cssText = `
                    top: ${landmark.location.y - top};
                    left: ${landmark.location.x - left};
                `;
      faceBox.appendChild(el);
    });
    wrap.appendChild(faceBox);
    console.log(faceBox);
  });
}
