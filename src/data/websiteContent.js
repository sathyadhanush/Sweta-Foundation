/**
 * Website copy from "SWETA FOUNDATION website content.docx".
 * Organisation name includes DAVALURI, as requested.
 */

const img = (file) => `/images/${encodeURIComponent(file)}`

export const siteConfig = {
  name: 'DAVALURI SWETA FOUNDATION',
  tagline: 'WE CARE TOGETHER',
  copyright: '© 2026 DAVALURI SWETA FOUNDATION. All rights reserved.',
  contact: {
    addressLines: [
      'No.7/4 Kamalabai Street,',
      'T.Nagar, Chennai 600017,',
      'Tamil Nadu, India.',
    ],
  },
}

export const images = {
  hero: img('Home page image.png'),
  shelter: img('Rescue and Rehab 1.png'),
  mission: img('Education 1.png'),
  hospital: img('Pet clinick 1.png'),
  diagnostic: img('Pet clinic 2.png'),
  rescue: img('Rescue and Rehab 1.png'),
  education: img('Education 2.png'),
  vaccination: img('Pet clinic 2.png'),
}

export const navLinks = [
  { label: 'About', path: '/#about' },
  { label: 'Our Causes', path: '/#activities' },
  { label: 'Mission', path: '/#mission' },
  { label: 'Contact', path: '/#contact' },
]

export const homeContent = {
  seo: {
    title: 'DAVALURI SWETA FOUNDATION | WE CARE TOGETHER',
    description:
      'Davaluri Sweta Foundation is an irrevocable public charitable trust committed to animal welfare and educational support for the benefit of all persons, irrespective of caste, creed, or religion.',
  },
  hero: {
    eyebrow: 'WE CARE TOGETHER',
    highlight: 'Helping Hands For Animals:',
    rest: 'Together We Heal',
    description:
      'At Davaluri Sweta Foundation, we believe in the incredible power of compassion and collective action to make the world a better place for all animals, while also supporting education and cultural activities for the benefit of all communities.',
    primaryCta: { label: 'Our Services', path: '/#activities' },
    image: images.hero,
    imageAlt: 'Caregivers treating an injured dog that is then recovering',
  },
  shelterHighlight: {
    eyebrow: 'SHELTER SERVICES',
    title: 'Safe Haven For Animals In Need',
    description:
      'Our shelter facilities provide temporary housing, medical care, and rehabilitation services for animals in need, with a focus on finding permanent loving homes.',
    button: 'Our Mission',
    path: '/#mission',
    image: images.shelter,
    imageAlt: 'Dogs resting in a shelter yard',
  },
  aboutPreview: {
    eyebrow: 'ABOUT DAVALURI SWETA FOUNDATION',
    title: 'A Charitable Trust Dedicated to Animal Welfare and Education',
    body: 'Davaluri Sweta Foundation is an irrevocable public charitable trust established on December, 2025, by Sri. DAVALURI KARUNAAKAR and Dr.NAGALATHA. We are committed to animal welfare and educational support for the benefit of all persons, irrespective of caste, creed, or religion. Our trust works tirelessly to prevent cruelty to animals, provide medical care and shelter, promote education, and support various charitable causes.',
    button: 'Our Services',
    path: '/#activities',
  },
  mission: {
    imageCaption: 'DEDICATED TO ANIMAL WELFARE & EDUCATION FOR ALL COMMUNITIES',
    eyebrow: 'OUR MISSION',
    title: 'We can change the world through our good will',
    intro:
      'Davaluri Sweta Foundation is committed to establishing and maintaining animal welfare services and promoting education. We work across all communities without discrimination, providing comprehensive care for animals in need while also supporting educational initiatives.',
    mission:
      'To establish, maintain, and assist in the promotion of animal welfare, prevent cruelty to all animals, provide medical care and shelter services, and promote education through scholarships and support for the benefit of all communities without discrimination.',
    vision:
      'To be a leading charitable trust in animal welfare and education, creating awareness, providing comprehensive care services, and making a lasting positive impact on society through our various programs and initiatives.',
    image: images.mission,
    imageAlt: 'A school student with books in a village',
  },
  activitiesIntro: {
    eyebrow: 'OUR ACTIVITIES',
    title: 'Comprehensive Programs for Animal Welfare & Education',
    description:
      'Davaluri Sweta Foundation works on a wide range of initiatives including animal welfare, rescue operations, diagnostic services, and educational support to benefit all communities.',
  },
  cta: {
    title: 'Get Involved',
    description: 'Learn more about our services or reach out to us for more information.',
    primary: { label: 'Contact Us', path: '/#contact' },
    secondary: { label: 'Learn More', path: '/#about' },
  },
  workingAreas: {
    eyebrow: 'OUR WORKING AREAS',
    title: 'Comprehensive Services for Animal Welfare, Education & Community Support',
  },
}

