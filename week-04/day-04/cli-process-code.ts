const args: string[] = process.argv.slice(2);

if (args[0] === '-l') {
  console.log('here we should print the list');
} else if (args[0] === '-a' && args[1] !== undefined) {
  console.log(`here we should add ${args[1]} to the list`);
}