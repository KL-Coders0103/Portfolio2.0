const techIconFiles = import.meta.glob(
  '../assets/icons/tech/*.svg',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
) as Record<string, string>

const iconCandidates: Record<string, string[]> = {
  react: ['react.svg'],
  'react-native': ['react-native.svg', 'react.svg'],
  typescript: ['typescript.svg'],
  node: ['node.svg', 'nodejs.svg', 'nodedotjs.svg'],
  nestjs: ['nestjs.svg'],
  express: ['express.svg'],
  postgresql: ['postgresql.svg'],
  mongodb: ['mongodb.svg'],
  prisma: ['prisma.svg'],
  docker: ['docker.svg'],
  redis: ['redis.svg'],
  firebase: ['firebase.svg'],
  'ai-apis': ['ai-apis.svg', 'openai.svg', 'ai.svg'],
  'machine-learning': ['machine-learning.svg', 'machinelearning.svg', 'ml.svg'],
  'local-ai': ['local-ai.svg', 'localai.svg', 'ollama.svg'],
}

export function getTechIcon(technologyId: string): string | undefined {
  const candidates = iconCandidates[technologyId] ?? []

  for (const filename of candidates) {
    const path = `../assets/icons/tech/${filename}`
    const icon = techIconFiles[path]

    if (icon) {
      return icon
    }
  }

  return undefined
}
