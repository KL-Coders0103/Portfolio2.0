export interface PhilosophyPrinciple {
  id: string
  title: string
  description: string
  image: string
  flow: string[]
}

export const philosophyData = {
  eyebrow: 'MY PHILOSOPHY',

  title: {
    line1: "I DON'T JUST",
    line2: 'BUILD INTERFACES.',
    line3: 'I ENGINEER',
    line4: 'EXPERIENCES.',
  },

  description:
    'I combine engineering, product thinking and design to create digital experiences that solve meaningful problems.',

  principles: [
    {
      id: 'purpose',
      title: 'BUILD WITH PURPOSE',
      description:
        'I focus on building products that solve meaningful problems and create real value for people.',
      image: '/images/philosophy-purpose.webp',
      flow: [
        'PROBLEM',
        'SOLUTION',
        'IMPACT',
      ],
    },

    {
      id: 'scale',
      title: 'ENGINEER FOR SCALE',
      description:
        'I design and build systems that are maintainable, scalable and ready for real-world usage.',
      image: '/images/philosophy-scale.webp',
      flow: [
        'SIMPLE',
        'SCALABLE',
        'SUSTAINABLE',
      ],
    },

    {
      id: 'humans',
      title: 'DESIGN FOR HUMANS',
      description:
        'I believe great technology should feel simple, intuitive and human-centered for everyone.',
      image: '/images/philosophy-humans.webp',
      flow: [
        'TECHNOLOGY',
        'SIMPLICITY',
        'PEOPLE',
      ],
    },
  ] satisfies PhilosophyPrinciple[],
} as const