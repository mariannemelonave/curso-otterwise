import fs from 'fs' 

const list = fs.readFileSync('./meuCarrinho.csv') 
const newList = list.toString().split('\r\n') 

const result = [];
const headers = newList[0].split(",") 

for (let i = 1; i < newList.length - 1; i++) {
    let objct = {}
    let strg = newList[i]
    let s = ''
    let flag = 0

    for (let ch of strg) {
        if (ch === '"' && flag === 0) { flag = 1 } else if (ch === '"' && flag == 1) flag = 0
        if (ch === ',' && flag === 0) ch = '|'
        if (ch !== '"') s += ch
    }

    let properties = s.split("|")

    for (let j = 0; j < properties.length; j++) {
        if (properties[j].includes(",")) {
            objct[headers[j]] = properties[j]
                .split(", ").map(item => item.trim())
        }
        else objct[headers[j]] = properties[j]
    }

    result.push(objct)
}
console.log(result)

const json = JSON.stringify(result);
fs.writeFileSync('content.json', json);



