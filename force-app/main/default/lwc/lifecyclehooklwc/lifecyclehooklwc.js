import { LightningElement } from 'lwc';

import templateprimary from './SampleFirstTemplate.html';
import templateSecoundary from './SampleSecoundaryTemplate.html';

export default class Lifecyclehooklwc extends LightningElement {
    
    showtemplatePrimary = true; 

    Name 
    constructor(){ 

        //this hook is called when the component is gets created
        //this hook will gets initaiated in the parent component first since it flows from parent to child
        //it is necessary to invoke super keyword
        super()
            this.Name = 'vinod denavena';

        console.log('initialized constructor method');
    }

    connectedCallback(){
        //this hook is called when the component is inserted in to the DOM
        //this hook runs when the component is inserted in to the DOM
        // we cant access child elements becouse they dont exist
        //its executed after the constructor gets fired
        //flows from parent to child
        //If we want fire any logic on component load then we should use ConnectedCallBack() life cycle hook.
        console.log('in connected  callback');
        this.Name = 'in connected callback'; 
    }

    render(){
        //this hook is called after the connected callback
        //this hook is used to override the standard rendring functionality
        return this.showtemplatePrimary ?  templateSecoundary : templateprimary ;
    }
     
     renderedCallback(){
        // flow is from child to parent
        //Reactive property in renderedCallback() leads to infinite loop not recommend to use
        //instead use getters and setters in lwc 
        console.log('in renderedcallback');
     }
     disconnectedCallback(){
        //this method is called when the component is removed from the DOM
        console.log('in Disconnected callback');
     }
     errors
     stacks
     errorCallback(error , stack){
         //ErrorCallback() Invoked when the component throws error in one of the lifecycle hooks (instantiating the component, connecting or rendering
         //Similar to JavaScript catch{} block, error and stack are the two arguments.error is javascript native error object whereas stack is a string
         //To capture the stack information and render a different template when error is occurred
         //The stack trace is a list of function calls and their corresponding locations in the code that led to the error.
         this.errors = error;
         this.stacks = stack;
         console.log('the error is '+error);

     }
    

}