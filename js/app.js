/* ══════════════════════════════════════════════════════
   DEVICE DEFINITIONS
   Each device has: id, name, sub, cat, ar (w/h of screen),
   svgFn (function returning SVG string), screenRect (x,y,w,h in SVG coords)
══════════════════════════════════════════════════════ */
const DEVICES = [
  // ═══════════ PHONES ═══════════
  // Each device: vw/vh = SVG canvas; screen = content rect; screenRR = screen corner radius
  // bezel(c): the frame drawn UNDER the media. overlay(): notch/island drawn OVER the media.
  {id:'iphone17pro', name:'iPhone 17 Pro', sub:'Dynamic Island', cat:'phone',
   vw:380, vh:812, screen:{x:16,y:16,w:348,h:780}, screenRR:42,
   bezel:(c)=>`
     <rect x="2" y="2" width="376" height="808" rx="56" fill="#1d1d1f"/>
     <rect x="2" y="2" width="376" height="808" rx="56" fill="none" stroke="#000" stroke-width="2"/>
     <rect x="6" y="6" width="368" height="800" rx="52" fill="#2c2c2e"/>
     <rect x="11" y="11" width="358" height="790" rx="47" fill="#0a0a0a"/>
     <rect x="16" y="16" width="348" height="780" rx="42" fill="${c}"/>
     <rect x="0" y="150" width="3" height="34" rx="1.5" fill="#1a1a1c"/>
     <rect x="0" y="200" width="3" height="58" rx="1.5" fill="#1a1a1c"/>
     <rect x="0" y="272" width="3" height="58" rx="1.5" fill="#1a1a1c"/>
     <rect x="377" y="220" width="3" height="92" rx="1.5" fill="#1a1a1c"/>`,
   overlay:()=>`
     <rect x="138" y="26" width="104" height="30" rx="15" fill="#000"/>
     <circle cx="226" cy="41" r="5.5" fill="#0a0a14"/>
     <circle cx="226" cy="41" r="2.5" fill="#1a1a2e"/>`
  },
  {id:'iphone16promax', name:'iPhone 16 Pro Max', sub:'Dynamic Island', cat:'phone',
   vw:392, vh:812, screen:{x:16,y:16,w:360,h:780}, screenRR:44,
   bezel:(c)=>`
     <rect x="2" y="2" width="388" height="808" rx="56" fill="#1d1d1f"/>
     <rect x="2" y="2" width="388" height="808" rx="56" fill="none" stroke="#000" stroke-width="2"/>
     <rect x="6" y="6" width="380" height="800" rx="52" fill="#2c2c2e"/>
     <rect x="11" y="11" width="370" height="790" rx="48" fill="#0a0a0a"/>
     <rect x="16" y="16" width="360" height="780" rx="44" fill="${c}"/>
     <rect x="0" y="160" width="3" height="34" rx="1.5" fill="#1a1a1c"/>
     <rect x="0" y="210" width="3" height="56" rx="1.5" fill="#1a1a1c"/>
     <rect x="0" y="280" width="3" height="56" rx="1.5" fill="#1a1a1c"/>
     <rect x="389" y="230" width="3" height="88" rx="1.5" fill="#1a1a1c"/>`,
   overlay:()=>`
     <rect x="144" y="26" width="104" height="30" rx="15" fill="#000"/>
     <circle cx="232" cy="41" r="5.5" fill="#0a0a14"/>
     <circle cx="232" cy="41" r="2.5" fill="#1a1a2e"/>`
  },
  {id:'iphone13pro', name:'iPhone 13 Pro', sub:'Notch', cat:'phone',
   vw:380, vh:812, screen:{x:16,y:16,w:348,h:780}, screenRR:44,
   bezel:(c)=>`
     <rect x="2" y="2" width="376" height="808" rx="56" fill="#3a3a40"/>
     <rect x="2" y="2" width="376" height="808" rx="56" fill="none" stroke="#000" stroke-width="2"/>
     <rect x="6" y="6" width="368" height="800" rx="52" fill="#48484f"/>
     <rect x="11" y="11" width="358" height="790" rx="48" fill="#0a0a0a"/>
     <rect x="16" y="16" width="348" height="780" rx="44" fill="${c}"/>
     <rect x="0" y="160" width="3" height="34" rx="1.5" fill="#2a2a30"/>
     <rect x="0" y="210" width="3" height="56" rx="1.5" fill="#2a2a30"/>
     <rect x="0" y="280" width="3" height="56" rx="1.5" fill="#2a2a30"/>
     <rect x="377" y="230" width="3" height="88" rx="1.5" fill="#2a2a30"/>`,
   overlay:()=>`
     <path d="M120 16 h140 v8 a18 18 0 0 1 -18 18 h-104 a18 18 0 0 1 -18 -18 z" fill="#000"/>
     <rect x="170" y="25" width="40" height="6" rx="3" fill="#15151c"/>
     <circle cx="226" cy="28" r="4.5" fill="#0a0a16"/>
     <circle cx="226" cy="28" r="2" fill="#16213e"/>`
  },
  {id:'samsung-s24', name:'Samsung S24 Ultra', sub:'Punch-hole', cat:'phone',
   vw:368, vh:800, screen:{x:11,y:11,w:346,h:778}, screenRR:18,
   bezel:(c)=>`
     <rect x="2" y="2" width="364" height="796" rx="32" fill="#16161a"/>
     <rect x="2" y="2" width="364" height="796" rx="32" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="5" y="5" width="358" height="790" rx="29" fill="#28282e"/>
     <rect x="9" y="9" width="350" height="782" rx="22" fill="#0a0a0a"/>
     <rect x="11" y="11" width="346" height="778" rx="18" fill="${c}"/>
     <rect x="365" y="180" width="3" height="50" rx="1.5" fill="#1a1a1e"/>
     <rect x="365" y="240" width="3" height="90" rx="1.5" fill="#1a1a1e"/>`,
   overlay:()=>`
     <circle cx="184" cy="32" r="8" fill="#000"/>
     <circle cx="184" cy="32" r="4.5" fill="#0a0a16"/>
     <circle cx="184" cy="32" r="2" fill="#16213e"/>`
  },
  {id:'pixel9', name:'Google Pixel 9 Pro', sub:'Punch-hole', cat:'phone',
   vw:368, vh:800, screen:{x:13,y:13,w:342,h:774}, screenRR:30,
   bezel:(c)=>`
     <rect x="2" y="2" width="364" height="796" rx="42" fill="#3a3a40"/>
     <rect x="2" y="2" width="364" height="796" rx="42" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="5" y="5" width="358" height="790" rx="39" fill="#48484f"/>
     <rect x="10" y="10" width="348" height="780" rx="34" fill="#0a0a0a"/>
     <rect x="13" y="13" width="342" height="774" rx="30" fill="${c}"/>
     <rect x="365" y="210" width="3" height="56" rx="1.5" fill="#2a2a30"/>
     <rect x="365" y="276" width="3" height="44" rx="1.5" fill="#2a2a30"/>`,
   overlay:()=>`
     <circle cx="184" cy="34" r="8" fill="#000"/>
     <circle cx="184" cy="34" r="4.5" fill="#0a0a16"/>`
  },

  // ═══════════ TABLETS ═══════════
  {id:'ipad-pro', name:'iPad Pro 13"', sub:'M4 · Face ID', cat:'tablet',
   vw:580, vh:780, screen:{x:22,y:22,w:536,h:736}, screenRR:18,
   bezel:(c)=>`
     <rect x="2" y="2" width="576" height="776" rx="32" fill="#1d1d1f"/>
     <rect x="2" y="2" width="576" height="776" rx="32" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="6" y="6" width="568" height="768" rx="28" fill="#2c2c2e"/>
     <rect x="18" y="18" width="544" height="744" rx="22" fill="#0a0a0a"/>
     <rect x="22" y="22" width="536" height="736" rx="18" fill="${c}"/>`,
   overlay:()=>`<circle cx="290" cy="13" r="3.5" fill="#1a1a1e"/>`
  },
  {id:'ipad-air', name:'iPad Air', sub:'M2 · Touch ID', cat:'tablet',
   vw:560, vh:760, screen:{x:20,y:20,w:520,h:720}, screenRR:14,
   bezel:(c)=>`
     <rect x="2" y="2" width="556" height="756" rx="26" fill="#3a3a40"/>
     <rect x="2" y="2" width="556" height="756" rx="26" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="6" y="6" width="548" height="748" rx="22" fill="#48484f"/>
     <rect x="16" y="16" width="528" height="728" rx="18" fill="#0a0a0a"/>
     <rect x="20" y="20" width="520" height="720" rx="14" fill="${c}"/>`,
   overlay:()=>`<circle cx="280" cy="11" r="3" fill="#2a2a30"/>`
  },
  {id:'samsung-tab', name:'Galaxy Tab S9', sub:'Android Tablet', cat:'tablet',
   vw:780, vh:500, screen:{x:18,y:16,w:744,h:468}, screenRR:12,
   bezel:(c)=>`
     <rect x="2" y="2" width="776" height="496" rx="22" fill="#16161a"/>
     <rect x="2" y="2" width="776" height="496" rx="22" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="6" y="6" width="768" height="488" rx="18" fill="#28282e"/>
     <rect x="14" y="12" width="752" height="476" rx="15" fill="#0a0a0a"/>
     <rect x="18" y="16" width="744" height="468" rx="12" fill="${c}"/>`,
   overlay:()=>`<circle cx="9" cy="250" r="3" fill="#1a1a1e"/>`
  },

  // ═══════════ LAPTOPS ═══════════
  // Laptop: screen on top, hinge/base below. screen rect is the display area.
  {id:'macbook-pro', name:'MacBook Pro 16"', sub:'M4 Pro · Space Black', cat:'laptop',
   vw:900, vh:572, screen:{x:62,y:24,w:776,h:486}, screenRR:6,
   bezel:(c)=>`
     <rect x="40" y="14" width="820" height="506" rx="14" fill="#1a1a1c"/>
     <rect x="40" y="14" width="820" height="506" rx="14" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="48" y="20" width="804" height="494" rx="10" fill="#0a0a0a"/>
     <rect x="62" y="24" width="776" height="486" rx="6" fill="${c}"/>
     <!-- base / keyboard deck -->
     <path d="M8 520 h884 l24 34 a6 6 0 0 1 -6 8 H-10 a6 6 0 0 1 -6 -8 z" fill="#2a2a2c"/>
     <rect x="0" y="520" width="900" height="6" fill="#1a1a1c"/>
     <rect x="380" y="520" width="140" height="9" rx="4" fill="#1a1a1c"/>
     <path d="M380 520 h140 v4 a6 6 0 0 1 -6 6 h-128 a6 6 0 0 1 -6 -6 z" fill="#141416"/>`,
   overlay:()=>`<circle cx="450" cy="34" r="3" fill="#1a1a1e"/>`
  },
  {id:'macbook-air', name:'MacBook Air 15"', sub:'M3 · Midnight', cat:'laptop',
   vw:900, vh:572, screen:{x:58,y:22,w:784,h:490}, screenRR:5,
   bezel:(c)=>`
     <rect x="36" y="12" width="828" height="510" rx="12" fill="#1c1f28"/>
     <rect x="36" y="12" width="828" height="510" rx="12" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="44" y="18" width="812" height="498" rx="9" fill="#0a0a0a"/>
     <rect x="58" y="22" width="784" height="490" rx="5" fill="${c}"/>
     <path d="M6 522 h888 l22 32 a6 6 0 0 1 -6 8 H-10 a6 6 0 0 1 -6 -8 z" fill="#252834"/>
     <rect x="0" y="522" width="900" height="6" fill="#1c1f28"/>
     <path d="M390 522 h120 v4 a5 5 0 0 1 -5 5 h-110 a5 5 0 0 1 -5 -5 z" fill="#15171e"/>`,
   overlay:()=>`<circle cx="450" cy="32" r="2.5" fill="#1a1a1e"/>`
  },
  {id:'macbook-pro-14', name:'MacBook Pro 14"', sub:'M4 · Silver', cat:'laptop',
   vw:880, vh:560, screen:{x:60,y:22,w:760,h:476}, screenRR:5,
   bezel:(c)=>`
     <rect x="38" y="12" width="804" height="496" rx="12" fill="#c8c8cc"/>
     <rect x="38" y="12" width="804" height="496" rx="12" fill="none" stroke="#999" stroke-width="1.5"/>
     <rect x="46" y="18" width="788" height="484" rx="9" fill="#0a0a0a"/>
     <rect x="60" y="22" width="760" height="476" rx="5" fill="${c}"/>
     <path d="M6 508 h868 l20 30 a6 6 0 0 1 -6 8 H-8 a6 6 0 0 1 -6 -8 z" fill="#d4d4d8"/>
     <rect x="0" y="508" width="880" height="6" fill="#c0c0c4"/>
     <path d="M385 508 h110 v4 a5 5 0 0 1 -5 5 h-100 a5 5 0 0 1 -5 -5 z" fill="#b0b0b4"/>`,
   overlay:()=>`<circle cx="440" cy="32" r="2.5" fill="#888"/>`
  },
  {id:'win-laptop', name:'Windows Laptop', sub:'15.6" · 16:9', cat:'laptop',
   vw:900, vh:540, screen:{x:50,y:20,w:800,h:450}, screenRR:3,
   bezel:(c)=>`
     <rect x="28" y="10" width="844" height="470" rx="8" fill="#1a1a1e"/>
     <rect x="28" y="10" width="844" height="470" rx="8" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="38" y="16" width="824" height="458" rx="5" fill="#0a0a0a"/>
     <rect x="50" y="20" width="800" height="450" rx="3" fill="${c}"/>
     <path d="M10 480 h880 l18 28 a5 5 0 0 1 -5 7 H-3 a5 5 0 0 1 -5 -7 z" fill="#222228"/>
     <rect x="0" y="480" width="900" height="6" fill="#1a1a1e"/>
     <path d="M400 480 h100 v3 a4 4 0 0 1 -4 4 h-92 a4 4 0 0 1 -4 -4 z" fill="#15151a"/>`,
   overlay:()=>`<circle cx="450" cy="30" r="2.5" fill="#1a1a1e"/>`
  },

  // ═══════════ DESKTOP ═══════════
  {id:'imac', name:'iMac 24"', sub:'Apple Silicon', cat:'desktop',
   vw:900, vh:624, screen:{x:62,y:28,w:776,h:450}, screenRR:3,
   bezel:(c)=>`
     <!-- body: one rounded panel (screen + chin) -->
     <rect x="40" y="8" width="820" height="540" rx="22" fill="#eceef2"/>
     <rect x="40" y="8" width="820" height="540" rx="22" fill="none" stroke="#d2d4da" stroke-width="1.5"/>
     <!-- black screen frame + screen -->
     <rect x="56" y="22" width="788" height="462" rx="7" fill="#0b0b0d"/>
     <rect x="62" y="28" width="776" height="450" rx="3" fill="${c}"/>
     <!-- chin separation line -->
     <rect x="40" y="546" width="820" height="2" rx="1" fill="#d7d9df"/>
     <!-- thin flat neck -->
     <path d="M418 548 h64 l10 50 h-84 z" fill="#d3d5db"/>
     <path d="M418 548 h64 l3 15 h-70 z" fill="#c4c6cd"/>
     <!-- flat foot -->
     <path d="M348 596 h204 a10 10 0 0 1 10 10 v2 a8 8 0 0 1 -8 8 H346 a8 8 0 0 1 -8 -8 v-2 a10 10 0 0 1 10 -10 z" fill="#cccdd4"/>
     <rect x="346" y="596" width="208" height="4" rx="2" fill="#dfe0e5"/>`,
   overlay:()=>`<circle cx="450" cy="25" r="2.2" fill="#2a2a30"/>`
  },
  {id:'studio-display', name:'Studio Display', sub:'5K Retina', cat:'desktop',
   vw:900, vh:600, screen:{x:18,y:16,w:864,h:486}, screenRR:4,
   bezel:(c)=>`
     <rect x="4" y="4" width="892" height="510" rx="14" fill="#1c1c1e"/>
     <rect x="4" y="4" width="892" height="510" rx="14" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="12" y="10" width="876" height="498" rx="10" fill="#0a0a0a"/>
     <rect x="18" y="16" width="864" height="486" rx="4" fill="${c}"/>
     <!-- stand neck + foot -->
     <rect x="410" y="514" width="80" height="48" fill="#2a2a2c"/>
     <path d="M320 562 h260 a6 6 0 0 1 6 6 v6 a6 6 0 0 1 -6 6 H320 a6 6 0 0 1 -6 -6 v-6 a6 6 0 0 1 6 -6 z" fill="#222224"/>`,
   overlay:()=>`<circle cx="450" cy="30" r="4" fill="#161618"/>`
  },
  {id:'win-monitor', name:'Windows Monitor', sub:'4K IPS · 27"', cat:'desktop',
   vw:900, vh:600, screen:{x:16,y:14,w:868,h:492}, screenRR:2,
   bezel:(c)=>`
     <rect x="2" y="2" width="896" height="512" rx="8" fill="#1a1a1e"/>
     <rect x="2" y="2" width="896" height="512" rx="8" fill="none" stroke="#000" stroke-width="1.5"/>
     <rect x="10" y="8" width="880" height="500" rx="5" fill="#0a0a0a"/>
     <rect x="16" y="14" width="868" height="492" rx="2" fill="${c}"/>
     <rect x="420" y="514" width="60" height="52" fill="#1c1c20"/>
     <path d="M330 566 h240 a4 4 0 0 1 4 4 v8 a4 4 0 0 1 -4 4 H330 a4 4 0 0 1 -4 -4 v-8 a4 4 0 0 1 4 -4 z" fill="#18181c"/>`,
   overlay:()=>`<rect x="436" y="496" width="28" height="6" rx="2" fill="#0a0a0a"/>`
  },
];

/* ── DATA ── */
const RATIOS = {'16:9':[1920,1080],'4:3':[1440,1080],'9:16':[1080,1920]};
let customRatio = [1920,1080];   // px, used when currentRatio === 'custom'
// Returns the chosen output size in pixels
function getTargetSize(){ return (currentRatio==='custom') ? customRatio : RATIOS[currentRatio]; }
const PHOTOS = [
  {id:'photo-1519681393784-d120267933ba',label:'Starry peaks'},
  {id:'photo-1501785888041-af3ef285b470',label:'Alpine lake'},
  {id:'photo-1464822759023-fed622ff2c3b',label:'Mountain water'},
  {id:'photo-1470770841072-f978cf4d019e',label:'Lake cabin'},
  {id:'photo-1506744038136-46273834b3fb',label:'Forest lake'},
  {id:'photo-1433838552652-f9a46b332c40',label:'Balloons sky'},
  {id:'photo-1531366936337-7c912a4589a7',label:'Aurora forest'},
  {id:'photo-1448375240586-882707db888b',label:'Dark forest'},
  {id:'photo-1507525428034-b723cf961d3e',label:'Tropical beach'},
  {id:'photo-1505118380757-91f5f5632de0',label:'Ocean sunset'},
  {id:'photo-1419242902214-272b3f66ee7a',label:'Milky Way'},
  {id:'photo-1500534314209-a25ddb2bd429',label:'Meadow mist'},
  {id:'photo-1446776811953-b23d57bd21aa',label:'Earth from space'},
  {id:'photo-1518020382113-a7e8fc38eac9',label:'Desert dunes'},
  {id:'photo-1426604966848-d7adac402bff',label:'Pine valley'},
  {id:'photo-1469474968028-56623f02e42e',label:'Golden meadow'},
  {id:'photo-1493246507139-91e8fad9978e',label:'Foggy mountain'},
  {id:'photo-1508739773434-c26b3d09e071',label:'Red rocks'},
  {id:'photo-1470770903676-69b98201ea1c',label:'Road ahead'},
  {id:'photo-1501854140801-50d01698950b',label:'Alpine sunrise'},
];
const GRADIENTS = [
  {g:'linear-gradient(135deg,#fbc2eb,#a18cd1)',label:'Cotton candy'},
  {g:'linear-gradient(135deg,#a1c4fd,#c2e9fb)',label:'Sky mist'},
  {g:'linear-gradient(135deg,#ffecd2,#fcb69f)',label:'Peach glow'},
  {g:'linear-gradient(135deg,#c3f4d4,#a8edea)',label:'Mint breeze'},
  {g:'linear-gradient(135deg,#f8ceec,#fda7df,#a29bfe)',label:'Candy dream'},
  {g:'linear-gradient(135deg,#ffd6e7,#ffb3c6,#ff8fab)',label:'Rose bloom'},
  {g:'linear-gradient(135deg,#d4f1f9,#a8dadc,#74b9ff)',label:'Ocean foam'},
  {g:'linear-gradient(135deg,#e0c3fc,#8ec5fc)',label:'Lavender sky'},
  {g:'linear-gradient(135deg,#fff1eb,#ace0f9)',label:'Cloud drift'},
  {g:'linear-gradient(135deg,#fddb92,#d1fdff)',label:'Golden hour'},
  {g:'linear-gradient(135deg,#c1dfc4,#deecdd)',label:'Soft sage'},
  {g:'linear-gradient(135deg,#fccb90,#d57eeb)',label:'Sunset berry'},
  {g:'linear-gradient(135deg,#f953c6,#b91d73)',label:'Hot magenta'},
  {g:'linear-gradient(135deg,#f7971e,#ffd200)',label:'Solar flare'},
  {g:'linear-gradient(135deg,#11998e,#38ef7d)',label:'Neon mint'},
  {g:'linear-gradient(135deg,#4776e6,#8e54e9)',label:'Electric violet'},
  {g:'linear-gradient(135deg,#f02fc2,#6094ea)',label:'Synthwave'},
  {g:'linear-gradient(135deg,#fc4a1a,#f7b733)',label:'Molten'},
  {g:'linear-gradient(135deg,#00c9ff,#92fe9d)',label:'Aqua laser'},
  {g:'linear-gradient(135deg,#e52d27,#b31217)',label:'Red alert'},
];
const SWATCHES = [
  '#0a0a0a','#0d1117','#0f1923','#1c1c1e','#111827','#1a1a2e','#0a0f1e',
  '#1b2838','#0d2137','#1e3a5f','#2c3e50','#1a2744','#0a1a0a','#0f2d0f',
  '#2a0a0a','#1a0a2e','#2e1a00','#1a1a0a','#00141a','#0a001a','#001a0a',
];

/* ── STATE ── */
let currentRatio = '16:9';
let hasMedia = false;
let isVideo = false;
let padPct = 6;
let mediaAR = 16/9;
/* Reposition + zoom state (Option 1: cover-fit + drag + zoom) */
let mediaScale = 1;        // zoom multiplier, 1 = base-fit
const MIN_ZOOM = 0.15;     // allow zooming OUT below fill so tall/long images can shrink to fit
const MAX_ZOOM = 3;
let fitMode = 'cover';     // 'cover' = fill screen edge-to-edge (crop overflow), 'contain' = fit whole image (letterbox)
let mediaOffX = 0;         // horizontal offset in px (screen space), + = move image right
let mediaOffY = 0;         // vertical offset in px
let activeDevice = null; // null = plain frame, else device object
let singleDevice = null; // remembers the single-mode device while in dual mode
let currentCat = 'all';
let selectedFmt = 'png';
let selectedQ = '1080';
let imgScale = 1;          // 1× / 2× / 3× hi-res multiplier for image export
let vidFmt = 'video';      // 'video' (MP4/WebM) or 'gif'
let tiltX = 0, tiltY = 0;  // 3D tilt angles (deg); 0,0 = flat  (single mode)
const TILT_PF = 2.6;       // perspective distance as a multiple of mockup width
let mockOffX = 0, mockOffY = 0;  // whole-mockup drag offset (single mode), preview px
let shadVal = 60, shadX = 0, shadY = 24;  // shadow intensity + offset (single mode)

