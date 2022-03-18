console.log('markdown')

module.exports = {

  generate: function (args) {
    console.log('generate');
    const readMe = `# ${args[0]}

## Description

${args[1]}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

${args[2]}

## Usage

${args[3]}

## License

![License](https://img.shields.io/static/v1?label=License&message=${args[4]}&color=red)

## How to Contribute

${args[5]}

## Tests

${args[6]}

## Questions

If you have any questions, please feel free to contact me, ${args[7]} at [${args[8]}](mailto:${args[8]}) or go to my Github page at [${args[9]}(${args[9]})].
`;
console.log(readMe)
return readMe;

// console.log(readMe);

  }
};