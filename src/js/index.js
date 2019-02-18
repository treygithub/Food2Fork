import Search from "./models/Search";
import * as searchView from './views/SearchView';
import { DomElements } from './views/Base';

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();
    if(query){
        state.search = new Search(query);
        await state.search.fetchRequest();
        console.log(state.search.result);
    }
}

DomElements.searchForm.addEventListener('submit',e => {
    e.preventDefault();
    controlSearch();
})