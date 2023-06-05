import { LightningElement } from 'lwc';
import {OmniscriptBaseMixin} from 'vlocity__ins/OmniscriptBaseMixin'

export default class Anterior extends OmniscriptBaseMixin(LightningElement) {
    handleClick(){
        this.omniPrevStep();
    }
}