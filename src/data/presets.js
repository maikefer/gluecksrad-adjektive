'use strict';

// The wheel used in the game show 'Wheel of Fortune'.
export const PRESET1 = {
  name: 'Gluecksrad der Adjektive',
  winningText: 'Ergebnis: <b>%s</b>',
  background: '',
  removeWinning: false,
  prizes: [
    { name: 'Finde 4 Adjektive für Wasser.', freq: 1, bg: '#D4EFFE', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 3 Adjektive für deine Lehrerin.', freq: 1, bg: '#79AECE', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 4 Adjektive für deine Eltern.', freq: 1, bg: '#659FC3', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 2 Adjektive für den Winter.', freq: 1, bg: '#548bac', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 6 Adjektive für ein Buch.', freq: 1, bg: '#D4EFFE', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 5 Adjektive für die Schule.', freq: 1, bg: '#79AECE', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 3 Adjektive für einen Löwen.', freq: 1, bg: '#659FC3', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 3 Adjektive für dein Klassenzimmer.', freq: 1, bg: '#548bac', text: '#eee', hide: false, fontMod: 1 },
    { name: 'Finde 3 Adjektive für eine Blume.', freq: 1, bg: '#D4EFFE', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 5 Adjektive für das Wetter.', freq: 1, bg: '#79AECE', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 6 Adjektive für ein Auto.', freq: 1, bg: '#659FC3', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 4 Adjektive für den Sommer.', freq: 1, bg: '#548bac', text: '#222', hide: false, fontMod: 1},
    { name: 'Finde 4 Adjektive für einen Baum.', freq: 1, bg: '#D4EFFE', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 6 Adjektive für ein Auto.', freq: 1, bg: '#79AECE', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 3 Adjektive und ihr Gegenteil.', freq: 1, bg: '#659FC3', text: '#222', hide: false, fontMod: 1 },
    { name: 'Finde 4 Adjektive und steigere sie.', freq: 1, bg: '#548bac', text: '#222', hide: false, fontMod: 1 }
  ]
};

// Wheel of Misfortune: SMRT disruption edition.
export const PRESET2 = {
  name: 'Wheel of Verbes',
  winningText: 'Congratulations! You win: <b>%s</b>!',
  background: 'static/smrt.jpg',
  removeWinning: false,
  prizes: [
    { name: 'No Service', freq: 4, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1 },
    { name: 'Tunnel Ponding', freq: 4, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 60 mins', freq: 4, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1 },
    { name: 'Lightning Fault', freq: 4, bg: '#B39DDB', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 10 mins', freq: 4, bg: '#C5E1A5', text: '#222', hide: false, fontMod: 1 },
    { name: 'Track Fault', freq: 4, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 40 mins', freq: 4, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1 },
    { name: 'Full-day Closure', freq: 4, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1 },
    { name: 'Train Fault', freq: 4, bg: 'white', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 20 mins', freq: 4, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1 },
    { name: 'Signal Fault', freq: 4, bg: '#B39DDB', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 10 mins', freq: 4, bg: '#C5E1A5', text: '#222', hide: false, fontMod: 1 },
    { name: 'No Delay', freq: 1, bg: '#111', text: 'white', hide: false, fontMod: 1.4 },
    { name: 'Collision', freq: 2, bg: '#ef9a9a', text: '#222', hide: false, fontMod: 1 },
    { name: 'No Delay', freq: 1, bg: '#111', text: 'white', hide: false, fontMod: 1.4 }
  ]
};

// Wheel of Inquiry: select a person to answer your question.
export const PRESET3 = {
  name: 'Wheel of Hello',
  winningText: 'Your turn to answer the question, <b>%s</b>!',
  background: '',
  removeWinning: true,
  prizes: [
    // use defaults - freq: 4, bg: auto, text: #222, hide: false, fontMod: 1
    { name: 'James' },
    { name: 'John' },
    { name: 'Robert' },
    { name: 'Michael' },
    { name: 'William' },
    { name: 'David' },
    { name: 'Richard' },
    { name: 'Charles' },
    { name: 'Mary' },
    { name: 'Patricia' },
    { name: 'Linda' },
    { name: 'Barbara' },
    { name: 'Elizabeth' },
    { name: 'Jennifer' },
    { name: 'Maria' },
    { name: 'Susan' }
  ]
};

export const DEFAULT_PRESETS = [PRESET1, PRESET2, PRESET3];