export const activities = [
  {
    id: 'hospitals-shelters',
    title: 'Animal Care Hospitals & Shelters',
    short:
      'We establish and maintain animal care hospitals, shelters, sanctuaries, and rehabilitation centers for stray, abandoned, sick, injured, and old animals and birds.',
    image: images.hospital,
    imageAlt: 'Veterinarians examining a dog in a pet clinic',
  },
  {
    id: 'diagnostics',
    title: 'Advanced Diagnostic Services',
    short:
      'We provide comprehensive diagnostic services including X-Ray, CT-Scan, MRI-Scan, and Intensive Care Units (ICUs) for small animals, pets, and cats requiring advanced medical treatment.',
    image: images.diagnostic,
    imageAlt: 'A veterinary team treating a dog in a clinic',
  },
  {
    id: 'rescue',
    title: 'Rescue & Rehabilitation',
    short:
      'We operate animal rescue services including computerized ambulance and helpline, provide medical aid, veterinary services, and facilitate adoption and rehoming of abandoned and rehabilitated animals.',
    image: images.rescue,
    imageAlt: 'Rescuers caring for an injured dog during rehabilitation',
  },
]

export const workingAreas = [
  {
    id: 'abc-arv',
    title: 'Animal Birth Control & Vaccination',
    short:
      'We conduct Animal Birth Control (ABC) and Anti-Rabies Vaccination (ARV) programs for stray animal populations to prevent overpopulation and rabies, along with mobile dispensaries and medical camps.',
    image: images.vaccination,
    imageAlt: 'Veterinary care for a dog at the clinic',
  },
  {
    id: 'community-education',
    title: 'Community Programs & Education',
    short:
      'We conduct community-based feeding programs, educational workshops, school programs, and awareness campaigns about animal rights and humane treatment, while also providing educational scholarships and support.',
    image: images.education,
    imageAlt: 'School children with books',
  },
  {
    id: 'advocacy',
    title: 'Advocacy & Legal Support',
    short:
      'We advocate for stronger animal protection laws, coordinate with government bodies and judicial departments, and work to prevent unnecessary pain or suffering to animals through legal and policy initiatives.',
  },
]

export const footerContent = {
  blurb:
    'A charitable trust established on October 20, 2025, dedicated to animal welfare and educational support for the benefit of all communities without discrimination.',
  quickLinks: [
    { label: 'About', path: '/#about' },
    { label: 'Our Causes', path: '/#activities' },
    { label: 'Mission', path: '/#mission' },
    { label: 'Contact', path: '/#contact' },
  ],
  services: [
    { label: 'Animal Care & Shelters', path: '/#hospitals-shelters' },
    { label: 'Diagnostic Services', path: '/#diagnostics' },
    { label: 'Rescue & Rehabilitation', path: '/#rescue' },
    { label: 'Educational Support', path: '/#community-education' },
    { label: 'Community Programs', path: '/#community-education' },
  ],
}
