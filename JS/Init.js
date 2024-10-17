//CODED BY MOHAMED AMINE SBAA



const sleep = MS => new Promise(resolve => setTimeout(resolve, MS));

let Lang = {

    ChooseLgButton: ["Change language", "Changer de langue"],
    Filier0: [
        ["Génie Informatique", `Programmation, intelligence artificielle, cybersécurité, et systèmes embarqués.`],
        ["Génie Électrique", `Électronique, énergies renouvelables, et automatismes industriels.`],
        ["Génie Mécanique", `Conception mécanique, thermodynamique, et ingénierie des matériaux.`],
        ["Génie Civil", `Bâtiments, infrastructures, et gestion de projets.`],
        ["Génie Industriel", `Optimisation des processus, gestion de la production, et logistique.`],
        ["Génie des Télécommunications", `Réseaux, systèmes de communication, et technologies sans fil.`],
    ],
    Filier1: [
        ["Computer Engineering", "Programming, artificial intelligence, cybersecurity, and embedded systems."],
        ["Electrical Engineering", "Electronics, renewable energy, and industrial automation."],
        ["Mechanical Engineering", "Mechanical design, thermodynamics, and materials engineering."],
        ["Civil Engineering", "Buildings, infrastructure, and project management."],
        ["Industrial Engineering", "Process optimization, production management, and logistics."],
        ["Telecommunications Engineering", "Networks, communication systems, and wireless technologies."]
    ],
    X0: [
        ["../ASSETS/ENSAK1.jpg", "<strong>Red Amphitheater</strong> with a capacity of <strong>277 seats</strong>"],
        [
            "",
            "<strong>6 practical workrooms</strong> distributed as follows:<br><strong>1 electricity room</strong>;<br><strong>1 mechanics and thermodynamics room</strong>;<br><strong>1 optics room</strong>;<br><strong>1 analog electronics room</strong>;<br><strong>1 chemistry room</strong>;<br><strong>1 club room for networks and computing</strong>."
        ],
        ["../ASSETS/AMPHI1ENSAK.png", "Amphitheater with a capacity of <strong>326 seats</strong>"],
        [
            "../ASSETS/ENSAK2.jpg",
            "Includes <strong>an administration</strong>, <strong>offices for teachers</strong>, and <strong>a library for students</strong>."
        ],
        [
            "",
            "<strong>12 specialized teaching workshops</strong> distributed as follows:<br><strong>Electrotechnics</strong>;<br><strong>Power electronics</strong>;<br><strong>Analog and digital electronics</strong>;<br><strong>Embedded systems and industrial computing</strong>;<br><strong>Renewable energies</strong>;<br><strong>Automation</strong>;<br><strong>Antennas</strong>;<br><strong>Transmission and signal processing</strong>;<br><strong>Cybersecurity</strong>;<br><strong>Mechatronics for automobiles 1 and 2</strong>;<br><strong>Printed circuit design</strong>."
        ]
    ],
    X1: [
        ["../ASSETS/ENSAK1.jpg", "<strong>Amphithéâtre Rouge</strong> d'une capacité de <strong>277 places</strong>"],
        [
            "",
            "<strong>6 salles de travaux pratiques</strong> réparties comme suit:<br><strong>1 salle d’électricité</strong>;<br><strong>1 salle de mécanique et thermodynamique</strong>;<br><strong>1 salle d’optique</strong>;<br><strong>1 salle d’électronique analogique</strong>;<br><strong>1 salle de chimie</strong>;<br><strong>1 salle club pour réseaux et informatique</strong>."
        ],
        ["../ASSETS/AMPHI1ENSAK.png", "Amphithéâtre d'une capacité de <strong>326 places</strong>"],
        [
            "../ASSETS/ENSAK2.jpg",
            "Inclut <strong>une administration</strong>, <strong>des bureaux pour les enseignants</strong>, et <strong>une bibliothèque pour les étudiants</strong>."
        ],
        [
            "",
            "<strong>12 ateliers d'enseignement spécialisé</strong> répartis comme suit:<br><strong>Électrotechnique</strong>;<br><strong>Électronique de puissance</strong>;<br><strong>Électronique analogique et numérique</strong>;<br><strong>Systèmes embarqués et informatique industrielle</strong>;<br><strong>Énergies renouvelables</strong>;<br><strong>Automatique</strong>;<br><strong>Antennes</strong>;<br><strong>Transmission et traitement du signal</strong>;<br><strong>Sécurité informatique</strong>;<br><strong>Mécatronique pour l’automobile 1 et 2</strong>;<br><strong>Conception des circuits imprimés</strong>."
        ]
    ],
    X11: [
        ["ENSAK ARTS",
            "<strong>ENSAK Arts</strong> est un <strong>club d’arts</strong> créé en <strong>2016</strong> avec une <strong>émergence talentueuse</strong>. Il a pour mission de contribuer à l'<strong>enrichissement de l’esprit de créativité et artistique</strong> chez l’élève ingénieur, de renforcer le <strong>dialogue</strong>, la <strong>communication</strong> et l'<strong>esprit de travail en groupe</strong>, ainsi que de <strong>découvrir les talents artistiques</strong> chez les élèves ingénieurs.",
            "./ASSETS/ENSAK_ARTS.png"
        ],
        ["Research Awakening",
            "<strong>Research Awakening</strong> est un <strong>club dédié aux chercheurs</strong> issus de différentes disciplines. Le but principal est de créer une <strong>communauté active et dévouée</strong> capable d’assurer un <strong>partage</strong> d’un <strong>contenu riche et de qualité</strong> pour les chercheurs marocains.",
            "./ASSETS/Club2.png"
        ],
        ["Great Debaters Ensak",
            "<strong>The Great Debaters ENSAK</strong> est un <strong>club de débat</strong> fondé en <strong>2017</strong> au sein de l'<strong>ENSA Kénitra</strong>, affilié à <strong>Great Debaters Morocco</strong>, qui est une <strong>association indépendante</strong>, à but non lucratif et apolitique. Son principal objectif est d’organiser des <strong>compétitions régionales, nationales et internationales</strong> de débat rassemblant différentes institutions de l'enseignement supérieur, y compris l'<strong>ENSA Kénitra</strong>, qui à travers sa participation en <strong>2017</strong> dans la compétition « <strong>Le Choc des Grandes Écoles</strong> », organisée par l'<strong>EMI</strong>, a été classée <strong>deuxième</strong>.",
            "./ASSETS/GDClub.png"
        ],

    ],
    X10: [
        ["ENSAK ARTS",
            "<strong>ENSAK Arts</strong> is an <strong>arts club</strong> created in <strong>2016</strong> with a <strong>talented emergence</strong>. Its mission is to contribute to the <strong>enrichment of creativity and artistic spirit</strong> in engineering students, to strengthen <strong>dialogue</strong>, <strong>communication</strong>, and <strong>teamwork</strong>, and to <strong>discover artistic talents</strong> in engineering students.",
            "../ASSETS/ENSAK_ARTS.png"
        ],
        ["Research Awakening",
            "<strong>Research Awakening</strong> is a <strong>club dedicated to researchers</strong> from various disciplines. Its main goal is to create an <strong>active and dedicated community</strong> capable of ensuring the <strong>sharing</strong> of <strong>rich and quality content</strong> for Moroccan researchers.",
            "../ASSETS/Club2.png"
        ],
        ["Great Debaters Ensak",
            "<strong>The Great Debaters ENSAK</strong> is a <strong>debate club</strong> founded in <strong>2017</strong> at <strong>ENSA Kénitra</strong>, affiliated with <strong>Great Debaters Morocco</strong>, which is an <strong>independent association</strong>, non-profit and apolitical. Its main objective is to organize <strong>regional, national, and international competitions</strong> that bring together different higher education institutions, including <strong>ENSA Kénitra</strong>, which was ranked <strong>second</strong> through its participation in <strong>2017</strong> in the competition « <strong>Le Choc des Grandes Écoles</strong> », organized by <strong>EMI</strong>.",
            "../ASSETS/GDClub.png"
        ]
    ]
}


