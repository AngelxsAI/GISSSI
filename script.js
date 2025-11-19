// Variables globales
let currentTrackIndex = 0;
let isPlaying = false;
let audio = new Audio();
let lyricsData = [];
let currentLyricIndex = 0;
let lyricInterval;

// Datos de las canciones
const tracks = [
    {
        title: "Where Have You Been",
        artist: "Rihanna",
        year: "2011",
        lyrics: [
            { time: 0, text: "Where Have You Been" },
            { time: 2, text: "Rihanna" },
            { time: 4, text: "Where Have You Been" },
            { time: 6, text: "I've been everywhere, man, looking for someone" },
            { time: 10, text: "Someone who can please me, love me all night long" },
            { time: 14, text: "I've been everywhere, man, looking for you, babe" },
            { time: 18, text: "Looking for you, babe, searching for you, babe" },
            { time: 22, text: "Where have you been?" },
            { time: 24, text: "'Cause I never see you out" },
            { time: 26, text: "Are you hiding from me? Yeah" },
            { time: 28, text: "Somewhere in the crowd" },
            { time: 30, text: "(Yeah, yeah, yeah, yeah, yeah)" },
            { time: 32, text: "(Yeah-yeah-yeah-yeah-yeah) oh-ooh" },
            { time: 34, text: "(Yeah, yeah, yeah, yeah, yeah)" },
            { time: 36, text: "(Yeah-yeah-yeah-yeah-yeah)" },
            { time: 38, text: "Where have you been" },
            { time: 40, text: "All my life?" },
            { time: 42, text: "All my life, life, life, life?" },
            { time: 44, text: "Where have you been all my li-i-i-i-i-ife?" },
            { time: 48, text: "Where have you been all my li-i-i-i-i-ife?" },
            { time: 52, text: "Where have you been all my li-i-i-i-i-ife?" },
            { time: 56, text: "Where have you been all my life?" },
            { time: 60, text: "I've been everywhere, man, looking for someone" },
            { time: 64, text: "Someone who can please me, love me all night long" },
            { time: 68, text: "I've been everywhere, man, looking for you, babe" },
            { time: 72, text: "Looking for you, babe, searching for you, baby" },
            { time: 76, text: "Where have you been?" },
            { time: 78, text: "'Cause I never see you out" },
            { time: 80, text: "Are you hiding from me? Yeah" },
            { time: 82, text: "Somewhere in the crowd" },
            { time: 84, text: "(Yeah, yeah, yeah, yeah, yeah)" },
            { time: 86, text: "(Yeah-yeah-yeah-yeah-yeah) oh-ooh" },
            { time: 88, text: "(Yeah, yeah, yeah, yeah, yeah)" },
            { time: 90, text: "(Yeah-yeah-yeah-yeah-yeah)" },
            { time: 92, text: "Where have you been" },
            { time: 94, text: "All my life?" },
            { time: 96, text: "All my life, life, life, life?" },
            { time: 98, text: "Where have you been all my li-i-i-i-i-ife?" },
            { time: 102, text: "Where have you been all my li-i-i-i-i-ife?" },
            { time: 106, text: "Where have you been all my li-i-i-i-i-ife?" },
            { time: 110, text: "Where have you been all my li-i-i-i-i-ife?" },
            { time: 114, text: "(Li-i-i-i-ife)" },
            { time: 116, text: "(Where have you been all my li-i-i-i-ife?)" },
            { time: 118, text: "(Y-you)" },
            { time: 120, text: "(Y-you)" },
            { time: 122, text: "(Y-you)" },
            { time: 124, text: "(Y-you)" },
            { time: 126, text: "You can have me all you want" },
            { time: 128, text: "Any way, any day" },
            { time: 130, text: "Just show me where you are tonight" },
            { time: 132, text: "(Yeah, yeah, yeah, yeah, yeah) oh-ooh" },
            { time: 134, text: "(Yeah-yeah-yeah-yeah-yeah) yeah, yeah, yeah" },
            { time: 136, text: "(Yeah, yeah, yeah, yeah, yeah) (oh-oh" },
            { time: 138, text: "(Yeah-yeah-yeah-yeah-yeah)" },
            { time: 140, text: "I've been everywhere, man, looking for someone" },
            { time: 144, text: "Someone who can please me, love me all night long" },
            { time: 148, text: "I've been everywhere, man, looking for you, babe" },
            { time: 152, text: "Looking for you, babe, searching for you, babe" }
        ]
    },
    {
        title: "Starboy",
        artist: "The Weeknd ft. Daft Punk",
        year: "2016",
        lyrics: [
            { time: 0, text: "Starboy (feat. Daft Punk)" },
            { time: 2, text: "(Ayy)" },
            { time: 4, text: "I'm tryna put you in the worst mood, ah" },
            { time: 6, text: "P1 cleaner than your church shoes, ah" },
            { time: 8, text: "Milli' point two just to hurt you, ah" },
            { time: 10, text: "All red Lamb just to tease you, ah" },
            { time: 12, text: "None of these toys on lease too, ah" },
            { time: 14, text: "Made your whole year in a week too, ah" },
            { time: 16, text: "Main bitch outta your league too, ah" },
            { time: 18, text: "Side bitch outta your league too, ah" },
            { time: 20, text: "House so empty, need a centerpiece" },
            { time: 22, text: "Twenty racks a table, cut from ebony" },
            { time: 24, text: "Cut that ivory into skinny pieces" },
            { time: 26, text: "Then she clean it with her face, man, I love my baby, ah" },
            { time: 30, text: "You talkin' money, need a hearin' aid" },
            { time: 32, text: "You talkin' 'bout me, I don't see the shade" },
            { time: 34, text: "Switch up my style, I take any lane" },
            { time: 36, text: "I switch up my cup, I kill any pain" },
            { time: 38, text: "(Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)" },
            { time: 40, text: "Look what you've done" },
            { time: 42, text: "(Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)" },
            { time: 44, text: "I'm a motherfuckin' starboy" },
            { time: 46, text: "(Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)" },
            { time: 48, text: "Look what you've done" },
            { time: 50, text: "(Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)" },
            { time: 52, text: "I'm a motherfuckin' starboy" }
        ]
    },
    {
        title: "We Found Love",
        artist: "Rihanna ft. Calvin Harris",
        year: "2011",
        lyrics: [
            { time: 0, text: "We Found Love (feat. Calvin Harris)" },
            { time: 2, text: "Yellow diamonds in the light" },
            { time: 6, text: "And we're standing side by side" },
            { time: 10, text: "As your shadow crosses mine" },
            { time: 14, text: "What it takes to come alive" },
            { time: 18, text: "It's the way I'm feeling, I just can't deny" },
            { time: 22, text: "But I've gotta let it go" },
            { time: 26, text: "We found love in a hopeless place" },
            { time: 30, text: "We found love in a hopeless place" },
            { time: 34, text: "We found love in a hopeless place" },
            { time: 38, text: "We found love in a hopeless place" }
        ]
    },
    {
        title: "Die For You",
        artist: "The Weeknd",
        year: "2016",
        lyrics: [
            { time: 0, text: "Die For You" },
            { time: 2, text: "I'm findin' ways to articulate the feeling I'm goin' through" },
            { time: 6, text: "I just can't say I don't love you" },
            { time: 8, text: "'Cause I love you, yeah" },
            { time: 10, text: "It's hard for me to communicate the thoughts that I hold" },
            { time: 14, text: "But tonight I'm gon' let you know" },
            { time: 16, text: "Let me tell the truth" },
            { time: 18, text: "Baby, let me tell the truth, yeah" },
            { time: 20, text: "You know what I'm thinkin', see it in your eyes" },
            { time: 24, text: "You hate that you want me, hate it when you cry" },
            { time: 28, text: "You're scared to be lonely, 'specially in the night" },
            { time: 32, text: "I'm scared that I'll miss you, happens every time" }
        ]
    },
    {
        title: "Everyday",
        artist: "Ariana Grande ft. Future",
        year: "2018",
        lyrics: [
            { time: 0, text: "Everyday (feat. Future)" },
            { time: 2, text: "Anytime I'm alone, I can't help thinkin' about you (you)" },
            { time: 6, text: "All I want, all I need, all I see is just me and you (you)" },
            { time: 10, text: "He givin' me that good shit that make me not quit, that good shit (that good shit)" },
            { time: 14, text: "He givin' me that good shit that make me not quit, that good shit" },
            { time: 18, text: "Oh, he give it to me (everyday, everyday, everyday, every)" },
            { time: 22, text: "He give it to me (everyday, everyday, everyday, every)" },
            { time: 26, text: "Oh, he give it to me (everyday, everyday, everyday, every)" },
            { time: 30, text: "He give it to me (everyday, everyday, everyday, every)" }
        ]
    }
];

