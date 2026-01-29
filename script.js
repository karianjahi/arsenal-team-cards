const footballTeam = Object();

footballTeam.team = "Arsenal";
footballTeam.year = 2026;
footballTeam.headCoach = "Arteta";
footballTeam.players = [];

footballTeam.players.push(
    {
        name: "David Raya",
        position: "Goalkeeper",
        isCaptain: false
    },
    {
        name: "Kepa Arrizabalaga",
        position: "Goalkeeper",
        isCaptain: false
    },
  {
        name: "Tommy Setford",
        position: "Goalkeeper",
        isCaptain: false
    },
  {
        name: "Alexei Rojas",
        position: "Goalkeeper",
        isCaptain: false
    },
  {
        name: "Jack Porter",
        position: "Goalkeeper",
        isCaptain: false
    },

  {
        name: "William Saliba",
        position: "Defender",
        isCaptain: false
    },

  {
        name: "Cristhian Mosquera",
        position: "Defender",
        isCaptain: false
    },

  {
        name: "Piero Hincapié",
        position: "Defender",
        isCaptain: false
    },

  {
        name: "Gabriel Magalhães",
        position: "Defender",
        isCaptain: false
    },

  {
        name: "Jurriën Timber",
        position: "Defender",
        isCaptain: false
    },

  {
        name: "Riccardo Calafiori",
        position: "Defender",
        isCaptain: false
    },

  {
        name: "Josh Nichols",
        position: "Defender",
        isCaptain: false
    },

  {
        name: "Myles Lewis-Skelly",
        position: "Defender",
        isCaptain: false
    },

  {
        name: "Marli Salmon",
        position: "Defender",
        isCaptain: false
    },

  {
        name: "Ben White",
        position: "Defender",
        isCaptain: false
    },
  {
        name: "Ben White",
        position: "Defender",
        isCaptain: false
    },
  {
        name: "Martin Ødegaard",
        position: "Midfielder",
        isCaptain: true
    },
  {
        name: "Eberechi Eze",
        position: "Midfielder",
        isCaptain: false
    },
  {
        name: "Christian Nørgaard",
        position: "Midfielder",
        isCaptain: false
    },
  {
        name: "Mikel Merino",
        position: "Midfielder",
        isCaptain: false
    },
  {
        name: "Martín Zubimendi",
        position: "Midfielder",
        isCaptain: false
    },
  {
        name: "Declan Rice",
        position: "Midfielder",
        isCaptain: false
    },
  {
        name: "Max Dowman",
        position: "Midfielder",
        isCaptain: false
    },
  {
        name: "Ife Ibrahim",
        position: "Midfielder",
        isCaptain: false
    },
  {
        name: "Bukayo Saka",
        position: "Forward",
        isCaptain: false
    },
  {
        name: "Gabriel Jesus",
        position: "Forward",
        isCaptain: false
    },
  {
        name: "Gabriel Martinelli",
        position: "Forward",
        isCaptain: false
    },
  {
        name: "Viktor Gyökeres",
        position: "Forward",
        isCaptain: false
    },
  {
        name: "Leandro Trossard",
        position: "Forward",
        isCaptain: false
    },
  {
        name: "Noni Madueke",
        position: "Forward",
        isCaptain: false
    },
  {
        name: "Kai Havertz",
        position: "Forward",
        isCaptain: false
    },
  {
        name: "Andre Harriman-Annous",
        position: "Forward",
        isCaptain: false
    },
  {
        name: "Bailey-Joseph",
        position: "Forward",
        isCaptain: false
    },
  {
        name: "Charles Sagoe",
        position: "Forward",
        isCaptain: false
    },


);

for (let player of footballTeam.players) {
    player.position = player.position.toLowerCase();
};

console.log(footballTeam);