let defaultLg = 0;

const GID = (d) => document.getElementById(d)

const ChangeLgButton = GID("ChangeLgButton");
const LangInd = GID("LangInd");
const ModeLight = GID("ModeLight");
const ImgIconDivId = GID("ImgIconDivId")
const debtAmountSlider = GID("debt-amount-slider");
const NextButton = GID("NextButton");
const NextButton1 = GID("NextButton1");
const NextButton2 = GID("NextButton2");
const NextButton3 = GID("NextButton3");
const NextButton5 = GID("NextButton5");
const NextButton6 = GID("NextButton6");
const NextButton7 = GID("NextButton7");

const Container1 = GID("Container1");
const Container2 = GID("Container2");
const Container3 = GID("Container3");
const Container4 = GID("Container4");
const Container5 = GID("Container5");
const Container6 = GID("Container6");

const LanguageIndicator = GID("LanguageIndicator");
const DescriptionX1 = GID("DescriptionX1");
const DescriptionX2 = GID("DescriptionX2");
const DescriptionX5 = GID("DescriptionX5");
const DescriptionX7 = GID("DescriptionX7");

const TitleX1 = GID("TitleX1");
const TitleX2 = GID("TitleX2");
const TitleX3 = GID("TitleX3");
const TitleX5 = GID("TitleX5");
const TitleX6 = GID("TitleX6");
const TitleX7 = GID("TitleX7");

