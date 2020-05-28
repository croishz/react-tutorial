import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import App from './App';
import ProductList from './ProductList';
import './exercise';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(< ProductList/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


{/* <div class="sort-select">
    <label id="sortfilter" for="sortBy">Modifier l'ordre des résultats</label>
    <select class="run-chosen fsrVisible chosen-initialized" id="sortBy" name="sort" data-placeholder="Category" title="" aria-controls="résultatAppendiceCible" style="display: none;">
        <option value="" disabled="">Trier par</option>
        <option value="0" selected="">Le plus récent </option>
        <option value="1">Résultats les plus populaires</option>
        <option value="5">Note Utilisateur</option>
    </select>
    <div class="chosen-container chosen-container-single run-chosen fsrVisible chosen-container-single-nosearch chosen-with-drop chosen-container-active" id="sortBy_chosen" style="width: 100%;">
        <button type="button" class="chosen-single" aria-expanded="true" aria-labelledby="sortfilter" aria-haspopup="menu">
            <span>Le plus récent </span>
            <span>
                <i class="icon">
                    <svg width="10px" height="7px">
                        <path d="M9.706,0.290 C9.335,-0.085 8.734,-0.085 8.364,0.290 L4.989,3.589 L1.614,0.290 C1.243,-0.085 0.642,-0.085 0.272,0.290 C-0.099,0.665 -0.099,1.273 0.272,1.649 L4.303,5.743 C4.492,5.935 4.741,6.026 4.989,6.022 C5.236,6.026 5.485,5.935 5.673,5.743 L9.706,1.649 C10.076,1.273 10.076,0.665 9.706,0.290 Z"></path>
                    </svg>
                </i>
            </span>
        </button>
        <div class="chosen-drop">
            <ul class="chosen-results" role="menu">
            <li class="disabled-result" role="menuitem" aria-selected="false" data-option-array-index="0" tabindex="0">Trier par</li>
            <li class="active-result result-selected highlighted" role="menuitem" aria-selected="true" data-option-array-index="1" tabindex="0">Le plus récent </li>
            <li class="active-result" role="menuitem" aria-selected="false" data-option-array-index="2" tabindex="0">Résultats les plus populaires</li>
            <li class="active-result" role="menuitem" aria-selected="false" data-option-array-index="3" tabindex="0">Note Utilisateur</li>
            </ul>
        </div>
    </div>
    <div role="status" aria-live="polite">Les résultats sont triés suivant le plus récent</div>
</div> */}