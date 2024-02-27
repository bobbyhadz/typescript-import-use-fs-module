export {};

// EXAMPLE 1 - Import and use the 'fs' module in TypeScript

// ✅ using the fs module synchronously
import * as fs from 'fs';
import * as path from 'path';

function readFile() {
  const dirContents = fs.readdirSync(__dirname);
  console.log(dirContents);

  const fileContents = fs.readFileSync(
    path.join(__dirname, 'another-file.ts'),
    {
      encoding: 'utf-8',
    },
  );

  console.log(fileContents);
}

readFile();

// ---------------------------------------------------

// // EXAMPLE 2 - Using the `fs` module asynchronously in TypeScript

// // ✅ using the async module asynchronously
// import { promises as fsPromises } from 'fs';
// import * as path from 'path';

// async function readFile() {
//   try {
//     // ✅ Read contents of directory
//     const dirContents = await fsPromises.readdir(__dirname);
//     console.log(dirContents);

//     // ✅ Read contents of `another-file.ts` in the same directory
//     const fileContents = await fsPromises.readFile(
//       path.join(__dirname, './another-file.ts'),
//       { encoding: 'utf-8' },
//     );
//     console.log(fileContents);
//   } catch (err) {
//     console.log('error is: ', err);
//   }
// }

// readFile();