const GridX1 = GID("GridX1");

let isLight = false;
ModeLight.onclick = async function() {
    isLight = !isLight;
    if (isLight) document.documentElement.style.setProperty("--backgroundcontainer", "#6f6d6db3");
    if (!isLight) document.documentElement.style.setProperty("--backgroundcontainer", "#000000b3");
    ModeLight.children[0].style.transform = "rotateZ(180deg)";
    await sleep(1e3)
    ModeLight.children[0].style.transform = "rotateZ(0deg)";
}


function UpdateElementsLg(a) {
    [...Container4.getElementsByClassName("GridChildren")].forEach((l, i) => {
        l.innerHTML = Lang.X0[i][1];
        if (Lang.X0[i][0] != "") {
            l.onmouseover = function() {
                top.document.documentElement.style.setProperty("--backgroundimage", "url(" + Lang.X0[i][0] + ")")
            }
            l.onmouseout = function() {
                top.document.documentElement.style.setProperty("--backgroundimage", "url(../ASSETS/ENSAK.jpg)")
            }
        }
    });
    [...Container3.getElementsByClassName("card")].forEach((l, i) => {
        l.children[0].textContent = Lang.Filier1[i][0];
        l.children[1].textContent = Lang.Filier1[i][1];
    });
    [...Container5.getElementsByClassName("GridChildren1")].forEach((l, i) => {
        l.children[0].textContent = Lang.X10[i][0];
        l.children[1].innerHTML = Lang.X10[i][1];
        l.onmouseover = function() {
            top.document.documentElement.style.setProperty("--backgroundicon", "url(" + Lang.X10[i][2] + ")")
        }
    })
    if (a == 0) {
        GID("01").setAttribute("data-debt-amount", "General overview")
        GID("02").setAttribute("data-debt-amount", "Programs")
        GID("03").setAttribute("data-debt-amount", "Infrastructure")
        GID("04").setAttribute("data-debt-amount", "Clubs")
        GID("05").setAttribute("data-debt-amount", "Conclusion")

        TitleX2.textContent = "The programs of the ENSA."
        TitleX1.textContent = "General overview of Kenitra ENSA";
        TitleX5.textContent = "Kenitra ENSA Location."
        TitleX3.textContent = "Infrastructure."
        TitleX6.textContent = "Clubs"
        NextButton6.textContent = "Click here to learn more"
        NextButton7.textContent = "Click here to learn more about ENSAK"
        NextButton3.textContent =
            NextButton2.textContent =
            NextButton5.textContent =
            NextButton1.textContent =
            NextButton.textContent = "Click Here To Continue";
        LangInd.textContent = LanguageIndicator.textContent = "EN";
        DescriptionX1.textContent = `
        The Kénitra ENSA (École Nationale Supérieure d'Architecture de Kénitra) is located in the city of Kénitra, Morocco. It is situated near the banks of the Bouregreg River and is easily accessible from the city center. The school is surrounded by various amenities, including cafes, restaurants, and public transport options, making it a convenient location for students and visitors. The campus features modern architecture and facilities designed to support architectural education and creativity.
        `
        DescriptionX2.textContent = `
        At ENSA-Kénitra, ENSA is committed to training skilled and versatile engineers, ready to meet the technological challenges of tomorrow. The programs are designed to combine theory and practice, with an emphasis on innovation and excellence. Discover the various courses at ENSA, tailored to the needs of the market and the aspirations of its students.
        `
        DescriptionX5.innerHTML = `
        Established in <strong>2008</strong> and part of <strong>Ibn Tofail University</strong>, the <strong>National School of Applied Sciences of Kénitra</strong> is a prestigious Moroccan institution dedicated to training <strong>State Engineers</strong> in various scientific and technical fields. It resulted from a partnership between <strong>Ibn Tofail University</strong> and <strong>The National Institute of Applied Sciences of Lyon</strong>.
        
        The training for <strong>engineers</strong> at the <strong>ENSA</strong> is provided over a duration of <strong>5 years</strong> and also offers a <strong>dual degree program</strong>. With a pedagogical approach that integrates management and communication, <strong>ENSAK</strong> aims to meet the national and regional needs for qualified engineers.
        
        Teaching at <strong>ENSAK</strong> is heavily focused on practice, enriched by technical activities, internships, and projects in partnership with the sector. This is why it is recognized for its <strong>academic excellence</strong> and its commitment to <strong>research and innovation</strong>.
        
        <strong>ENSAK</strong> has approximately <strong>1697 students</strong> and <strong>60 professors</strong>.        `
        DescriptionX7.innerHTML = `
In conclusion, the <strong>École Nationale des Sciences Appliquées de Kénitra (ENSA)</strong> stands out for its <strong>high-quality education</strong>, its <strong>modern infrastructure</strong>, and its <strong>commitment</strong> to training <strong>competent and versatile engineers</strong>. Thanks to its <strong>diverse programs</strong> and <strong>strong partnerships</strong> with the industry, ENSA continues to effectively prepare the engineers of tomorrow to face technological and industrial challenges.
        `


    } else if (a == 1) {
        GID("01").setAttribute("data-debt-amount", "Présentation générale")
        GID("02").setAttribute("data-debt-amount", "Filières")
        GID("03").setAttribute("data-debt-amount", "Infrastructure")
        GID("04").setAttribute("data-debt-amount", "Clubs")
        GID("05").setAttribute("data-debt-amount", "Conclusion")

        NextButton6.textContent = "Cliquez ici pour en savoir plus";
        [...Container4.getElementsByClassName("GridChildren")].forEach((l, i) => {
            l.innerHTML = Lang.X1[i][1];
            if (Lang.X1[i][0] != "") {
                l.onmouseover = function() {
                    top.document.documentElement.style.setProperty("--backgroundimage", "url(" + Lang.X1[i][0] + ")")
                }
                l.onmouseout = function() {
                    top.document.documentElement.style.setProperty("--backgroundimage", "url(../ASSETS/ENSAK.jpg)")
                }
            }
        });
        [...Container3.getElementsByClassName("card")].forEach((l, i) => {
            l.children[0].textContent = Lang.Filier0[i][0];
            l.children[1].textContent = Lang.Filier0[i][1];
        });
        [...Container5.getElementsByClassName("GridChildren1")].forEach((l, i) => {
            l.children[0].textContent = Lang.X11[i][0];
            l.children[1].innerHTML = Lang.X11[i][1];
            l.onmouseover = function() {
                top.document.documentElement.style.setProperty("--backgroundicon", "url(" + Lang.X11[i][2] + ")")
            }
        })
        TitleX3.textContent = "Infrastructure."
        TitleX2.textContent = "Les filières de l'ENSA."
        TitleX5.textContent = "Où se trouve l'ENSA de Kénitra ?"
        TitleX1.textContent = "Présentation générale de l'ENSA Kenitra";
        NextButton7.textContent = "Cliquez ici pour en savoir plus sur l'ENSAK"
        TitleX6.textContent = "Clubs"
        NextButton3.textContent =
            NextButton2.textContent =
            NextButton1.textContent =
            NextButton5.textContent =
            NextButton.textContent = "Cliquer ici pour continuer";
        LangInd.textContent = LanguageIndicator.textContent = "FR";
        DescriptionX1.textContent = `
        L'ENSA de Kénitra (École Nationale Supérieure d'Architecture de Kénitra) est située dans la ville de Kénitra, au Maroc. Elle se trouve près des rives de la rivière Bouregreg et est facilement accessible depuis le centre-ville. L'école est entourée de diverses commodités, y compris des cafés, des restaurants et des options de transport public, ce qui en fait un emplacement pratique pour les étudiants et les visiteurs. Le campus présente une architecture moderne et des installations conçues pour soutenir l'éducation architecturale et la créativité.
        `
        DescriptionX2.textContent = `
        À l'ENSA-Kénitra, l'ENSA s'engage à former des ingénieurs compétents et polyvalents, prêts à relever les défis technologiques de demain. Les programmes sont conçus pour allier théorie et pratique, en mettant l'accent sur l'innovation et l'excellence. Découvrez les différents cursus de l'ENSA, adaptés aux besoins du marché et aux aspirations de ses étudiants.
        `
        DescriptionX5.innerHTML = `
        Crée en <strong>2008</strong> et composante de <strong>l'Université Ibn Tofail</strong>, l'<strong>École Nationale des Sciences Appliquées de Kénitra</strong> est une institution marocaine prestigieuse dédiée à la formation d'<strong>ingénieurs d'État</strong> dans divers domaines scientifiques et techniques. Elle est issue d'un partenariat entre <strong>l'Université Ibn Tofail</strong> et <strong>l'Institut National des Sciences Appliquées de Lyon</strong>.

La formation d'<strong>ingénieur</strong> à l'<strong>ENSA</strong> est dispensée sur une durée de <strong>5 ans</strong> et propose également un programme de <strong>double diplomation</strong>. Avec une approche pédagogique qui intègre le management et la communication, l'<strong>ENSAK</strong> vise à répondre aux besoins nationaux et régionaux en ingénieurs qualifiés. 

L'enseignement à l'<strong>ENSAK</strong> est fortement axé sur la pratique, enrichi par des activités techniques, des stages et des projets en partenariat avec le secteur. C'est pourquoi elle est reconnue pour son <strong>excellence académique</strong> et son engagement envers la <strong>recherche et l'innovation</strong>.

L'<strong>ENSAK</strong> compte environ <strong>1697 étudiants</strong> et <strong>60 professeurs</strong>.

        `
        DescriptionX7.innerHTML = `
        En conclusion, l'<strong>École Nationale des Sciences Appliquées de Kénitra (ENSA)</strong> se distingue par son <strong>enseignement de qualité</strong>, ses <strong>infrastructures modernes</strong>, et son <strong>engagement</strong> à former des <strong>ingénieurs compétents et polyvalents</strong>. Grâce à ses <strong>filières variées</strong> et à ses <strong>partenariats solides</strong> avec l'industrie, l'ENSA continue de préparer efficacement les ingénieurs de demain à relever les défis technologiques et industriels.
        `
    }

}