function onTilt(axis, v){
  v=parseInt(v);
  if(layoutMode==='dual'){
    const s=slots[selectedSlot]; if(!s) return;
    if(axis==='x') s.tiltX=v; else s.tiltY=v;
    document.getElementById(axis==='x'?'vl-tiltx':'vl-tilty').textContent=v+'°';
    const inst=document.querySelectorAll('.device-instance')[selectedSlot];
    if(inst) applyInstanceTransform(inst, selectedSlot);
    return;
  }
  if(axis==='x'){ tiltX=v; document.getElementById('vl-tiltx').textContent=v+'°'; }
  else { tiltY=v; document.getElementById('vl-tilty').textContent=v+'°'; }
  applyMockupTransform();
}
// Per-instance transform (position + 3D tilt) for dual mode
function applyInstanceTransform(inst, i){
  const s=slots[i]; if(!inst) return;
  let tf='translate(calc(-50% + '+s.posX+'px), calc(-50% + '+s.posY+'px))';
  if(s.tiltX||s.tiltY){ const w=inst.querySelector('.inst-wrap'); const ww=(w&&w.offsetWidth)||300; tf+=' perspective('+(TILT_PF*ww)+'px) rotateX('+(s.tiltX||0)+'deg) rotateY('+(s.tiltY||0)+'deg)'; }
  inst.style.transform=tf;
}
// Single source of truth for the mockup's CSS transform: drag offset + 3D tilt.
function applyMockupTransform(){
  const el=document.getElementById('mockup-wrap'); if(!el) return;
  let tf = (mockOffX||mockOffY) ? 'translate('+mockOffX+'px,'+mockOffY+'px)' : '';
  if(tiltX!==0 || tiltY!==0){ const w=el.offsetWidth||600; tf += ' perspective('+(TILT_PF*w)+'px) rotateX('+tiltX+'deg) rotateY('+tiltY+'deg)'; }
  el.style.transform = tf.trim();
}
function applyTilt(){ applyMockupTransform(); }   // back-compat alias
// Texture-mapped triangle (affine). Main export ctx is pre-scaled by S, so
// setTransform (which is absolute) is pre-multiplied by S to stay in device px.
function texTri(ctx, img, S, x0,y0, x1,y1, x2,y2, d0,d1,d2){
  ctx.save();
  ctx.beginPath(); ctx.moveTo(d0[0],d0[1]); ctx.lineTo(d1[0],d1[1]); ctx.lineTo(d2[0],d2[1]); ctx.closePath(); ctx.clip();
  const denom=x0*(y2-y1)-x1*(y2-y0)+x2*(y1-y0);
  if(Math.abs(denom)<1e-6){ ctx.restore(); return; }
  const a=(d0[0]*(y2-y1)-d1[0]*(y2-y0)+d2[0]*(y1-y0))/denom;
  const b=(-d0[0]*(x2-x1)+d1[0]*(x2-x0)-d2[0]*(x1-x0))/denom;
  const c=(d0[1]*(y2-y1)-d1[1]*(y2-y0)+d2[1]*(y1-y0))/denom;
  const d=(-d0[1]*(x2-x1)+d1[1]*(x2-x0)-d2[1]*(x1-x0))/denom;
  const e=d0[0]-a*x0-b*y0, f=d0[1]-c*x0-d*y0;
  ctx.setTransform(a*S,c*S,b*S,d*S,e*S,f*S);
  ctx.drawImage(img,0,0);
  ctx.restore();
}
// Build the flat mockup (device or plain frame) into its own canvas at S resolution.
async function buildMockupOffscreen(S){
  if(activeDevice){
    const dev=activeDevice;
    const gfw=document.getElementById('gadget-frame-wrap');
    const cf=calcFrame();
    const dw=parseInt(gfw.style.width)||cf.w, dh=parseInt(gfw.style.height)||cf.h;
    const mc=document.createElement('canvas'); mc.width=Math.max(1,Math.round(dw*S)); mc.height=Math.max(1,Math.round(dh*S));
    const mx=mc.getContext('2d'); mx.scale(S,S);
    const bezelImg=await svgToImage(tintBezelSVG(dev.bezel('#000'), chassisTint),dev.vw,dev.vh);
    const overlayImg=await svgToImage(dev.overlay(),dev.vw,dev.vh);
    if(bezelImg) mx.drawImage(bezelImg,0,0,dw,dh);
    const sx=dev.screen.x/dev.vw*dw, sy=dev.screen.y/dev.vh*dh, sw=dev.screen.w/dev.vw*dw, sh=dev.screen.h/dev.vh*dh;
    const srr=(dev.screenRR||20)/dev.vw*dw;
    const media=document.getElementById('gadget-img');
    mx.save(); roundRect(mx,sx,sy,sw,sh,srr); mx.clip();
    mx.fillStyle='#000'; mx.fillRect(sx,sy,sw,sh);   // letterbox bg for Fit mode
    const liveScreenW=parseFloat(document.getElementById('gadget-screen').style.width)||sw;
    const dr=coverDrawRect(sx,sy,sw,sh,liveScreenW); mx.drawImage(media,dr.mx,dr.my,dr.mw,dr.mh); drawGlare(mx,sx,sy,sw,sh); mx.restore();
    if(overlayImg) mx.drawImage(overlayImg,0,0,dw,dh);
    return {canvas:mc,w:dw,h:dh};
  } else {
    const cf=calcFrame(); const fw0=cf.w, fh0=cf.h;
    const br=parseFloat(document.getElementById('mockup-frame').style.borderRadius)||14;
    const mc=document.createElement('canvas'); mc.width=Math.max(1,Math.round(fw0*S)); mc.height=Math.max(1,Math.round(fh0*S));
    const mx=mc.getContext('2d'); mx.scale(S,S);
    roundRect(mx,0,0,fw0,fh0,br); mx.fillStyle='#111'; mx.fill();
    const src=document.getElementById('mockup-img');
    mx.save(); roundRect(mx,0,0,fw0,fh0,br); mx.clip();
    const liveScreenW=parseFloat(document.getElementById('mockup-frame').style.width)||fw0;
    const dr=coverDrawRect(0,0,fw0,fh0,liveScreenW); mx.drawImage(src,dr.mx,dr.my,dr.mw,dr.mh); drawGlare(mx,0,0,fw0,fh0); mx.restore();
    mx.save(); roundRect(mx,0,0,fw0,fh0,br); mx.strokeStyle='rgba(255,255,255,0.09)'; mx.lineWidth=1; mx.stroke(); mx.restore();
    return {canvas:mc,w:fw0,h:fh0};
  }
}
// Generic perspective warp of an offscreen mockup centered at (cx,cy) with tilt angles (deg).
function warpMockup(ctx, m, cx, cy, axDeg, ayDeg, S){
  const w=m.w, h=m.h, ax=axDeg*Math.PI/180, ay=ayDeg*Math.PI/180, P=TILT_PF*w;
  const proj=(u,v)=>{
    const lx=(u-0.5)*w, ly=(v-0.5)*h;
    const X=lx*Math.cos(ay), Z=-lx*Math.sin(ay), Y=ly;
    const y2=Y*Math.cos(ax)-Z*Math.sin(ax);
    const z2=Y*Math.sin(ax)+Z*Math.cos(ax);
    const s=P/(P-z2);
    return [cx+X*s, cy+y2*s];
  };
  const c00=proj(0,0),c10=proj(1,0),c11=proj(1,1),c01=proj(0,1);
  ctx.save();
  ctx.shadowColor='rgba(0,0,0,0.5)'; ctx.shadowBlur=70; ctx.shadowOffsetY=28;
  ctx.beginPath(); ctx.moveTo(c00[0],c00[1]); ctx.lineTo(c10[0],c10[1]); ctx.lineTo(c11[0],c11[1]); ctx.lineTo(c01[0],c01[1]); ctx.closePath();
  ctx.fillStyle='rgba(0,0,0,0.001)'; ctx.fill();
  ctx.restore();
  const N=24, src=m.canvas, sw=src.width, sh=src.height;
  for(let i=0;i<N;i++) for(let j=0;j<N;j++){
    const u0=i/N,u1=(i+1)/N,v0=j/N,v1=(j+1)/N;
    const p00=proj(u0,v0),p10=proj(u1,v0),p11=proj(u1,v1),p01=proj(u0,v1);
    const ax0=u0*sw,ax1=u1*sw,ay0=v0*sh,ay1=v1*sh;
    texTri(ctx,src,S, ax0,ay0,ax1,ay0,ax1,ay1, p00,p10,p11);
    texTri(ctx,src,S, ax0,ay0,ax1,ay1,ax0,ay1, p00,p11,p01);
  }
}
// Single-mockup tilt warp (uses the global tilt + drag offset).
function drawTiltedMockup(ctx, m, cW, cH, S){
  warpMockup(ctx, m, cW/2+mockOffX, cH/2+mockOffY, tiltX, tiltY, S);
}

/* switchTopTab removed — left/right sidebar layout replaces tabs */

/* ── DEVICE GRID ── */
function buildDeviceGrid() {
  const grid = document.getElementById('device-grid');
  grid.innerHTML = '';
  const list = currentCat === 'all' ? DEVICES : DEVICES.filter(d=>d.cat===currentCat);
  list.forEach(dev => {
    const card = document.createElement('div');
    card.className = 'device-card' + (activeDevice && activeDevice.id===dev.id ? ' active' : '');
    card.dataset.id = dev.id;
    // Mini SVG preview: bezel with a subtle screen fill + notch overlay
    const pvW = dev.vw >= dev.vh ? 76 : Math.round(76*dev.vw/dev.vh);
    const pvH = Math.round(pvW*dev.vh/dev.vw);
    const previewSVG = `<svg viewBox="0 0 ${dev.vw} ${dev.vh}" width="${pvW}" height="${pvH}" xmlns="http://www.w3.org/2000/svg">${dev.bezel('#3a3a45')}${dev.overlay()}</svg>`;
    card.innerHTML = `<div class="device-preview">${previewSVG}</div><div class="device-name">${dev.name}</div><div class="device-sub">${dev.sub}</div>`;
    card.onclick = () => selectDevice(dev);
    grid.appendChild(card);
  });
  // "None" option first if cat=all or phone
  if(currentCat==='all') {
    const none = document.createElement('div');
    none.className = 'device-card' + (!activeDevice ? ' active' : '');
    none.style.gridColumn = '1/-1';
    none.innerHTML = `<div class="device-name" style="padding:8px 0">No device — plain frame</div>`;
    none.onclick = () => selectDevice(null);
    grid.insertBefore(none, grid.firstChild);
  }
}

function filterCat(pill, cat) {
  document.querySelectorAll('.cat-pill').forEach(p=>p.classList.remove('active'));
  pill.classList.add('active');
  currentCat = cat;
  buildDeviceGrid();
}

function selectDevice(dev) {
  if(layoutMode==='dual'){
    slots[selectedSlot].device = dev;
    activeDevice = dev;
    document.getElementById('st-dev-'+selectedSlot).textContent = dev ? dev.name : 'None';
    buildDeviceGrid();
    renderDualStage();
    return;
  }
  activeDevice = dev;
  mediaOffX = 0; mediaOffY = 0;
  buildDeviceGrid();
  applyDevice();
  if(hasMedia) requestAnimationFrame(applyMediaTransform);
  if(dev && typeof openPanelForTool==='function') openPanelForTool('device');
}

function applyDevice() {
  const plain = document.getElementById('mockup-frame');
  const gadgetWrap = document.getElementById('gadget-frame-wrap');
  const radiusRow = document.getElementById('row-radius');
  const mockupCtrls = document.getElementById('mockup-ctrls');

  if (!activeDevice) {
    plain.style.display = 'flex';
    gadgetWrap.style.display = 'none';
    if (mockupCtrls) mockupCtrls.style.display = 'block';
    if (radiusRow) radiusRow.style.display = 'flex';
    // Restore audio to the plain-frame video
    if (hasMedia && isVideo) {
      const mainVid = document.getElementById('mockup-video');
      const gVid = document.getElementById('gadget-video');
      gVid.muted = true; gVid.pause();
      mainVid.muted = false; mainVid.volume = 1;
      mainVid.currentTime = gVid.currentTime || 0;
      mainVid.play().catch(()=>{ mainVid.muted=true; mainVid.play().catch(()=>{}); });
    }
    sizeFrameToMedia();
    return;
  }

  plain.style.display = 'none';
  gadgetWrap.style.display = 'flex';
  if (mockupCtrls) mockupCtrls.style.display = 'none';
  if (radiusRow) radiusRow.style.display = 'none'; // device controls its own radius

  // Render bezel (under media) and overlay (notch, over media) separately
  const dev = activeDevice;
  const bezelEl = document.getElementById('device-bezel');
  const overlayEl = document.getElementById('device-overlay');
  bezelEl.setAttribute('viewBox', '0 0 '+dev.vw+' '+dev.vh);
  bezelEl.innerHTML = tintBezelSVG(dev.bezel('#000'), chassisTint);         // screen area filled black (under media)
  overlayEl.setAttribute('viewBox', '0 0 '+dev.vw+' '+dev.vh);
  overlayEl.innerHTML = dev.overlay();           // notch / island / camera
  const _ss=document.getElementById('sl-shad'); if(_ss) onShadow(_ss.value);  // sync shadow to the device

  // Transfer already-loaded media to gadget elements
  if (hasMedia) {
    const gsImg = document.getElementById('gadget-img');
    const gsVid = document.getElementById('gadget-video');
    const mainVid = document.getElementById('mockup-video');
    if (isVideo) {
      gsVid.src = mainVid.src; gsVid.style.display='block';
      gsImg.style.display='none';
      // Audio moves to the gadget video; mute & pause the plain one
      mainVid.muted = true; mainVid.pause();
      gsVid.muted = false; gsVid.volume = 1;
      gsVid.currentTime = mainVid.currentTime || 0;
      gsVid.play().catch(()=>{ gsVid.muted=true; gsVid.play().catch(()=>{}); });
    } else {
      const srcImg = document.getElementById('mockup-img');
      gsImg.src = srcImg.src; gsImg.style.display='block';
      gsVid.style.display='none';
    }
    const dzg = document.getElementById('drop-zone-g');
    if(dzg) dzg.style.display='none';
  }

  requestAnimationFrame(sizeGadget);
}

function sizeGadget() {
  if (!activeDevice) return;
  const dev = activeDevice;
  const wrap = document.getElementById('canvas-wrap');
  const cw = parseInt(wrap.style.width) || wrap.clientWidth || 800;
  const ch = parseInt(wrap.style.height) || wrap.clientHeight || 500;
  const p = padPct/100;
  const maxW = cw*(1-p*2), maxH = ch*(1-p*2);
  const devAR = dev.vw/dev.vh;
  let dw=maxW, dh=maxW/devAR;
  if(dh>maxH){dh=maxH;dw=maxH*devAR;}
  dw=Math.round(dw); dh=Math.round(dh);

  // 1. Size the wrap
  const gfw = document.getElementById('gadget-frame-wrap');
  gfw.style.width    = dw + 'px';
  gfw.style.height   = dh + 'px';
  gfw.style.position = 'relative';
  gfw.style.display  = 'block';

  // 2. Bezel SVG: z-index 1 (under media)
  const bezelEl = document.getElementById('device-bezel');
  bezelEl.style.cssText = 'position:absolute;inset:0;width:'+dw+'px;height:'+dh+'px;z-index:1;pointer-events:none;background:transparent;display:block;';
  bezelEl.setAttribute('width', dw);
  bezelEl.setAttribute('height', dh);

  // 3. Screen rect (scaled from native device coords)
  const sx = Math.round(dev.screen.x / dev.vw * dw);
  const sy = Math.round(dev.screen.y / dev.vh * dh);
  const sw = Math.round(dev.screen.w / dev.vw * dw);
  const sh = Math.round(dev.screen.h / dev.vh * dh);
  const rr = Math.round((dev.screenRR||20) / dev.vw * dw);

  // 4. gadget-screen: z-index 2 (media here, above bezel)
  const gs = document.getElementById('gadget-screen');
  gs.style.cssText = 'position:absolute;z-index:2;overflow:hidden;background:#000;'
    + 'left:'+sx+'px;top:'+sy+'px;width:'+sw+'px;height:'+sh+'px;border-radius:'+rr+'px;';

  // 5. Media: ensure absolute positioning; exact size/pos set by applyMediaTransform()
  const gImg = document.getElementById('gadget-img');
  const gVid = document.getElementById('gadget-video');
  [gImg, gVid].forEach(el => { if(el) el.style.position = 'absolute'; });
  if (hasMedia) {
    if (isVideo) { gVid.style.display = 'block'; gImg.style.display = 'none'; }
    else { gImg.style.display = 'block'; gVid.style.display = 'none'; }
  } else {
    gImg.style.display = 'none'; gVid.style.display = 'none';
  }

  // 6. Overlay SVG (notch / island): z-index 3 — ALWAYS on top of media
  const overlayEl = document.getElementById('device-overlay');
  overlayEl.style.cssText = 'position:absolute;inset:0;width:'+dw+'px;height:'+dh+'px;z-index:3;pointer-events:none;background:transparent;display:block;';
  overlayEl.setAttribute('width', dw);
  overlayEl.setAttribute('height', dh);

  // 7. Drop overlay: z-index 4 (above everything when no media)
  const dzo = document.getElementById('drop-zone-g');
  if (dzo) {
    // Clip the drop overlay to just the screen area so it sits inside the device
    dzo.style.cssText = 'position:absolute;z-index:4;display:'+(hasMedia?'none':'flex')
      + ';left:'+sx+'px;top:'+sy+'px;width:'+sw+'px;height:'+sh+'px;border-radius:'+rr+'px;'
      + 'flex-direction:column;align-items:center;justify-content:center;gap:8px;cursor:pointer;'
      + 'background:rgba(0,0,0,0.5);backdrop-filter:blur(2px);';
  }
  if(hasMedia) applyMediaTransform();
}

/* ── CANVAS SIZING ── */
function applyCanvasRatio() {
  const area = document.getElementById('work-area');
  const aw = area.clientWidth-112, ah = area.clientHeight-96;
  if(aw<=0||ah<=0){requestAnimationFrame(applyCanvasRatio);return;}
  const [rw,rh] = (currentRatio==='custom') ? customRatio : RATIOS[currentRatio];
  let w=aw,h=aw*rh/rw;
  if(h>ah){h=ah;w=ah*rw/rh;}
  w=Math.round(w);h=Math.round(h);
  const wrap = document.getElementById('canvas-wrap');
  const prevW=parseFloat(wrap.style.width)||0, prevH=parseFloat(wrap.style.height)||0;
  wrap.style.width=w+'px'; wrap.style.height=h+'px';
  wrap.style.left=Math.round((area.clientWidth-w)/2)+'px';
  wrap.style.top=Math.round((area.clientHeight-h)/2)+'px';
  if(activeDevice) sizeGadget(); else sizeFrameToMedia();
  if(typeof texts!=='undefined' && texts.length && prevW && prevH) repositionTextsOnResize(prevW, prevH, w, h);
  if(typeof overlays!=='undefined' && overlays.length && prevW && prevH) repositionOverlaysOnResize(prevW, prevH, w, h);
  if(typeof currentSafeZone!=='undefined' && currentSafeZone!=='none') setSafeZone(currentSafeZone);
  if((mockOffX||mockOffY) && prevW && prevH){ mockOffX=Math.round(mockOffX*w/prevW); mockOffY=Math.round(mockOffY*h/prevH); }
  if(typeof applyMockupTransform==='function') applyMockupTransform();
}

function sizeFrameToMedia() {
  if(activeDevice){sizeGadget();return;}
  const wrap = document.getElementById('canvas-wrap');
  const cw=parseInt(wrap.style.width)||wrap.clientWidth||800;
  const ch=parseInt(wrap.style.height)||wrap.clientHeight||450;
  const p=padPct/100;
  const maxW=cw*(1-p*2),maxH=ch*(1-p*2);
  let fw=maxW,fh=maxW/mediaAR;
  if(fh>maxH){fh=maxH;fw=maxH*mediaAR;}
  const f=document.getElementById('mockup-frame');
  f.style.width=Math.round(fw)+'px'; f.style.height=Math.round(fh)+'px';
  if(hasMedia) applyMediaTransform();
}

function calcFrame() {
  if(activeDevice){
    const gs=document.getElementById('gadget-screen');
    return {w:parseInt(gs.style.width)||300,h:parseInt(gs.style.height)||200};
  }
  const wrap=document.getElementById('canvas-wrap');
  const cw=parseInt(wrap.style.width)||wrap.clientWidth||800;
  const ch=parseInt(wrap.style.height)||wrap.clientHeight||450;
  const p=padPct/100;
  const maxW=cw*(1-p*2),maxH=ch*(1-p*2);
  let fw=maxW,fh=maxW/mediaAR;
  if(fh>maxH){fh=maxH;fw=maxH*mediaAR;}
  return {w:Math.round(fw),h:Math.round(fh)};
}

