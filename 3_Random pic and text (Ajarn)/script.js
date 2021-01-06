let profiles = [
    {
        id: "kriengkrai",
        lect: "Asst.Prof.Kriengkrai Porkaew",
        img: "./imgs/AjKK.jpg",
        academic: [
            "M.Sc. & Ph.D. (Computer Science) the Department of Computer Science, the University of Illinois at Urbana-Champaign, USA",
            "B.Sc. (Computer Science) the Department of Computer Science, Ramkhamhaeng University, Thailand",
            "B.Sc. (Medical Science) the Faculty of Medicine - Siriraj Hospital, Mahidol University, Thailand"
        ],
        teaching: ["Bioinformatics: Biological Sequence Analysis",
            "DB: DBMS, DB Technology, DB Design, Multimedia IR",
            "PL: Java, Perl, Programming Language Concepts",
            "SE: Design Patterns, Web Application Development"
        ]
    },

    {
        id: "pichet",
        lect: "Lect. Pichet Limvajiranan",
        img: "./imgs/AjPichet.jpg",
        academic: ["M.Sc. (Computer Science) 2542 Chulalongkorn University, Thailand",
            "B.Sc. (Computer Science) 2538 Rajabhat Institute Saundusit, Thailand"
        ],
        teaching: ["Data Structures and Algorithms",
            "Java Server Side Programming",
            "Programming Language (Visual Basic, C, Pascal, Java)",
            "Programming Syntax & Semantic"
        ]
    },

    {
        id: "sanit",
        lect: "Lect. Sanit Sirisawatvatana",
        img: "./imgs/AjSanit.jpg",
        academic: [
            "M.B.A. (Finance) 1997, University of Texas at San Antonio, U.S.A",
            "B.Engineer (Electrical) 1991, Chulalongkorn University"
        ],
        teaching: [
            "Business Intelligence",
            "Data Warehouse",
            "Web Technology",
            "Web Programming"
        ]
    },

    {
        id: "umaporn",
        lect: "Asst.Prof.Umaporn Supasitthmethee",
        img: "./imgs/AjJing.jpg",
        academic: [
            "Ph.D. Computer Science 2551, King Mongkut's University of Technology Thonburi (1-year internship at Kyoto University)",
            "M.Sc. Information Technology 2548, King Mongkut's University of Technology Thonburi",
            "B.Sc. Information Technology 2545, King Mongkut's University of Technology Thonburi",
        ],
        teaching: ["Java Programming", "Web Programming", "XML Technology"
        ]
    },

    {
        id: "tisanai",
        lect: "Mr. Tisanai Chatuporn (Learning Facilitator)",
        img: "./imgs/Tisanai.jpg",
        academic: [
            "M.Sc. Information Technology 2548, King Mongkut's University of Technology Thonburi",
            "B.Sc. Information Technology 2545, King Mongkut's University of Technology Thonburi",
        ],
        teaching: ["Java Programming", "Web Programming"
        ]
    }
];


//Show active current Person and move previous back to thumbnail
//Show next person
//Show previous person
//Show random person ทำแค่อันนี้ !!!
function changeName(id, text) {
    let dom = document.getElementById(id);
    dom.innerHTML = text;
}
var button = document.querySelector(".surprised-btn");
button.addEventListener("click", function () {
    var randomnum = Math.floor(Math.random() * profiles.length);
    console.log(randomnum);

    changeName("lect", profiles[randomnum].lect);

    var pic = document.querySelector("#img-container");
    pic.setAttribute("src", profiles[randomnum].img);

    var academic = document.getElementById("academic");

    for (let index = 0; index = academic.childElementCount; index++) {
        academic.removeChild(academic.firstElementChild);
    }

    for (let index = 0; index < profiles[randomnum].academic.length; index++) {
        let li = document.createElement("li");
        li.innerHTML = profiles[randomnum].academic[index];
        academic.appendChild(li);
    }

    var teaching = document.getElementById("teaching");
    console.log(teaching);

    for (let index = 0; index = teaching.childElementCount; index++) {
        teaching.removeChild(teaching.firstElementChild);
    }
    for (let index = 0; index < profiles[randomnum].teaching.length; index++) {
        let li = document.createElement("li");
        li.innerHTML = profiles[randomnum].teaching[index];
        teaching.appendChild(li);
    }

})
//Search staff name


function onlyAlpha(event) {
    let letterCode = event.keyCode;
    if (letterCode > 31 && (letterCode < 48 || letterCode > 57)) return true;
    return false;
}


