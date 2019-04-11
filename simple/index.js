'use strict'

const names = ['Alpha Avalon', 'Betty Brave', 'Gamma Gacurio']

// Experiments to manage the names
const showNames = names => {
  // loop over the names array
  for (let index = 0; index < names.length; index++) {
    // name and names are different
    // console.log(names);

    const name = names[index]

    // log the name and index at the same time
    console.log(`[${index + 1}] ${name}`)
  }
}

const filterNames = (names, minimumLength) => {
  let newNames = []

  for (let index = 0; index < names.length; index++) {
    const name = names[index]

    if (name.length >= minimumLength) {
      console.log(name.length)
      newNames.push(name)
    }
  }

  return newNames
}

// filteredNames and filterNames are different
const filteredNames = filterNames(names, 12) // [ 'Alpha Avalon', 'Gamma Gacurio' ]

showNames(filteredNames)

// execute or call the function
showNames(names)
