// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { name: 'John Doe' },
    { name: 'Rick Moore' },
    { name: 'Nath Bell' },
    { name: 'Robert Thayson' },
    { name: 'Nicole Blue' },
    { name: 'David Hendrick' },
  ])
}
