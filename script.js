const challenges = [
  ["rock-paper-scissors", "HTML CSS JS"],
  ["advice-generator-app-main", "HTML CSS JS API"],
  ["expenses-chart-component", "HTML CSS JS"],
  ["interactive-rating-component", "HTML CSS JS"],
  ["fylo-landing-page", "HTML CSS"],
  ["intro-component-with-signup-form", "HTML CSS JS"],
  ["huddle-landing-page", "HTML CSS"],
  ["ping-coming-soon-page", "HTML CSS JS"],
  ["base-apparel-coming-soon-master", "HTML CSS JS"],
  ["single-price-grid-component", "HTML CSS"],
  ["nft-preview-card-component", "HTML CSS"],
  ["four-card-feature-section-master", "HTML CSS"],
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
