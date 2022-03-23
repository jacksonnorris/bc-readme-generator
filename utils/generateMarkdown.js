// console.log('markdown')

module.exports = {

  generate: function (args) {
    console.log('generate');
    const readMe = `# ${args[0]}

## Description

${args[1]}

## Table of Contents

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

${args[6]}

## Tests

${args[7]}

## Questions

If you have any questions, please feel free to contact me, ${args[8]} at [${args[9]}](mailto:${args[9]}) or go to my Github page at [${args[10]}](https://github.com/${args[10]}).
`;
    return readMe;
    }
};