import { LightningElement } from 'lwc';
import { api } from 'lwc';
import LightningModal from "lightning/modal";

export default class PlanRecomendado extends LightningElement {
    @api containerVentana;

    //containerVentana = document.querySelector( '.containerVentana' );

    mostrarModal() {
        console.log( "mostrar" );
        this.open("ShowModal");
    }
    
    cerrarModal() {
        console.log("cerra" );
        this.close("CloseModal");
    }

}