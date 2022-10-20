

// CREAZIONE OBJECT ARRAW CON INFORMAZIONI
const membersTeam = [
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        position: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        position: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        position: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    }
];
// STAMPARE NELLA CONSOLE INFORMAZIONE DEI MEMBRI
console.log(membersTeam);

//STAMPARE LE STESSE INFORMAZIONI SU DOM SOTTOFORMA DI STRINGHE
const teamRow = document.querySelector(".row");
for (let i = 0; i <= membersTeam.length; i++) {
    const currentMember = membersTeam[i];
    teamRow.innerHTML += `
        <div class = "col">
            <div class = "card">
                <img src = "img/${currentMember.picture}" />
                <div class = "info">
                    <h2>${currentMember.name}</h2>
                    <span>${currentMember.position}</span>
                </div>
            </div>
        </div>
    `;
}
