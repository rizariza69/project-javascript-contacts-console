const myContacts = [
  {
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
  console.log(`add contact success`)
  showContacts(myContacts)
}

const deleteContact = contact => {
  myContacts.pop() // myContacts.splice(myContacts.length - 1, 1)
  console.log(`delete success`)
  showContacts(myContacts)
}

showContacts(myContacts)

const filteredContacts = filterContacts(myContacts, 12)

showContacts(filteredContacts)

createContact({
  name: `Haku`,
  phone: `+62 626262`,
  email: `haku@mol.com`
})

deleteContact()

deleteContact()
