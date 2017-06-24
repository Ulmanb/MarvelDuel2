
// Convention to get heroes by 3 charecters indexes
// (Assuming indexes in the hero array are always the same)
const duelIdToIndexes = (duelId) => {
    return duelId.match(/.{3}|.{1,2}/g).map(Number);
}

export const duelIdToSelectedHeroes = (duelId, heroes) => {
    return duelIdToIndexes(duelId).map((index) => heroes[index]);
}

export const heroesToDuelId = (heroes, selectedHeroes) => {
    return selectedHeroes.map((selectedHero) => {
        // Find index of the selected hero 
        const index = heroes.findIndex((hero) => selectedHero.name === hero.name);
        let indexStr = index.toString(); 
        
        // Prepend '0' to the index to be able to treat all indexes as 3 charecters
        while (indexStr.length < 3) {
            indexStr = '0' + indexStr;        
        }

        return indexStr;
    })
    // Sorting to always get the same id for the same heroes
    .sort()
    // Convert to a string
    .join('');
}