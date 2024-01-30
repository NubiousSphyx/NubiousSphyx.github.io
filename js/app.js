document.addEventListener('DOMContentLoaded', () => {

    const app = document.getElementById('app')
    const output = document.querySelector('output')
    const search = document.querySelector('.search')
    let options = []
    const allList = []
    let counter = -1
    // fetch('https://gist.githubusercontent.com/NubiousSphyx/73f221d23482d356d7e251d3ac1a44a1/raw/8f79460e38128d50677106e25c36bb06e7aa9eed/software.json')
    fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        for(let name in data) {
            // console.log(data[name])
            data[name].forEach(item => {
                allList.push(item.name)
            })
            // allList.push(data[name].name)
        }
        console.log(allList)
        for(let element in data) {
            // console.log(element)
            // console.log(data)
            // optionsObj[element] = data[element]
            // options.push(optionsObj)
            options.push(data[element])
            counter++
            renderOptions(element, data[element], counter)
        }

        // for(let item in optionsObj) {
        //     options.push(optionsObj[item])
        // }

        // console.log(optionsObj)
        // console.log(options)

        // search.addEventListener('input', event => {
        //     output.innerHTML = ''
        //     const valueSearch = event.target.value
        //     options = findWord(valueSearch, allList)
        //     console.log(allList)
        //     options.map((name) => {
        //         output.insertAdjacentHTML('beforeend', `
        //             <li><a href="${name.link}" target="_blank">${name}</a></li>
        //         `)
        //     })
        // })
    })

    // function findWord(word, options) {
    //     return options.filter(el => {
    //         const regex = new RegExp(word, 'gi')
    //         return el.match(regex)
    //     })
    // }

    // начальный рендер (разовый)
    function renderOptions(element, data, counter) {
        app.insertAdjacentHTML('beforeend', `<div class="block ${element}-block" id="${counter}"><h1>${element}</h1><ul class="${element}"></ul></div>`)
        data.forEach(item => {
            document.querySelector(`ul.${element}`).insertAdjacentHTML('beforeend', `
            <li>
                <a href="${item.link}" target="_blank"
                    style="background-image: url('${item.img}')"
                ></a>
            </li>`)
        })
    }

    // регулярные выражения
    // function getOptions(word, dataOptions) {
    //     dataOptions.forEach(element => {
    //         element.forEach(item => {
    //             // console.log(el.name)
    //             console.log(item)
    //             return item.name.filter(el => {
    //                 const regex = new RegExp(word, 'gi')
    //                 return el.name.match(regex)
    //             })
    //         })
    //     })
    //     // return dataOptions.filter(item => {
    //     //     const regex = new RegExp(word, 'gi')
    //     //     return item.name.match(regex)
    //     // })
    // }

})