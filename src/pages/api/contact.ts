/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const postContact = async (req: NextApiRequest, res: NextApiResponse) => {
    //#region  //*=========== Validate fields ===========
    const { name, email, message } = req.body
    if (!name || !email || !message) {
        return res.status(400).json({
            name: 'err_missing_fields',
            message: 'Required field(s) are missing.',
        })
    }
    //#endregion  //*======== Validate fields ===========

    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.GMAIL_IDENTIFIER,
            pass: process.env.GMAIL_PASSWORD,
        },
        secure: true,
    })

    const mailData = {
        from: process.env.GMAIL_IDENTIFIER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Portfolio: ${req.body.name} sent a message`,
        text: `${req.body.message} | Sent from: ${req.body.email}`,
        html: `<div>${req.body.message}</div> <p>Sent from: ${req.body.email}</p>`,
    }

    const info = await transporter.sendMail(mailData).catch((err) => {
        console.error('/api/contact error:', err.message)
        return res.status(500).json({
            name: err.name,
            error: err.message,
        })
    })

    console.info('/api/contact response info', info)
    return res.status(200).json({
        status: 'success',
    })
}

export default postContact
