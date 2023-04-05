const main = document.getElementById('main')
const url = 'https://jsonplaceholder.typicode.com/photos'

const getData = async (url) => {
    await fetch(url)
        .then(res =>  res.json())
        .then(data => {
            data.forEach(element => {
                const div = document.createElement('div')
                div.innerHTML = `                    
                    <img src="https://via.placeholder.com/600/92c952" alt=""> ${element.url}
                    </div>
                `
                main.append(div)
            })
        })
}   

getData(url)


