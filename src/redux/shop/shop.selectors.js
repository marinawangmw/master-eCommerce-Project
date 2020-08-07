import { createSelector } from 'reselect';

const collection_id_map =  {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// solo selecciono las secciones sin pasar los arrays de items (mas escalable si se llega a crecer)
export const selectSections = createSelector(
    [selectCollections],
    collections => collections.map(collection => 
        ( ({id,title,routeName,imageUrl,size}) => ({id,title,routeName,imageUrl,size})
        )(collection)
    )    
)

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
        // Version array
        collections => collections.find( collection => collection.id === collection_id_map[collectionUrlParam]) 
        //devuelve el value dado el key
    )