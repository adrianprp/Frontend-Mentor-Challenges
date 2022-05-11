const challenges = [
  ["advice-generator-app-main", "HTML CSS JS API"],
  ["base-apparel-coming-soon-master", "HTML CSS JS"],
  ["four-card-feature-section-master", "HTML CSS"],
  ["fylo-landing-page", "HTML CSS"],
  ["huddle-landing-page", "HTML CSS"],
  ["rock-paper-scissors", "HTML CSS JS"],
  ["single-price-grid-component", "HTML CSS"],
  ["ping-coming-soon-page", "HTML CSS JS"],
  ["nft-preview-card-component", "HTML CSS"],
  ["intro-component-with-signup-form", "HTML CSS JS"],
];

const challengesList = document.getElementById("challengesList");

challenges.forEach((challenge) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = `./${challenge[0]}/index.html`;
  link.innerText = formatChallengeName(challenge[0]);

  const img = document.createElement("img");
  img.src = `${challenge[0]}/design/desktop-design.jpg`;

  const tech = document.createElement("p");
  tech.innerText = challenge[1];

  link.append(tech);
  link.prepend(img);
  listItem.appendChild(link);
  challengesList.appendChild(listItem);
});

function formatChallengeName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
