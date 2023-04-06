
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



// Accessing the projects folder
const projectsPath = './projects/Blurred Background/';
//takeText("index.html");


function takeText(fileType, fileName) {
    return fetch("./projects/" + fileName + "/" + fileType)
        .then(response => response.text())
        .then(data => {

            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const title = doc.querySelector('title').textContent;

            console.log("Başlık- " + title);

            //console.log("1- " + data);

            // Tüm script tag'larını seçen regular expression
            const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

            // Tüm script tag'larını içeriklerini silip geri kalan metni birleştiriyoruz
            const cleanedText = data.replace(scriptRegex, '');

            // Yeni metni yazdırıyoruz
            //console.log(cleanedText);
            return cleanedText;

        })
        .catch(error => {
            console.error('Error fetching file:', error);
        });
}





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


            takeText("index.html", "Blurred Background")
                .then(cleanedText => {
                    htmlTab.textContent = cleanedText;
                })
                .catch(error => {
                    console.error('Error:', error);
                });

            cssTab.innerHTML = "takeText);"
            console.log("Eklendi");

        });
    });


}