// Elementos DOM
const passwordScreen = document.getElementById('password-screen');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const passwordError = document.getElementById('password-error');
const typingText = document.getElementById('typing-text');
const card = document.querySelector('.card');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const trackYear = document.getElementById('track-year');
const lyricsEl = document.getElementById('lyrics');
const nextSectionBtn = document.getElementById('next-section-btn');
const likesSection = document.getElementById('likes-section');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de máquina de escribir
    typeWriter("Pues…", 0, typingText);
    
    // Configurar eventos
    passwordSubmit.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
    
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevTrack);
    nextBtn.addEventListener('click', nextTrack);
    nextSectionBtn.addEventListener('click', showNextSection);
    
    // Configurar eventos del reproductor de audio
    audio.addEventListener('loadedmetadata', function() {
        totalTimeEl.textContent = formatTime(audio.duration);
        updateProgressBar();
    });
    
    audio.addEventListener('timeupdate', function() {
        updateProgressBar();
        updateLyrics();
    });
    
    audio.addEventListener('ended', function() {
        nextTrack();
    });
    
    // Cargar la primera canción
    loadTrack(currentTrackIndex);
});

// Función de máquina de escribir
function typeWriter(text, i, element) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i+1) + '<span class="typing-cursor">|</span>';
        setTimeout(function() {
            typeWriter(text, i + 1, element);
        }, 100);
    } else {
        element.innerHTML = text;
    }
}

