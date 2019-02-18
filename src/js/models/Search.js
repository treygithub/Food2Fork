import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;

    } 

    async fetchRequest(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '823332940e6a670d0eb4500f637c1d20';
        try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        } catch(error) {
            alert('error from fetchRequest()',error);
        }
    }
}
