const lyrics = [
    { time: 0, text: "I can't seem to face up to the facts" },
    { time: 5.1, text: "I'm tense and nervous and I can't relax" },
    { time: 10.2, text: "I can't sleep 'cause my bed's on fire" },
    { time: 15.3, text: "Don't touch me, I'm a real live wire" },
    { time: 20.4, text: "Psycho Killer" },
    { time: 23.6, text: "Qu'est-ce que c'est?" },
    { time: 26.5, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 31.5, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 36.9, text: "Psycho Killer" },
    { time: 39.6, text: "Qu'est-ce que c'est?" },
    { time: 42.5, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 47.5, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 52.8, text: "Ay-ya-ya-ya-ya-ya, ooh" },
    { time: 56.8, text: "You start a conversation, you can't even finish it" },
    { time: 61.3, text: "You're talking a lot, but you're not saying anything" },
    { time: 66.1, text: "When I have nothing to say, my lips are sealed" },
    { time: 70.8, text: "Say something once, why say it again?" },
    { time: 75.3, text: "Psycho Killer" },
    { time: 78.1, text: "Qu'est-ce que c'est?" },
    { time: 81.0, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 86.0, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 91.0, text: "Psycho Killer" },
    { time: 93.6, text: "Qu'est-ce que c'est?" },
    { time: 96.5, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 101.5, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 106.5, text: "Ay-ya-ya-ya-ya-ya" },
    { time: 110.0, text: "Ce que j'ai fait, ce soir-là" },
    { time: 114.0, text: "Ce qu'elle a dit, ce soir-là" },
    { time: 118.0, text: "Réalisant mon espoir" },
    { time: 122.0, text: "Je me lance vers la gloire, okay" },
    { time: 126.0, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah" },
    { time: 131.0, text: "We are vain and we are blind" },
    { time: 134.0, text: "I hate people when they're not polite" },
    { time: 137.5, text: "Psycho Killer" },
    { time: 140.0, text: "Qu'est-ce que c'est?" },
    { time: 142.8, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 147.5, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 152.0, text: "Psycho Killer" },
    { time: 154.6, text: "Qu'est-ce que c'est?" },
    { time: 157.5, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 162.5, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 167.0, text: "Ai-ya-ya-ya-ya-ya, ooh" }
];
  
/*
I can't seem to face up to the facts
I'm tense and nervous and I can't relax
I can't sleep 'cause my bed's on fire
Don't touch me, I'm a real live wire
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh-oh-oh
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh, oh, oh, oh
Ay-ya-ya-ya-ya-ya, ooh
You start a conversation, you can't even finish it
You're talking a lot, but you're not saying anything
When I have nothing to say, my lips are sealed
Say something once, why say it again?
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh-oh-oh
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh, oh, oh, oh
Ay-ya-ya-ya-ya-ya
Ce que j'ai fait, ce soir-là
Ce qu'elle a dit, ce soir-là
Réalisant mon espoir
Je me lance vers la gloire, okay
Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah
We are vain and we are blind
I hate people when they're not polite
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh-oh-oh
Psycho Killer
Qu'est-ce que c'est?
Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
Run, run, run, run, run, run, run away, oh, oh, oh, oh
Ai-ya-ya-ya-ya-ya, ooh
*/
let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricElement = document.getElementById("lyric");

audio.addEventListener("play", () => {
setInterval(displayLyrics, 100); // Update lyrics every 100ms for better
accuracy
});
function displayLyrics() {
    const currentTime = audio.currentTime;

// Find the current lyric based on time
if (
    currentLyricIndex < lyrics.length &&
    currentTime >= lyrics[currentLyricIndex].time
) {
    lyricElement.textContent = lyrics[currentLyricIndex].text;
    currentLyricIndex++;
    }
}