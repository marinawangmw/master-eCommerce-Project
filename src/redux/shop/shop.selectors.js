import { createSelector } from 'reselect';

/*const collection_id_map =  {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}*/

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// tipo objetos
export const selectCollectionsForPreview  = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key]) //devuelve todos los values dado todos los keys (en array)
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );

// solo selecciono las secciones sin pasar los arrays de items (mas escalable si se llega a crecer)
export const selectSections  = createSelector(
    [selectCollectionsForPreview],
    collections => collections.map(collection => 
        ( 
            ({id,title,routeName,imageUrl,size}) => ({id,title,routeName,imageUrl,size})
        )(collection)
    )
)

/*export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
        // Version array
        collections => collections.find( collection => collection.id === collection_id_map[collectionUrlParam]) 
        //devuelve el value dado el key
    )*/
