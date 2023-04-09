
/*arka kısmı bluur olacak yer*/
const containerEl = document.querySelector(".container-fluid");

const cardElements = document.querySelectorAll('.card');
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");


const nameProject = [["Blurred background", "yeni"], ["Charater Counter", "yeni2"],
["Dark Mode Toggle", "yeni3"], ["Digital Clock", "yeni3"]]

for (var i = 0; i < nameProject.length; i++) {
    var listItem = nameProject[i];

    makeCard(nameProject[i][0], nameProject[i][1]);

}
console.log("alooooooooo");

/*carda tıklandığında değiştirilcek metinler*/
var htmlTab = document.getElementById("html");
var cssTab = document.getElementById("css");
var jsTab = document.getElementById("javascript");

cardElements.forEach((card) => {
    card.addEventListener('click', () => {
        containerEl.classList.add("active");
        popupContainerEl.classList.remove("active");

        //cssTab.innerHTML = card.querySelector("h5").textContent;
        htmlTab.innerHTML = "yunus"

        //htmlTab.innerHTML = takeText("index.html","Blurred Background");

        console.log("htmlTab.innerHTML" + htmlTab.innerHTML)
    });
});

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
})




function makeCard(title, text) {
    // 'row' sınıfına sahip elementi seç
    var row = document.querySelector('.row');

    // Yeni bir 'div' elementi oluştur ve sınıflarını ayarla
    var col = document.createElement('div');
    col.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'col-12', 'text-white', 'p-3');

    // Yeni bir 'div' elementi oluştur ve sınıflarını ayarla
    var card = document.createElement('div');
    card.classList.add('card');

    // Yeni bir 'img' elementi oluştur, özelliklerini ayarla
    var img = document.createElement('img');
    img.setAttribute('src', '/projects/' + title + '/ss.png');
    img.classList.add('card-img-top');
    img.setAttribute('alt', 'Resim 2');

    // Yeni bir 'div' elementi oluştur ve sınıflarını ayarla
    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Yeni bir 'h5' elementi oluştur, sınıflarını ve içeriğini ayarla
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;

    // Yeni bir 'p' elementi oluştur, sınıflarını ve içeriğini ayarla
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = text;

    // 'cardBody' elementinin içine 'cardTitle' ve 'cardText' elementlerini ekle
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    // 'card' elementinin içine 'img' ve 'cardBody' elementlerini ekle
    card.appendChild(img);
    card.appendChild(cardBody);

    // 'col' elementinin içine 'card' elementini ekle
    col.appendChild(card);

    // 'row' elementinin altına 'col' elementini ekle
    row.appendChild(col);

    // yeni kartların herbirine olay dinleyicisi ekleme işlemi
    const newCards = document.querySelectorAll('.card');
    newCards.forEach(function (card) {
        card.addEventListener('click', function () {
            containerEl.classList.add("active");
            popupContainerEl.classList.remove("active");

            const splitText = event.target.src.split("/");
            const cardName = splitText[4];

            takeText("index.html", cardName)
                .then(cleanedText => {
                    document.getElementById("htmlText").innerText = cleanedText;
                })

            takeText("style.css", cardName)
                .then(cleanedText => {
                    document.getElementById("cssText").innerText = cleanedText;
                })
            takeText("index.js", cardName)
                .then(cleanedText => {
                    document.getElementById("jsText").innerText = cleanedText;
                })
        });
    });
}


function takeText(fileType, fileName) {
    const baseUrl = "./projects/" + fileName + "/";
    const fileUrl = baseUrl + fileType;

    return fetch(fileUrl)
        .then(response => response.text())
        .then(data => {
            if (fileType === "html") {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const title = doc.querySelector('title').textContent;
                console.log("Başlık- " + title);
            }
            const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
            const cleanedText = data.replace(scriptRegex, '');
            //console.log(cleanedText);

            // Check if the file is HTML and if so, extract links to CSS and JavaScript files
            if (fileType === "html") {
                const linkRegex = /<link.*?href=["'](.+?\.css)["'].*?>/gi;
                let match = linkRegex.exec(data);
                while (match !== null) {
                    const cssUrl = new URL(match[1], baseUrl).href;
                    fetch(cssUrl)
                        .then(response => response.text())
                        .then(cssData => console.log(cssData))
                        .catch(error => {
                            console.error('Error fetching CSS file:', error);
                        });
                    match = linkRegex.exec(data);
                }

                const scriptRegex = /<script\b.*?src=["'](.+?\.js)["'].*?><\/script>/gi;
                let scriptMatch = scriptRegex.exec(data);
                while (scriptMatch !== null) {
                    const scriptUrl = new URL(scriptMatch[1], baseUrl).href;
                    fetch(scriptUrl)
                        .then(response => response.text())
                        .then(jsData => console.log(jsData))
                        .catch(error => {
                            console.error('Error fetching JavaScript file:', error);
                        });
                    scriptMatch = scriptRegex.exec(data);
                }
            }
            return cleanedText;
        })
        .catch(error => {
            console.error('Error fetching file:', error);
        });
}


function takeTextt() {
    const baseUrl = "./projects/";

    return fetch(baseUrl)
        .then(response => response.text())
        .then(data => {


            console.log(data);
            return cleanedText;
        })
        .catch(error => {
            console.error('Error fetching file:', error);
        });
}


// 👇️ default export
export default function sum(a, b) {
    console.log(a + b);
}

// 👇️ named export
export const num = 100;
