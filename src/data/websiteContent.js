/**
 * Central content & config for Sweta Foundation.
 * Contact phone/email left empty until client provides verified details.
 *
 * CLIENT NOTE — establishment date inconsistency in source document:
 * - About section: "December, 2025"
 * - Footer text: "October 20, 2025"
 * Confirm which date should be used site-wide before launch.
 */

export const siteConfig = {
  name: 'Sweta Foundation',
  tagline: 'WE CARE TOGETHER',
  shortDescription:
    'A charitable trust dedicated to animal welfare and educational support for the benefit of all communities without discrimination.',
  /** Set when client confirms donation URL or instructions */
  donateUrl: '/contact',
  donateLabel: 'Donate / Support Us',
  donateNote:
    'Donation payment details will be shared once confirmed by the foundation. Please contact us to support our work.',
  contact: {
    email: '', // add verified email when provided
    phone: '', // add verified phone when provided
    addressLines: [
      'No.7/4 Kamalabai Street,',
      'T. Nagar, Chennai 600017,',
      'Tamil Nadu, India.',
    ],
    addressSingle:
      'No.7/4 Kamalabai Street, T. Nagar, Chennai 600017, Tamil Nadu, India',
  },
  copyright: '© 2025 Sweta Foundation. All rights reserved.',
  /** From source footer — confirm vs December 2025 in About */
  establishedFooter: 'October 20, 2025',
  establishedAbout: 'December, 2025',
  founders: ['Sri. DAVALURI KARUNAAKAR', 'Dr. NAGALATHA'],
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Animal Welfare', path: '/animal-welfare' },
  { label: 'Animal Protection', path: '/animal-protection' },
  { label: "Children's Education", path: '/childrens-education' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Activities', path: '/activities' },
  { label: 'Contact Us', path: '/contact' },
]

export const images = {
  hero:
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80',
  shelter:
    'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80',
  welfare:
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80',
  protection:
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80',
  education:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
  hospital:
    'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80',
  diagnostic:
    'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80',
  rescue:
    'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80',
  vaccination:
    'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1200&q=80',
  community:
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  advocacy:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  about:
    'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?auto=format&fit=crop&w=1200&q=80',
  mission:
    'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
  classroom:
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
  scholarship:
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
  workshop:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  books:
    'https://images.unsplash.com/photo-14565130808af52-0bfda162eab7?auto=format&fit=crop&w=1200&q=80',
  feeding:
    'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80',
  adoption:
    'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=1200&q=80',
  ambulance:
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
}

export const homeContent = {
  seo: {
    title: 'Sweta Foundation | Animal Welfare & Education',
    description:
      'Sweta Foundation is a charitable trust dedicated to animal welfare, animal protection, rescue operations, and educational support for all communities.',
  },
  hero: {
    eyebrow: 'WE CARE TOGETHER',
    highlight: 'Helping Hands For Animals:',
    rest: 'Together We Heal',
    description:
      'At Sweta Foundation, we believe in the incredible power of compassion and collective action to make the world a better place for all animals, while also supporting education and cultural activities for the benefit of all communities.',
    primaryCta: { label: 'Explore Our Services', path: '/activities' },
    secondaryCta: { label: 'Get Involved', path: '/contact' },
    image: images.hero,
    imageAlt: 'People caring for rescued dogs with compassion',
  },
  initiatives: [
    {
      title: 'Animal Welfare',
      description:
        'Providing care, medical assistance, shelter and rehabilitation for animals in need.',
      button: 'Explore Animal Welfare',
      path: '/animal-welfare',
      image: images.welfare,
      imageAlt: 'Veterinarian caring for a dog',
    },
    {
      title: 'Animal Protection',
      description:
        'Protecting animals through rescue operations, safety initiatives, vaccination and legal advocacy.',
      button: 'Explore Animal Protection',
      path: '/animal-protection',
      image: images.protection,
      imageAlt: 'Dog resting safely outdoors',
    },
    {
      title: "Children's Education",
      description:
        'Supporting education through scholarships, school programs and educational initiatives for all communities.',
      button: 'Explore Education',
      path: '/childrens-education',
      image: images.education,
      imageAlt: 'Children learning together in a classroom',
    },
  ],
  aboutPreview: {
    eyebrow: 'ABOUT SWETA FOUNDATION',
    title: 'A Charitable Trust Dedicated to Animal Welfare and Education',
    body: 'Sweta Foundation is an irrevocable public charitable trust established in December, 2025 by Sri. DAVALURI KARUNAAKAR and Dr. NAGALATHA. We are committed to animal welfare and educational support for the benefit of all persons, irrespective of caste, creed, or religion. Our trust works tirelessly to prevent cruelty to animals, provide medical care and shelter, promote education, and support various charitable causes.',
    button: 'Learn More',
    path: '/about',
    image: images.about,
    imageAlt: 'Hands holding a rescued animal with care',
  },
  mission: {
    eyebrow: 'OUR MISSION',
    title: 'We can change the world through our goodwill.',
    intro:
      'Sweta Foundation is committed to establishing and maintaining animal welfare services and promoting education. We work across all communities without discrimination, providing comprehensive care for animals in need while also supporting educational initiatives.',
    mission:
      'To establish, maintain, and assist in the promotion of animal welfare, prevent cruelty to all animals, provide medical care and shelter services, and promote education through scholarships and support for the benefit of all communities without discrimination.',
    vision:
      'To be a leading charitable trust in animal welfare and education, creating awareness, providing comprehensive care services, and making a lasting positive impact on society through our various programs and initiatives.',
    image: images.mission,
    imageAlt: 'Cats and dogs representing animal care mission',
  },
  activitiesIntro: {
    eyebrow: 'OUR ACTIVITIES',
    title: 'Comprehensive Programs for Animal Welfare & Education',
    description:
      'Sweta Foundation works on a wide range of initiatives including animal welfare, rescue operations, diagnostic services, and educational support to benefit all communities.',
  },
  cta: {
    title: 'Be a Part of Our Mission',
    description:
      'Learn more about our services or reach out to us for more information.',
    primary: { label: 'Contact Us', path: '/contact' },
    secondary: { label: 'Learn More', path: '/about' },
  },
  shelterHighlight: {
    eyebrow: 'SHELTER SERVICES',
    title: 'Safe Haven For Animals In Need',
    description:
      'Our shelter facilities provide temporary housing, medical care, and rehabilitation services for animals in need, with a focus on finding permanent loving homes.',
    button: 'Our Mission',
    path: '/about#mission',
    image: images.shelter,
    imageAlt: 'Animals resting safely in a shelter environment',
  },
}

export const activities = [
  {
    id: 'hospitals-shelters',
    title: 'Animal Care Hospitals & Shelters',
    short:
      'We establish and maintain animal care hospitals, shelters, sanctuaries, and rehabilitation centers for stray, abandoned, sick, injured, and old animals and birds.',
    image: images.hospital,
    imageAlt: 'Animal care and veterinary hospital setting',
    path: '/animal-welfare#hospitals-shelters',
  },
  {
    id: 'diagnostics',
    title: 'Advanced Diagnostic Services',
    short:
      'We provide comprehensive diagnostic services including X-Ray, CT-Scan, MRI-Scan, and Intensive Care Units (ICUs) for small animals, pets, and cats requiring advanced medical treatment.',
    image: images.diagnostic,
    imageAlt: 'Veterinary diagnostic care for pets',
    path: '/animal-welfare#diagnostics',
  },
  {
    id: 'rescue',
    title: 'Rescue & Rehabilitation',
    short:
      'We operate animal rescue services including computerized ambulance and helpline, provide medical aid, veterinary services, and facilitate adoption and rehoming of abandoned and rehabilitated animals.',
    image: images.rescue,
    imageAlt: 'Rescued animal receiving care',
    path: '/animal-protection#rescue',
  },
  {
    id: 'abc-arv',
    title: 'Animal Birth Control & Vaccination',
    short:
      'We conduct Animal Birth Control (ABC) and Anti-Rabies Vaccination (ARV) programs for stray animal populations to prevent overpopulation and rabies, along with mobile dispensaries and medical camps.',
    image: images.vaccination,
    imageAlt: 'Veterinary vaccination and animal health care',
    path: '/animal-protection#abc-arv',
  },
  {
    id: 'community-education',
    title: 'Community Programs & Education',
    short:
      'We conduct community-based feeding programs, educational workshops, school programs, and awareness campaigns about animal rights and humane treatment, while also providing educational scholarships and support.',
    image: images.community,
    imageAlt: 'Community education and outreach programs',
    path: '/childrens-education',
  },
  {
    id: 'advocacy',
    title: 'Advocacy & Legal Support',
    short:
      'We advocate for stronger animal protection laws, coordinate with government bodies and judicial departments, and work to prevent unnecessary pain or suffering to animals through legal and policy initiatives.',
    image: images.advocacy,
    imageAlt: 'Advocacy and legal support for animal protection',
    path: '/animal-protection#advocacy',
  },
]

export const animalWelfarePage = {
  seo: {
    title: 'Animal Welfare | Sweta Foundation',
    description:
      'Compassionate animal welfare through medical care, shelters, rehabilitation, vaccination and community support.',
  },
  hero: {
    highlight: 'Compassionate Care',
    rest: 'for Every Animal',
    description:
      'Dedicated to protecting animal lives through medical care, shelters, rehabilitation and compassionate support.',
    image: images.welfare,
    imageAlt: 'Compassionate veterinary care for animals',
  },
  intro: {
    title: 'About Animal Welfare',
    body: 'Sweta Foundation is committed to establishing and maintaining animal welfare services for the benefit of all communities without discrimination. We work to prevent cruelty to animals, provide medical care and shelter, and support rehabilitation so animals can recover with dignity.',
  },
  sections: [
    {
      id: 'hospitals-shelters',
      title: 'Animal Care Hospitals & Shelters',
      body: 'We establish and maintain animal care hospitals, shelters, sanctuaries, and rehabilitation centers for stray, abandoned, sick, injured, and old animals and birds.',
      image: images.hospital,
      imageAlt: 'Animal care hospital and shelter',
    },
    {
      id: 'diagnostics',
      title: 'Advanced Diagnostic Services',
      body: 'We provide comprehensive diagnostic services including X-Ray, CT-Scan, MRI-Scan, and Intensive Care Units (ICUs) for small animals, pets, and cats requiring advanced medical treatment.',
      image: images.diagnostic,
      imageAlt: 'Advanced veterinary diagnostic services',
    },
    {
      id: 'medical-care',
      title: 'Medical Care & Veterinary Support',
      body: 'Our animal welfare work includes medical aid and veterinary support for animals requiring treatment, recovery care, and ongoing health assistance as part of shelter and rehabilitation services.',
      image: images.welfare,
      imageAlt: 'Veterinary medical care for pets',
    },
    {
      id: 'abc-vaccination',
      title: 'Animal Birth Control & Vaccination',
      body: 'We conduct Animal Birth Control (ABC) and Anti-Rabies Vaccination (ARV) programs for stray animal populations to prevent overpopulation and rabies, along with mobile dispensaries and medical camps.',
      image: images.vaccination,
      imageAlt: 'Animal vaccination and birth control programs',
    },
    {
      id: 'feeding',
      title: 'Community Feeding Programs',
      body: 'We conduct community-based feeding programs as part of our commitment to humane treatment and care for animals living in communities that need support.',
      image: images.feeding,
      imageAlt: 'Community animal feeding program',
    },
    {
      id: 'rescue-rehab',
      title: 'Animal Rescue & Rehabilitation',
      body: 'We operate animal rescue services, provide medical aid and veterinary services, and support rehabilitation for abandoned, injured, and vulnerable animals.',
      image: images.rescue,
      imageAlt: 'Animal rescue and rehabilitation',
    },
    {
      id: 'adoption',
      title: 'Adoption and Rehoming',
      body: 'We facilitate adoption and rehoming of abandoned and rehabilitated animals, with a focus on finding permanent loving homes.',
      image: images.adoption,
      imageAlt: 'Adoption and rehoming of rescued animals',
    },
  ],
}

export const animalProtectionPage = {
  seo: {
    title: 'Animal Protection | Sweta Foundation',
    description:
      'Protecting animals through rescue operations, safety initiatives, ABC and ARV programs, awareness and advocacy.',
  },
  hero: {
    highlight: 'Protecting Animals.',
    rest: 'Preventing Cruelty.',
    description:
      'Working towards a safer world for animals through rescue operations, protection initiatives, awareness and advocacy.',
    image: images.protection,
    imageAlt: 'Protected animals in a safe environment',
  },
  intro: {
    title: 'Our Approach to Animal Protection',
    body: 'Sweta Foundation works to prevent cruelty to all animals and unnecessary pain or suffering through rescue services, vaccination programs, community awareness, and advocacy with government bodies and judicial departments.',
  },
  sections: [
    {
      id: 'rescue',
      title: 'Animal Rescue Services',
      body: 'We operate animal rescue services to respond to animals in distress, provide medical aid, and support rehabilitation so rescued animals can recover safely.',
      image: images.rescue,
      imageAlt: 'Animal rescue services in action',
    },
    {
      id: 'safety',
      title: 'Animal Safety & Protection',
      body: 'Our protection initiatives focus on creating safer conditions for animals, preventing cruelty, and promoting humane treatment across communities.',
      image: images.protection,
      imageAlt: 'Animal safety and protection initiatives',
    },
    {
      id: 'ambulance',
      title: 'Rescue Ambulance & Helpline',
      body: 'We operate animal rescue services including computerized ambulance and helpline support to help animals that need urgent assistance.',
      image: images.ambulance,
      imageAlt: 'Rescue ambulance and helpline support',
    },
    {
      id: 'abc-arv',
      title: 'Animal Birth Control (ABC)',
      body: 'We conduct Animal Birth Control (ABC) programs for stray animal populations to help prevent overpopulation, alongside mobile dispensaries and medical camps.',
      image: images.vaccination,
      imageAlt: 'Animal birth control program',
    },
    {
      id: 'arv',
      title: 'Anti-Rabies Vaccination (ARV)',
      body: 'We conduct Anti-Rabies Vaccination (ARV) programs for stray animal populations to help prevent rabies and protect community health.',
      image: images.diagnostic,
      imageAlt: 'Anti-rabies vaccination for animals',
    },
    {
      id: 'awareness',
      title: 'Animal Rights Awareness',
      body: 'We conduct awareness campaigns about animal rights and humane treatment, helping communities understand their role in protecting animals.',
      image: images.community,
      imageAlt: 'Animal rights awareness campaign',
    },
    {
      id: 'advocacy',
      title: 'Advocacy & Legal Support',
      body: 'We advocate for stronger animal protection laws and work to prevent unnecessary pain or suffering to animals through legal and policy initiatives.',
      image: images.advocacy,
      imageAlt: 'Legal advocacy for animal protection',
    },
    {
      id: 'government',
      title: 'Coordination with Government Bodies',
      body: 'We coordinate with government bodies and judicial departments as part of our advocacy for stronger animal protection and humane treatment.',
      image: images.about,
      imageAlt: 'Coordination with government bodies',
    },
  ],
}

export const childrenEducationPage = {
  seo: {
    title: "Children's Education | Sweta Foundation",
    description:
      'Promoting education through scholarships, educational support, school programs and community awareness initiatives.',
  },
  hero: {
    highlight: 'Empowering Children',
    rest: 'Through Education',
    description:
      'Promoting education and creating opportunities through scholarships, educational support and community-based initiatives.',
    image: images.education,
    imageAlt: 'Children engaged in learning activities',
  },
  intro: {
    title: 'Our Commitment to Education',
    body: 'Sweta Foundation promotes education through scholarships and support for the benefit of all communities without discrimination. We also conduct educational workshops, school programs, and awareness campaigns as part of our community initiatives.',
  },
  sections: [
    {
      id: 'scholarships',
      title: 'Educational Scholarships',
      body: 'We provide educational scholarships to support learners across communities. Detailed eligibility criteria, scholarship amounts, and application procedures will be shared by the foundation. Please contact us for current information.',
      image: images.scholarship,
      imageAlt: 'Students supported through educational scholarships',
    },
    {
      id: 'support',
      title: 'Educational Support',
      body: 'We offer educational support to help students access learning opportunities and continue their education with dignity and encouragement.',
      image: images.books,
      imageAlt: 'Educational support materials and learning',
    },
    {
      id: 'school-programs',
      title: 'School Programs',
      body: 'We support school programs that strengthen learning environments and create meaningful educational experiences for children and communities.',
      image: images.classroom,
      imageAlt: 'School program and classroom learning',
    },
    {
      id: 'workshops',
      title: 'Educational Workshops',
      body: 'We conduct educational workshops that build awareness, skills, and understanding—supporting both learning and community development.',
      image: images.workshop,
      imageAlt: 'Educational workshop with children',
    },
    {
      id: 'awareness',
      title: 'Community Awareness Programs',
      body: 'We conduct community awareness campaigns about animal rights and humane treatment, while also providing educational scholarships and support for all communities.',
      image: images.community,
      imageAlt: 'Community awareness and education programs',
    },
    {
      id: 'equal-opportunity',
      title: 'Equal Educational Opportunities',
      body: 'Our educational initiatives are for the benefit of all persons, irrespective of caste, creed, or religion—creating inclusive opportunities across communities.',
      image: images.education,
      imageAlt: 'Equal educational opportunities for all communities',
    },
  ],
  contactNote:
    'For scholarship details, program schedules, or partnership enquiries, please reach out through our Contact page. We will share verified information once confirmed by the foundation.',
}

export const aboutPage = {
  seo: {
    title: 'About Us | Sweta Foundation',
    description:
      'Learn about Sweta Foundation, an irrevocable public charitable trust dedicated to animal welfare and education.',
  },
  hero: {
    highlight: 'About',
    rest: 'Sweta Foundation',
    description:
      'An irrevocable public charitable trust dedicated to animal welfare and educational support for all communities.',
    image: images.about,
    imageAlt: 'Sweta Foundation commitment to care and compassion',
  },
  establishment: {
    title: 'About Sweta Foundation',
    body: 'Sweta Foundation is an irrevocable public charitable trust established in December, 2025 by Sri. DAVALURI KARUNAAKAR and Dr. NAGALATHA. We are committed to animal welfare and educational support for the benefit of all persons, irrespective of caste, creed, or religion. Our trust works tirelessly to prevent cruelty to animals, provide medical care and shelter, promote education, and support various charitable causes.',
  },
  foundersTitle: 'Our Founders',
  missionTitle: 'Our Mission',
  visionTitle: 'Our Vision',
  commitment: {
    title: 'Our Commitment to Communities',
    body: 'We work across all communities without discrimination, providing comprehensive care for animals in need while also supporting educational initiatives. Dedicated to animal welfare and education for all communities, Sweta Foundation strives to create lasting positive impact through compassion and collective action.',
  },
}

export const activitiesPage = {
  seo: {
    title: 'Our Activities | Sweta Foundation',
    description:
      'Explore Sweta Foundation activities including shelters, diagnostics, rescue, vaccination, education and advocacy.',
  },
  hero: {
    highlight: 'Our Activities',
    rest: 'In Action',
    description:
      'Comprehensive programs for animal welfare, rescue operations, diagnostic services, and educational support.',
    image: images.community,
    imageAlt: 'Community and animal welfare activities',
  },
}

export const contactPage = {
  seo: {
    title: 'Contact Us | Sweta Foundation',
    description:
      'Contact Sweta Foundation at our registered office in T. Nagar, Chennai. Reach out for support, partnerships and enquiries.',
  },
  hero: {
    highlight: 'Contact',
    rest: 'Sweta Foundation',
    description:
      'Get in touch with us for information about our services, programs, and how you can support our mission.',
  },
  formNote:
    'This contact form is frontend-only. Backend integration is required to deliver submissions. Please use the registered office address for official correspondence until email and phone details are confirmed.',
}

export const footerContent = {
  blurb:
    'A charitable trust dedicated to animal welfare and educational support for the benefit of all communities without discrimination.',
  /** Source footer mentions Oct 20, 2025 — confirm with client vs December 2025 in About */
  establishedNote: `A charitable trust established on ${siteConfig.establishedFooter}, dedicated to animal welfare and educational support for the benefit of all communities without discrimination.`,
  quickLinks: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Causes', path: '/activities' },
    { label: 'Mission', path: '/about#mission' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Animal Care & Shelters', path: '/animal-welfare#hospitals-shelters' },
    { label: 'Diagnostic Services', path: '/animal-welfare#diagnostics' },
    { label: 'Rescue & Rehabilitation', path: '/animal-protection#rescue' },
    { label: 'Educational Support', path: '/childrens-education' },
    { label: 'Community Programs', path: '/activities' },
  ],
}
