'use strict'

let myContacts = [
  [
    '0001',
    'Baruso',
    'Imenualo',
    'Toba',
    '29/12/1989',
    '+1 123874',
    'baru@mmaol.com'
  ],
  [
    '0002',
    'Doto',
    'Barito',
    'Spain',
    '08/01/1975',
    '+66 948572',
    'toto@mmaol.com'
  ],
  [
    '0003',
    'Yono',
    'Sarmento',
    'Jogja',
    '29/02/1966',
    '+1 850840',
    'mento@mmaol.com'
  ]
]

const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    console.log(`${index + 1} ${contacts[index].join('|')}`)
  }
}

const addContact = contact => {
  myContacts.push(contact)
  console.log(`add contact success`)
  showContacts(myContacts)
}

const deleteContact = contact => {
  myContacts.pop(contact)
  showContacts(myContacts)
}

// show all contacts
showContacts(myContacts)

// add new contact
addContact([`0004`, `Mahmud`, `+6262626262`, `mud@mool.com`])

// delete one contact
deleteContact()
