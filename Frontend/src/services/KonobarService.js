import { HttpService } from "./HttpService";



async function get(){
    return await HttpService.get('/Konobar')
    .then((odgovor)=>{
        //console.log(odgovor.data)
        //console.table(odgovor.data)
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: 'Problem kod dohvaćanja Konobarova'}   
    })
}

async function brisanje(sifra){
    return await HttpService.delete('/Konobar/' + sifra)
    .then(()=>{
        return {greska: false, poruka: 'Obrisano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod brisanja Konobara'}   
    })
}

async function dodaj(Konobar){
    return await HttpService.post('/Konobar',Konobar)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja Konobara'}   
    })
}

async function promjena(sifra,Konobar){
    return await HttpService.put('/Konobar/' + sifra,Konobar)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja Konobara'}   
    })
}

async function getBySifra(sifra){
    return await HttpService.get('/Konobar/'+sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Problem kod dohvaćanja Konobara s šifrom '+sifra}   
    })
}


export default {
    get,
    brisanje,
    dodaj,
    getBySifra,
    promjena
}
