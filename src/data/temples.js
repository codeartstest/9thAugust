/**
 * Static data module for the Cambodia Website.
 * Centralizes all temple highlight content and key facts so that
 * presentation components remain data-agnostic.
 */

export const temples = [
  {
    name: 'Angkor Wat',
    description:
      'The largest religious monument in the world, built in the early 12th century by King Suryavarman II. A stunning example of classical Khmer architecture.',
    image: 'linear-gradient(135deg, #8B0000, #D4AF37)',
    location: 'Angkor, Siem Reap',
  },
  {
    name: 'Bayon',
    description:
      'A richly decorated Khmer temple known for its massive stone faces smiling in all directions. Built in the late 12th century by King Jayavarman VII.',
    image: 'linear-gradient(135deg, #3E2723, #8B0000)',
    location: 'Angkor Thom, Siem Reap',
  },
  {
    name: 'Ta Prohm',
    description:
      'Famous for the massive trees growing out of the ruins, creating a hauntingly beautiful fusion of nature and architecture. Featured in the Tomb Raider film.',
    image: 'linear-gradient(135deg, #6D4C41, #3E2723)',
    location: 'Angkor, Siem Reap',
  },
  {
    name: 'Banteay Srei',
    description:
      'A 10th-century temple dedicated to the Hindu god Shiva. Known for its intricate pink sandstone carvings, considered the finest Khmer sculpture.',
    image: 'linear-gradient(135deg, #D4AF37, #F5E6C8)',
    location: 'Near Phnom Dei, Siem Reap',
  },
];

export const keyFacts = [
  { label: 'Capital', value: 'Phnom Penh' },
  { label: 'Population', value: '~17 million' },
  { label: 'Language', value: 'Khmer' },
  { label: 'Currency', value: 'Riel (KHR)' },
];