ChangeLgButton.addEventListener("click", function() {
    defaultLg = defaultLg == 0 ? 1 : 0;
    [...ChangeLgButton.children].filter(l => l.tagName == "SPAN")[0].textContent = Lang.ChooseLgButton[defaultLg]
    UpdateElementsLg(defaultLg);
})

ChangeLgButton.click();
LanguageIndicator.onclick = () => ChangeLgButton.click();

NextButton.addEventListener("click", async function() {
    GID("1").click()
    Container1.style.transform = "translateY(100%)"
    await sleep(1e3);
    Container1.style.display = "none"
    Container2.style.display = "flex"
    Container2.style.transform = "translateX(0)"

});
NextButton1.addEventListener("click", async function() {
    GID("2").click()
    Container2.style.transform = "translateX(100%)"
    await sleep(1e3);
    Container2.style.display = "none"
    Container3.style.display = "flex"
    Container3.style.transform = "translateY(0)"

});
NextButton2.addEventListener("click", async function() {
    GID("3").click()
    Container3.style.transform = "translateY(100%)"
    await sleep(1e3);
    Container3.style.display = "none"
    Container4.style.display = "flex"
    Container4.style.transform = "translateX(0)"

});
NextButton3.addEventListener("click", async function() {
    GID("4").click()
    Container4.style.transform = "translateX(100%)"
    await sleep(1e3);
    Container4.style.display = "none"
    Container5.style.display = "flex"
    Container5.style.transform = "translateY(0)"
    await sleep(5e2);
    top.document.documentElement.style.setProperty("--width-c", "100%")
});

