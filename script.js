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
        { title: "the silver collection", artist: "oscar peterson", url: "https://open.spotify.com/album/0f6sO2bVbCxrbMUE7Yy1p4?si=2QxUzwkXQ4638rTU82KYFQ" },
        { title: "birth of the cool", artist: "miles davis", url: "https://open.spotify.com/album/0QWea2w5Y6pSoSWHuc7JMf?si=MsTzuEYiQReCSBV-RV5Igg" },
        { title: "what a diff'rence a day makes!", artist: "dinah washington", url: "https://open.spotify.com/album/0w8YD8Wz1hEkwXdsAMzzFe?si=SL6kKojfTyOoeTdo6mZyBQ" },
        { title: "the gentle side of john coltrane", artist: "john coltrane", url: "https://open.spotify.com/album/0hc0DLxQyod6p5UdCjNOJS?si=COrrV18VSYuwNFT8DzB6ug" },
        { title: "clifford brown with strings", artist: "clifford brown", url: "https://open.spotify.com/album/6TLl6JDupQR1sdHh20eWNG?si=fGAymW1rSZS4YHMANi1Rhw" },
        { title: "ballads", artist: "john coltrane quartet", url: "https://open.spotify.com/album/2fdnSzyVkyG5R0VJgo9Gv5?si=mm4MpuWyRL2nHAogclmVZw" }
    ],
    ambi: [
        { title: "music for nine post cards", artist: "hiroshi yoshimura", url: "https://open.spotify.com/album/2vgc3dNLfceYv2k1vxK2zA?si=zR4tiNQETf-KCDmVbWba3w" },
        { title: "blue angel sparkling silver", artist: "quiet light", url: "https://open.spotify.com/album/5OQ0N0i26LsukbGcYeSa65?si=3DlK-1e5RD-DmhL-eps88Q" },
        { title: "instrumentals", artist: "adrianne lenker", url: "https://open.spotify.com/album/71q46YDkSq6uXS5WJy4WMk?si=baDa9p_STxqBw14VDEs3lg" },
        { title: "neghborhoods", artist: "ernest hood", url: "https://open.spotify.com/album/5kxfj6a0DEAgfFxVbihErw?si=VAMkVz-wTTixJsBb31eXpA" },
        { title: "the wind of things", artist: "m. sage", url: "https://open.spotify.com/album/6QxCmuFtpKqoyVaRLWlmSm?si=HHxFgOlbQY2P5uuY9DmzHg" },
        { title: "ambient 1: music for airports", artist: "brian eno", url: "https://open.spotify.com/album/063f8Ej8rLVTz9KkjQKEMa?si=aV-1s-qeSWi2cM_xCdDqQg" },
        { title: "carousel", artist: "robin guthrie", url: "https://open.spotify.com/album/50NL5ylAzfJWuDp929EH9v?si=cWYYpvAAT_yPRScUZXYpVA" },
        { title: "the following morning", artist: "eberherd weber", url: "https://open.spotify.com/album/2jlfkhKG8lRMJFXVM669xw?si=rlpWhXXmQLOj7GdqasIM3g" },
        { title: "~~~", artist: "ana roxanne", url: "https://open.spotify.com/album/2jlfkhKG8lRMJFXVM669xw?si=rlpWhXXmQLOj7GdqasIM3g" },
        { title: "fugitive light and themes of consolation", artist: "andrew wasylyk", url: "https://open.spotify.com/album/6i2QWzi29ARNQwPrk3Lmyf?si=-1cXVGt_TdqCgmMsL1CU-w" },
        { title: "playing piano for dad", artist: "h hunt", url: "https://open.spotify.com/album/3MjHsbM2kVdIlSq83MXOXi?si=HtJJUrwDSFueAokCiVbSeQ" },
        { title: "keyboard fantasies", artist: "beverly glenn-copeland", url: "https://open.spotify.com/track/6nXk3XcfNmwtig7acQxRbc?si=07a62ee4599c4620" }
    ],
    sing: [
        { title: "the lemon of pink", artist: "the books", url: "https://open.spotify.com/album/6zwjQ6buUEcF3E9IGTJXtP?si=43Zhgo47Q3GvMnBSM_9oFA" },
        { title: "mount wittenberg orca", artist: "dirty projectors/bjork", url: "https://open.spotify.com/album/1C9sn8azB8qNZyPSCgkNJz?si=tRzEMF3xS3i1vxqazPJX0A" },
        { title: "crumbling", artist: "mid-air thief", url: "https://open.spotify.com/track/15X2S6zycG5gc9ja86361z?si=1b9c28dc65734d34" },
        { title: "songs", artist: "adrianne lenker", url: "https://open.spotify.com/album/2Qt8Z1LB3Fsrf6nhBNsvUJ?si=wrqqLp60SJGb2j6XxOdq9w" },
        { title: "weird little birthday", artist: "happiness", url: "https://open.spotify.com/album/6mkNPrzBs6hjj5zmLhX8WI?si=J-8eAkeOTYqVtYaC6iaXWQ" },
        { title: "suntub", artist: "ml buch", url: "https://open.spotify.com/album/6IjtDhIvMy3I8xORtWAVax?si=TfEEsz08TbmWeysxpe0c1A" }
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