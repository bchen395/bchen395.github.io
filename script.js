const videoLinks = {
    fire: "https://www.youtube.com/embed/qe3AcjbJzHo?autoplay=1&mute=1",
    bike: "https://www.youtube.com/embed/ZlUevdMLbhs?autoplay=1&mute=1",
    lawn: "https://www.youtube.com/embed/TyqmDNXyrAk?autoplay=1&mute=1"
};

function updateVideo(video) {
    const iframe = document.querySelector(".video-container iframe");
    iframe.src = videoLinks[video];
    console.log(videoLinks[video]);
}

// Add click event listeners to genre buttons
document.addEventListener('DOMContentLoaded', () => {
    const videoButtons = document.querySelector('.video-toggle').querySelectorAll("button");
    
    Array.from(videoButtons).forEach(button => {
      button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        Array.from(videoButtons).forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Update the video
        const video = e.target.textContent.toLowerCase();
        updateVideo(video);

        // Update delete button text
        const deleteButton = document.querySelector('.journal-form input');
        if (video === 'fire'){
            deleteButton.value = 'burn'
        } else if (video === 'bike'){
            deleteButton.value = 'trample'
        } else if (video === 'lawn'){
            deleteButton.value = 'shred'
        }
      });
    });
  
   // Set fire as default and trigger initial update
  const fireButton = document.querySelector('.video-toggle button');
  if (fireButton) {
    fireButton.classList.add('active');
    updateVideo('fire');
  }
});




const albums = {
    jazz: [
        { title: "the melody at night, with you", artist: "keith jarrett", url: "https://open.spotify.com/album/2onXlqUvme77BeIcMIOz3M?si=EuMF1cgISSWdVpW0X_KaBA" },
        { title: "the silver collection", artist: "oscar peterson", url: "https://open.spotify.com/album/0f6sO2bVbCxrbMUE7Yy1p4?si=2QxUzwkXQ4638rTU82KYFQ" }

    ],
    ambi: [
        { title: "music for nine post cards", artist: "hiroshi yoshimura", url: "https://open.spotify.com/album/2vgc3dNLfceYv2k1vxK2zA?si=zR4tiNQETf-KCDmVbWba3w" },
        { title: "blue angel sparkling silver", artist: "quiet light", url: "https://open.spotify.com/album/5OQ0N0i26LsukbGcYeSa65?si=3DlK-1e5RD-DmhL-eps88Q" },
        { title: "instrumentals", artist: "adrianne lenker", url: "https://open.spotify.com/album/71q46YDkSq6uXS5WJy4WMk?si=baDa9p_STxqBw14VDEs3lg" }
    ],
    sing: [
        { title: "the lemon of pink", artist: "the books", url: "https://open.spotify.com/album/6zwjQ6buUEcF3E9IGTJXtP?si=43Zhgo47Q3GvMnBSM_9oFA" }
    ]
};

function updateJukeboxLinks(genre) {
    const jukeboxContainer = document.querySelectorAll('.linkscontainer')[1];

    // Clear existing links except the title
    while (jukeboxContainer.childNodes.length > 2) {
        jukeboxContainer.removeChild(jukeboxContainer.lastChild);
    }

    // Add new links for the selected genre
    if (albums[genre]) {
        albums[genre].forEach(album => {
            const link = document.createElement('a');
            link.href = album.url;
            link.textContent = `${album.title} - ${album.artist}`;
            link.target = "_blank";
            jukeboxContainer.appendChild(link);
        });
    }
}

// Add click event listeners to genre buttons
document.addEventListener('DOMContentLoaded', () => {
    const genreButtons = document.querySelector('.jukebox-toggle').querySelectorAll("button");
    
    Array.from(genreButtons).forEach(button => {
      button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        Array.from(genreButtons).forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Update the jukebox links
        const genre = e.target.textContent.toLowerCase();
        updateJukeboxLinks(genre);
      });
    });
  
   // Set jazz as default and trigger initial update
  const jazzButton = document.querySelector('.jukebox-toggle button');
  if (jazzButton) {
    jazzButton.classList.add('active');
    updateJukeboxLinks('jazz');
  }
});
  


function eraseText() {
    document.getElementById("output").value = "";
}

// Add click event listeners to genre buttons
document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.querySelector('.journal-form input');
    deleteButton.addEventListener('click', (e) => {
        eraseText();
      });
});


const popup = document.getElementById('journal-form');
const popupHeader = document.getElementById('popupHeader');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

function togglePopup() {
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
        // Center the popup only when showing it
        if (!xOffset && !yOffset) {  // Only center if it hasn't been dragged
            popup.style.left = (window.innerWidth / 2 - popup.offsetWidth / 2) + 'px';
            popup.style.top = (window.innerHeight / 2 - popup.offsetHeight / 2) + 'px';
        }
    }
}

popupHeader.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

        function dragStart(e) {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;

            if (e.target === popupHeader) {
                isDragging = true;
            }
        }

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, popup);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.left = xPos + 'px';
    el.style.top = yPos + 'px';
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}