NextButton5.addEventListener("click", async function() {
    GID("5").click()
    Container5.style.transform = "translateY(100%)"
    await sleep(1e3);
    Container5.style.display = "none"
    Container6.style.display = "flex"
    Container6.style.transform = "translateX(0px)"
});

NextButton6.addEventListener("click", async function() {
    window.href = "https://ensa.uit.ac.ma/activites-parascolaires/clubs-et-associations/";
});

let LastOnElement = null
document.addEventListener("mousemove", function(e) {
    LastOnElement = e.target;
});

let containers = {
    "1": Container2,
    "2": Container3,
    "3": Container4,
    "4": Container5,
    "5": Container6,
}
let entriesC = Object.entries(containers);
entriesC.forEach(entry => {
    let u = GID(entry[0])
    u.addEventListener("click", function(e) {
        if ([u, GID("0" + entry[0]), GID("debt-amount-slider")].includes(LastOnElement)) {
            //real click
            Container1.style.display = "none"
            entriesC.forEach(l => {
                l[1].style.display = "none";
                l[1].style.transform = "translateY(0) translateY(0)"
                top.document.documentElement.style.setProperty("--width-c", "0%")
            })
            if (Number(entry[0])==4) top.document.documentElement.style.setProperty("--width-c", "100%")
            entry[1].style.display = "flex"
        }
    });
})


setTimeout(function() {
    Container1.style.transform = "translateY(0)"
}, 2e3)


//CODED BY MOHAMED AMINE SBAA