function setRatio(btn,ratio){
  document.querySelectorAll('.ratio-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); currentRatio=ratio;
  document.getElementById('custom-ratio-row').style.display='none';
  applyCanvasRatio();
}
function toggleCustomRatio(btn){
  document.querySelectorAll('.ratio-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); currentRatio='custom';
  document.getElementById('custom-ratio-row').style.display='flex';
  applyCustomRatio();
}
function applyCustomRatio(){
  let w=parseFloat(document.getElementById('custom-w').value);
  let h=parseFloat(document.getElementById('custom-h').value);
  if(!w||w<1) w=1; if(!h||h<1) h=1;
  w=Math.min(w,9999); h=Math.min(h,9999);
  customRatio=[w,h];
  if(currentRatio==='custom') applyCanvasRatio();
}
window.addEventListener('resize',applyCanvasRatio);

/* ── SLIDERS ── */
// Paint the accent-fill portion of a range input to its current value (reliable cross-browser).
function paintRange(el){
  const min=parseFloat(el.min)||0, max=parseFloat(el.max)||100, v=parseFloat(el.value);
  const pct = (max>min && !isNaN(v)) ? Math.max(0,Math.min(100,(v-min)/(max-min)*100)) : 50;
  el.style.setProperty('--p', pct.toFixed(1)+'%');
}
function repaintRanges(){ document.querySelectorAll('.slider-row input[type=range]').forEach(paintRange); }

// "Size" (was Padding): higher value → smaller mockup (more breathing room)
function onPad(v){
  v=parseInt(v); document.getElementById('vl-pad').textContent=v+'%';
  if(layoutMode==='dual'){
    const s=slots[selectedSlot]; if(!s) return;
    s.frameScale=Math.max(0.3, Math.min(1.7, 1+(6-v)*0.05));
    const inst=document.querySelectorAll('.device-instance')[selectedSlot];
    if(inst){ sizeInstance(inst, selectedSlot); applyInstanceTransform(inst, selectedSlot); }
    applyShadow();
    return;
  }
  padPct=v; if(activeDevice)sizeGadget();else sizeFrameToMedia();
}
function onRadius(v){document.getElementById('vl-rad').textContent=v+'px';document.getElementById('mockup-frame').style.borderRadius=v+'px';}

// Shadow strings (intensity t in 0..1, offset ox/oy in px)
function shadowFilterStr(t, ox, oy){
  if(t<=0) return 'none';
  const b1=Math.round(10+26*t), a1=(0.22+0.40*t).toFixed(2);
  const b2=Math.round(28+72*t), a2=(0.16+0.32*t).toFixed(2);
  return 'drop-shadow('+ox+'px '+oy+'px '+b1+'px rgba(0,0,0,'+a1+')) drop-shadow('+Math.round(ox*1.3)+'px '+Math.round(oy*1.3)+'px '+b2+'px rgba(0,0,0,'+a2+'))';
}
function shadowBoxStr(t, ox, oy){
  if(t<=0) return '0 0 0 1px rgba(255,255,255,0.09)';
  const a1=(0.45*t).toFixed(2),a2=(0.5*t).toFixed(2),a3=(0.38*t).toFixed(2);
  const b1=Math.round(24+36*t),b2=Math.round(60+60*t),b3=Math.round(120+80*t);
  return '0 0 0 1px rgba(255,255,255,0.09),'+ox+'px '+oy+'px '+b1+'px rgba(0,0,0,'+a1+'),'+Math.round(ox*1.2)+'px '+Math.round(oy*1.2)+'px '+b2+'px rgba(0,0,0,'+a2+'),'+Math.round(ox*1.4)+'px '+Math.round(oy*1.4)+'px '+b3+'px rgba(0,0,0,'+a3+')';
}
function applyShadow(){
  if(layoutMode==='dual'){
    const i=selectedSlot, s=slots[i]; const inst=document.querySelectorAll('.device-instance')[i];
    if(inst){ const w=inst.querySelector('.inst-wrap'); if(w) w.style.filter=shadowFilterStr((s.shadVal||0)/100, s.shadX||0, s.shadY||0); }
    return;
  }
  const t=shadVal/100;
  const f=document.getElementById('mockup-frame'); if(f) f.style.boxShadow=shadowBoxStr(t, shadX, shadY);
  const g=document.getElementById('gadget-frame-wrap'); if(g) g.style.filter=shadowFilterStr(t, shadX, shadY);
}
function onShadow(v){
  v=parseInt(v); const el=document.getElementById('vl-shad'); if(el) el.textContent=v+'%';
  if(layoutMode==='dual'){ if(slots[selectedSlot]) slots[selectedSlot].shadVal=v; } else { shadVal=v; }
  applyShadow();
}
function onShadowOff(axis, v){
  v=parseInt(v); document.getElementById(axis==='x'?'vl-shadx':'vl-shady').textContent=v;
  if(layoutMode==='dual'){ const s=slots[selectedSlot]; if(s){ if(axis==='x')s.shadX=v; else s.shadY=v; } }
  else { if(axis==='x')shadX=v; else shadY=v; }
  applyShadow();
}

/* ── BACKGROUND ── */
let transparentBg = false;
let bgType = 'image';   // 'image' | 'gradient' | 'color' | 'none'
let bgValue = '';       // url for image, css gradient string, or color hex
// remember each tab's last choice so switching tabs re-applies it immediately
let bgImgVal='', bgGradVal='', bgColorVal='#0a0f1e';
function switchBgTab(tab,panel){
  document.querySelectorAll('.bg-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.bg-panel').forEach(p=>p.classList.remove('active'));
  tab.classList.add('active');
  document.getElementById('panel-'+panel).classList.add('active');
  transparentBg = (panel==='none');
  if(transparentBg){
    bgType='none'; bgValue='';
    const el=document.getElementById('canvas-bg');
    el.style.background='transparent';el.style.backgroundImage='none';
    document.getElementById('canvas-bg-clip').style.background='repeating-conic-gradient(#1e1e1e 0% 25%, #151515 0% 50%) 0 0 / 20px 20px';
    return;
  }
  document.getElementById('canvas-bg-clip').style.background='';
  // re-apply this tab's current selection so a background shows right away
  if(panel==='images'){ applyBgImg(bgImgVal || ('https://images.unsplash.com/'+PHOTOS[0].id+'?w=2000&q=88&auto=format&fit=crop')); }
  else if(panel==='gradient'){ applyBgSolid(bgGradVal || GRADIENTS[0].g); }
  else if(panel==='color'){ applyBgSolid(bgColorVal || '#0a0f1e'); }
}
function applyBgImg(url){
  const el=document.getElementById('canvas-bg');
  el.style.background='';el.style.backgroundImage='url('+url+')';
  el.style.backgroundSize='cover';el.style.backgroundPosition='center';el.style.backgroundRepeat='no-repeat';
  bgType='image'; bgValue=url; bgImgVal=url; transparentBg=false;
}
function applyBgSolid(val){
  const el=document.getElementById('canvas-bg');
  el.style.backgroundImage='';el.style.background=val;
  const isGrad=/gradient/i.test(val);
  bgType = isGrad ? 'gradient' : 'color';
  bgValue = val; transparentBg=false;
  if(isGrad) bgGradVal=val; else bgColorVal=val;
}
// Custom gradient maker
function toggleGradMaker(){ const m=document.getElementById('grad-maker'); if(m){ const show=m.style.display==='none'; m.style.display=show?'block':'none'; if(show) onGradMaker(); } }
function onGradMaker(){
  const c1=document.getElementById('grad-c1').value, c2=document.getElementById('grad-c2').value, a=document.getElementById('grad-angle').value;
  document.getElementById('vl-grad-angle').textContent=a+'°';
  document.querySelectorAll('.grad-sw').forEach(s=>s.classList.remove('active'));
  applyBgSolid('linear-gradient('+a+'deg, '+c1+', '+c2+')');
}
function onBlur(v){document.getElementById('vl-blur').textContent=v+'px';document.getElementById('canvas-bg').style.filter=v>0?'blur('+v+'px)':'';}
function onBgSize(v){
  document.getElementById('vl-bgz').textContent=v+'%';
  document.getElementById('canvas-wrap').style.transform='scale('+v/100+')';
}
function buildImgGrid(){
  const grid=document.getElementById('img-grid');
  PHOTOS.forEach((p,i)=>{
    const tu='https://images.unsplash.com/'+p.id+'?w=500&q=72&auto=format&fit=crop';
    const fu='https://images.unsplash.com/'+p.id+'?w=2000&q=88&auto=format&fit=crop';
    const div=document.createElement('div');
    div.className='img-thumb'+(i===0?' active':'');
    div.innerHTML='<img src="'+tu+'" loading="lazy" alt="'+p.label+'"><div class="tlbl">'+p.label+'</div><div class="chk"><svg viewBox="0 0 12 10" fill="none" stroke="#fff" stroke-width="2"><polyline points="1 5 4.5 8.5 11 1"/></svg></div>';
    div.onclick=()=>{document.querySelectorAll('.img-thumb').forEach(t=>t.classList.remove('active'));div.classList.add('active');applyBgImg(fu);};
    grid.appendChild(div);
  });
  applyBgImg('https://images.unsplash.com/'+PHOTOS[0].id+'?w=2000&q=88&auto=format&fit=crop');
}
function buildGradGrid(){
  const grid=document.getElementById('grad-grid');
  GRADIENTS.forEach((item,i)=>{
    const div=document.createElement('div');
    div.className='grad-sw'+(i===0?' active':'');
    div.style.background=item.g;div.title=item.label;
    div.onclick=()=>{document.querySelectorAll('.grad-sw').forEach(s=>s.classList.remove('active'));div.classList.add('active');applyBgSolid(item.g);};
    grid.appendChild(div);
  });
}
function buildSolidSws(){
  const cont=document.getElementById('solid-sws');
  SWATCHES.forEach(c=>{
    const div=document.createElement('div');
    div.className='solid-sw';div.style.background=c;
    div.onclick=()=>{document.querySelectorAll('.solid-sw').forEach(s=>s.classList.remove('active'));div.classList.add('active');document.getElementById('color-pick').value=c;document.getElementById('hex-in').value=c;applyBgSolid(c);};
    cont.appendChild(div);
  });
}
function onColorPick(v){document.getElementById('hex-in').value=v;applyBgSolid(v);document.querySelectorAll('.solid-sw').forEach(s=>s.classList.remove('active'));}
function onHex(v){if(/^#[0-9a-fA-F]{6}$/.test(v)){document.getElementById('color-pick').value=v;applyBgSolid(v);document.querySelectorAll('.solid-sw').forEach(s=>s.classList.remove('active'));}}

/* ══════════════════════════════════════════════════════
   REPOSITION + ZOOM ENGINE (Option 1: cover-fit + drag + zoom)
   - mediaScale: zoom (1 = exact cover)
   - mediaOffX/Y: pan offset in screen pixels
   The SAME math is applied in export so download matches preview.
══════════════════════════════════════════════════════ */

// Returns the active screen rect {w,h} in CSS pixels
function activeScreenSize(){
  if(activeDevice){
    const gs=document.getElementById('gadget-screen');
    return {w: parseFloat(gs.style.width)||300, h: parseFloat(gs.style.height)||200};
  }
  const f=document.getElementById('mockup-frame');
  return {w: parseFloat(f.style.width)||400, h: parseFloat(f.style.height)||300};
}

// Cover-fit base: how the image fills the screen at scale=1 (object-fit:cover)
// Returns the displayed media size that covers the screen.
function coverSize(screenW, screenH){
  const scrAR = screenW/screenH;
  let w,h;
  if(fitMode==='contain'){
    // FIT WHOLE: shrink so the entire image is visible inside the screen (letterbox)
    if(mediaAR > scrAR){ w=screenW; h=screenW/mediaAR; }  // image wider → match width
    else { h=screenH; w=screenH*mediaAR; }                 // image taller → match height
  } else {
    // FILL: enlarge so image covers the screen (crop overflow)
    if(mediaAR > scrAR){ h=screenH; w=screenH*mediaAR; }  // image wider → match height
    else { w=screenW; h=screenW/mediaAR; }                 // image taller → match width
  }
  return {w,h};
}

// Clamp offsets so you can never drag past the image edges (no empty gaps)
function clampOffsets(){
  const {w:sw,h:sh}=activeScreenSize();
  const base=coverSize(sw,sh);
  const dispW=base.w*mediaScale, dispH=base.h*mediaScale;
  const maxX=Math.max(0,(dispW-sw)/2);
  const maxY=Math.max(0,(dispH-sh)/2);
  mediaOffX=Math.max(-maxX, Math.min(maxX, mediaOffX));
  mediaOffY=Math.max(-maxY, Math.min(maxY, mediaOffY));
}

// Apply pan/zoom by SIZING the media to its true cover dimensions and
// positioning it absolutely. This reveals real image content when dragging
// (no gaps), and the edges are hard-clamped so it never overflows into a gap.
function positionMediaIn(el, sw, sh){
  if(!el) return;
  const base = coverSize(sw, sh);
  const dispW = base.w * mediaScale;
  const dispH = base.h * mediaScale;
  // centered + offset (offsets already clamped by caller)
  const left = (sw - dispW)/2 + mediaOffX;
  const top  = (sh - dispH)/2 + mediaOffY;
  // override the CSS 100%/inset:0/cover with explicit pixel box (aspect preserved → no distortion)
  el.style.inset = 'auto';
  el.style.left = left + 'px';
  el.style.top = top + 'px';
  el.style.width = dispW + 'px';
  el.style.height = dispH + 'px';
  el.style.objectFit = 'fill';   // box already matches image aspect, so fill = no distortion
  el.style.transform = 'none';
}

function applyMediaTransform(){
  if(!hasMedia) return;
  clampOffsets();
  const {w:sw,h:sh} = activeScreenSize();
  const ids = activeDevice ? ['gadget-img','gadget-video'] : ['mockup-img','mockup-video'];
  ids.forEach(id=>{ positionMediaIn(document.getElementById(id), sw, sh); });
  // keep the off-screen duplicate sized too (using the OTHER frame's screen size)
  const otherSize = activeDevice
    ? { w: parseFloat(document.getElementById('mockup-frame').style.width)||sw,
        h: parseFloat(document.getElementById('mockup-frame').style.height)||sh }
    : (function(){ const gs=document.getElementById('gadget-screen');
        return { w: parseFloat(gs.style.width)||sw, h: parseFloat(gs.style.height)||sh }; })();
  const others = activeDevice ? ['mockup-img','mockup-video'] : ['gadget-img','gadget-video'];
  others.forEach(id=>{ positionMediaIn(document.getElementById(id), otherSize.w, otherSize.h); });
  // update zoom slider readout
  const zv=document.getElementById('vl-zoom'); if(zv) zv.textContent=Math.round(mediaScale*100)+'%';
  const zs=document.getElementById('sl-zoom'); if(zs && parseFloat(zs.value)!==mediaScale) zs.value=mediaScale;
}

function resetMediaTransform(){ mediaScale=1; mediaOffX=0; mediaOffY=0; mockOffX=0; mockOffY=0; applyMediaTransform(); applyMockupTransform(); }

// Force cover-fill and sync the toggle UI. Called on every new upload so images
// always fill the frame edge-to-edge (Photoshop-style), no manual zoom/drag needed.
function resetFitToCover(){
  fitMode='cover';
  document.querySelectorAll('#fit-toggle .wt-opt').forEach(b=>b.classList.toggle('active', b.dataset.fit==='cover'));
}

// Fit whole (contain) vs Fill screen (cover). Resets pan/zoom so the new fit is clean.
function onFitMode(mode){
  fitMode = (mode==='cover') ? 'cover' : 'contain';
  document.querySelectorAll('#fit-toggle .wt-opt').forEach(b=>b.classList.toggle('active', b.dataset.fit===fitMode));
  mediaScale=1; mediaOffX=0; mediaOffY=0;
  if(layoutMode==='dual'){
    slots.forEach(s=>{ s.scale=1; });
    document.querySelectorAll('.device-instance').forEach((inst,idx)=>sizeInstance(inst, idx));
    const zs=document.getElementById('sl-zoom'); if(zs) zs.value=1;
    const zv=document.getElementById('vl-zoom'); if(zv) zv.textContent='100%';
  } else {
    applyMediaTransform();
  }
}

function onZoom(v){
  if(layoutMode==='dual'){
    slots[selectedSlot].scale=parseFloat(v);
    document.getElementById('vl-zoom').textContent=Math.round(parseFloat(v)*100)+'%';
    const inst=document.querySelectorAll('.device-instance')[selectedSlot];
    if(inst) sizeInstance(inst, selectedSlot);
    return;
  }
  mediaScale=parseFloat(v); applyMediaTransform();
}

// Distance between two active touch points (for pinch-zoom)
function touchDist(touches){
  const dx=touches[0].clientX-touches[1].clientX, dy=touches[0].clientY-touches[1].clientY;
  return Math.hypot(dx,dy);
}

// Set single-mode image zoom (clamped) and re-render + sync the slider readout
function setMediaZoom(v){
  if(!hasMedia) return;
  mediaScale = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, v));
  applyMediaTransform();
}

/* ── MEDIA ── */
function syncMediaToActiveFrame(src, type) {
  const img=document.getElementById('mockup-img'),vid=document.getElementById('mockup-video');
  const gImg=document.getElementById('gadget-img'),gVid=document.getElementById('gadget-video');
  // Hide drop zones on both plain and gadget frame
  const dz=document.getElementById('drop-zone');
  const dzg=document.getElementById('drop-zone-g');
  if(dz) dz.style.display='none';
  if(dzg) dzg.style.display='none';
  img.style.display='none'; vid.style.display='none';
  gImg.style.display='none'; gVid.style.display='none';
  if(type==='video'){
    vid.src=src; gVid.src=src;
    // The element shown in the ACTIVE frame plays with sound; the hidden one is muted.
    if(activeDevice){
      gVid.style.display='block'; gVid.muted=false; gVid.volume=1;
      vid.style.display='none';   vid.muted=true;
      gVid.play().catch(()=>{ gVid.muted=true; gVid.play().catch(()=>{}); });
    } else {
      vid.style.display='block';  vid.muted=false; vid.volume=1;
      gVid.style.display='none';  gVid.muted=true;
      vid.play().catch(()=>{ vid.muted=true; vid.play().catch(()=>{}); });
    }
  } else {
    img.src=src; img.style.display='block';
    gImg.src=src; gImg.style.display='block';
  }
}

// ── UPLOAD GUARDRAILS ──────────────────────────────────────────────
// Friendly transient warning toast (no spinner) — reuses the export-notice element.
function flashToast(text, ms){
  showExportNotice(text);
  const el=document.getElementById('export-notice');
  if(el){
    el.innerHTML='<span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;'
      +'border-radius:50%;background:#f97316;color:#fff;font-weight:700;font-size:12px;line-height:1;">!</span>'
      +'<span>'+text+'</span>';
  }
  setTimeout(hideExportNotice, ms||2800);
}
// Reject wrong-type or oversized files before we ever read them (prevents silent tab hangs).
const MAX_IMG_MB=25, MAX_VID_MB=100;
function validateUpload(file, kind){
  if(!file) return false;
  const isImg=file.type.startsWith('image/'), isVid=file.type.startsWith('video/');
  if(kind==='image' && !isImg){ flashToast('Please choose an image file.'); return false; }
  if(kind==='media' && !isImg && !isVid){ flashToast('Please choose an image or video file.'); return false; }
  const capMB = isVid ? MAX_VID_MB : MAX_IMG_MB;
  if(file.size > capMB*1024*1024){ flashToast('That file is too large (max '+capMB+' MB).'); return false; }
  return true;
}

function showMedia(file){
  if(!validateUpload(file,'media')) return;
  if(layoutMode==='dual'){ showMediaDual(file, activeFileSlot); return; }
  resetFitToCover();   // new image always starts filled edge-to-edge
  isVideo=file.type.startsWith('video/');
  if(isVideo){
    const url=URL.createObjectURL(file);
    // Set the real video elements immediately and let THEIR loadedmetadata drive the fit.
    // (refitVideoFrom listeners recompute mediaAR + re-fit as soon as dimensions are known.)
    mediaScale=1; mediaOffX=0; mediaOffY=0;
    syncMediaToActiveFrame(url,'video');
    // Initial layout so the frame shows right away; final fit comes from loadedmetadata.
    if(activeDevice) requestAnimationFrame(()=>{sizeGadget();applyMediaTransform();}); else {sizeFrameToMedia();applyMediaTransform();}
    // Belt-and-suspenders: re-fit a few frames until the video reports real dimensions,
    // then stop (the loadedmetadata listener does the authoritative fit).
    let tries=0;
    const settle=()=>{
      const av=document.getElementById(activeDevice?'gadget-video':'mockup-video');
      const ready = av && av.videoWidth>0 && av.videoHeight>0;
      if(ready){
        const ar=av.videoWidth/av.videoHeight;
        if(ar && isFinite(ar)) mediaAR=ar;
      }
      if(activeDevice){ sizeGadget(); } else { sizeFrameToMedia(); }
      applyMediaTransform();
      // stop once dimensions are known and applied, or after ~1.5s safety cap
      if(ready || tries++>25) return;
      setTimeout(settle, 60);
    };
    setTimeout(settle, 40);
  } else {
    const r=new FileReader();
    r.onload=ev=>{
      const tmp=new Image();
      tmp.onload=()=>{
        mediaAR=tmp.naturalWidth/tmp.naturalHeight;
        resetMediaTransform();
        syncMediaToActiveFrame(ev.target.result,'image');
        if(activeDevice) requestAnimationFrame(()=>{sizeGadget();applyMediaTransform();}); else {sizeFrameToMedia();applyMediaTransform();}
      };
      tmp.src=ev.target.result;
    };
    r.readAsDataURL(file);
  }
  hasMedia=true;
  document.getElementById('dl-btn').disabled=false;
  document.getElementById('clear-btn').style.display='flex';
  { const _cb=document.getElementById('change-btn'); if(_cb) _cb.style.display='flex'; }
  const zr=document.getElementById('zoom-row'); if(zr) zr.style.display='flex';
  const fr=document.getElementById('fit-row'); if(fr) fr.style.display='flex';
  const rb=document.getElementById('reset-pos-btn'); if(rb) rb.style.display='flex';
  // enable drag/zoom on whichever frame is active
  document.getElementById('mockup-inner')?.classList.add('repositionable');
  document.getElementById('gadget-screen')?.classList.add('repositionable');
}

function showMediaDual(file, i){
  resetFitToCover();   // new image always starts filled edge-to-edge
  const isVid = file.type.startsWith('video/');
  const url = URL.createObjectURL(file);
  if(isVid){
    const tmp=document.createElement('video'); tmp.src=url;
    tmp.onloadedmetadata=()=>{
      slots[i].ar = (tmp.videoWidth/tmp.videoHeight)||(16/9);
      slots[i].src=url; slots[i].type='video'; slots[i].hasMedia=true; slots[i].scale=1;
      renderDualStage();
      selectSlot(i);
      document.getElementById('dl-btn').disabled=false;
    };
    tmp.load();
  } else {
    const r=new FileReader();
    r.onload=ev=>{
      const im=new Image();
      im.onload=()=>{
        slots[i].ar=(im.naturalWidth/im.naturalHeight)||(16/9);
        slots[i].src=ev.target.result; slots[i].type='image'; slots[i].hasMedia=true; slots[i].scale=1;
        renderDualStage();
        selectSlot(i);
        document.getElementById('dl-btn').disabled=false;
      };
      im.src=ev.target.result;
    };
    r.readAsDataURL(file);
  }
  document.getElementById('clear-btn').style.display='flex';
  { const _cb=document.getElementById('change-btn'); if(_cb) _cb.style.display='flex'; }
}

function clearMedia(){
  // ── DUAL MODE: clear media from BOTH slots ──
  if(typeof layoutMode!=='undefined' && layoutMode==='dual'){
    slots.forEach(s=>{ s.src=null; s.type=null; s.hasMedia=false; s.scale=1; s.ar=16/9; });
    renderDualStage();
    selectSlot(selectedSlot);   // refresh tab label + zoom row visibility
    document.getElementById('dl-btn').disabled = true;
    document.getElementById('clear-btn').style.display = 'none';
    document.getElementById('hf').value='';
    return;
  }

  // ── SINGLE MODE ──
  hasMedia=false;isVideo=false;mediaAR=16/9;
  mediaScale=1;mediaOffX=0;mediaOffY=0;
  const zr=document.getElementById('zoom-row'); if(zr) zr.style.display='none';
  const fr=document.getElementById('fit-row'); if(fr) fr.style.display='none';
  const rb=document.getElementById('reset-pos-btn'); if(rb) rb.style.display='none';
  ['mockup-img','gadget-img'].forEach(id=>{const e=document.getElementById(id);if(e){e.src='';e.removeAttribute('src');e.style.display='none';}});
  ['mockup-video','gadget-video'].forEach(id=>{const e=document.getElementById(id);if(e){try{e.pause();}catch(_){} e.src='';e.removeAttribute('src');e.load&&e.load();e.style.display='none';}});
  // Show plain frame drop zone
  const dz=document.getElementById('drop-zone');
  if(dz) dz.style.display='flex';
  // Show gadget drop overlay; re-run sizeGadget so it's clipped/positioned correctly
  const dzg=document.getElementById('drop-zone-g');
  if(dzg) dzg.style.display='flex';
  if(activeDevice) sizeGadget();
  document.getElementById('dl-btn').disabled=true;
  document.getElementById('clear-btn').style.display='none';
  { const _cb=document.getElementById('change-btn'); if(_cb) _cb.style.display='none'; }
  document.getElementById('hf').value='';
}

document.getElementById('hf').addEventListener('change',function(e){const f=e.target.files[0];if(f)showMedia(f);this.value='';});
document.getElementById('hbf').addEventListener('change',function(e){
  const f=e.target.files[0];if(!validateUpload(f,'image')){this.value='';return;}
  applyBgImg(URL.createObjectURL(f));
  document.querySelectorAll('.img-thumb').forEach(t=>t.classList.remove('active'));
});

/* Drag + drop */
// Plain frame
(()=>{
  const frm=document.getElementById('mockup-frame');
  const dz=document.getElementById('drop-zone');
  if(!frm)return;
  ['dragenter','dragover'].forEach(e=>frm.addEventListener(e,ev=>{ev.preventDefault();if(dz)dz.classList.add('drag-over');}));
  ['dragleave','drop'].forEach(e=>frm.addEventListener(e,()=>{if(dz)dz.classList.remove('drag-over');}));
  frm.addEventListener('drop',e=>{e.preventDefault();const f=e.dataTransfer.files[0];if(f)showMedia(f);});
})();
// Gadget frame — drag over gadget-frame-wrap, highlight overlay
(()=>{
  const frm=document.getElementById('gadget-frame-wrap');
  const dz=document.getElementById('drop-zone-g');
  if(!frm)return;
  ['dragenter','dragover'].forEach(e=>frm.addEventListener(e,ev=>{ev.preventDefault();if(dz)dz.classList.add('drag-over');}));
  ['dragleave','drop'].forEach(e=>frm.addEventListener(e,()=>{if(dz)dz.classList.remove('drag-over');}));
  frm.addEventListener('drop',e=>{e.preventDefault();const f=e.dataTransfer.files[0];if(f)showMedia(f);});
})();

/* ── MODALS ── */
function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}
function selectFmt(fmt){selectedFmt=fmt;['png','jpg','webp'].forEach(f=>document.getElementById('fmt-'+f).classList.toggle('selected',f===fmt));}
function selectImgScale(s){
  imgScale=s;
  document.querySelectorAll('#scale-toggle .wt-opt').forEach(b=>b.classList.toggle('active', parseInt(b.dataset.s)===s));
  refreshScaleDim();
}
function refreshScaleDim(){
  const el=document.getElementById('scale-dim'); if(!el) return;
  const [w,h]=getTargetSize();
  el.textContent='Exports at '+(w*imgScale)+' × '+(h*imgScale)+' px';
}
function selectQ(q){selectedQ=q;['720','1080','1440','4k'].forEach(x=>document.getElementById('q-'+x).classList.toggle('selected',x===q));}
function selectVidFmt(f){
  vidFmt=f;
  document.querySelectorAll('#vidfmt-toggle .wt-opt').forEach(b=>b.classList.toggle('active', b.dataset.vf===f));
  document.getElementById('vid-qual-block').style.display = (f==='gif') ? 'none' : 'block';
  document.getElementById('vid-gif-note').style.display = (f==='gif') ? 'block' : 'none';
}
function doExport(){
  if(layoutMode==='dual'){
    const any = slots.some(s=>s.hasMedia);
    if(!any) return;
    const anyVid = slots.some(s=>s.hasMedia && s.type==='video');
    if(anyVid) openModal('vid-modal'); else { openModal('img-modal'); refreshScaleDim(); }
    return;
  }
  if(!hasMedia)return;
  if(isVideo){ openModal('vid-modal'); const tn=document.getElementById('vid-tilt-note'); if(tn) tn.style.display=(tiltX!==0||tiltY!==0)?'block':'none'; }
  else { openModal('img-modal'); refreshScaleDim(); }
}

/* ── DOWNLOAD NOTICE (toast) ── */
function showExportNotice(text){
  let el=document.getElementById('export-notice');
  if(!el){
    el=document.createElement('div');
    el.id='export-notice';
    el.style.cssText='position:fixed;left:50%;bottom:32px;transform:translateX(-50%);z-index:200;'
      +'display:flex;align-items:center;gap:12px;padding:14px 22px;border-radius:14px;'
      +'background:#18181b;border:1px solid rgba(255,255,255,0.12);color:#f0f0f0;'
      +'font-family:inherit;font-size:13px;font-weight:500;box-shadow:0 12px 40px rgba(0,0,0,0.5);'
      +'transition:opacity .2s, transform .2s;';
    document.body.appendChild(el);
  }
  el.innerHTML='<span style="display:inline-block;width:16px;height:16px;border:2px solid rgba(249,115,22,0.35);'
    +'border-top-color:#f97316;border-radius:50%;animation:expSpin .7s linear infinite"></span>'
    +'<span id="export-notice-text">'+text+'</span>';
  el.style.opacity='1'; el.style.pointerEvents='none';
  // ensure spinner keyframes exist
  if(!document.getElementById('exp-spin-style')){
    const s=document.createElement('style'); s.id='exp-spin-style';
    s.textContent='@keyframes expSpin{to{transform:rotate(360deg)}}';
    document.head.appendChild(s);
  }
}
function updateExportNotice(text){
  const t=document.getElementById('export-notice-text');
  if(t) t.textContent=text;
}
function showExportDone(text){
  const el=document.getElementById('export-notice');
  if(!el) return;
  el.innerHTML='<span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;'
    +'border-radius:50%;background:#22c55e;"><svg width="11" height="11" viewBox="0 0 12 10" fill="none" '
    +'stroke="#fff" stroke-width="2.2"><polyline points="1 5 4.5 8.5 11 1"/></svg></span>'
    +'<span>'+(text||'Download ready')+'</span>';
  setTimeout(()=>hideExportNotice(), 2200);
}
function hideExportNotice(){
  const el=document.getElementById('export-notice');
  if(!el) return;
  el.style.opacity='0'; el.style.transform='translateX(-50%) translateY(8px)';
  setTimeout(()=>{ if(el) el.remove(); }, 250);
}

/* ── EXPORT BACKGROUND PAINTER (image / gradient / color / none) ── */
// Parses our 'linear-gradient(ANGLEdeg, c1, c2, ...)' strings into canvas gradient stops.
function parseGradientColors(str){
  // grab the part inside the parentheses after the angle
  const inner = str.substring(str.indexOf('(')+1, str.lastIndexOf(')'));
  const parts = inner.split(',').map(s=>s.trim());
  // drop a leading angle token like '135deg'
  if(/deg|turn|rad|to /i.test(parts[0])) parts.shift();
  return parts.filter(Boolean);
}
function paintExportBackground(ctx, w, h, blurPx, bgImg){
  if(bgType==='none'){ return; } // leave transparent
  if(bgType==='image'){
    if(bgImg && bgImg.naturalWidth){
      // COVER-fit the background (preserve aspect, crop overflow) — matches CSS background-size:cover
      const iAR = bgImg.naturalWidth/bgImg.naturalHeight;
      const cAR = w/h;
      let dw,dh,dx,dy;
      if(iAR > cAR){ dh=h; dw=h*iAR; dx=(w-dw)/2; dy=0; }   // image wider → match height
      else { dw=w; dh=w/iAR; dx=0; dy=(h-dh)/2; }            // image taller → match width
      if(blurPx>0){
        // expand a little so blurred edges don't reveal gaps
        const ex=blurPx*2;
        ctx.save(); ctx.filter='blur('+blurPx+'px)';
        ctx.drawImage(bgImg, dx-ex, dy-ex, dw+ex*2, dh+ex*2);
        ctx.filter='none'; ctx.restore();
      } else {
        ctx.drawImage(bgImg, dx, dy, dw, dh);
      }
    } else { ctx.fillStyle='#1a1a2e'; ctx.fillRect(0,0,w,h); }
    return;
  }
  if(bgType==='gradient'){
    const cols=parseGradientColors(bgValue);
    const g=ctx.createLinearGradient(0,0,w,h); // 135deg ≈ top-left → bottom-right
    if(cols.length===1){ ctx.fillStyle=cols[0]; ctx.fillRect(0,0,w,h); return; }
    cols.forEach((col,i)=>{ g.addColorStop(i/(cols.length-1), col); });
    ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
    return;
  }
  // solid color
  ctx.fillStyle = bgValue || '#1a1a2e';
  ctx.fillRect(0,0,w,h);
}

/* ── DUAL VIDEO EXPORT ── */
async function confirmVidExportDual(){
  showExportNotice('Rendering your video...');
  const wrap=document.getElementById('canvas-wrap');
  const cW=parseInt(wrap.style.width)||wrap.clientWidth;
  const cH=parseInt(wrap.style.height)||wrap.clientHeight;
  // Scale so the longest edge hits the chosen tier (720/1080/2K/4K)
  const TARGET_LONG={'720':1280,'1080':1920,'1440':2560,'4k':3840}[selectedQ]||1920;
  const QMBPS={'720':10,'1080':22,'1440':45,'4k':90}[selectedQ]||22;
  const scale=Math.min(Math.max(TARGET_LONG/Math.max(cW,cH), 1), 6);
  const outW=Math.round(cW*scale), outH=Math.round(cH*scale);
  const cvs=document.createElement('canvas'); cvs.width=outW; cvs.height=outH;
  const ctx=cvs.getContext('2d'); ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high';
  const blurPx=parseFloat(document.getElementById('sl-blur').value)||0;

  // Pre-rasterize each slot's bezel/overlay
  const layers=[];
  for(const slot of slots){
    if(slot.device){
      layers.push({
        bezel: await svgToImage(tintBezelSVG(slot.device.bezel('#000'), slot.tint), slot.device.vw, slot.device.vh),
        overlay: await svgToImage(slot.device.overlay(), slot.device.vw, slot.device.vh)
      });
    } else layers.push(null);
  }

  // background image (if any)
  let bgImg=null;
  if(bgType==='image' && bgValue){
    bgImg=await new Promise(res=>{ const im=new Image(); im.crossOrigin='anonymous'; im.onload=()=>res(im); im.onerror=()=>res(null); im.src=bgValue; });
  }

  // longest duration among video slots
  let duration=5;
  slots.forEach(s=>{ if(s.type==='video'){ const inst=document.querySelectorAll('.device-instance')[slots.indexOf(s)]; const v=inst&&inst.querySelector('video'); if(v&&v.duration) duration=Math.max(duration, v.duration); } });

  function drawFrame(){
    ctx.save(); ctx.scale(scale,scale);
    paintExportBackground(ctx, cW, cH, blurPx, bgImg);
    slots.forEach((slot,i)=>{
      if(!slot.device || !slot.hasMedia) return;
      const dev=slot.device;
      const canvas=document.getElementById('canvas-wrap');
      const cw=parseInt(canvas.style.width)||800, ch=parseInt(canvas.style.height)||500;
      const targetH=Math.min(ch*0.62, cw*0.42*dev.vh/dev.vw)*(slot.frameScale||1);
      const dh=Math.round(targetH), dw=Math.round(dh*dev.vw/dev.vh);
      const cx=cW/2+slot.posX, cy=cH/2+slot.posY;
      const dx=cx-dw/2, dy=cy-dh/2;
      const st=(slot.shadVal||0)/100;
      if(st>0){ ctx.save(); ctx.shadowColor='rgba(0,0,0,'+(0.3+0.4*st).toFixed(2)+')';ctx.shadowBlur=(18+70*st)*(dw/600);ctx.shadowOffsetX=(slot.shadX||0);ctx.shadowOffsetY=(slot.shadY||24);
        ctx.fillStyle='rgba(0,0,0,0.001)';ctx.fillRect(dx+dw*0.1,dy+dh*0.1,dw*0.8,dh*0.8); ctx.restore(); }
      if(layers[i]&&layers[i].bezel) ctx.drawImage(layers[i].bezel,dx,dy,dw,dh);
      const sx=dx+dev.screen.x/dev.vw*dw, sy=dy+dev.screen.y/dev.vh*dh;
      const sw=dev.screen.w/dev.vw*dw, sh=dev.screen.h/dev.vh*dh;
      const rr=(dev.screenRR||20)/dev.vw*dw;
      const inst=document.querySelectorAll('.device-instance')[i];
      const mediaEl=inst ? (slot.type==='video'?inst.querySelector('video'):inst.querySelector('img')) : null;
      if(mediaEl){
        ctx.save(); roundRect(ctx,sx,sy,sw,sh,rr); ctx.clip();
        ctx.fillStyle='#000'; ctx.fillRect(sx,sy,sw,sh);   // letterbox bg for Fit mode
        const base=coverSizeAR(slot.ar, sw, sh);
        const mw=base.w*slot.scale, mh=base.h*slot.scale;
        ctx.drawImage(mediaEl, sx+(sw-mw)/2+(slot.offX||0), sy+(sh-mh)/2+(slot.offY||0), mw, mh);
        ctx.restore();
      }
      if(layers[i]&&layers[i].overlay) ctx.drawImage(layers[i].overlay,dx,dy,dw,dh);
    });
    drawOverlaysOnCanvas(ctx); drawTextsOnCanvas(ctx);
    ctx.restore();
  }

  const stream=cvs.captureStream(60);
  // audio from first video slot
  const firstVid = (()=>{ for(let i=0;i<slots.length;i++){ if(slots[i].type==='video'){ const inst=document.querySelectorAll('.device-instance')[i]; return inst&&inst.querySelector('video'); } } return null; })();
  if(firstVid){
    try{ const cap=firstVid.captureStream?firstVid.captureStream():null; if(cap){ const at=cap.getAudioTracks(); if(at.length) stream.addTrack(at[0]); } }catch(e){}
  }
  const types=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'];
  const mtype=types.find(t=>MediaRecorder.isTypeSupported(t))||'video/webm';
  const rec=new MediaRecorder(stream,{mimeType:mtype,videoBitsPerSecond:QMBPS*1000000});
  const chunks=[]; rec.ondataavailable=e=>{if(e.data.size>0)chunks.push(e.data);};
  rec.onstop=()=>{ const blob=new Blob(chunks,{type:mtype}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='mockup-dual.mp4'; a.click(); URL.revokeObjectURL(url); showExportDone('Video downloaded'); };

  // play all video slots from start
  slots.forEach((s,i)=>{ if(s.type==='video'){ const inst=document.querySelectorAll('.device-instance')[i]; const v=inst&&inst.querySelector('video'); if(v){ v.currentTime=0; if(firstVid && v===firstVid){ v.muted=false; v.volume=1; } v.play().catch(()=>{}); } } });
  const startT=performance.now();
  rec.start(); let raf;
  function loop(){ drawFrame(); const pct=Math.min(99,Math.round((performance.now()-startT)/(duration*1000)*100)); updateExportNotice('Rendering your video... '+pct+'%'); raf=requestAnimationFrame(loop); }
  loop();
  setTimeout(()=>{ cancelAnimationFrame(raf); updateExportNotice('Finishing up...'); rec.stop(); }, duration*1000+300);
}

/* ── DUAL EXPORT: composite both device instances at their positions ── */
async function compositeSlot(ctx, slot, scale, cW, cH){
  if(!slot.device || !slot.hasMedia) return;
  const dev=slot.device;
  const canvas=document.getElementById('canvas-wrap');
  const cw=parseInt(canvas.style.width)||800, ch=parseInt(canvas.style.height)||500;
  const targetH=Math.min(ch*0.62, cw*0.42*dev.vh/dev.vw)*(slot.frameScale||1);
  const dh=Math.round(targetH), dw=Math.round(dh*dev.vw/dev.vh);
  const cx=cW/2 + slot.posX, cy=cH/2 + slot.posY;
  const S=scale;
  // Build the flat device (bezel → media → overlay) into an offscreen, so it can be tilt-warped.
  const mc=document.createElement('canvas'); mc.width=Math.max(1,Math.round(dw*S)); mc.height=Math.max(1,Math.round(dh*S));
  const mx=mc.getContext('2d'); mx.scale(S,S);
  const bezelImg=await svgToImage(tintBezelSVG(dev.bezel('#000'), slot.tint), dev.vw, dev.vh);
  const overlayImg=await svgToImage(dev.overlay(), dev.vw, dev.vh);
  if(bezelImg) mx.drawImage(bezelImg,0,0,dw,dh);
  const sx=dev.screen.x/dev.vw*dw, sy=dev.screen.y/dev.vh*dh;
  const sw=dev.screen.w/dev.vw*dw, sh=dev.screen.h/dev.vh*dh, rr=(dev.screenRR||20)/dev.vw*dw;
  const inst=document.querySelectorAll('.device-instance')[slots.indexOf(slot)];
  const mediaEl=inst ? (slot.type==='video'?inst.querySelector('video'):inst.querySelector('img')) : null;
  if(mediaEl){
    mx.save(); roundRect(mx,sx,sy,sw,sh,rr); mx.clip();
    mx.fillStyle='#000'; mx.fillRect(sx,sy,sw,sh);   // letterbox bg for Fit mode
    const base=coverSizeAR(slot.ar, sw, sh); const mw=base.w*slot.scale, mh=base.h*slot.scale;
    mx.drawImage(mediaEl, sx+(sw-mw)/2+(slot.offX||0), sy+(sh-mh)/2+(slot.offY||0), mw, mh);
    mx.restore();
  }
  if(overlayImg) mx.drawImage(overlayImg,0,0,dw,dh);
  const m={canvas:mc, w:dw, h:dh};
  // per-device shadow
  const t=(slot.shadVal||0)/100;
  if(t>0){
    ctx.save();
    ctx.shadowColor='rgba(0,0,0,'+(0.3+0.4*t).toFixed(2)+')'; ctx.shadowBlur=(18+70*t)*(dw/600);
    ctx.shadowOffsetX=(slot.shadX||0); ctx.shadowOffsetY=(slot.shadY||24);
    ctx.fillStyle='rgba(0,0,0,0.001)'; ctx.fillRect(cx-dw*0.4, cy-dh*0.4, dw*0.8, dh*0.8);
    ctx.restore();
  }
  if(slot.tiltX||slot.tiltY) warpMockup(ctx, m, cx, cy, slot.tiltX, slot.tiltY, S);
  else ctx.drawImage(mc, cx-dw/2, cy-dh/2, dw, dh);
}

async function confirmImgExportDual(){
  showExportNotice('Preparing your image...');
  const wrap=document.getElementById('canvas-wrap');
  const cW=parseInt(wrap.style.width)||wrap.clientWidth;
  const cH=parseInt(wrap.style.height)||wrap.clientHeight;
  const [btW,btH]=getTargetSize(); const tgtW=btW*imgScale, tgtH=btH*imgScale;
  const scale=Math.min(Math.max(tgtW/cW, 1), 14);
  const cvs=document.createElement('canvas'); cvs.width=Math.round(cW*scale); cvs.height=Math.round(cW*scale*tgtH/tgtW);
  const ctx=cvs.getContext('2d'); ctx.scale(scale,scale);
  const blurPx=parseFloat(document.getElementById('sl-blur').value)||0;

  async function render(bgImg){
    paintExportBackground(ctx, cW, cH, blurPx, bgImg);
    // draw both slots in order (slot 0 first, slot 1 on top — drag z handled visually)
    for(const slot of slots){ await compositeSlot(ctx, slot, scale, cW, cH); }
    drawOverlaysOnCanvas(ctx); drawTextsOnCanvas(ctx);
    try{
      const fmtMap={png:'image/png',jpg:'image/jpeg',webp:'image/webp'};
      const link=document.createElement('a');
      link.download='mockup-dual-'+getTargetSize().join('x')+'.'+selectedFmt;
      link.href=cvs.toDataURL(fmtMap[selectedFmt]||'image/png',0.95); link.click();
      showExportDone('Image downloaded');
    }catch(err){ updateExportNotice('Export failed.'); setTimeout(hideExportNotice,2500); }
  }

  if(bgType==='image' && bgValue){
    const bi=new Image(); bi.crossOrigin='anonymous';
    bi.onload=()=>render(bi); bi.onerror=()=>render(null); bi.src=bgValue;
  } else { render(null); }
}

/* ── SVG → Image helper for export compositing ── */
function svgToImage(svgInner, vw, vh){
  return new Promise((resolve)=>{
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+vw+' '+vh+'" width="'+vw+'" height="'+vh+'">'+svgInner+'</svg>';
    const blob = new Blob([svg], {type:'image/svg+xml;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = ()=>{ URL.revokeObjectURL(url); resolve(img); };
    img.onerror = ()=>{ URL.revokeObjectURL(url); resolve(null); };
    img.src = url;
  });
}

/* ── IMAGE EXPORT ── */
function confirmImgExport(){
  closeModal('img-modal');
  if(layoutMode==='dual'){ confirmImgExportDual(); return; }
  showExportNotice('Preparing your image...');
  const wrap=document.getElementById('canvas-wrap');
  const {w:fw,h:fh}=calcFrame();
  const cW=parseInt(wrap.style.width)||wrap.clientWidth;
  const cH=parseInt(wrap.style.height)||wrap.clientHeight;
  // Export at the exact chosen pixel size (scale derived from target width)
  const [btW,btH]=getTargetSize(); const tgtW=btW*imgScale, tgtH=btH*imgScale;
  const scale=Math.min(Math.max(tgtW/cW, 1), 14);   // clamp to avoid extreme canvases
  const cvs=document.createElement('canvas');
  cvs.width=Math.round(cW*scale);cvs.height=Math.round(cW*scale*tgtH/tgtW);
  const ctx=cvs.getContext('2d');
  ctx.scale(scale,scale);
  const bgEl=document.getElementById('canvas-bg');
  const bgUrl=bgEl.style.backgroundImage.replace(/url\(["']?|["']?\)/g,'');
  const blurPx=parseFloat(document.getElementById('sl-blur').value)||0;

  function finish(){
    try{
      const fmtMap={png:'image/png',jpg:'image/jpeg',webp:'image/webp'};
      const link=document.createElement('a');
      link.download='mockup-'+Math.round(tgtW)+'x'+Math.round(tgtH)+(imgScale>1?'@'+imgScale+'x':'')+'.'+selectedFmt;
      link.href=cvs.toDataURL(fmtMap[selectedFmt]||'image/png',0.95);link.click();
      showExportDone('Image downloaded');
    }catch(err){
      console.error('Export failed:', err);
      updateExportNotice('Export failed. Try a different background.');
      setTimeout(hideExportNotice, 2500);
    }
  }

  async function draw(bgImg){
    paintExportBackground(ctx, cW, cH, blurPx, bgImg);

    if(tiltX!==0 || tiltY!==0){
      // ── 3D tilt: render the flat mockup offscreen, then perspective-warp it ──
      const m = await buildMockupOffscreen(scale);
      drawTiltedMockup(ctx, m, cW, cH, scale);
      drawOverlaysOnCanvas(ctx); drawTextsOnCanvas(ctx);
      finish();
      return;
    }

    if(activeDevice){
      // ── Composite the full device: bezel → media (clipped to screen) → overlay ──
      const dev = activeDevice;
      // Device display size on canvas = same as gadget on screen
      const gfw = document.getElementById('gadget-frame-wrap');
      const dw = parseInt(gfw.style.width) || fw;
      const dh = parseInt(gfw.style.height) || fh;
      const dx = (cW-dw)/2 + mockOffX, dy=(cH-dh)/2 + mockOffY;

      // Drop shadow under the whole device (reflects the Shadow slider + offsets)
      const _st=shadVal/100;
      if(_st>0){
        ctx.save();
        ctx.shadowColor='rgba(0,0,0,'+(0.3+0.4*_st).toFixed(2)+')';ctx.shadowBlur=(18+70*_st);ctx.shadowOffsetX=shadX;ctx.shadowOffsetY=shadY;
        ctx.fillStyle='rgba(0,0,0,0.001)';
        ctx.fillRect(dx+dw*0.1, dy+dh*0.1, dw*0.8, dh*0.8);
        ctx.restore();
      }

      const bezelImg = await svgToImage(tintBezelSVG(dev.bezel('#000'), chassisTint), dev.vw, dev.vh);
      const overlayImg = await svgToImage(dev.overlay(), dev.vw, dev.vh);

      // 1. bezel under
      if(bezelImg) ctx.drawImage(bezelImg, dx, dy, dw, dh);

      // 2. media clipped to screen rect
      const sx = dx + dev.screen.x/dev.vw*dw;
      const sy = dy + dev.screen.y/dev.vh*dh;
      const sw = dev.screen.w/dev.vw*dw;
      const sh = dev.screen.h/dev.vh*dh;
      const srr = (dev.screenRR||20)/dev.vw*dw;
      const media = document.getElementById('gadget-img');
      ctx.save();
      roundRect(ctx, sx, sy, sw, sh, srr); ctx.clip();
      ctx.fillStyle='#000'; ctx.fillRect(sx, sy, sw, sh);   // letterbox bg for Fit mode (matches live #000 screen)
      // cover-fit + zoom + pan (matches live preview). liveScreenW = on-screen screen width
      const liveScreenW = parseFloat(document.getElementById('gadget-screen').style.width)||sw;
      const dr = coverDrawRect(sx, sy, sw, sh, liveScreenW);
      ctx.drawImage(media, dr.mx, dr.my, dr.mw, dr.mh);
      drawGlare(ctx, sx, sy, sw, sh);
      ctx.restore();

      // 3. overlay (notch) on top
      if(overlayImg) ctx.drawImage(overlayImg, dx, dy, dw, dh);

      drawOverlaysOnCanvas(ctx); drawTextsOnCanvas(ctx);
      finish();
    } else {
      // ── Plain frame ──
      const fx=(cW-fw)/2 + mockOffX,fy=(cH-fh)/2 + mockOffY;
      const br=parseFloat(document.getElementById('mockup-frame').style.borderRadius)||14;
      const _pt=shadVal/100;
      if(_pt>0){ ctx.shadowColor='rgba(0,0,0,'+(0.35+0.4*_pt).toFixed(2)+')';ctx.shadowBlur=(20+80*_pt);ctx.shadowOffsetX=shadX;ctx.shadowOffsetY=shadY; }
      roundRect(ctx,fx,fy,fw,fh,br);ctx.fillStyle='#111';ctx.fill();
      ctx.shadowColor='transparent';ctx.shadowBlur=0;ctx.shadowOffsetX=0;ctx.shadowOffsetY=0;
      const src=document.getElementById('mockup-img');
      ctx.save();roundRect(ctx,fx,fy,fw,fh,br);ctx.clip();
      const liveScreenW = parseFloat(document.getElementById('mockup-frame').style.width)||fw;
      const dr = coverDrawRect(fx, fy, fw, fh, liveScreenW);
      ctx.drawImage(src, dr.mx, dr.my, dr.mw, dr.mh);
      drawGlare(ctx, fx, fy, fw, fh);
      ctx.restore();
      ctx.save();roundRect(ctx,fx,fy,fw,fh,br);ctx.strokeStyle='rgba(255,255,255,0.09)';ctx.lineWidth=1;ctx.stroke();ctx.restore();
      drawOverlaysOnCanvas(ctx); drawTextsOnCanvas(ctx);
      finish();
    }
  }

  if(bgType==='image' && bgValue){
    const bi=new Image(); bi.crossOrigin='anonymous';
    bi.onload=()=>draw(bi); bi.onerror=()=>draw(null); bi.src=bgValue;
  } else { draw(null); }
}

/* ── VIDEO EXPORT ── */
async function confirmVidExport(){
  closeModal('vid-modal');
  if(layoutMode==='dual'){ confirmVidExportDual(); return; }
  showExportNotice('Rendering your video...');
  const vid=document.getElementById(activeDevice?'gadget-video':'mockup-video');
  const nativeW=vid.videoWidth||1920,nativeH=vid.videoHeight||1080;
  const bgEl=document.getElementById('canvas-bg');
  const bgUrl=bgEl.style.backgroundImage.replace(/url\(["']?|["']?\)/g,'');
  const blurPx=parseFloat(document.getElementById('sl-blur').value)||0;
  // Resolution tier (longest edge) + a generous bitrate so the export is genuinely sharp
  const TARGET_LONG={'720':1280,'1080':1920,'1440':2560,'4k':3840}[selectedQ]||1920;
  const QMBPS={'720':10,'1080':22,'1440':45,'4k':90}[selectedQ]||22;

  // Output canvas dimensions depend on whether a device frame is used
  let outW, outH, cvs, ctx;
  let bezelImg=null, overlayImg=null;          // device layers (pre-rasterized)
  let dx,dy,dw,dh, sx,sy,sw,sh, srr;           // device geometry
  let vx,vy,br;                                // plain-frame geometry

  if(activeDevice){
    const dev=activeDevice;
    // Scale device so its SCREEN matches the video's native resolution → crisp output
    const screenScale = nativeW / dev.screen.w;
    dw = Math.round(dev.vw * screenScale);
    dh = Math.round(dev.vh * screenScale);
    // Add padding around the device
    const padFraction = padPct/100;
    const padX = Math.round(dw*padFraction*2), padY = Math.round(dh*padFraction*2);
    outW = dw + padX; outH = dh + padY;
    dx = Math.round(padX/2); dy = Math.round(padY/2);
    // Screen rect within the canvas
    sx = dx + dev.screen.x/dev.vw*dw;
    sy = dy + dev.screen.y/dev.vh*dh;
    sw = dev.screen.w/dev.vw*dw;
    sh = dev.screen.h/dev.vh*dh;
    srr = (dev.screenRR||20)/dev.vw*dw;
    // Pre-rasterize bezel + overlay
    bezelImg   = await svgToImage(tintBezelSVG(dev.bezel('#000'), chassisTint), dev.vw, dev.vh);
    overlayImg = await svgToImage(dev.overlay(), dev.vw, dev.vh);
  } else {
    const padFraction=padPct/100;
    const padX=Math.round(nativeW*padFraction*2),padY=Math.round(nativeH*padFraction*2);
    outW=nativeW+padX; outH=nativeH+padY;
    vx=Math.round(padX/2); vy=Math.round(padY/2);
    br=(parseFloat(document.getElementById('mockup-frame').style.borderRadius)||14)*(nativeW/600);
  }

  // Scale the whole composition so its longest edge hits the chosen tier (720/1080/2K/4K)
  const qf=Math.min(Math.max(TARGET_LONG/Math.max(outW,outH), 0.5), 6);
  cvs=document.createElement('canvas');
  cvs.width=Math.round(outW*qf); cvs.height=Math.round(outH*qf);
  ctx=cvs.getContext('2d'); ctx.scale(qf,qf);
  ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high';

  function drawFrame(bgImg){
    ctx.clearRect(0,0,outW,outH);
    if(bgType!=='none'){ ctx.fillStyle='#080809'; ctx.fillRect(0,0,outW,outH); }
    const bl=blurPx*(outW/1080);
    paintExportBackground(ctx, outW, outH, bl, bgImg);

    if(activeDevice){
      // shadow under device
      ctx.save();
      ctx.shadowColor='rgba(0,0,0,0.5)';ctx.shadowBlur=70*(dw/600);ctx.shadowOffsetY=26*(dw/600);
      ctx.fillStyle='rgba(0,0,0,0.001)';ctx.fillRect(dx+dw*0.1,dy+dh*0.1,dw*0.8,dh*0.8);
      ctx.restore();
      // bezel
      if(bezelImg) ctx.drawImage(bezelImg,dx,dy,dw,dh);
      // video clipped to screen (cover fit + zoom + pan)
      ctx.save();roundRect(ctx,sx,sy,sw,sh,srr);ctx.clip();
      ctx.fillStyle='#000';ctx.fillRect(sx,sy,sw,sh);   // letterbox bg for Fit mode
      const liveScreenW=parseFloat(document.getElementById('gadget-screen').style.width)||sw;
      const dr=coverDrawRect(sx,sy,sw,sh,liveScreenW);
      ctx.drawImage(vid,dr.mx,dr.my,dr.mw,dr.mh);drawGlare(ctx,sx,sy,sw,sh);ctx.restore();
      // overlay notch
      if(overlayImg) ctx.drawImage(overlayImg,dx,dy,dw,dh);
    } else {
      const ss=nativeW/600;
      ctx.shadowColor='rgba(0,0,0,0.55)';ctx.shadowBlur=80*ss;ctx.shadowOffsetY=24*ss;
      roundRect(ctx,vx,vy,nativeW,nativeH,br);ctx.fillStyle='#111';ctx.fill();
      ctx.shadowColor='transparent';ctx.shadowBlur=0;ctx.shadowOffsetY=0;
      ctx.save();roundRect(ctx,vx,vy,nativeW,nativeH,br);ctx.clip();
      const liveScreenW=parseFloat(document.getElementById('mockup-frame').style.width)||nativeW;
      const dr=coverDrawRect(vx,vy,nativeW,nativeH,liveScreenW);
      ctx.drawImage(vid,dr.mx,dr.my,dr.mw,dr.mh);drawGlare(ctx,vx,vy,nativeW,nativeH);ctx.restore();
      ctx.save();roundRect(ctx,vx,vy,nativeW,nativeH,br);ctx.strokeStyle='rgba(255,255,255,0.09)';ctx.lineWidth=1;ctx.stroke();ctx.restore();
    }
    // Text overlays (transformed to video-export space, anchored on device/frame center)
    if(texts.length){
      const liveFrameW = activeDevice
        ? (parseFloat(document.getElementById('gadget-frame-wrap').style.width)||dw)
        : (parseFloat(document.getElementById('mockup-frame').style.width)||nativeW);
      const frameExportW = activeDevice ? dw : nativeW;
      const tt = textTransformForVideo(outW, outH, frameExportW, liveFrameW);
      drawOverlaysOnCanvas(ctx, tt.ox, tt.oy, tt.k);
      drawTextsOnCanvas(ctx, tt.ox, tt.oy, tt.k);
    }
  }

  function startRec(bgImg){
    const stream=cvs.captureStream(60);
    // Capture the source video's audio track so the exported file has sound
    try {
      const cap = vid.captureStream ? vid.captureStream() : (vid.mozCaptureStream ? vid.mozCaptureStream() : null);
      if (cap) {
        const at = cap.getAudioTracks();
        if (at.length > 0) stream.addTrack(at[0]);
      }
    } catch(e) { /* silent export if audio capture unsupported */ }
    const types=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm;codecs=vp9','video/webm'];
    const mtype=types.find(t=>MediaRecorder.isTypeSupported(t))||'video/webm';
    const rec=new MediaRecorder(stream,{mimeType:mtype,videoBitsPerSecond:QMBPS*1000000});
    const chunks=[];
    rec.ondataavailable=e=>{if(e.data.size>0)chunks.push(e.data);};
    rec.onstop=()=>{
      const blob=new Blob(chunks,{type:mtype});const url=URL.createObjectURL(blob);
      const a=document.createElement('a');a.href=url;a.download='mockup-'+cvs.width+'x'+cvs.height+'.mp4';a.click();URL.revokeObjectURL(url);
      showExportDone('Video downloaded');
    };
    const duration=vid.duration||5;vid.currentTime=0;
    const wasMuted = vid.muted;
    vid.muted = false; vid.volume = 1; // ensure audio track is active for capture
    const startT=performance.now();
    vid.play().then(()=>{
      rec.start();let raf;
      function loop(){
        drawFrame(bgImg);
        const pct=Math.min(99, Math.round((performance.now()-startT)/(duration*1000)*100));
        updateExportNotice('Rendering your video... '+pct+'%');
        raf=requestAnimationFrame(loop);
      }
      loop();
      setTimeout(()=>{cancelAnimationFrame(raf);updateExportNotice('Finishing up...');rec.stop();vid.pause();vid.muted=wasMuted;},duration*1000+300);
    }).catch(()=>{ vid.muted=true; vid.play(); });
  }

  // ── GIF capture: seek to discrete timestamps, draw each frame, quantize + encode ──
  function startGif(bgImg){
    const fps=12;
    const duration=Math.min(vid.duration||4, 6);          // cap GIF length for sane file size
    const totalFrames=Math.max(2, Math.round(duration*fps));
    const delayCs=Math.round(100/fps);
    const maxEdge=720;
    let gw=outW, gh=outH;
    if(Math.max(gw,gh)>maxEdge){ const r=maxEdge/Math.max(gw,gh); gw=Math.round(gw*r); gh=Math.round(gh*r); }
    gw-=gw%2; gh-=gh%2;
    const gcvs=document.createElement('canvas'); gcvs.width=gw; gcvs.height=gh;
    const gctx=gcvs.getContext('2d');
    const transparent = (bgType==='none');
    const frames=[]; let i=0;
    vid.pause(); vid.muted=true;
    const grab=()=>{
      if(i>=totalFrames){ encode(); return; }
      const t=Math.min(duration, i/fps);
      const onSeek=()=>{
        vid.removeEventListener('seeked', onSeek);
        drawFrame(bgImg);
        gctx.clearRect(0,0,gw,gh);
        if(transparent){ gctx.fillStyle='#0a0a0b'; gctx.fillRect(0,0,gw,gh); } // GIF can't hold alpha well
        gctx.drawImage(cvs,0,0,gw,gh);
        frames.push(gctx.getImageData(0,0,gw,gh));
        updateExportNotice('Rendering GIF '+Math.round((i+1)/totalFrames*100)+'%');
        i++; grab();
      };
      vid.addEventListener('seeked', onSeek);
      vid.currentTime=t;
    };
    const encode=()=>{
      updateExportNotice('Encoding GIF...');
      setTimeout(()=>{
        try{
          const bytes=encodeAnimatedGif(frames, gw, gh, delayCs);
          const blob=new Blob([bytes],{type:'image/gif'});
          const url=URL.createObjectURL(blob);
          const a=document.createElement('a'); a.href=url; a.download='mockup-'+gw+'x'+gh+'.gif'; a.click();
          URL.revokeObjectURL(url); showExportDone('GIF downloaded');
        }catch(err){ console.error('GIF export failed:',err); updateExportNotice('GIF export failed.'); setTimeout(hideExportNotice,2500); }
      }, 60);
    };
    grab();
  }

  const launch = (bg)=> (vidFmt==='gif' ? startGif(bg) : startRec(bg));
  if(bgType==='image' && bgValue){
    const bi=new Image(); bi.crossOrigin='anonymous';
    bi.onload=()=>launch(bi); bi.onerror=()=>launch(null); bi.src=bgValue;
  } else { launch(null); }
}

// Compute media draw rect inside a screen, honoring cover-fit + mediaScale + offsets.
// targetSx/Sy/Sw/Sh = screen rect in EXPORT pixels.
// liveScreenW = the on-screen (CSS px) screen width used when the user set the offsets,
//   so we can scale the pixel offsets to the export resolution.
function coverDrawRect(tSx,tSy,tSw,tSh, liveScreenW){
  const scrAR=tSw/tSh;
  let bw,bh;                       // base fit size (matches coverSize())
  if(fitMode==='contain'){
    if(mediaAR>scrAR){ bw=tSw; bh=tSw/mediaAR; }
    else { bh=tSh; bw=tSh*mediaAR; }
  } else {
    if(mediaAR>scrAR){ bh=tSh; bw=tSh*mediaAR; }
    else { bw=tSw; bh=tSw/mediaAR; }
  }
  // apply zoom
  const mw=bw*mediaScale, mh=bh*mediaScale;
  // offsets were captured in CSS px relative to the live screen; scale to export px
  const k = tSw / (liveScreenW||tSw);
  const ox = mediaOffX*k, oy = mediaOffY*k;
  const mx = tSx-(mw-tSw)/2 + ox;
  const my = tSy-(mh-tSh)/2 + oy;
  return {mx,my,mw,mh};
}

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}

/* ── VIDEO AUTO-FIT: re-fit whenever a video element's true size is known ── */
function refitVideoFrom(el){
  if(!hasMedia || !isVideo) return;
  if(el && el.videoWidth && el.videoHeight){
    const ar = el.videoWidth/el.videoHeight;
    if(ar && isFinite(ar)) mediaAR = ar;
  }
  if(activeDevice){ sizeGadget(); } else { sizeFrameToMedia(); }
  applyMediaTransform();
}
['mockup-video','gadget-video'].forEach(id=>{
  const v=document.getElementById(id);
  if(!v) return;
  v.addEventListener('loadedmetadata', ()=>refitVideoFrom(v));
  v.addEventListener('loadeddata',    ()=>refitVideoFrom(v));
  v.addEventListener('canplay',       ()=>refitVideoFrom(v));
  v.addEventListener('resize',        ()=>refitVideoFrom(v));
});

/* ══════════════════════════════════════════════════════
   DUAL MODE — flexible slots, free-drag positioning
══════════════════════════════════════════════════════ */
let layoutMode = 'single';
let selectedSlot = 0;
const slots = [
  { device:null, src:null, type:null, ar:16/9, scale:1, posX:-150, posY:0, offX:0, offY:0, hasMedia:false, tiltX:0, tiltY:0, tint:null, shadVal:60, shadX:0, shadY:24, frameScale:1 },
  { device:null, src:null, type:null, ar:16/9, scale:1, posX:150,  posY:0, offX:0, offY:0, hasMedia:false, tiltX:0, tiltY:0, tint:null, shadVal:60, shadX:0, shadY:24, frameScale:1 },
];
let activeFileSlot = 0;  // which slot a file upload targets

function setLayout(mode){
  layoutMode = mode;
  document.getElementById('lo-single').classList.toggle('active', mode==='single');
  document.getElementById('lo-dual').classList.toggle('active', mode==='dual');
  document.getElementById('slot-tabs').style.display = mode==='dual' ? 'flex' : 'none';
  document.getElementById('dual-hint').style.display = mode==='dual' ? 'block' : 'none';
  const stage = document.getElementById('dual-stage');
  const single = document.getElementById('mockup-wrap');
  if(mode==='dual'){
    singleDevice = activeDevice;        // remember single-mode device
    stage.classList.add('active');
    single.style.display='none';
    document.getElementById('row-radius').style.display='none';  // radius is plain-frame only
    selectedSlot = 0;
    selectSlot(0);
    renderDualStage();
  } else {
    stage.classList.remove('active');
    single.style.display='flex';
    activeDevice = singleDevice;         // restore single-mode device
    buildDeviceGrid();
    applyDevice();                       // ensures only plain OR gadget shows + radius visibility
    syncControlsToSingle();
  }
}
// Mirror single-mode globals onto the panel controls
function syncControlsToSingle(){
  const set=(id,val,fmt)=>{ const el=document.getElementById(id); if(el){ el.value=val; if(typeof paintRange==='function') paintRange(el); const lbl=document.getElementById(id.replace('sl-','vl-')); if(lbl&&fmt!=null) lbl.textContent=fmt; } };
  set('sl-pad', padPct, padPct+'%');
  set('sl-shad', shadVal, shadVal+'%');
  set('sl-shadx', shadX, ''+shadX);
  set('sl-shady', shadY, ''+shadY);
  set('sl-tiltx', tiltX, tiltX+'°');
  set('sl-tilty', tiltY, tiltY+'°');
  set('sl-zoom', mediaScale, Math.round(mediaScale*100)+'%');
}

function selectSlot(i){
  selectedSlot = i;
  document.getElementById('slot-tab-0').classList.toggle('active', i===0);
  document.getElementById('slot-tab-1').classList.toggle('active', i===1);
  // reflect this slot's device selection in the device grid
  activeDevice = slots[i].device;
  buildDeviceGrid();
  // highlight selected instance
  document.querySelectorAll('.device-instance').forEach((el,idx)=>el.classList.toggle('selected', idx===selectedSlot));
  // zoom slider reflects this slot
  const zr=document.getElementById('zoom-row');
  if(zr) zr.style.display = slots[i].hasMedia ? 'flex' : 'none';
  const fr=document.getElementById('fit-row');
  if(fr) fr.style.display = slots[i].hasMedia ? 'flex' : 'none';
  const rb=document.getElementById('reset-pos-btn');
  if(rb) rb.style.display = slots[i].hasMedia ? 'flex' : 'none';
  syncControlsToSlot(i);
}
// Mirror the selected slot's per-device properties onto the panel controls
function syncControlsToSlot(i){
  const s=slots[i]; if(!s) return;
  const set=(id,val,fmt)=>{ const el=document.getElementById(id); if(el){ el.value=val; if(typeof paintRange==='function') paintRange(el); const lbl=document.getElementById(id.replace('sl-','vl-')); if(lbl&&fmt) lbl.textContent=fmt; } };
  set('sl-tiltx', s.tiltX, s.tiltX+'°');
  set('sl-tilty', s.tiltY, s.tiltY+'°');
  set('sl-shad', s.shadVal, s.shadVal+'%');
  set('sl-shadx', s.shadX, ''+s.shadX);
  set('sl-shady', s.shadY, ''+s.shadY);
  set('sl-zoom', s.scale, Math.round(s.scale*100)+'%');
  const sizeV=Math.max(0,Math.min(18,Math.round(6-((s.frameScale||1)-1)*20)));
  set('sl-pad', sizeV, sizeV+'%');
  const fi=FINISHES.findIndex(f=>f.tint===s.tint);
  document.querySelectorAll('#finish-grid .finish-sw').forEach((el,idx)=>{
    if(el.classList.contains('custom')) el.classList.toggle('active', fi<0 && s.tint!=null);
    else el.classList.toggle('active', idx===fi);
  });
}

function slotDeviceLabel(i){ return slots[i].device ? slots[i].device.name : 'None'; }

// Build / rebuild the two device instances in the stage
function renderDualStage(){
  const stage = document.getElementById('dual-stage');
  stage.innerHTML='';
  slots.forEach((slot,i)=>{
    const inst = document.createElement('div');
    inst.className='device-instance'+(i===selectedSlot?' selected':'');
    inst.dataset.slot=i;

    if(!slot.device){
      // placeholder prompt to pick a device
      inst.style.transform='translate(calc(-50% + '+slot.posX+'px), calc(-50% + '+slot.posY+'px))';
      inst.innerHTML='<div style="width:150px;height:300px;border:1.5px dashed rgba(255,255,255,0.18);border-radius:24px;display:flex;align-items:center;justify-content:center;text-align:center;color:var(--text-dim);font-size:11px;padding:12px;background:rgba(255,255,255,0.02)">Device '+(i+1)+'<br>pick a frame</div>';
      stage.appendChild(inst);
      bindInstanceDrag(inst,i);
      return;
    }

    const dev=slot.device;
    const wrap=document.createElement('div'); wrap.className='inst-wrap';
    wrap.innerHTML =
      '<svg class="inst-bezel" viewBox="0 0 '+dev.vw+' '+dev.vh+'">'+tintBezelSVG(dev.bezel('#000'), slot.tint)+'</svg>'+
      '<div class="inst-screen"><img alt=""><video autoplay loop playsinline></video></div>'+
      '<svg class="inst-overlay" viewBox="0 0 '+dev.vw+' '+dev.vh+'">'+dev.overlay()+'</svg>'+
      '<div class="inst-drop"><div class="dz-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9l4-4 5 5 4-4 5 5"/><circle cx="8.5" cy="8.5" r="1.5"/></svg></div><div class="dz-title">Upload</div><div class="dz-sub">image / video</div></div>';
    inst.appendChild(wrap);
    stage.appendChild(inst);
    sizeInstance(inst,i);
    applyInstanceTransform(inst,i);                       // position + per-device 3D tilt
    wrap.style.filter=shadowFilterStr((slot.shadVal||0)/100, slot.shadX||0, slot.shadY||0);  // per-device shadow
    if(slot._imgEdit){ const scr=inst.querySelector('.inst-screen'); if(scr) scr.classList.add('img-editing'); }
    bindInstanceDrag(inst,i);
  });
}

// Size one instance's device frame + place its media
function sizeInstance(inst,i){
  const slot=slots[i]; const dev=slot.device; if(!dev) return;
  const wrap=inst.querySelector('.inst-wrap');
  // base device size: scale phones ~300px tall, others by their natural ratio
  const canvas=document.getElementById('canvas-wrap');
  const cw=parseInt(canvas.style.width)||800, ch=parseInt(canvas.style.height)||500;
  // target: device fits ~ 42% of canvas min dimension (so two fit side by side)
  const targetH = Math.min(ch*0.62, cw*0.42*dev.vh/dev.vw) * (slot.frameScale||1);
  const dh = Math.round(targetH);
  const dw = Math.round(dh*dev.vw/dev.vh);
  wrap.style.width=dw+'px'; wrap.style.height=dh+'px';
  const bez=wrap.querySelector('.inst-bezel'); bez.style.width=dw+'px'; bez.style.height=dh+'px'; bez.setAttribute('width',dw); bez.setAttribute('height',dh);
  const ov=wrap.querySelector('.inst-overlay'); ov.style.width=dw+'px'; ov.style.height=dh+'px'; ov.setAttribute('width',dw); ov.setAttribute('height',dh);
  // screen rect
  const sx=Math.round(dev.screen.x/dev.vw*dw), sy=Math.round(dev.screen.y/dev.vh*dh);
  const sw=Math.round(dev.screen.w/dev.vw*dw), sh=Math.round(dev.screen.h/dev.vh*dh);
  const rr=Math.round((dev.screenRR||20)/dev.vw*dw);
  const scr=wrap.querySelector('.inst-screen');
  scr.style.cssText='position:absolute;z-index:2;overflow:hidden;background:#000;left:'+sx+'px;top:'+sy+'px;width:'+sw+'px;height:'+sh+'px;border-radius:'+rr+'px;';
  // media
  const img=scr.querySelector('img'), vid=scr.querySelector('video');
  const drop=wrap.querySelector('.inst-drop');
  drop.style.cssText='position:absolute;z-index:4;left:'+sx+'px;top:'+sy+'px;width:'+sw+'px;height:'+sh+'px;border-radius:'+rr+'px;display:'+(slot.hasMedia?'none':'flex')+';flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer;background:rgba(0,0,0,0.5);backdrop-filter:blur(2px);';
  [img,vid].forEach(el=>{
    const base=coverSizeAR(slot.ar, sw, sh);
    const mw=base.w*slot.scale, mh=base.h*slot.scale;
    el.style.position='absolute';
    el.style.left=((sw-mw)/2 + (slot.offX||0))+'px'; el.style.top=((sh-mh)/2 + (slot.offY||0))+'px';
    el.style.width=mw+'px'; el.style.height=mh+'px'; el.style.objectFit='fill';
  });
  if(slot.hasMedia){
    if(slot.type==='video'){ vid.src=slot.src; vid.style.display='block'; vid.muted=(i!==0); vid.play().catch(()=>{}); img.style.display='none'; }
    else { img.src=slot.src; img.style.display='block'; vid.style.display='none'; }
  } else { img.style.display='none'; vid.style.display='none'; }
}

// cover-size with explicit AR (for slots)
function coverSizeAR(ar, screenW, screenH){
  const scrAR=screenW/screenH; let w,h;
  if(fitMode==='contain'){
    if(ar>scrAR){ w=screenW; h=screenW/ar; } else { h=screenH; w=screenH*ar; }
  } else {
    if(ar>scrAR){ h=screenH; w=screenH*ar; } else { w=screenW; h=screenW/ar; }
  }
  return {w,h};
}

// Drag the FRAME to move an instance; drag the SCREEN to pan its image; click empty screen → upload
function setSlotImgEdit(i, on){
  slots.forEach((s,idx)=>{ s._imgEdit = (idx===i && !!on); });
  document.querySelectorAll('.device-instance').forEach((el,idx)=>{
    const scr=el.querySelector('.inst-screen'); if(scr) scr.classList.toggle('img-editing', !!slots[idx]._imgEdit);
  });
}
function bindInstanceDrag(inst,i){
  let down=false, moved=false, panning=false, onScreen=false, sx=0, sy=0, bx=0, by=0;
  inst.addEventListener('pointerdown', e=>{
    selectSlot(i);
    document.querySelectorAll('.device-instance').forEach((el,idx)=>el.classList.toggle('selected', idx===i));
    onScreen = !!e.target.closest('.inst-screen');
    // Drag moves the device by default; pans the image only when it's in adjust mode.
    panning = !!(slots[i]._imgEdit && slots[i].hasMedia && onScreen);
    down=true; moved=false; sx=e.clientX; sy=e.clientY;
    if(panning){ bx=slots[i].offX||0; by=slots[i].offY||0; } else { bx=slots[i].posX; by=slots[i].posY; }
    inst.classList.add('dragging'); inst.setPointerCapture(e.pointerId);
    if(slots[i].hasMedia) e.preventDefault();
  });
  inst.addEventListener('pointermove', e=>{
    if(!down) return;
    const dx=e.clientX-sx, dy=e.clientY-sy;
    if(Math.abs(dx)>4||Math.abs(dy)>4) moved=true;
    if(panning){
      const scr=inst.querySelector('.inst-screen');
      if(scr){
        const sw=scr.offsetWidth, sh=scr.offsetHeight;
        const el0=scr.querySelector(slots[i].type==='video'?'video':'img');
        const w=parseFloat(el0.style.width)||sw, h=parseFloat(el0.style.height)||sh;
        const maxX=Math.max(0,(w-sw)/2), maxY=Math.max(0,(h-sh)/2);   // clamp so no black edges
        slots[i].offX=Math.max(-maxX, Math.min(maxX, bx+dx));
        slots[i].offY=Math.max(-maxY, Math.min(maxY, by+dy));
        scr.querySelectorAll('img,video').forEach(el=>{
          const ww=parseFloat(el.style.width), hh=parseFloat(el.style.height);
          el.style.left=((sw-ww)/2 + slots[i].offX)+'px'; el.style.top=((sh-hh)/2 + slots[i].offY)+'px';
        });
      }
    } else {
      slots[i].posX=bx+dx; slots[i].posY=by+dy;
      applyInstanceTransform(inst, i);
    }
  });
  const up=e=>{
    if(!down) return; down=false; inst.classList.remove('dragging');
    try{inst.releasePointerCapture(e.pointerId);}catch(_){}
    if(!moved){
      if(slots[i].device && !slots[i].hasMedia){ activeFileSlot=i; document.getElementById('hf').click(); }
      else if(slots[i].hasMedia){ setSlotImgEdit(i, onScreen); }  // tap screen → adjust; tap frame → exit
    }
  };
  inst.addEventListener('pointerup', up);
  inst.addEventListener('pointercancel', up);

  // zoom this instance's image: scroll / trackpad-pinch
  inst.addEventListener('wheel', e=>{
    if(!slots[i].hasMedia) return;
    e.preventDefault();
    selectSlot(i);
    const step = e.ctrlKey ? 0.005 : 0.02;   // gentler zoom
    const delta = (e.deltaY<0 ? 1 : -1) * step * (e.ctrlKey ? Math.min(3, Math.abs(e.deltaY)) : 1);
    setSlotZoom(i, (slots[i].scale||1) + delta);
  }, {passive:false});
  // touch pinch
  let pStart=0, pBase=1;
  inst.addEventListener('touchstart', e=>{
    if(!slots[i].hasMedia || e.touches.length!==2) return;
    pStart=touchDist(e.touches); pBase=slots[i].scale||1;
  }, {passive:false});
  inst.addEventListener('touchmove', e=>{
    if(!slots[i].hasMedia || e.touches.length!==2 || !pStart) return;
    e.preventDefault();
    setSlotZoom(i, pBase * touchDist(e.touches)/pStart);
  }, {passive:false});
  const endP=()=>{ pStart=0; };
  inst.addEventListener('touchend', endP);
  inst.addEventListener('touchcancel', endP);
  // Safari trackpad pinch
  let gBase=1;
  inst.addEventListener('gesturestart', e=>{ if(slots[i].hasMedia){ e.preventDefault(); selectSlot(i); gBase=slots[i].scale||1; } }, {passive:false});
  inst.addEventListener('gesturechange', e=>{ if(slots[i].hasMedia){ e.preventDefault(); setSlotZoom(i, gBase*(1+(e.scale-1)*0.5)); } }, {passive:false});
  inst.addEventListener('gestureend', e=>{ if(slots[i].hasMedia) e.preventDefault(); }, {passive:false});
}

// Set a dual-slot's image zoom, clamp, re-render, and sync the slider readout
function setSlotZoom(i, val){
  const s=Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, val));
  slots[i].scale=s;
  const inst=document.querySelectorAll('.device-instance')[i];
  if(inst) sizeInstance(inst, i);
  if(i===selectedSlot){
    const zs=document.getElementById('sl-zoom'); if(zs) zs.value=s;
    const zv=document.getElementById('vl-zoom'); if(zv) zv.textContent=Math.round(s*100)+'%';
  }
}

/* ══════════════════════════════════════════════════════
   TEXT FEATURE — draggable text blocks on the canvas
══════════════════════════════════════════════════════ */
let texts = [];                 // {id, content, x, y, size, weight, color, align}
let selectedTextId = null;
let textIdCounter = 0;

function addText(){
  histBefore();
  const wrap = document.getElementById('canvas-wrap');
  const cw = parseInt(wrap.style.width)||wrap.clientWidth||800;
  const ch = parseInt(wrap.style.height)||wrap.clientHeight||450;
  const t = {
    id: ++textIdCounter,
    content: 'Your text',
    x: Math.round(cw*0.5 - 70),    // roughly centered start
    y: Math.round(ch*0.12),
    size: 40,
    weight: '700',
    color: '#ffffff',
    align: 'left',
    font: FONTS[0].css,
    italic: false,
    letterSpacing: 0,
    lineHeight: 1.3,
  };
  texts.push(t);
  renderTexts();
  selectText(t.id);
}

// Web-safe / system font stacks (no network load → exports render identically).
const FONTS = [
  {name:'Inter / System', css:"-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',sans-serif"},
  {name:'Arial', css:"Arial, 'Helvetica Neue', Helvetica, sans-serif"},
  {name:'Helvetica Neue', css:"'Helvetica Neue', Helvetica, Arial, sans-serif"},
  {name:'Avenir', css:"'Avenir Next', Avenir, 'Segoe UI', sans-serif"},
  {name:'Futura', css:"Futura, 'Trebuchet MS', sans-serif"},
  {name:'Gill Sans', css:"'Gill Sans', 'Gill Sans MT', Calibri, sans-serif"},
  {name:'Optima', css:"Optima, Segoe, 'Segoe UI', sans-serif"},
  {name:'Verdana', css:"Verdana, Geneva, sans-serif"},
  {name:'Tahoma', css:"Tahoma, Geneva, sans-serif"},
  {name:'Trebuchet MS', css:"'Trebuchet MS', Helvetica, sans-serif"},
  {name:'Calibri', css:"Calibri, 'Segoe UI', sans-serif"},
  {name:'Georgia', css:"Georgia, 'Times New Roman', serif"},
  {name:'Times New Roman', css:"'Times New Roman', Times, serif"},
  {name:'Palatino', css:"'Palatino Linotype', Palatino, 'Book Antiqua', serif"},
  {name:'Garamond', css:"Garamond, 'Hoefler Text', Georgia, serif"},
  {name:'Baskerville', css:"Baskerville, 'Baskerville Old Face', Georgia, serif"},
  {name:'Courier New', css:"'Courier New', Courier, monospace"},
  {name:'Menlo / Mono', css:"Menlo, Consolas, 'Courier New', monospace"},
  {name:'Impact', css:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"},
  {name:'Brush Script', css:"'Brush Script MT', 'Segoe Script', cursive"},
];
function buildFontSelect(){
  const sel=document.getElementById('text-font'); if(!sel) return;
  sel.innerHTML='';
  FONTS.forEach(f=>{ const o=document.createElement('option'); o.value=f.css; o.textContent=f.name; o.style.fontFamily=f.css; sel.appendChild(o); });
}

function renderTexts(){
  const layer = document.getElementById('text-layer');
  layer.innerHTML = '';
  texts.forEach(t=>{
    const el = document.createElement('div');
    el.className = 'text-block' + (t.id===selectedTextId ? ' selected' : '');
    el.dataset.id = t.id;
    el.textContent = t.content;
    el.style.left = t.x + 'px';
    el.style.top  = t.y + 'px';
    el.style.fontSize = t.size + 'px';
    el.style.fontWeight = t.weight;
    el.style.color = t.color;
    el.style.textAlign = t.align;
    el.style.fontFamily = t.font || FONTS[0].css;
    el.style.fontStyle = t.italic ? 'italic' : 'normal';
    el.style.letterSpacing = (t.letterSpacing||0) + 'px';
    el.style.lineHeight = (t.lineHeight||1.3);
    layer.appendChild(el);
    bindTextEl(el, t.id);
  });
  renderTextList();
}

function renderTextList(){
  const list = document.getElementById('text-list');
  if(!list) return;
  list.innerHTML = '';
  texts.forEach(t=>{
    const item = document.createElement('div');
    item.className = 'text-list-item' + (t.id===selectedTextId?' active':'');
    const label = (t.content||'(empty)').split('\n')[0].slice(0,22);
    item.innerHTML = '<span class="tli-text">'+ (label||'(empty)') +'</span>'+
      '<span class="tli-del"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg></span>';
    item.onclick = (e)=>{
      if(e.target.closest('.tli-del')){ deleteText(t.id); e.stopPropagation(); return; }
      selectText(t.id);
    };
    list.appendChild(item);
  });
}

let textPresetsLoaded = false;
function loadTextPresets(){
  if(textPresetsLoaded) return;
  textPresetsLoaded = true;
  const btn = document.getElementById('load-text-presets-btn');
  if(btn) btn.textContent = 'Loading…';
  const presets = [
    'Launch now',
    'Get started',
    'New collection',
    'Just shipped',
    'Limited edition',
    'Brand new',
    'Create your look',
    'Designed for teams',
    'Built for creators',
    'Made for modern work',
    'Quick preview',
    'Fresh ideas daily',
    'Minimal and bold',
    'Beautiful by default',
    'Modern interface',
    'High fidelity',
    'Premium feel',
    'Fast setup',
    'Clean design',
    'Smart interactions',
    'Stand out online',
    'Focus on what matters',
    'Everything in one place',
    'Work better together',
    'Create on demand',
    'Powerful visuals',
    'Future-ready layouts',
    'Responsive by design',
    'Perfect for portfolios',
    'Simple, smart, scalable',
    'Elegant details',
    'Collaborate instantly',
    'Your brand, amplified',
    'Crafted with care',
    'Launch with confidence',
    'Fast, smooth, polished',
    'Bold, clean, modern',
    'Designed to delight',
    'Ready to ship',
    'Make it yours',
  ];
  renderTextPresets(presets);
  if(btn) btn.style.display = 'none';
}
function renderTextPresets(items){
  const wrapper = document.getElementById('text-presets');
  const grid = document.getElementById('preset-grid');
  if(!wrapper || !grid) return;
  wrapper.style.display = 'block';
  items.forEach(text=>{
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'preset-item';
    item.textContent = text;
    item.onclick = ()=> addTextPreset(text);
    grid.appendChild(item);
  });
}
function addTextPreset(text){
  addText();
  const t = texts[texts.length-1];
  if(!t) return;
  t.content = text;
  renderTexts();
  selectText(t.id);
}

function selectText(id){
  selectedTextId = id;
  const t = texts.find(x=>x.id===id);
  document.querySelectorAll('#text-layer .text-block').forEach(el=>
    el.classList.toggle('selected', parseInt(el.dataset.id)===id));
  const ctrls = document.getElementById('text-ctrls');
  if(!t){ ctrls.classList.remove('active'); renderTextList(); return; }
  if(typeof openPanelForTool==='function') openPanelForTool('text');
  ctrls.classList.add('active');
  document.getElementById('text-content').value = t.content;
  document.getElementById('text-size').value = t.size;
  document.getElementById('text-font').value = t.font || FONTS[0].css;
  document.getElementById('text-weight').value = t.weight + (t.italic ? 'i' : '');
  document.getElementById('text-lh').value = (t.lineHeight!=null? t.lineHeight : 1.3);
  document.getElementById('text-ls').value = (t.letterSpacing||0);
  document.getElementById('text-color').value = t.color;
  document.getElementById('text-color-hex').value = t.color;
  document.querySelectorAll('#pp-text .al-opt').forEach(b=>b.classList.toggle('active', b.dataset.a===t.align));
  renderTextList();
}

function curText(){ return texts.find(x=>x.id===selectedTextId); }

function updateTextContent(v){ const t=curText(); if(!t)return; t.content=v; renderTexts(); }
function updateTextSize(v){ const t=curText(); if(!t)return; t.size=parseInt(v)||t.size; applyTextStyle(t); }
function updateTextWeight(w){ const t=curText(); if(!t)return; t.italic=/i$/.test(w); t.weight=w.replace('i',''); applyTextStyle(t); }
function updateTextFont(css){ const t=curText(); if(!t)return; t.font=css; applyTextStyle(t); }
function updateTextLH(v){ const t=curText(); if(!t)return; t.lineHeight=parseFloat(v)||1.3; applyTextStyle(t); }
function updateTextLS(v){ const t=curText(); if(!t)return; t.letterSpacing=parseFloat(v)||0; applyTextStyle(t); }
function updateTextAlign(a){ const t=curText(); if(!t)return; t.align=a; document.querySelectorAll('#pp-text .al-opt').forEach(b=>b.classList.toggle('active',b.dataset.a===a)); applyTextStyle(t); }
function updateTextColor(v){ const t=curText(); if(!t)return; t.color=v; document.getElementById('text-color-hex').value=v; applyTextStyle(t); }
function updateTextColorHex(v){ if(!/^#[0-9a-fA-F]{6}$/.test(v))return; const t=curText(); if(!t)return; t.color=v; document.getElementById('text-color').value=v; applyTextStyle(t); }

// Apply style to the single live element (no full re-render, keeps editing smooth)
function applyTextStyle(t){
  const el = document.querySelector('#text-layer .text-block[data-id="'+t.id+'"]');
  if(!el) return;
  el.style.fontSize=t.size+'px'; el.style.fontWeight=t.weight; el.style.color=t.color; el.style.textAlign=t.align;
  el.style.fontFamily=t.font||FONTS[0].css; el.style.fontStyle=t.italic?'italic':'normal'; el.style.letterSpacing=(t.letterSpacing||0)+'px'; el.style.lineHeight=(t.lineHeight||1.3);
  renderTextList();
}

function deleteText(id){
  histBefore();
  texts = texts.filter(t=>t.id!==id);
  if(selectedTextId===id){ selectedTextId=null; document.getElementById('text-ctrls').classList.remove('active'); }
  renderTexts();
}
function deleteSelectedText(){ if(selectedTextId!=null) deleteText(selectedTextId); }

// Drag + double-click-to-edit
function bindTextEl(el, id){
  let down=false, moved=false, sx=0, sy=0, bx=0, by=0;
  el.addEventListener('pointerdown', e=>{
    if(el.classList.contains('editing')) return;  // editing → let caret work
    selectText(id);
    const t = texts.find(x=>x.id===id);
    histBefore();
    down=true; moved=false; sx=e.clientX; sy=e.clientY; bx=t.x; by=t.y;
    el.classList.add('dragging'); el.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  el.addEventListener('pointermove', e=>{
    if(!down) return;
    const dx=e.clientX-sx, dy=e.clientY-sy;
    if(Math.abs(dx)>3||Math.abs(dy)>3) moved=true;
    const t = texts.find(x=>x.id===id);
    t.x=Math.round(bx+dx); t.y=Math.round(by+dy);
    if(typeof applySnap==='function'){ const sn=applySnap(t.x,t.y,el.offsetWidth,el.offsetHeight,'text',id); t.x=sn.x; t.y=sn.y; }
    el.style.left=t.x+'px'; el.style.top=t.y+'px';
  });
  const up=e=>{ if(!down)return; down=false; el.classList.remove('dragging'); if(typeof clearSnap==='function')clearSnap(); try{el.releasePointerCapture(e.pointerId);}catch(_){} };
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
  // double-click → edit mode
  el.addEventListener('dblclick', e=>{ enterTextEdit(el, false); e.stopPropagation(); });
  el.addEventListener('blur', ()=>{
    if(!el.classList.contains('editing')) return;
    el.classList.remove('editing'); el.contentEditable='false';
    const t=texts.find(x=>x.id===id);
    if(t){ t.content = el.innerText; document.getElementById('text-content').value=t.content; renderTextList(); }
  });
}

// Click empty canvas → deselect text
document.getElementById('work-area').addEventListener('pointerdown', e=>{
  if(e.target.closest('.text-block')||e.target.closest('.toolbar')) return;
  if(selectedTextId!=null){ selectedTextId=null; document.getElementById('text-ctrls').classList.remove('active'); renderTexts(); if(typeof revertPanel==='function') revertPanel(); }
});

// Reposition texts when canvas resizes (keep them proportional)
function repositionTextsOnResize(prevW, prevH, newW, newH){
  if(!prevW||!prevH) return;
  texts.forEach(t=>{ t.x=Math.round(t.x/prevW*newW); t.y=Math.round(t.y/prevH*newH); });
  renderTexts();
}

// Draw all text blocks onto an export canvas.
// ox/oy = export-canvas point that corresponds to preview canvas-wrap (0,0); k = scale.
// For image export ctx is pre-scaled to css px, so defaults (0,0,1) are correct.
function drawTextsOnCanvas(ctx, ox, oy, k){
  ox = ox||0; oy = oy||0; k = k||1;
  texts.forEach(t=>{
    const lines = (t.content||'').split('\n');
    ctx.save();
    const size = t.size*k;
    ctx.font = (t.italic?'italic ':'') + t.weight + ' ' + size + 'px ' + (t.font || "-apple-system,BlinkMacSystemFont,Inter,'Segoe UI',sans-serif");
    try { ctx.letterSpacing = ((t.letterSpacing||0)*k) + 'px'; } catch(_){}
    ctx.fillStyle = t.color;
    ctx.textBaseline = 'top';
    let blockW = 0;
    lines.forEach(ln=>{ blockW = Math.max(blockW, ctx.measureText(ln).width); });
    const padL = 6*k;     // matches .text-block padding-left
    const lineH = size * (t.lineHeight || 1.3);
    lines.forEach((ln, i)=>{
      const w = ctx.measureText(ln).width;
      let lx = ox + t.x*k + padL;
      if(t.align==='center') lx = ox + t.x*k + padL + (blockW - w)/2;
      else if(t.align==='right') lx = ox + t.x*k + padL + (blockW - w);
      ctx.fillText(ln, lx, oy + t.y*k + 2*k + i*lineH); // +2 matches padding-top
    });
    ctx.restore();
  });
}

// Compute the (ox,oy,k) transform that maps preview canvas-wrap coords to a
// video-export canvas, anchored on the device/frame center.
function textTransformForVideo(outW, outH, frameExportW, liveFrameW){
  const wrap=document.getElementById('canvas-wrap');
  const cWprev=parseFloat(wrap.style.width)||wrap.clientWidth||800;
  const cHprev=parseFloat(wrap.style.height)||wrap.clientHeight||450;
  const k = (frameExportW && liveFrameW) ? (frameExportW/liveFrameW) : 1;
  const ox = outW/2 - (cWprev/2)*k;
  const oy = outH/2 - (cHprev/2)*k;
  return {ox,oy,k};
}

/* ══════════════════════════════════════════════════════
   ELEMENTS — floating logos, badges, stickers & annotations.
   Mirrors the text-layer pattern: state array → renderOverlays()
   (DOM) → drag/resize → drawOverlaysOnCanvas() (both export paths).
   Positions are in preview canvas-wrap px, exactly like texts.
══════════════════════════════════════════════════════ */
let overlays = [];            // {id, kind, x, y, w, h, rot, color, thick, num, src, _img}
let selectedOvId = null;
let ovIdCounter = 0;
let ovBadgeNum = 0;           // running counter for numbered badges

function curOv(){ return overlays.find(o=>o.id===selectedOvId); }

/* ---- Marketing badge library (stylised, render as SVG → image) ---- */
const BADGES = [
  { name:'App Store', w:200, h:60, svg:(c,h)=>`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><rect x="1" y="1" width="198" height="58" rx="12" fill="#000" stroke="#fff" stroke-width="1"/><path d="M44 22.5c-1.6 0-3 1-3.9 1-1 0-2.2-.9-3.6-.9-1.9 0-3.6 1.1-4.6 2.8-2 3.4-.5 8.5 1.4 11.3.9 1.3 2 2.8 3.4 2.8 1.4-.1 1.9-.9 3.5-.9 1.6 0 2.1.9 3.6.9 1.5 0 2.4-1.4 3.3-2.7.6-.9.9-1.4 1.4-2.4-3.6-1.4-4.2-6.5-.6-8.5-1.1-1.4-2.6-2.2-4.3-2.2zm-.2-4c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.9-3.7 1.9-.8.9-1.5 2.4-1.3 3.8 1.4.1 2.8-.7 3.7-1.6z" fill="#fff"/><text x="60" y="26" font-family="-apple-system,Helvetica,Arial,sans-serif" font-size="11" fill="#fff">Download on the</text><text x="60" y="44" font-family="-apple-system,Helvetica,Arial,sans-serif" font-size="20" font-weight="600" fill="#fff">App Store</text></svg>` },
  { name:'Google Play', w:210, h:60, svg:()=>`<svg xmlns="http://www.w3.org/2000/svg" width="210" height="60" viewBox="0 0 210 60"><rect x="1" y="1" width="208" height="58" rx="12" fill="#000" stroke="#fff" stroke-width="1"/><g transform="translate(20 16)"><path d="M0 0v28l15-14z" fill="#00d3ff"/><path d="M0 0l19 11 4-4z" fill="#00f076"/><path d="M0 28l19-11 4 4z" fill="#fd5"/><path d="M19 11l8 5-4 4-4-4 4-4z" fill="#f44"/><path d="M19 11l8 5-4 4z" fill="#f44"/><path d="M19 17l8-1-4 4z" fill="#e33"/></g><text x="60" y="26" font-family="-apple-system,Helvetica,Arial,sans-serif" font-size="11" fill="#fff">GET IT ON</text><text x="60" y="44" font-family="-apple-system,Helvetica,Arial,sans-serif" font-size="20" font-weight="600" fill="#fff">Google Play</text></svg>` },
  { name:'Product Hunt', w:210, h:60, svg:()=>`<svg xmlns="http://www.w3.org/2000/svg" width="210" height="60" viewBox="0 0 210 60"><rect x="1" y="1" width="208" height="58" rx="12" fill="#da552f"/><circle cx="30" cy="30" r="16" fill="#fff"/><path d="M26 21h8a6 6 0 0 1 0 12h-4v6h-4zm4 4v4h4a2 2 0 0 0 0-4z" fill="#da552f"/><text x="56" y="26" font-family="-apple-system,Helvetica,Arial,sans-serif" font-size="10" fill="#fff" opacity=".85">FEATURED ON</text><text x="56" y="44" font-family="-apple-system,Helvetica,Arial,sans-serif" font-size="18" font-weight="700" fill="#fff">Product Hunt</text></svg>` },
  { name:'5-star rating', w:200, h:60, svg:()=>{const star='M10 1l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.4 4.7 17.1l1-5.8L1.5 7.2l5.9-.9z';let s='';for(let i=0;i<5;i++)s+=`<path transform="translate(${14+i*36} 12) scale(1.3)" d="${star}" fill="#ffc107"/>`;return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60"><rect x="1" y="1" width="198" height="58" rx="12" fill="#1d1d1f"/>${s}</svg>`;} },
];
function svgDataUrl(svg){ return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg); }
function buildBadgeGrid(){
  const grid=document.getElementById('badge-grid'); if(!grid) return;
  BADGES.forEach((b,i)=>{
    const btn=document.createElement('button');
    btn.type='button'; btn.className='badge-btn';
    btn.innerHTML=b.svg('#fff',60);
    btn.onclick=()=>addBadge(i);
    grid.appendChild(btn);
  });
}

function canvasPx(){
  const wrap=document.getElementById('canvas-wrap');
  return [parseFloat(wrap.style.width)||wrap.clientWidth||800, parseFloat(wrap.style.height)||wrap.clientHeight||450];
}

/* ---- Add elements ---- */
function addImageOverlay(src){
  histBefore();
  const [cw,ch]=canvasPx();
  const img=new Image();
  img.onload=()=>{
    const ar=img.naturalWidth/img.naturalHeight || 1;
    const w=Math.min(cw*0.32, 200), h=w/ar;
    const o={id:++ovIdCounter, kind:'image', x:Math.round(cw/2-w/2), y:Math.round(ch/2-h/2), w:Math.round(w), h:Math.round(h), rot:0, src, _img:img};
    overlays.push(o); renderOverlays(); selectOv(o.id);
  };
  img.onerror=()=>{ showExportNotice('Could not load that image.'); setTimeout(hideExportNotice,2000); };
  img.src=src;
}
function addBadge(i){
  histBefore();
  const b=BADGES[i]; const svg=b.svg('#fff',60); const src=svgDataUrl(svg);
  const [cw,ch]=canvasPx();
  const ar=b.w/b.h;
  const w=Math.min(cw*0.3, b.w*1.4), h=w/ar;
  const img=new Image();
  img.onload=()=>{ renderOverlays(); };
  img.src=src;
  const o={id:++ovIdCounter, kind:'image', x:Math.round(cw/2-w/2), y:Math.round(ch*0.7), w:Math.round(w), h:Math.round(h), rot:0, src, _img:img};
  overlays.push(o); renderOverlays(); selectOv(o.id);
}
function addAnnotation(kind){
  histBefore();
  const [cw,ch]=canvasPx();
  let o={id:++ovIdCounter, kind, rot:0, color:'#f97316'};
  if(kind==='arrow'){ o.x=Math.round(cw*0.4); o.y=Math.round(ch*0.55); o.w=Math.round(cw*0.16); o.h=-Math.round(ch*0.16); o.thick=4; }
  else if(kind==='circle'){ const d=Math.round(Math.min(cw,ch)*0.22); o.x=Math.round(cw/2-d/2); o.y=Math.round(ch/2-d/2); o.w=d; o.h=Math.round(d*0.75); o.thick=4; }
  else if(kind==='badge'){ const d=44; o.x=Math.round(cw/2-d/2); o.y=Math.round(ch*0.35); o.w=d; o.h=d; o.num=++ovBadgeNum; }
  overlays.push(o); renderOverlays(); selectOv(o.id);
}

/* ---- Geometry helper shared by preview + export ---- */
function arrowGeo(x0,y0,x1,y1,thick){
  const ang=Math.atan2(y1-y0,x1-x0);
  const hl=thick*3.2+9, hw=thick*1.6+5;
  // shorten the shaft so it ends at the base of the head
  const bx=x1-Math.cos(ang)*hl, by=y1-Math.sin(ang)*hl;
  const lx=x1-Math.cos(ang)*hl-Math.sin(ang)*hw, ly=y1-Math.sin(ang)*hl+Math.cos(ang)*hw;
  const rx=x1-Math.cos(ang)*hl+Math.sin(ang)*hw, ry=y1-Math.sin(ang)*hl-Math.cos(ang)*hw;
  return {shaft:[x0,y0,bx,by], head:[x1,y1,lx,ly,rx,ry]};
}

/* ---- Render to DOM ---- */
function ovBBox(o){
  if(o.kind==='arrow'){
    const pad=(o.thick||4)*3.2+14;
    const left=Math.min(o.x,o.x+o.w)-pad, top=Math.min(o.y,o.y+o.h)-pad;
    return {left, top, w:Math.abs(o.w)+pad*2, h:Math.abs(o.h)+pad*2};
  }
  return {left:o.x, top:o.y, w:o.w, h:o.h};
}
function ovInnerSVG(o, bb){
  if(o.kind==='image') return '<img src="'+o.src+'" alt="" draggable="false">';
  if(o.kind==='circle'){
    const sw=o.thick||4;
    return '<svg viewBox="0 0 '+o.w+' '+o.h+'" preserveAspectRatio="none"><ellipse cx="'+(o.w/2)+'" cy="'+(o.h/2)+'" rx="'+(o.w/2-sw)+'" ry="'+(o.h/2-sw)+'" fill="none" stroke="'+o.color+'" stroke-width="'+sw+'"/></svg>';
  }
  if(o.kind==='badge'){
    return '<svg viewBox="0 0 '+o.w+' '+o.h+'"><circle cx="'+(o.w/2)+'" cy="'+(o.h/2)+'" r="'+(o.w/2-1)+'" fill="'+o.color+'"/><text x="'+(o.w/2)+'" y="'+(o.h/2)+'" font-family="-apple-system,Helvetica,Arial,sans-serif" font-size="'+(o.w*0.55)+'" font-weight="700" fill="#fff" text-anchor="middle" dominant-baseline="central">'+o.num+'</text></svg>';
  }
  if(o.kind==='arrow'){
    const g=arrowGeo(o.x-bb.left, o.y-bb.top, o.x+o.w-bb.left, o.y+o.h-bb.top, o.thick||4);
    return '<svg viewBox="0 0 '+bb.w+' '+bb.h+'">'
      +'<line x1="'+g.shaft[0]+'" y1="'+g.shaft[1]+'" x2="'+g.shaft[2]+'" y2="'+g.shaft[3]+'" stroke="'+o.color+'" stroke-width="'+(o.thick||4)+'" stroke-linecap="round"/>'
      +'<polygon points="'+g.head[0]+','+g.head[1]+' '+g.head[2]+','+g.head[3]+' '+g.head[4]+','+g.head[5]+'" fill="'+o.color+'"/></svg>';
  }
  return '';
}
function renderOverlays(){
  const layer=document.getElementById('overlay-layer');
  layer.innerHTML='';
  overlays.forEach(o=>{
    const bb=ovBBox(o);
    const el=document.createElement('div');
    el.className='ov-item kind-'+o.kind+(o.id===selectedOvId?' selected':'');
    el.dataset.id=o.id;
    el.style.left=bb.left+'px'; el.style.top=bb.top+'px';
    el.style.width=bb.w+'px'; el.style.height=bb.h+'px';
    if(o.rot) el.style.transform='rotate('+o.rot+'deg)';
    el.innerHTML=ovInnerSVG(o,bb)+'<div class="ov-handle"></div>';
    // position resize handle at the arrow tip
    if(o.kind==='arrow'){
      const hx=o.x+o.w-bb.left, hy=o.y+o.h-bb.top;
      const hd=el.querySelector('.ov-handle');
      hd.style.left=(hx-6.5)+'px'; hd.style.top=(hy-6.5)+'px'; hd.style.right='auto'; hd.style.bottom='auto';
    }
    layer.appendChild(el);
    bindOvEl(el, o.id);
  });
  renderOvList();
}
function ovLabel(o){
  if(o.kind==='image') return 'Logo / image';
  if(o.kind==='arrow') return 'Arrow';
  if(o.kind==='circle') return 'Accent circle';
  if(o.kind==='badge') return 'Badge '+o.num;
  return 'Element';
}
function renderOvList(){
  const list=document.getElementById('el-list'); if(!list) return;
  list.innerHTML='';
  overlays.forEach(o=>{
    const item=document.createElement('div');
    item.className='el-list-item'+(o.id===selectedOvId?' active':'');
    item.innerHTML='<span class="eli-text">'+ovLabel(o)+'</span>'
      +'<span class="eli-del"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg></span>';
    item.onclick=(e)=>{ if(e.target.closest('.eli-del')){ deleteOv(o.id); e.stopPropagation(); return; } selectOv(o.id); };
    list.appendChild(item);
  });
}

/* ---- Selection + inspector ---- */
function selectOv(id){
  selectedOvId=id;
  document.querySelectorAll('#overlay-layer .ov-item').forEach(el=>el.classList.toggle('selected', parseInt(el.dataset.id)===id));
  const o=curOv();
  if(!o){ renderOvList(); return; }
  if(typeof openPanelForTool==='function') openPanelForTool('element');
  const isImg=o.kind==='image', isArrow=o.kind==='arrow', isShape=(o.kind==='circle'||o.kind==='arrow');
  document.getElementById('el-inspect-size').style.display = isArrow ? 'none':'block';
  document.getElementById('el-inspect-rot').style.display = isImg ? 'block':'none';
  document.getElementById('el-inspect-color').style.display = (o.kind==='image') ? 'none':'block';
  document.getElementById('el-inspect-thick').style.display = isShape ? 'block':'none';
  if(!isArrow){ document.getElementById('el-size').value=o.w; document.getElementById('el-size-val').textContent=Math.round(o.w)+'px'; }
  if(isImg){ document.getElementById('el-rot').value=o.rot||0; document.getElementById('el-rot-val').textContent=(o.rot||0)+'°'; }
  if(o.color){ document.getElementById('el-color').value=o.color; document.getElementById('el-color-hex').value=o.color; }
  if(o.thick){ document.getElementById('el-thick').value=o.thick; document.getElementById('el-thick-val').textContent=o.thick+'px'; }
  if(typeof repaintRanges==='function') repaintRanges();
  renderOvList();
}
function updateElSize(v){ const o=curOv(); if(!o)return; v=parseInt(v); document.getElementById('el-size-val').textContent=v+'px';
  if(o.kind==='image'){ const ar=(o._img&&o._img.naturalWidth)?o._img.naturalWidth/o._img.naturalHeight:o.w/o.h; o.h=Math.round(v/ar); }
  else if(o.kind==='circle'){ const ar=o.w/o.h; o.h=Math.round(v/ar); }
  else if(o.kind==='badge'){ o.h=v; }
  o.w=v; renderOverlays(); }
function updateElRot(v){ const o=curOv(); if(!o)return; o.rot=parseInt(v); document.getElementById('el-rot-val').textContent=v+'°'; renderOverlays(); }
function updateElColor(v){ const o=curOv(); if(!o)return; o.color=v; document.getElementById('el-color-hex').value=v; renderOverlays(); }
function updateElColorHex(v){ if(!/^#[0-9a-fA-F]{6}$/.test(v))return; const o=curOv(); if(!o)return; o.color=v; document.getElementById('el-color').value=v; renderOverlays(); }
function updateElThick(v){ const o=curOv(); if(!o)return; o.thick=parseInt(v); document.getElementById('el-thick-val').textContent=v+'px'; renderOverlays(); }
function deleteOv(id){ histBefore(); overlays=overlays.filter(o=>o.id!==id); if(selectedOvId===id){ selectedOvId=null; if(typeof showPanel==='function') showPanel('pp-empty'); } renderOverlays(); }
function deleteSelectedEl(){ if(selectedOvId!=null) deleteOv(selectedOvId); }

/* ---- Drag body + resize handle ---- */
// Reposition/resize a single overlay element in place (keeps the DOM node,
// so an active pointer-capture drag isn't interrupted).
function updateOvEl(el, o, rebuildInner){
  const bb=ovBBox(o);
  el.style.left=bb.left+'px'; el.style.top=bb.top+'px';
  el.style.width=bb.w+'px'; el.style.height=bb.h+'px';
  el.style.transform = o.rot ? 'rotate('+o.rot+'deg)' : '';
  if(rebuildInner){                       // shape changed (resize) → redraw contents
    el.innerHTML = ovInnerSVG(o,bb) + '<div class="ov-handle"></div>';
    if(o.kind==='arrow'){
      const hx=o.x+o.w-bb.left, hy=o.y+o.h-bb.top; const hd=el.querySelector('.ov-handle');
      hd.style.left=(hx-6.5)+'px'; hd.style.top=(hy-6.5)+'px'; hd.style.right='auto'; hd.style.bottom='auto';
    }
  }
}
function bindOvEl(el, id){
  const handle=el.querySelector('.ov-handle');
  let down=false, resizing=false, sx=0, sy=0, ox=0, oy=0, ow=0, oh=0;
  const onDown=(e, isResize)=>{
    selectOv(id); const o=overlays.find(x=>x.id===id); if(!o) return;
    histBefore();
    down=true; resizing=isResize; sx=e.clientX; sy=e.clientY;
    ox=o.x; oy=o.y; ow=o.w; oh=o.h;
    el.classList.add('dragging'); el.setPointerCapture(e.pointerId); e.preventDefault(); e.stopPropagation();
  };
  el.addEventListener('pointerdown', e=>onDown(e,false));
  handle.addEventListener('pointerdown', e=>onDown(e,true));
  el.addEventListener('pointermove', e=>{
    if(!down) return;
    const o=overlays.find(x=>x.id===id); if(!o) return;
    const dx=e.clientX-sx, dy=e.clientY-sy;
    if(resizing){
      if(o.kind==='arrow'){ o.w=Math.round(ow+dx); o.h=Math.round(oh+dy); }
      else if(o.kind==='image'){ const ar=(o._img&&o._img.naturalWidth)?o._img.naturalWidth/o._img.naturalHeight:ow/oh; let nw=Math.max(20,Math.round(ow+dx)); o.w=nw; o.h=Math.round(nw/ar); }
      else if(o.kind==='circle'){ o.w=Math.max(20,Math.round(ow+dx)); o.h=Math.max(15,Math.round(oh+dy)); }
      else { const nw=Math.max(20,Math.round(ow+dx)); o.w=nw; o.h=nw; }
    } else {
      o.x=Math.round(ox+dx); o.y=Math.round(oy+dy);
      const bb=ovBBox(o); const sn=applySnap(bb.left,bb.top,bb.w,bb.h,'ov',id);
      o.x+=Math.round(sn.x-bb.left); o.y+=Math.round(sn.y-bb.top);
    }
    // Update THIS element in place — do NOT re-render the whole layer, or we'd
    // destroy the node holding the pointer capture and the drag would stop.
    updateOvEl(el, o, resizing);
  });
  const up=e=>{ if(!down)return; down=false; resizing=false; el.classList.remove('dragging'); clearSnap(); try{el.releasePointerCapture(e.pointerId);}catch(_){}
    renderOverlays(); if(selectedOvId===id) selectOv(id); };
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
}

/* Click empty canvas → deselect element */
document.getElementById('work-area').addEventListener('pointerdown', e=>{
  if(e.target.closest('.ov-item')||e.target.closest('.text-block')||e.target.closest('.toolbar')) return;
  if(selectedOvId!=null){ selectedOvId=null; renderOverlays(); if(typeof revertPanel==='function') revertPanel(); }
});

/* Keep elements proportional when the canvas resizes */
function repositionOverlaysOnResize(prevW, prevH, newW, newH){
  if(!prevW||!prevH) return;
  const fx=newW/prevW, fy=newH/prevH, fs=Math.min(fx,fy);
  overlays.forEach(o=>{ o.x=Math.round(o.x*fx); o.y=Math.round(o.y*fy); o.w=Math.round(o.w*fs); o.h=Math.round(o.h*fs); });
  renderOverlays();
}

/* ---- Draw all elements onto an export canvas (called in both paths) ---- */
function drawOverlaysOnCanvas(ctx, ox, oy, k){
  ox=ox||0; oy=oy||0; k=k||1;
  overlays.forEach(o=>{
    ctx.save();
    if(o.kind==='image'){
      const img=o._img; if(!img||!img.complete||!img.naturalWidth){ ctx.restore(); return; }
      const x=ox+o.x*k, y=oy+o.y*k, w=o.w*k, h=o.h*k;
      if(o.rot){ ctx.translate(x+w/2,y+h/2); ctx.rotate(o.rot*Math.PI/180); ctx.drawImage(img,-w/2,-h/2,w,h); }
      else ctx.drawImage(img,x,y,w,h);
    } else if(o.kind==='circle'){
      const cx=ox+(o.x+o.w/2)*k, cy=oy+(o.y+o.h/2)*k;
      const sw=(o.thick||4)*k;
      ctx.beginPath(); ctx.ellipse(cx,cy,Math.max(1,(o.w/2-(o.thick||4))*k),Math.max(1,(o.h/2-(o.thick||4))*k),0,0,Math.PI*2);
      ctx.strokeStyle=o.color; ctx.lineWidth=sw; ctx.stroke();
    } else if(o.kind==='arrow'){
      const g=arrowGeo(ox+o.x*k, oy+o.y*k, ox+(o.x+o.w)*k, oy+(o.y+o.h)*k, (o.thick||4)*k);
      ctx.strokeStyle=o.color; ctx.fillStyle=o.color; ctx.lineWidth=(o.thick||4)*k; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(g.shaft[0],g.shaft[1]); ctx.lineTo(g.shaft[2],g.shaft[3]); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(g.head[0],g.head[1]); ctx.lineTo(g.head[2],g.head[3]); ctx.lineTo(g.head[4],g.head[5]); ctx.closePath(); ctx.fill();
    } else if(o.kind==='badge'){
      const cx=ox+(o.x+o.w/2)*k, cy=oy+(o.y+o.h/2)*k, r=(o.w/2)*k;
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle=o.color; ctx.fill();
      ctx.fillStyle='#fff'; ctx.font='700 '+(o.w*0.55*k)+'px -apple-system,BlinkMacSystemFont,Inter,"Segoe UI",sans-serif';
      ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(String(o.num), cx, cy+r*0.04);
    }
    ctx.restore();
  });
}

/* Asset upload */
document.getElementById('haf').addEventListener('change', e=>{
  const file=e.target.files&&e.target.files[0];
  if(!validateUpload(file,'image')){ e.target.value=''; return; }
  const reader=new FileReader();
  reader.onload=ev=>addImageOverlay(ev.target.result);
  reader.readAsDataURL(file);
  e.target.value='';
});

/* ══════════════════════════════════════════════════════
   SMART ALIGNMENT, SNAP, GRID & SOCIAL SAFE-ZONES
   All guides are screen-only (inside #guide-layer, never exported).
══════════════════════════════════════════════════════ */
const SNAP_THRESH = 6;
// Collect vertical (x) and horizontal (y) alignment anchors from the canvas edges/center
// and every OTHER element's left/center/right & top/center/bottom — Figma-style smart guides.
function snapAnchors(exKind, exId){
  const [cw,ch]=canvasPx();
  const V=[0, cw/2, cw], H=[0, ch/2, ch];
  if(typeof texts!=='undefined') texts.forEach(t=>{
    if(exKind==='text' && t.id===exId) return;
    const el=document.querySelector('#text-layer .text-block[data-id="'+t.id+'"]'); if(!el) return;
    const w=el.offsetWidth, h=el.offsetHeight; V.push(t.x, t.x+w/2, t.x+w); H.push(t.y, t.y+h/2, t.y+h);
  });
  if(typeof overlays!=='undefined') overlays.forEach(o=>{
    if(exKind==='ov' && o.id===exId) return;
    const b=ovBBox(o); V.push(b.left, b.left+b.w/2, b.left+b.w); H.push(b.top, b.top+b.h/2, b.top+b.h);
  });
  return {V,H};
}
// Snap box (x,y,w,h) to the nearest anchors; draw guide lines; return snapped {x,y}.
function applySnap(x, y, w, h, exKind, exId){
  const {V,H}=snapAnchors(exKind, exId);
  const sv=document.getElementById('snap-v'), sh=document.getElementById('snap-h');
  let bvd=Infinity, nx=x, vline=null;
  [x, x+w/2, x+w].forEach(c=>V.forEach(t=>{ const d=Math.abs(c-t); if(d<bvd){ bvd=d; vline=t; nx=x+(t-c); } }));
  let bhd=Infinity, ny=y, hline=null;
  [y, y+h/2, y+h].forEach(c=>H.forEach(t=>{ const d=Math.abs(c-t); if(d<bhd){ bhd=d; hline=t; ny=y+(t-c); } }));
  if(bvd<=SNAP_THRESH){ if(sv){ sv.style.left=vline+'px'; sv.classList.add('on'); } } else { nx=x; if(sv) sv.classList.remove('on'); }
  if(bhd<=SNAP_THRESH){ if(sh){ sh.style.top=hline+'px'; sh.classList.add('on'); } } else { ny=y; if(sh) sh.classList.remove('on'); }
  return {x:Math.round(nx), y:Math.round(ny)};
}
function clearSnap(){ const sv=document.getElementById('snap-v'),sh=document.getElementById('snap-h'); if(sv)sv.classList.remove('on'); if(sh)sh.classList.remove('on'); }

function alignedTarget(){
  if(selectedOvId!=null){ const o=curOv(); if(o) return {type:'ov', o}; }
  if(typeof selectedTextId!=='undefined' && selectedTextId!=null){ const t=texts.find(x=>x.id===selectedTextId); if(t) return {type:'text', t}; }
  return null;
}
function alignSelected(mode){
  const tg=alignedTarget();
  if(!tg){ showExportNotice('Select a text or element to align it.'); setTimeout(hideExportNotice,1600); return; }
  const [cw,ch]=canvasPx();
  if(tg.type==='ov'){
    const o=tg.o, bb=ovBBox(o); let nl=bb.left, nt=bb.top;
    if(mode==='left') nl=0; else if(mode==='right') nl=cw-bb.w; else if(mode==='centerH'||mode==='center') nl=(cw-bb.w)/2;
    if(mode==='top') nt=0; else if(mode==='bottom') nt=ch-bb.h; else if(mode==='centerV'||mode==='center') nt=(ch-bb.h)/2;
    o.x+=Math.round(nl-bb.left); o.y+=Math.round(nt-bb.top); renderOverlays();
  } else {
    const t=tg.t, el=document.querySelector('#text-layer .text-block[data-id="'+t.id+'"]');
    const w=el?el.offsetWidth:120, h=el?el.offsetHeight:40;
    if(mode==='left') t.x=0; else if(mode==='right') t.x=cw-w; else if(mode==='centerH'||mode==='center') t.x=Math.round((cw-w)/2);
    if(mode==='top') t.y=0; else if(mode==='bottom') t.y=ch-h; else if(mode==='centerV'||mode==='center') t.y=Math.round((ch-h)/2);
    renderTexts();
  }
}

function toggleGrid(on){ document.getElementById('guide-grid').classList.toggle('on', !!on); }

const SAFE_ZONES = {
  'ig-square':{ar:1, label:'Square 1:1'}, 'ig-portrait':{ar:4/5, label:'Portrait 4:5'},
  'story':{ar:9/16, label:'Story 9:16'}, 'x-post':{ar:16/9, label:'X 16:9'}, 'og':{ar:1.91, label:'OG 1.91:1'}
};
let currentSafeZone='none';
function setSafeZone(key){
  currentSafeZone=key;
  const host=document.getElementById('safe-zone-host'); if(!host) return;
  host.innerHTML='';
  const z=SAFE_ZONES[key]; if(!z) return;
  const [cw,ch]=canvasPx();
  let w=cw, h=w/z.ar; if(h>ch){ h=ch; w=h*z.ar; }
  const box=document.createElement('div'); box.className='safe-zone';
  box.style.width=w+'px'; box.style.height=h+'px';
  box.style.left=((cw-w)/2)+'px'; box.style.top=((ch-h)/2)+'px';
  box.innerHTML='<span class="sz-lbl">Safe area · '+z.label+'</span>';
  host.appendChild(box);
}

/* ══════════════════════════════════════════════════════
   ANIMATED GIF ENCODER (self-contained: median-cut palette + GIF89a LZW)
══════════════════════════════════════════════════════ */
function gifChannelRange(box){
  let mn=[255,255,255], mx=[0,0,0];
  for(const c of box){ for(let k=0;k<3;k++){ if(c[k]<mn[k])mn[k]=c[k]; if(c[k]>mx[k])mx[k]=c[k]; } }
  const r=[mx[0]-mn[0],mx[1]-mn[1],mx[2]-mn[2]];
  let ch=0; if(r[1]>r[ch])ch=1; if(r[2]>r[ch])ch=2;
  return {range:r[ch], ch};
}
function gifBuildPalette(frames, w, h, maxColors){
  const samples=[]; const step=Math.max(1, Math.floor((w*h)/4000));
  for(const f of frames){ const d=f.data; for(let p=0;p<w*h;p+=step){ const i=p*4; samples.push([d[i],d[i+1],d[i+2]]); } }
  if(!samples.length) samples.push([0,0,0]);
  let boxes=[samples];
  while(boxes.length<maxColors){
    let bi=-1, best=-1, bch=0;
    boxes.forEach((box,idx)=>{ if(box.length<2) return; const r=gifChannelRange(box); if(r.range>best){ best=r.range; bi=idx; bch=r.ch; } });
    if(bi<0) break;
    const box=boxes[bi]; box.sort((a,b)=>a[bch]-b[bch]);
    const mid=box.length>>1;
    boxes.splice(bi,1,box.slice(0,mid),box.slice(mid));
  }
  return boxes.map(box=>{ let r=0,g=0,b=0; for(const c of box){r+=c[0];g+=c[1];b+=c[2];} const n=box.length||1; return [Math.round(r/n),Math.round(g/n),Math.round(b/n)]; });
}
function gifMakeMapper(pal){
  const cache=new Map();
  return (r,g,b)=>{
    const key=((r>>3)<<10)|((g>>3)<<5)|(b>>3);
    const hit=cache.get(key); if(hit!==undefined) return hit;
    let best=0, bd=1e12;
    for(let i=0;i<pal.length;i++){ const p=pal[i], dr=r-p[0],dg=g-p[1],db=b-p[2], d=dr*dr+dg*dg+db*db; if(d<bd){bd=d;best=i;} }
    cache.set(key,best); return best;
  };
}
function gifLzw(indices, minCodeSize){
  const clear=1<<minCodeSize, eoi=clear+1;
  let codeSize=minCodeSize+1, next, dict;
  const out=[]; let buf=0, bits=0;
  const emit=code=>{ buf|=code<<bits; bits+=codeSize; while(bits>=8){ out.push(buf&255); buf>>=8; bits-=8; } };
  const reset=()=>{ dict=new Map(); for(let i=0;i<clear;i++) dict.set(''+i,i); next=eoi+1; codeSize=minCodeSize+1; };
  reset(); emit(clear);
  let w=''+indices[0];
  for(let i=1;i<indices.length;i++){
    const k=indices[i]; const c=w+','+k;
    if(dict.has(c)){ w=c; }
    else{
      emit(dict.get(w));
      dict.set(c, next++);
      if(next===(1<<codeSize) && codeSize<12) codeSize++;
      if(next===4096){ emit(clear); reset(); }
      w=''+k;
    }
  }
  emit(dict.get(w)); emit(eoi);
  if(bits>0) out.push(buf&255);
  return out;
}
function encodeAnimatedGif(frames, w, h, delayCs){
  const pal0=gifBuildPalette(frames, w, h, 256);
  let ctSize=2; while(ctSize<pal0.length) ctSize<<=1;
  const pal=pal0.slice(0,ctSize); while(pal.length<ctSize) pal.push([0,0,0]);
  const minCodeSize=Math.max(2, Math.round(Math.log2(ctSize)));
  const gctField=Math.round(Math.log2(ctSize))-1;
  const map=gifMakeMapper(pal);
  const bytes=[];
  const push=(...b)=>{ for(const x of b) bytes.push(x&255); };
  const str=s=>{ for(let i=0;i<s.length;i++) bytes.push(s.charCodeAt(i)); };
  str('GIF89a');
  push(w&255,(w>>8)&255, h&255,(h>>8)&255, 0x80|(gctField&7), 0, 0);
  for(const c of pal) push(c[0],c[1],c[2]);
  push(0x21,0xFF,0x0B); str('NETSCAPE2.0'); push(0x03,0x01,0x00,0x00,0x00);  // loop forever
  for(const f of frames){
    push(0x21,0xF9,0x04, 0x04, delayCs&255,(delayCs>>8)&255, 0x00, 0x00);    // GCE: do-not-dispose
    push(0x2C, 0,0,0,0, w&255,(w>>8)&255, h&255,(h>>8)&255, 0x00);           // image descriptor
    const d=f.data, n=w*h, idx=new Array(n);
    for(let p=0;p<n;p++){ const i=p*4; idx[p]=map(d[i],d[i+1],d[i+2]); }
    push(minCodeSize);
    const lz=gifLzw(idx, minCodeSize);
    let off=0; while(off<lz.length){ const m=Math.min(255, lz.length-off); push(m); for(let j=0;j<m;j++) push(lz[off+j]); off+=m; }
    push(0);
  }
  push(0x3B);
  return new Uint8Array(bytes);
}

/* ══════════════════════════════════════════════════════
   DEVICE FINISH (chassis color) + SCREEN GLARE
   Chassis grays in the bezel SVG are remapped onto a tint ramp,
   so one tint works across every device. Applied in preview + all exports.
══════════════════════════════════════════════════════ */
let chassisTint = null;    // null = original graphite; else hex tint
let glareOn = false;

function hexToRgb(h){ h=(''+h).replace('#',''); if(h.length===3)h=h.split('').map(x=>x+x).join(''); if(h.length!==6)return null; return {r:parseInt(h.slice(0,2),16),g:parseInt(h.slice(2,4),16),b:parseInt(h.slice(4,6),16)}; }
// Recolor only the gray chassis fills; leave the black screen + colored bits alone.
function tintBezelSVG(svg, tint){
  if(!tint) return svg;
  const t=hexToRgb(tint); if(!t) return svg;
  return svg.replace(/fill="(#[0-9a-fA-F]{3,6})"/g, (m, hex)=>{
    const c=hexToRgb(hex); if(!c) return m;
    if(Math.max(c.r,c.g,c.b)-Math.min(c.r,c.g,c.b) > 18) return m;   // colored → keep
    const lum=(c.r+c.g+c.b)/3;
    const f=Math.min(1, lum/58);                                     // map dark chassis grays onto the ramp
    return 'fill="rgb('+Math.round(t.r*f)+','+Math.round(t.g*f)+','+Math.round(t.b*f)+')"';
  });
}
const FINISHES=[
  {name:'Graphite',  sw:'#3a3a3f', tint:null},
  {name:'Midnight',  sw:'#2c3042', tint:'#3a4060'},
  {name:'Silver',    sw:'#c9ccd1', tint:'#d2d5da'},
  {name:'Titanium',  sw:'#8e8e93', tint:'#9c9ca2'},
  {name:'Gold',      sw:'#cdae6e', tint:'#dcbd7c'},
  {name:'Deep Blue', sw:'#2b3a67', tint:'#3a52a0'},
];
function buildFinishGrid(){
  const grid=document.getElementById('finish-grid'); if(!grid) return;
  grid.innerHTML='';
  FINISHES.forEach((fin,i)=>{
    const sw=document.createElement('div');
    sw.className='finish-sw'+(i===0?' active':'');
    sw.style.background=fin.sw;
    sw.title=fin.name;
    sw.onclick=()=>setFinish(i);
    grid.appendChild(sw);
  });
  // custom color swatch (rainbow chip with a hidden native color picker)
  const cw=document.createElement('label');
  cw.className='finish-sw custom'; cw.title='Custom color';
  cw.innerHTML='<input type="color" value="#5b6cff" oninput="setFinishCustom(this.value)">';
  grid.appendChild(cw);
}
function applyChassisTint(){
  if(layoutMode==='dual'){ renderDualStage(); return; }
  if(activeDevice){ const bz=document.getElementById('device-bezel'); if(bz) bz.innerHTML=tintBezelSVG(activeDevice.bezel('#000'), chassisTint); }
}
function setFinish(i){
  if(layoutMode==='dual'){ if(slots[selectedSlot]) slots[selectedSlot].tint=FINISHES[i].tint; }
  else chassisTint=FINISHES[i].tint;
  document.querySelectorAll('#finish-grid .finish-sw').forEach((el,idx)=>el.classList.toggle('active',idx===i));
  applyChassisTint();
}
function setFinishCustom(hex){
  if(layoutMode==='dual'){ if(slots[selectedSlot]) slots[selectedSlot].tint=hex; }
  else chassisTint=hex;
  document.querySelectorAll('#finish-grid .finish-sw').forEach(el=>el.classList.toggle('active', el.classList.contains('custom')));
  applyChassisTint();
}
function toggleGlare(on){ glareOn=!!on; document.querySelectorAll('.screen-glare').forEach(el=>el.classList.toggle('on', glareOn)); }
// Draw a soft diagonal sheen inside the current screen clip (export paths).
function drawGlare(ctx, x, y, w, h){
  if(!glareOn) return;
  const g=ctx.createLinearGradient(x, y, x+w*0.55, y+h*0.8);
  g.addColorStop(0,'rgba(255,255,255,0.22)');
  g.addColorStop(0.22,'rgba(255,255,255,0.06)');
  g.addColorStop(0.45,'rgba(255,255,255,0)');
  ctx.fillStyle=g; ctx.fillRect(x,y,w,h);
}

/* ══════════════════════════════════════════════════════
   CONTEXTUAL PANELS — bottom toolbar drives the right panel (Figma-style)
══════════════════════════════════════════════════════ */
const TOOL_PANEL = {
  canvas:'pp-canvas', frame:'pp-frame', background:'pp-background',
  text:'pp-text', image:'pp-image', shapes:'pp-shapes', badges:'pp-badges',
  element:'pp-element', device:'pp-device'
};
let activeTool = null;     // last toolbar tool clicked (null = nothing)
let textPlaceMode = false; // when Text tool is armed: next canvas click drops a text box
function showPanel(id){ document.querySelectorAll('.prop-panel').forEach(p=>p.classList.toggle('active', p.id===id)); }
function setToolHighlight(tool){ document.querySelectorAll('#toolbar .tool').forEach(b=>b.classList.toggle('active', b.dataset.tool===tool)); }
function setTextPlace(on){
  textPlaceMode=!!on;
  const wa=document.getElementById('work-area'); if(wa) wa.classList.toggle('text-place', textPlaceMode);
}
function selectTool(tool){
  activeTool=tool; setToolHighlight(tool); showPanel(TOOL_PANEL[tool]||'pp-empty');
  setTextPlace(tool==='text');   // arm click-to-place when Text tool is chosen
}
// Selection-driven panel open (text/element/device). Text doubles as a toolbar tool.
function openPanelForTool(key){
  if(key==='text'){ activeTool='text'; setToolHighlight('text'); showPanel('pp-text'); return; }
  showPanel(TOOL_PANEL[key]||'pp-empty');   // element / device: keep current toolbar highlight
}
// After deselecting an object, go back to the active toolbar tool (or empty)
function revertPanel(){ setToolHighlight(activeTool); showPanel(activeTool ? (TOOL_PANEL[activeTool]||'pp-empty') : 'pp-empty'); }

// Enter inline edit on a text block element; selectAll replaces the placeholder
function enterTextEdit(el, selectAll){
  if(!el) return;
  el.classList.add('editing'); el.contentEditable='true'; el.focus();
  const r=document.createRange(); r.selectNodeContents(el);
  if(!selectAll) r.collapse(false);
  const sel=window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
}
// Create a text box at a point in canvas-wrap coords and immediately edit it
function addTextAt(x, y){
  histBefore();
  const t={ id:++textIdCounter, content:'Your text', x:Math.round(x), y:Math.round(y),
    size:40, weight:'700', color:'#ffffff', align:'left', font:FONTS[0].css, letterSpacing:0, lineHeight:1.3 };
  texts.push(t); renderTexts(); selectText(t.id);
  requestAnimationFrame(()=>{ enterTextEdit(document.querySelector('#text-layer .text-block[data-id="'+t.id+'"]'), true); });
  return t;
}
// Click on the canvas while the Text tool is armed → drop a text box there
document.getElementById('work-area').addEventListener('pointerdown', e=>{
  if(!textPlaceMode) return;
  if(e.target.closest('.text-block')||e.target.closest('.toolbar')) return;
  const wrap=document.getElementById('canvas-wrap'); const r=wrap.getBoundingClientRect();
  const sc=(parseFloat(wrap.style.transform.replace(/[^0-9.]/g,''))||1); // canvas may be zoom-scaled
  addTextAt((e.clientX-r.left)/sc - 8, (e.clientY-r.top)/sc - 24);
  setTextPlace(false);   // one placement, then back to editing the new box
  e.stopPropagation();
}, true);  // capture phase: runs before the deselect/mockup-drag handlers

// Move the selected text or element by (dx,dy) canvas px
function nudgeSelected(dx, dy){
  if(selectedOvId!=null){ const o=curOv(); if(o){ histBefore(); o.x+=dx; o.y+=dy; renderOverlays(); } return; }
  if(selectedTextId!=null){ const t=curText(); if(t){ histBefore(); t.x+=dx; t.y+=dy; renderTexts(); } }
}

/* ══════════════════════════════════════════════════════
   UNDO / REDO — snapshots the editable layers (texts, elements, mockup offset, tilt)
══════════════════════════════════════════════════════ */
let _past=[], _future=[], _histLock=false;
function _snap(){
  return JSON.stringify({
    texts, overlays: overlays.map(o=>{ const c=Object.assign({},o); delete c._img; return c; }),
    mockOffX, mockOffY, tiltX, tiltY, textIdCounter, ovIdCounter, ovBadgeNum
  });
}
function histBefore(){
  if(_histLock) return;
  const s=_snap();
  if(_past.length && _past[_past.length-1]===s) return;   // skip duplicate (e.g. click without move)
  _past.push(s); if(_past.length>60) _past.shift();
  _future.length=0;
}
function _restore(json){
  const s=JSON.parse(json); _histLock=true;
  texts = s.texts||[];
  overlays = (s.overlays||[]).map(o=>{ if(o.kind==='image'&&o.src){ const img=new Image(); img.src=o.src; o._img=img; } return o; });
  mockOffX=s.mockOffX||0; mockOffY=s.mockOffY||0; tiltX=s.tiltX||0; tiltY=s.tiltY||0;
  textIdCounter=Math.max(textIdCounter,s.textIdCounter||0);
  ovIdCounter=Math.max(ovIdCounter,s.ovIdCounter||0);
  ovBadgeNum=Math.max(ovBadgeNum,s.ovBadgeNum||0);
  selectedTextId=null; selectedOvId=null;
  renderTexts(); renderOverlays(); applyMockupTransform();
  const tx=document.getElementById('sl-tiltx'), ty=document.getElementById('sl-tilty');
  if(tx){ tx.value=tiltX; document.getElementById('vl-tiltx').textContent=tiltX+'°'; }
  if(ty){ ty.value=tiltY; document.getElementById('vl-tilty').textContent=tiltY+'°'; }
  if(typeof revertPanel==='function') revertPanel();
  if(typeof repaintRanges==='function') repaintRanges();
  _histLock=false;
}
function undo(){ if(!_past.length) return; _future.push(_snap()); _restore(_past.pop()); }
function redo(){ if(!_future.length) return; _past.push(_snap()); _restore(_future.pop()); }
function deselectAll(){
  if(selectedTextId!=null){ selectedTextId=null; document.getElementById('text-ctrls').classList.remove('active'); renderTexts(); }
  if(selectedOvId!=null){ selectedOvId=null; renderOverlays(); }
  if(typeof setImgEdit==='function') setImgEdit(false);
  if(typeof setSlotImgEdit==='function') setSlotImgEdit(-1, false);
  setTextPlace(false); revertPanel();
}

/* ── Keyboard shortcuts (Figma-style) ── */
document.addEventListener('keydown', e=>{
  const tag=(e.target.tagName||'').toLowerCase();
  const editing = tag==='input'||tag==='textarea'||e.target.isContentEditable;
  // Undo / redo (work everywhere except while editing text, where the browser handles it)
  if((e.metaKey||e.ctrlKey) && (e.key==='z'||e.key==='Z')){ if(editing) return; e.preventDefault(); e.shiftKey?redo():undo(); return; }
  if((e.metaKey||e.ctrlKey) && (e.key==='y'||e.key==='Y')){ if(editing) return; e.preventDefault(); redo(); return; }
  if(editing) return;  // don't hijack typing
  if(e.metaKey||e.ctrlKey||e.altKey) return;
  switch(e.key){
    case 't': case 'T': selectTool('text'); e.preventDefault(); break;
    case 'b': case 'B': selectTool('background'); e.preventDefault(); break;
    case 'f': case 'F': selectTool('frame'); e.preventDefault(); break;
    case 'v': case 'V': case 'Escape':
      activeTool=null; setToolHighlight(null); deselectAll(); showPanel('pp-empty'); break;
    case 'Delete': case 'Backspace':
      if(selectedOvId!=null){ deleteSelectedEl(); e.preventDefault(); }
      else if(selectedTextId!=null){ deleteSelectedText(); e.preventDefault(); }
      break;
    case 'ArrowUp':    nudgeSelected(0, e.shiftKey?-10:-1); e.preventDefault(); break;
    case 'ArrowDown':  nudgeSelected(0, e.shiftKey? 10: 1); e.preventDefault(); break;
    case 'ArrowLeft':  nudgeSelected(e.shiftKey?-10:-1, 0); e.preventDefault(); break;
    case 'ArrowRight': nudgeSelected(e.shiftKey? 10: 1, 0); e.preventDefault(); break;
  }
});


/* ── Drag the whole mockup to reposition it on the canvas (single mode) ── */
// Image-adjust mode (single): click the screen image to enter, then drag pans it.
let imgEdit = false;
function setImgEdit(on){
  imgEdit=!!on;
  const gs=document.getElementById('gadget-screen'); if(gs) gs.classList.toggle('img-editing', imgEdit);
  const mi=document.getElementById('mockup-inner');  if(mi) mi.classList.toggle('img-editing', imgEdit);
}
(function enableMockupDrag(){
  const wrap=document.getElementById('mockup-wrap'); if(!wrap) return;
  let armed=false, dragging=false, mode='move', onScreen=false, sx=0, sy=0, bx=0, by=0, pid=null;
  wrap.addEventListener('pointerdown', e=>{
    if(typeof layoutMode!=='undefined' && layoutMode==='dual') return; // dual uses its own instances
    if(e.target.closest('.text-block')||e.target.closest('.ov-item')) return; // let layers handle their own
    onScreen = !!(e.target.closest('#gadget-screen')||e.target.closest('#mockup-inner'));
    // Drag moves the mockup by default; only pans the image when it's been clicked into adjust mode.
    mode = (imgEdit && onScreen && hasMedia) ? 'pan' : 'move';
    armed=true; dragging=false; sx=e.clientX; sy=e.clientY; pid=e.pointerId;
    if(mode==='pan'){ bx=mediaOffX; by=mediaOffY; } else { bx=mockOffX; by=mockOffY; }
    if(hasMedia) e.preventDefault();   // stop native image-drag ghost (keeps click-to-upload when empty)
  });
  wrap.addEventListener('pointermove', e=>{
    if(!armed) return;
    const dx=e.clientX-sx, dy=e.clientY-sy;
    if(!dragging){ if(Math.abs(dx)<3 && Math.abs(dy)<3) return; dragging=true; histBefore(); wrap.setPointerCapture(pid); wrap.classList.add('dragging'); }
    if(mode==='pan'){ mediaOffX=Math.round(bx+dx); mediaOffY=Math.round(by+dy); applyMediaTransform(); }
    else { mockOffX=Math.round(bx+dx); mockOffY=Math.round(by+dy); applyMockupTransform(); }
  });
  const up=e=>{
    if(!armed) return; armed=false;
    if(dragging){ wrap.classList.remove('dragging'); try{wrap.releasePointerCapture(pid);}catch(_){} }
    else { setImgEdit(onScreen && hasMedia); }  // tap image → adjust mode; tap frame → exit
    dragging=false;
  };
  wrap.addEventListener('pointerup', up);
  wrap.addEventListener('pointercancel', up);

  const single=()=>!(typeof layoutMode!=='undefined' && layoutMode==='dual');

  // Zoom: scroll wheel + trackpad pinch (Chrome/Edge/Firefox send wheel+ctrlKey).
  // preventDefault stops the browser from page-zooming.
  wrap.addEventListener('wheel', e=>{
    if(!hasMedia || !single()) return;
    e.preventDefault();
    const step = e.ctrlKey ? 0.005 : 0.02;   // gentler zoom
    const delta = (e.deltaY<0 ? 1 : -1) * step * (e.ctrlKey ? Math.min(3, Math.abs(e.deltaY)) : 1);
    setMediaZoom(mediaScale + delta);
  }, {passive:false});

  // Zoom: touchscreen two-finger pinch
  let pStart=0, pBase=1;
  wrap.addEventListener('touchstart', e=>{
    if(hasMedia && single() && e.touches.length===2){ pStart=touchDist(e.touches); pBase=mediaScale; }
  }, {passive:false});
  wrap.addEventListener('touchmove', e=>{
    if(hasMedia && single() && e.touches.length===2 && pStart){ e.preventDefault(); setMediaZoom(pBase * touchDist(e.touches)/pStart); }
  }, {passive:false});
  const endT=()=>{ pStart=0; };
  wrap.addEventListener('touchend', endT);
  wrap.addEventListener('touchcancel', endT);

  // Zoom: Safari trackpad pinch (fires gesture* events, not wheel)
  let gBase=1;
  wrap.addEventListener('gesturestart', e=>{ if(hasMedia && single()){ e.preventDefault(); gBase=mediaScale; } }, {passive:false});
  wrap.addEventListener('gesturechange', e=>{ if(hasMedia && single()){ e.preventDefault(); setMediaZoom(gBase * (1+(e.scale-1)*0.5)); } }, {passive:false});
  wrap.addEventListener('gestureend', e=>{ if(hasMedia && single()) e.preventDefault(); }, {passive:false});
})();

// Safety net: block browser page-zoom (trackpad pinch) anywhere over the editor
// canvas, so a pinch that lands just outside a device never zooms the whole page.
(function blockCanvasPageZoom(){
  const wa=document.getElementById('work-area'); if(!wa) return;
  wa.addEventListener('wheel', e=>{ if(e.ctrlKey) e.preventDefault(); }, {passive:false});
  wa.addEventListener('gesturestart', e=>e.preventDefault(), {passive:false});
  wa.addEventListener('gesturechange', e=>e.preventDefault(), {passive:false});
})();

// Tapping the empty canvas (outside the mockup) commits/exits image-adjust mode (like Esc)
document.getElementById('work-area').addEventListener('pointerdown', e=>{
  if(e.target.closest('#mockup-wrap')||e.target.closest('#dual-stage')||e.target.closest('.toolbar')||e.target.closest('.text-block')||e.target.closest('.ov-item')) return;
  setImgEdit(false); if(typeof setSlotImgEdit==='function') setSlotImgEdit(-1,false);
});

// Keep the slider fill in sync as the user drags any range input
document.addEventListener('input', e=>{ if(e.target && e.target.matches && e.target.matches('.slider-row input[type=range]')) paintRange(e.target); });

/* ── INIT ── */
buildImgGrid(); buildGradGrid(); buildSolidSws(); buildBadgeGrid();
buildDeviceGrid(); buildFinishGrid(); buildFontSelect();
requestAnimationFrame(applyCanvasRatio);
requestAnimationFrame(repaintRanges);
