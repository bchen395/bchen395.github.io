// REMIND SECTION

const readings = [
    {
        type: 'image',
        imageUrl: '../../images/commandements.jpg',
        title: 'Tess\'s Ten Commandments',
        text: 'Developed over a bike ride in Florida.'
    },
    {
        type: 'image',
        imageUrl: '../../images/shangchi.jpg',
        title: 'Instagram Caption about family',
        text: 'During the release of "Shangchi", 88rising wrote this caption. It\'s cheesy. It\'s lovely'
    },
    {
        type: 'link',
        url: 'https://www.vogue.com/article/joan-didion-self-respect-essay-1961',
        title: 'On Self Respect - Joan Didion',
        text: 'Something to ponder.'
    },
    {
        type: 'link',
        url: 'https://pitchfork.com/features/resonant-frequency/6694-resonant-frequency-50/',
        title: 'The Memory of Our Betters - Mark Richardson',
        text: 'About my favorite song ever.'
    },
    {
        type: 'link',
        url: 'https://poets.org/poem/having-coke-you',
        title: 'Having a Coke with You - Frank O\'Hara',
        text: 'Beautiful.'
    },
    {
        type: 'link',
        url: 'https://www.are.na/alex-singh/a-catalogue-of-simple-pleasures',
        title: 'A Catalogue of Simple Pleasures - Alex Singh',
        text: 'Plenty of good reminders.'
    },

];

const videos = [
    {
        title: 'Keith Jarrett - I Loves You Porgy',
        embedId: 'o3D8Ri84hmw'
    },
    {
        title: 'Dijon - Drunk Live @ The New Parish',
        embedId: 'V4rl6NkVDCk'
    },
    {
        title: 'Bon Iver - For Emma, Forever Ago | A Take Away Show',
        embedId: 'x5Swa9CYgRk'
    },
    {
        title: 'John\'s Review of Auld Lang Syne',
        embedId: 'Wgh8Gfs2S7M'
    },
    {
        title: 'HEAVEN TO ME',
        embedId: 'wm_hfvgakcM'
    },
];

const quotes = [
    {
        text: "When you realize there is nothing lacking, the whole world belongs to you",
        author: "Lao Tzu (Anya Taylor Joy)"
    },
    {
        text: "The choice is not what brings happiness, it's the way we experience the choice.",
        author: "Dr. K"
    },
    {
        text: "Mark, we're gonna wear our souls, Mark. Mark, we're gonna wear our souls like a skin.",
        author: "Fraser Wilson (from \"We Are Who We Are\") "
    },
    {
        text: "Embrace it with both arms, hug it, love it, and above all become passionate about it. Lukewarm is no Good.",
        author: "Roald Dahl"
    },
    {
        text: "Yeaa hes Not shredded as fuck with a demure waist and smile that could light up the whole room bro",
        author: "alex @midsmoker34"
    },
    {
        text: "to have none. not to be tied. to be free & kindly with myself. sometimes to read, sometimes not to read. to go out, yes—but stay at home in spite of being asked. as for clothes, i think to buy good ones",
        author: "Virginia Woolf's 1931 New Years Resolutions"
    },
    {
        text: "How we spend our days is, of course, how we spend our lives.",
        author: "Annie Dillard"
    },
    {
        text: "Lean buyin the gucci store its like breathing air its nothing it means nothing",
        author: "Bladee"
    }
];

// Helper function to get random item from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Update functions for each content type
function updateReading() {
    const reading = getRandomItem(readings);
    const content = document.getElementById('reading-content');
    
    if (reading.type === 'link') {
        content.innerHTML = `
            <a href="${reading.url}" target="_blank">
                <h3>${reading.title}</h3>
                <p>${reading.text}</p>
            </a>
        `;
    } else {
        content.innerHTML = `
            <div class="reading-image-container">
                <img src="${reading.imageUrl}" alt="${reading.title}">
            </div>
            <h3>${reading.title}</h3>
            <p>${reading.text}</p>
        `;
    }
}

function updateRemindVideo() {
    const video = getRandomItem(videos);
    document.getElementById('video-content').innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${video.embedId}" 
            title="${video.title}"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <h3>${video.title}</h3>
    `;
}

function updateQuote() {
    const quote = getRandomItem(quotes);
    document.getElementById('quote-content').innerHTML = `
        <div class="quote">${quote.text}</div>
        <div class="quote-author">— ${quote.author}</div>
    `;
}

// Initial content load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    updateReading();
    updateRemindVideo();
    updateQuote();
})