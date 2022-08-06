// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: 'Documentation &rarr;',
      description: 'Find in-depth information about Next.js features and API.',
      url: 'https://nextjs.org/docs',
    },
    {
      id: 2,
      title: 'Learn &rarr;',
      description: 'Learn about Next.js in an interactive course with quizzes!',
      url: 'https://nextjs.org/learn/foundations/about-nextjs',
    },
    {
      id: 3,
      title: 'Examples &rarr;',
      description: 'Discover and deploy boilerplate example Next.js projects.',
      url: 'https://nextjs.org/examples',
    },
    {
      id: 3,
      title: 'Deploy &rarr;',
      description:
        'Instantly deploy your Next.js site to a public URL with Vercel.',
      url: 'https://nextjs.org/showcase',
    },
  ]);
}
