const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/menuItems.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the pollinations AI links or any image links with loremflickr for stability
let seed = 1000;
content = content.replace(
    /{ name: '([^']+)', category: '([^']+)', price: ([0-9]+), image: '([^']+)' }/g,
    (match, name, category, price, oldImage) => {
        seed++;

        // We will extract a good keyword from the name or category
        // For LoremFlickr, single strong keywords work best, e.g., 'momo', 'pizza', 'tea', 'burger'
        let rawKeyword = name.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
        if (rawKeyword.length < 3) {
            rawKeyword = category.toLowerCase().split(' ')[0].replace(/[^a-z]/g, '');
        }

        // Fallbacks if keyword doesn't make sense
        let keyword = rawKeyword;
        if (name.toLowerCase().includes('tea')) keyword = 'tea';
        else if (name.toLowerCase().includes('coffee')) keyword = 'coffee';
        else if (name.toLowerCase().includes('momo') || name.toLowerCase().includes('mo:mo')) keyword = 'momo,dumpling';
        else if (name.toLowerCase().includes('pizza')) keyword = 'pizza';
        else if (name.toLowerCase().includes('burger')) keyword = 'burger';
        else if (name.toLowerCase().includes('chowmein')) keyword = 'chowmein,noodles';
        else if (name.toLowerCase().includes('rice')) keyword = 'friedrice';
        else if (name.toLowerCase().includes('chicken')) keyword = 'chicken,food';
        else if (name.toLowerCase().includes('soup')) keyword = 'soup';
        else if (name.toLowerCase().includes('salad')) keyword = 'salad';
        else if (name.toLowerCase().includes('drink') || category.toLowerCase().includes('beverage')) keyword = 'drink';
        else if (category.toLowerCase().includes('beer')) keyword = 'beer';
        else if (category.toLowerCase().includes('hard drinks')) keyword = 'liquor';
        else keyword += ',food';

        // We pass a lock seed so the image is perfectly stable and unique for this item
        const newImage = `https://loremflickr.com/400/300/${keyword}?lock=${seed}`;
        return `{ name: '${name.replace(/'/g, "\\'")}', category: '${category}', price: ${price}, image: '${newImage}' }`;
    }
);

fs.writeFileSync(filePath, content);
console.log('Successfully updated menuItems.ts with LoremFlickr dynamic image URLs!');
