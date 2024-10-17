import { useEffect, useState } from "react"
import KonobarService from "../../services/KonobarService"
import { Button, Table } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import moment from "moment";
import { GrValidate } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function KonobariPregled(){

    const navigate = useNavigate()

    const[konobari, setKonobari] = useState();

    async function dohvatiKonobare(){
        const odgovor = await KonobarService.get();
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        setKonobari(odgovor.poruka)
    } 

    // Ovaj hook (kuka) se izvodi dolaskom na stranicu Konobari
    useEffect(()=>{
        dohvatiKonobare();
    },[])

  

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return;
        }
        brisanjeSmjera(sifra)
    }

    async function brisanjeSmjera(sifra) {
        
        const odgovor = await KonobarService.brisanje(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        dohvatiKonobare();
    }


    return(
        <>
        <Link to={RouteNames.KONOBAR_NOVI}
        className="btn btn-success siroko">Dodaj novi konobar</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>OIB</th>
                   
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {konobari && konobari.map((smjer,index)=>(
                    <tr key={index}>
                        <td>
                            {smjer.ime}
                        </td>
                        <td>
                            {smjer.prezime}
                        </td>
                        <td>
                            {smjer.oib}
                        </td>
                        <td>
                            <Button
                            variant="danger"
                            onClick={()=>obrisi(smjer.sifra)}
                            >
                                Obriši
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button
                            onClick={()=>navigate(`/konobari/${smjer.sifra}`)}
                            >
                                Promjena
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}