export class Repository{

    public stargazers_count:number;
    public name:string;
    public id:number;
    public html_url:string;

    constructor(){
        this.id = 0;
        this.stargazers_count = 0;
        this.name = '';
        this.html_url = '';
    }
}