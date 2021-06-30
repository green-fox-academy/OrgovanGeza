import { strictEqual } from 'assert';
import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'grass', 'water');

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Bulbasaur', 'grass', 'water'),
        new Pokemon('Pikachu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'grass'),
        new Pokemon('Pidgeot', 'flying', 'fighting'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

function chooseEffective (poke1:Pokemon[], poke2:Pokemon) {
    for (let i=0; i<poke1.length; i++){
        if (poke1[i].isEffectiveAgainst(poke2)) {
            return poke1[i].name;
        }
    }
}