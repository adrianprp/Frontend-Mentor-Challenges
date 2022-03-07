const challenges = [
    'advice-generator-app-main',
    'base-apparel-coming-soon-master',
    'four-card-feature-section-master',
];

const challengesList = document.getElementById("challengesList");

challenges.forEach(challenge => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `./${challenge}/index.html`;
    link.innerText = formatChallengeName(challenge);

    const img = document.createElement('img');
    img.src = `${challenge}/design/desktop-design.jpg`;

    link.prepend(img);
    listItem.appendChild(link);
    challengesList.appendChild(listItem);
});

function formatChallengeName(name){
    return name
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")
}