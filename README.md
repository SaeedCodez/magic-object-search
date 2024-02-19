# ✨ Magic Object Search

`magic-object-search` is a lightweight utility library published on npm, designed to simplify searching through arrays of objects in TypeScript or JavaScript environments. It provides a simple yet powerful function to search for a specific string within specified properties of objects in an array.

## Installation

You can install `magic-object-search` via npm:

```bash
npm install magic-object-search
```

## Usage
To use `magic-object-search`, import the magicObjectSearch function and pass in the search string, array of objects, and properties to search within.

``` ts
import { magicObjectSearch } from 'magic-object-search';

interface MyObject {
  id: number;
  name: string;
  description: string;
}

const objects: MyObject[] = [
  { id: 1, name: '🍎 Apple', description: 'A fruit with red or green skin' },
  { id: 2, name: '🍌 Banana', description: 'A long curved fruit that grows in clusters' },
  { id: 3, name: '🍊 Orange', description: 'A round citrus fruit with a tough shiny orange skin' }
];

const searchResults = magicObjectSearch('fruit', objects, ['name', 'description']);
console.log(searchResults);

/* Output: 
[
      {
            id: 1,
            name: '🍎 Apple',
            description: 'A fruit with red or green skin'
      },
      {
            id: 2,
            name: '🍌 Banana',
            description: 'A long curved fruit that grows in clusters'
      }
]
*/
```

## API
`magicObjectSearch<T>(str: string, options: T[], properties: (keyof T)[]): T[]`
* `str` (string): The string to search for within the specified properties of objects.
* `options` (T[]): An array of objects to search within.
* `properties` (keyof T)[]: An array of property names (keys) within objects to search for the given string.


## Contributions
Contributions are welcome! Feel free to submit issues or pull requests.


## License
This project is licensed under the MIT License. See the LICENSE file for details.