const exploiters = [
    {
        name: "Rafflesia",
        tag: "Rafflesia#8396",
        pfp: "247349845298249728/704d6d95e5aaf76faa8a8b7f9b84c64c",
        website: "https://alicesworld.tech",
        github: "https://github.com/ProgrammerIn-wonderland",
        bio: "あたしの名前はRafflesia!!\n\nこの前 友達と MERCURY WORKSHOP CLUB というサークルを組むことにしたよ\n\nアタシたちの 活躍を これから よろしくね!\nアタシたちの 活躍を これから よろしくね！\nhttps://youtu.be/jsaxhdvl8UE",
    },
    {
        name: "r58Playz",
        tag: "r58Playz#3467",
        pfp: "803355425835188224/59096175f6add3bb28d9f465d9129590",
        bio: `Middle schooler (soon to be a high schooler) with a passion for programming and security.`,
        links: {
            "Site": "https://r58playz.ml",
            "Github": "https://github.com/r58Playz"
        }
    },
    {
        name: "CoolElectronics",
        tag: "CoolElectronics#4683",
        pfp: "696392247205298207/40154cf9e9717bd72d3257ac202f57da",
        bio: `
        programmer who tries to occasionally make games, developed https://sh1mmer.me.
        oneshot, ultrakill and tally hall enthusiast, lover of percury merkshop`,
        website: "https://coolelectronics.me",
        github: "https://github.com/CoolElectronics"

    },
    {
        name: "Ultra Blue",
        tag: "Ultra Blue#1850",
        pfp: "904487572301021265/366e868748ba7d2e50be57cc3e45fa57",
        bio: "Mercury workshop member who unfortunately passed away on February 7th"
    },
    {
        name: "kaitlin",
        tag: "TheMemeSniper#6065",
        pfp: "391271835901362198/8fc58755580980450e965d83d2322c68",
        bio: `
        professional shitposter
        goofnut
        transgener :3
        she/her`,
        links: {
            mastodon: "https://wetdry.world/@thememesniper",
        }
    },
    // {
    //     name: "SprinkzMC",
    //     tag: "SprinkzMC#8421",
    //     pfp: "824066884231495709/6d66d97d0e874a65e8240134fd48ea83",
    // },
    {
        name: "Bypassi",
        tag: "Bypassi#7037",
        pfp: "904829646145720340/c12ea6aa4c73eb5d1775c62ad9778527",
        bio: `Proud skidphobic individual. Discovered LTBEEF, [swamp], point-blank, and some more silly Chromebook exploits. I stopped taking life seriously a long time ago.`,
        links: {
            "Click": "javascript:alert('Me trying to resist the urge to do code execution for 0.0001 seconds')",
            "Pyramid Scheme Simulator": "https://buymeacoffee.com/bypassi",
            "Point blank reference": "about:blank",
        }
    },
    {
        name: "OlyB",
        tag: "OlyB#9420",
        pfp: "476169716998733834/b81090b1228facc23c85ccfc96f0ca5c",
        bio: `hi`,
        links: {
            github: "https://github.com/BinBashBanana"
        }
    },
    {
        name: "luphoria",
        tag: "luphoria#1313",
        pfp: "325116477185196033/20fb547c84244c8e4ebff84d76cdba69",
    },
    {
        name: "Sharp_Jack",
        tag: "Sharp_Jack#4374",
        pfp: "1006048734708240434/fcc5b5a3b225cb638821ce920ddc045e",
    },
    {
        name: "ember",
        tag: "real ember#1491",
        pfp: "1052344689178722375/5111e483dde044344765cd84dfab858e",
    },
    {
        name: "CVFD",
        tag: "CVFD#6480",
        pfp: "406609409981284374/ed5f3fc6015a0ca8f00b2eeed0948d42",
    },
    {
        name: "justinchrm",
        tag: "justinchrm#3399",
    },
    {
        name: "zuh",
        pfp: "314891043038429184/400dba9b10d1b18284ec3cfb4d18479b",
    },
    {
        name: "avd3",
        pfp: "856786186117971979/264be908565e96cfe1701891bc86389f",
    },
    {
        name: "Unciaur",
        tag: "Unciaur#1408",
        pfp: "465682780320301077/f794fdbf8f9352932d69e6726e128f2a",
        bio: `Hey! I’m a student in secondary at the time of writing this. In my free time, I usually find myself reading some fantasy series, coding, breaking my chromebook (def mine), or writing a fun D&D campaign for my friends.`,
        links: {
            website: "https://unciaur.live",
            github: "https://github.com/Unciaur"
        }
    },
    {
        name: "Bagel",
        tag: "Bagel#6705",
        pfp: "662424921967951912/2b89289fe5ea970b00567d31031071eb",
        bio: `professional idiot, SlimeVR contributor. king lurker.`,
        links: {
            github: "https://github.com/LordBagel42",
            website: "bagelindustries.cf",
            click: "https://youtu.be/X_8Nh5XfRw0",
        }
    },
    {
        name: "colacraft",
        tag: "colacraft#0744",
        pfp: "727683704528306258/61745b302363e498f3f582bd146a6ea7",
    },
    {
        name: "Catakang",
        tag: "Catakang#0987",
        pfp: "402603973959221248/625037142993ec58c8aa6d4e111b4673",
    },
    {
        name: "JimJam",
        tag: "JimSh1m#7404",
        pfp: "590672204107350037/1fb39ef5bb0b911e05c24bb6c6a03fa5",
        bio: `Your average idiot, loves to make money, and runs stupid servers`,
        links: {
            github: "https://github.com/JimDude7404",
        }
    },
    {
        name: "Melitha",
        tag: "Melitha#8130",
        // pfp: "668635787755257887/146e1014a18b807f13ae028196a0726d" ... yeah no i'm not putting that shit on the website
    },
    {
        name: "siggaddj",
        tag: "siggaddj#3621",
        pfp: "447840815352512552/a_f604a7f980623616f33c38eca76b34c1",
    },
    {
        name: "c-bass",
        pfp: "897226891323387905/09e7c6dcbb1035e97626210d9441c528",
        tag: "c-bass#7433",
    },
    {
        name: "Koaku",
        pfp: "927240253272645662/c97fabae88685a9a997e5719967e596e",
        tag: "koaku#0001",
        bio: "I'm MW's CSS girl. I do all the styling and stuff.",
        links: {
            "Github": "https://github.com/MadjikDotPng",
            "Portfolio": "https://madjikware.tech/",
        }
    },
    {
        name: "Violetence",
        tag: "Violetence#0001",
        pfp: "894587716619108385/a_d518dcaf658155711e2669a227d4e840",
        bio: `I honestly have no purpose here anymore. I'm useless :/`,
        links: {
            "Website": "https://scarat3k.me",
            "Github": "https://github.com/scaratek",
        }

    },
    {
        name: "CyberClone",
        tag: "CyberClone#9080",
        pfp: "417892585068036096/cfdd012a4359c45e97a7991a0215971c",
        bio: `High school student with extensive mechanical and electrical engineering experience; ultimately, a love of building new things from the ground up.
        Currently launching a nonprofit organization to promote engineering education in the Bay Area, check it out if interested in getting involved`,
        links: {
            nonprofit: "https://engineeringexploration.org/",
        }
    },
    {
        name: "He",
        tag: "He#7273",
        links: {
            matrix: "chaseddraco:matrix.org",
        }
    },
    {
        name: "vk6",
        pfp: "530198926129627146/f7c2cc055eddc57cc385841bca8cc65d",
        tag: "vk6#7391",
        links: {
            website: "https://ading.fr.to",
            github: "https://github.com/ading2210"
        }
    },
];
const advisors = [
    {
        name: "Quite A Fancy Emerald",
        tag: "Quite A Fancy Emerald#0001",
        pfp: "725438522877804657/a_dba01ef721f49c998bc1ba4578dd3a72",
    },
    {
        name: "aub",
        tag: "aub#3033",
        pfp: "327470218005708810/a_ad6a27c8649fbee34e7984989293dc62",
    },
    // {
    //     name: "peter∆",
    //     tag: "peter∆#2987",
    //     pfp: "455493575233372170/34e7f93bafa062617a41b617b5a9fdfb",
    // },
    {
        name: "Astral",
        tag: "AstralPhnx#1224",
        pfp: "715087220360347678/c554ca7d610df3b25104e69b7a2a15c2",
        bio: `Thing doer, VTuber, digital privacy advocate, computer fiddler and gigantic hecking nerd.
        When I'm not messing around with computers you'll find me playing arcade games, slinging around shiny cardboard at Yu-Gi-Oh events and being hopelessly gay on the internet`,
        links: {
            "Github": "https://github.com/AstralPhnx",
            "Twitch": "https://www.twitch.tv/astral_phnx"
        }
    },
    {
        name: "Mark",
        tag: "[REDACTED]",
        pfp: "https://cdn.discordapp.com/attachments/1053451014595940362/1103140153100349510/EC0D9428-7852-4910-8F37-8DA5199CA6E5.png",
        bio: `Just another Furry doing cybersecurity.
Chromium Project Member`,
    }
];
const projects = [
    {
        name: "sh1mmer",
        desc: "A recovery based enrollment jailbreak targeting chromebooks and chromeboxes",
        link: "https://sh1mmer.me",
    },
    {
        name: "Fakemurk",
        desc: "A set of scripts for spoofing verified on an enrolled chromebook",
        link: "https://github.com/MercuryWorkshop/fakemurk",
    },
    {
        name: "Pollen",
        desc: "A simple and easy to use script for modifying user policies",
        link: "https://github.com/MercuryWorkshop/Pollen",
    },
    {
        name: "MAC Address Randomizer",
        desc: "A simple MAC address randomizer for chromeOS",
        link: "https://github.com/MercuryWorkshop/mac-address-randomizer",
    },
    {
        name: "anuraOS",
        desc: "(frogOS) a webOS with x86 applications from a vm",
        link: "https://github.com/MercuryWorkshop/anuraOS",
    },
];
