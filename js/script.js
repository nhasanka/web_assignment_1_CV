const skills = [
  { name: "Flutter", rating: 4 },
  { name: "JavaScript", rating: 4 },
  { name: "PHP", rating: 4 },
  { name: "SQL", rating: 4 },
  { name: "Java", rating: 4 },
  { name: "Bootstrap", rating: 4 },
  { name: "CodeIgniter", rating: 3 },
  { name: "jQuery", rating: 3 },
  { name: "React native", rating: 2 },
  { name: "Android Mobile", rating: 2 },
  { name: "React JS / TS", rating: 2 },
];

const skillsList = document.querySelector(".skills-list");

skills.forEach((skill) => {
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill");

  const skillName = document.createElement("span");
  skillName.classList.add("skill-name");
  skillName.textContent = skill.name;

  const skillRating = document.createElement("div");
  skillRating.classList.add("skill-rating");

  for (let i = 0; i < 5; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i < skill.rating) {
      dot.classList.add("filled");
    }
    skillRating.appendChild(dot);
  }

  skillDiv.appendChild(skillName);
  skillDiv.appendChild(skillRating);
  skillsList.appendChild(skillDiv);
});

// Other Skill list
const otherSkills = [
  { name: "Microsoft Office", rating: 4 },
  { name: "ChatGPT", rating: 4 },
  { name: "Google Data Studio", rating: 3 },
  { name: "Photoshop", rating: 2 },
  { name: "Illustrator", rating: 2 },
  { name: "CorelDraw", rating: 2 },
];

const otherSkillsList = document.querySelector(".other-skills-list");

otherSkills.forEach((skill) => {
  const otherSkillDiv = document.createElement("div");
  otherSkillDiv.classList.add("other-skill");

  const otherSkillName = document.createElement("span");
  otherSkillName.classList.add("other-skill-name");
  otherSkillName.textContent = skill.name;

  const otherSkillRating = document.createElement("div");
  otherSkillRating.classList.add("other-skill-rating");

  for (let i = 0; i < 5; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i < skill.rating) {
      dot.classList.add("filled");
    }
    otherSkillRating.appendChild(dot);
  }

  otherSkillDiv.appendChild(otherSkillName);
  otherSkillDiv.appendChild(otherSkillRating);
  otherSkillsList.appendChild(otherSkillDiv);
});
