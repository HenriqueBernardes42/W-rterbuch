let inp = document.getElementById("input")
let translation = document.getElementById("word")

let word = [
{word:"Auge",translate:"olho",src:"https://i.pinimg.com/originals/13/a9/32/13a932dfd7600e348984ae8693243d67.jpg"},
{word:"dort",translate:"lá",src:"https://www.robsonpiresxerife.com/wp-content/uploads/2009/04/fernando-bezerra-olhando-a-praia.jpg"},
{word:"dummen",translate:"estúpido",src:"https://us.123rf.com/450wm/juandarien/juandarien0912/juandarien091200003/6015610-idiot-s%C3%A4gen-zweig-.jpg?ver=6"},
{word:"einschlafen",translate:"cair no sono, adormecer",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHqZaOpZJFDXNjXJ-nSjgOMD3CJMPFcl1og&usqp=CAU"},
{word:"Erfolg",translate:"sucesso",src:"https://vejasp.abril.com.br/wp-content/uploads/2016/12/abre0541.jpg"},
{word:"feuer",translate:"fogo",src:"https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2019/10/Fogo-1000x600.jpg"},
{word:"Fehler",translate:"fracasso",src:"https://quadrinheiros.files.wordpress.com/2020/02/star-trek-picard-face-palm.jpg"},
{word:"meinen",translate:"dizer",src:"https://blog.jaleko.com.br/wp-content/uploads/2019/03/falar_em_publico.png"},
{word:"wasser",translate:"água",src:"http://wasserbr.com/wp-content/uploads/2019/03/Capta%C3%A7%C3%A3o-Subterr%C3%A2nea-da-perfura%C3%A7%C3%A3o-%C3%A0-legaliza%C3%A7%C3%A3o-do-po%C3%A7o-Wasser.jpg"},
{word:"wenn",translate:"e se",src:"https://images-na.ssl-images-amazon.com/images/I/41rqJuZlHQL.jpg"},
{word:"Worten",translate:"palavras",src:"https://pt-static.z-dn.net/files/de1/a33e1ed03945e18ff9d084d77ebfe337.jpg"},
{word:"ohne",translate:"sem",src:"https://st3.depositphotos.com/12020264/i/600/depositphotos_376357352-stock-photo-man-business-suit-holds-his.jpg"},
{word:"Schreibmaschine",translate:"maquina de escrever", src:"https://legobrasil.vteximg.com.br/arquivos/ids/174232-1000-1000/lego_21327_ideas_maquina_de_escrever_01.jpg?v=637632785039830000"},
{word:"Silben",translate:"sílabas",src:"https://lesejule.de/content/2-Silben/Silbenkarten/gr%C3%BCn/Doppelkonsonanten.jpg"},
{word:"spät",translate:"atrasado",src:"https://www.jornalciencia.com/wp-content/uploads/2017/04/image-1090x500.png"}
]


console.log(word.length);

function image(){
    for(var i = 0;i < word.length;i++){
    if(inp.value == word[i].word){
        return document.getElementById("imagem").src = word[i].src  
        }
    }
}

function show(){
    for(var i = 0;i < word.length;i++){
        if(inp.value == word[i].word){
            translation.innerHTML = word[i].translate
        }
    }  
}