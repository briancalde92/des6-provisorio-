const title = document.getElementById("MainTitle");

console.log("title.innerHTML");

const firstMemberLastName = document.getElementById('firstMemberLastName');

const secondMemberLastName = document.getElementById('secondMemberLastName');


function createyourdata(HTMLList) {
    let yourdata = ''; 
    for (let index = 0; index < HTMLList.length; index++) {
        const element = HTMLList[index];
        if (element.tagName === 'DD' && element.innerText) {
           yourdata = yourdata.concat(`${element === firstMemberLastName ? element.innerText.toUpperCase() : element.innerText} `);
        }
    }
    return yourdata.trim();
}

function createyourdata(HTMLList) {
    let yourdata = ''; 
    for (let index = 0; index < HTMLList.length; index++) {
        const element = HTMLList[index];
        if (element.tagName === 'DD' && element.innerText) {
            yourdata = yourdata.concat(`${element === secondMemberLastName ? element.innerText.toUpperCase() : element.innerText} `);
        }
    }
    return yourdata.trim();
}


const divList = document.getElementById("divList");

function showList(list) {
    let string = "";
    for (let i = 0; i <i.length; i++) {
        // const elementList = list[i];
        if (elementList.tagName === "H2") {
            string = string.concat(`${elementList.innerText}: `)
        }
        if (elementList.tagName === "DL") {
            string = string.concat(
               createyourdata(elementList.children) + "\n"
            )
        }
    }
    return string
}

console.log(`-----\n${showList(divList)}-----`)



    