// Verificar contraseña
function checkPassword() {
    const password = passwordInput.value.trim();
    
    if (password === 'Ferchito') {
        passwordError.textContent = '';
        
        // Animación de salida
        passwordScreen.style.opacity = '0';
        
        setTimeout(function() {
            passwordScreen.classList.add('hidden');
            mainContent.classList.add('show');
            mainContent.classList.remove('hidden');
        }, 500);
    } else {
        passwordError.textContent = 'Contraseña incorrecta. Intenta de nuevo.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Funciones del reproductor de música
function loadTrack(index) {
    // Actualizar información de la pista
    trackTitle.textContent = tracks[index].title;
    trackArtist.textContent = tracks[index].artist;
    trackYear.textContent = tracks[index].year;
    
    // Cargar letras
    lyricsData = tracks[index].lyrics;
    currentLyricIndex = 0;
    displayLyrics();
    
    // Simular carga de audio (en un caso real, aquí cargarías el archivo MP3)
    audio.src = `songs/${tracks[index].title}.mp3`;
    
    // Reiniciar controles
    progress.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    
    // Si estaba reproduciendo, continuar reproduciendo
    if (isPlaying) {
        audio.play();
    }
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = '▶';
    } else {
        audio.play();
        playBtn.textContent = '⏸';
    }
    
    isPlaying = !isPlaying;
}

function prevTrack() {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = tracks.length - 1;
    }
    loadTrack(currentTrackIndex);
    
    if (isPlaying) {
        audio.play();
    }
}

function nextTrack() {
    currentTrackIndex++;
    if (currentTrackIndex >= tracks.length) {
        currentTrackIndex = 0;
    }
    loadTrack(currentTrackIndex);
    
    if (isPlaying) {
        audio.play();
    }
}

function updateProgressBar() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        currentTimeEl.textContent = formatTime(currentTime);
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function displayLyrics() {
    lyricsEl.innerHTML = '';
    
    lyricsData.forEach((lyric, index) => {
        const p = document.createElement('p');
        p.textContent = lyric.text;
        p.id = `lyric-${index}`;
        lyricsEl.appendChild(p);
    });
}

function updateLyrics() {
    const currentTime = audio.currentTime;
    
    // Encontrar la línea actual basada en el tiempo
    let newIndex = 0;
    for (let i = 0; i < lyricsData.length; i++) {
        if (lyricsData[i].time <= currentTime) {
            newIndex = i;
        } else {
            break;
        }
    }
    
    // Actualizar la línea resaltada si ha cambiado
    if (newIndex !== currentLyricIndex) {
        // Quitar resaltado anterior
        const prevLyric = document.getElementById(`lyric-${currentLyricIndex}`);
        if (prevLyric) {
            prevLyric.classList.remove('current-line');
        }
        
        // Aplicar resaltado nuevo
        const currentLyric = document.getElementById(`lyric-${newIndex}`);
        if (currentLyric) {
            currentLyric.classList.add('current-line');
            
            // Desplazar para mantener visible la línea actual
            currentLyric.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
        
        currentLyricIndex = newIndex;
    }
}

function showNextSection() {
    // Detener toda la música
    audio.pause();
    isPlaying = false;
    playBtn.textContent = '▶';
    
    // Ocultar sección actual y mostrar la siguiente
    document.querySelector('.music-player').classList.add('hidden');
    likesSection.classList.remove('hidden');
    
    // Desplazar a la nueva sección
    likesSection.scrollIntoView({
        behavior: 'smooth'
    });
}