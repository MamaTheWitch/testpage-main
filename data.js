    var shopItems = [
    {name: "Short sleeve black training shirt", print: 3, size: "A", text: "T Pacer Jsy Jr", price: 21.49, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Detail/351082_103_PUMA_T%20PACER%20JSY%20JR_1432352.png"},
    {name: "Long sleeve black training shirt", print: 3, size: "A", text: "T Liga 1/4 Zip Top Jr", price: 35.49, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/351073_103_PUMA_T%20LIGA%2014%20ZIP%20TOP%20JR_1432352.jpg"},
    {name: "Yellow tournament shirt", print: 0, size: "A", text: "T Liga Striped Jsy Jr", price: 33.49, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/360820_104_PUMA_T%20LIGA%20STRIPED%20JSY%20JR_1432352.jpg"},
    {name: "White guest shirt", print: 0, size: "A", text: "T Liga Ss Jsy Jr", price: 29.49, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/358885_104_PUMA_T%20LIGA%20SS%20JSY%20JR_1432352.jpg"},
    {name: "Training shorts", print: 4, size: "A", text: "T Goal K Sho Jr", price: 13.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/316580_103_PUMA_T%20GOAL%20K%20SHO%20JR_1432352.jpg"},
    {name: "Training pants", print: 3, size: "A", text: "T Liga Trg Pnt Jr", price: 31.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/351046_101_PUMA_T%20LIGA%20TRG%20PNT%20JR_1432352.jpg"},
    {name: "Training jacket", print: 3, size: "A", text: "T Liga Trg Jkt Jr", price: 38.49, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/351072_103_PUMA_T%20LIGA%20TRG%20JKT%20JR_1432352.jpg"},
    {name: "Hoodie", print: 3, size: "A", text: "T Goal Cas Hood Jr", price: 31.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/299732_101_PUMA_T%20GOAL%20CAS%20HOOD%20JR_1432352.jpg"},
    {name: "Zip-up hoodie", print: 3, size: "A", text: "T Goal Hood Jkt Jr", price: 38.49, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/299730_101_PUMA_T%20GOAL%20HOOD%20JKT%20JR_1432352.jpg"},
    {name: "Softshell jacket", print: 0, size: "B", text: "Softshel Jkt Jr", price: 39.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/259328_104_CLIQUE_SOFTSHEL%20JKT%20JR_1432352.jpg"},
    {name: "Jacket", print: null, size: "A", text: "T Liga Aw Jkt Jr", price: 48.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/351055_103_PUMA_T%20LIGA%20AW%20JKT%20JR_1432352.jpg"},
    {name: "Light winter jacket", print: null, size: "A", text: "T Liga Light Jkt Jr", price: 72.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/360814_101_PUMA_T%20LIGA%20LIGHT%20JKT%20JR_1432352.jpg"},
    {name: "Warm winter jacket", print: null, size: "A", text: "Bench Jkt Jr", price: 84.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/371689_101_PUMA_BENCH%20JKT%20JR_1432352.jpg"},
    {name: "Football socks black", print: null, size: "C", text: "Liga Core Socks", price: 7.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/260515_103_PUMA_LIGA%20CORE%20SOCK.jpg"},
    {name: "Underlayer black shirt", print: null, size: "A", text: "Liga Bl Ls Tee Jr", price: 24.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/264918_103_PUMA_LIGA%20BL%20LS%20TEE.jpg"},
    {name: "Underlayer black shorts", print: null, size: "A", text: "Liga Bl Shorts Jr", price: 20.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/264920_103_PUMA_LIGA%20BL%20SHORTS%20%20%20%20.jpg"},
    {name: "Neckwarmer", print: null, size: "D", text: "Neckwarmer Ii", price: 14.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/205645_101_PUMA_NECKWARMER%20II.jpg"},
    {name: "Warm beanie hat", print: 3, size: "D", text: "Baily Hat", price: 11.49, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/216977_101_CLIQUE_BAILY%20HAT_1432352.jpg"},
    {name: "Light beanie hat", print: 3, size: "D", text: "Liga 21 Beanie", price: 13.99, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/314791_101_PUMA_LIGA%2021%20BEANIE_1432352.jpg"},
    {name: "Backpack", print: 3, size: "D", text: "Teamgoal Bp Bn", price: 31.49, pic: "https://www.stadiumteamsales.fi/INTERSHOP/static/WFS/Stadium-FinlandTeamsales-Site/-/Stadium/fi_FI/Zoom/309207_101_PUMA_TEAMGOAL%20BP%20BN_1432352.jpg"}
    ];
    
    var players = [
        "Aarne Aho #16", 
        "Leo Aikavuori #13", 
        "Emil Auvinen #26", 
        "Nooa Choi #38", 
        "Noel Immonen #23"
    ]; 