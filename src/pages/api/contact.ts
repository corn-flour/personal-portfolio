import { NextApiRequest, NextApiResponse } from 'next'

export default function postContact(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: req.body.name })
}
