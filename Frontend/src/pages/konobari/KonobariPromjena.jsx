import KonobarService from "../../services/KonobarService"
import { Button, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import { useEffect, useState } from "react";


export default function KonobariPromjena(){

    const [konobar,setKonobar] = useState({})
    const navigate = useNavigate()
    const routeParams = useParams()

    async function dohvatiSmjer(){
        const odgovor = await KonobarService.getBySifra(routeParams.sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        let s = odgovor.poruka
        setKonobar(s)
    } 

    useEffect(()=>{
        dohvatiSmjer();
     },[])

     async function promjena(konobar) {
        //console.log(konobar)
        //console.log(JSON.stringify(konobar))
        const odgovor = await KonobarService.promjena(routeParams.sifra,konobar)
        if(odgovor.greska){
            alert(odgovor.poruka)
            return;
        }
        navigate(RouteNames.KONOBAR_PREGLED)
    }

    function obradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server
        let podaci = new FormData(e.target)
        //console.log(podaci.get('naziv'))
        promjena({
            ime: podaci.get('ime'),
            prezime: podaci.get('prezime'),
            oib: podaci.get('oib')
        })
    }

    return(
        <>
        Promjena konobara
        <Form onSubmit={obradiSubmit}>

        <Form.Group controlId="ime">
                <Form.Label>Ime</Form.Label>
                <Form.Control type="text" name="ime" required defaultValue={konobar.ime}/>
            </Form.Group>

            <Form.Group controlId="iprezimeme">
                <Form.Label>Prezime</Form.Label>
                <Form.Control type="text" name="prezime" required  defaultValue={konobar.prezime}/>
            </Form.Group>

            <Form.Group controlId="oib">
                <Form.Label>OIB</Form.Label>
                <Form.Control type="text" name="oib" required  defaultValue={konobar.oib}/>
            </Form.Group>

        <Row className="akcije">
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.KONOBAR_PREGLED} 
            className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="success"
            type="submit"
            className="siroko">Promjeni konobar</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}