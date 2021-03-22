export interface AddEmplore {
    (message: string): void;
}

export class formAdd{
    root : HTMLElement;
    input : HTMLInputElement;
    btn :  HTMLButtonElement;
    onAddEmplore?: AddEmplore;
    constructor(element:HTMLElement){
        this.root=element;
        this.input= document.createElement('input') as HTMLInputElement;
        this.btn= document.createElement('button') as HTMLButtonElement;
        this.Init();
    }
    Init(){
        this.btn.classList.add('btn');
        this.btn.textContent = "Добавить";
        this.root.appendChild(this.input);
        this.btn.onclick = this.onClickAddPeople.bind(this);
        this.root.appendChild(this.btn);
    }
    onClickAddPeople(){
        if(this.onAddEmplore)
        {
            this.onAddEmplore(this.input.value);
        }
    }
}
//this.root.appendChild(this.input);