"use strict"

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


let input = [
  ['0001', 'Baruso', 'Imenualo', 'Toba', '29/12/1989', '+1 123874', 'baru@mmaol.com'],
  ['0002', 'Doto', 'Barito', 'Spain', '08/01/1975', '+66 948572', 'toto@mmaol.com'],
  ['0003', 'Yono', 'Sarmento', 'Jogja', '29/02/1966', '+1 850840', 'mento@mmaol.com']
]

// const myContact = () => {
//   for (let i = 0; i < input.length; i++) {
//     console.log(`NIK : ${input[i][0]}`);
//     console.log(`First Name : ${input[i][1]}`);
//     console.log(`Last Name : ${input[i][2]}`);
//     console.log(`Birth Place : ${input[i][3]}`);
//     console.log(`Birth : ${input[i][4]}`);
//     console.log(`Phone Number : ${input[i][5]}`);
//     console.log(`Email : ${input[i][6]}`);
//     console.log(`................................`);

//   }
// }

const showContact = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    console.log(`${index +1}  ${contacts[index].join('|')}`);
  }
}

const addContact = contact => {
  input.push(contact)
  console.log(`add contact success`);
  showContact(input)
}

const deleteContact = contact => {
  input.pop(contact)
  showContact(input)
}

showContact(input)
addContact([`0004`, `Mahmud`, `+6262626262`, `mud@mool.com`])
deleteContact()

//......................................................

const myContacts = [{
    name: 'Alpha Avalon',
    phone: '+1 111 101010',
    email: 'alpha@avalon.org',
    favorite: true,
    rating: 9,
    tags: ['popular', 'cool']
  },
  {
    name: 'Betty Brave',
    phone: '+62 812 242424',
    email: 'betty@braverian.com'
  },
  {
    name: 'Gamma Gacurio',
    phone: '+63 813 363636',
    email: 'gamma@gacurio.dev'
  }
]

const showContacts = contacts => {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i]
    console.log(
      `[${i + 1}] ${contact.name} (${contact.phone}) <${contact.email}>`
    )
  }
}

const filterContacts = (contacts, minimumNameLength) => {
  let newContacts = []

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]

    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact)
    }
  }

  return newContacts
}

const createContact = contact => {
  myContacts.push(contact)
  console.log(`add contact success`);
  showContacts(myContacts)
}

const deleteContact = contact => {
  myContacts.pop()
  console.log(`delete success`);
  showContacts(myContacts);

}

showContacts(myContacts)
// const filteredContacts = filterContacts(myContacts, 12)
// showContacts(filteredContacts)
// createContact({
//   name: `Haku`,
//   phone: `+62 626262`,
//   email: `haku@mol.com`
// })
deleteContact();