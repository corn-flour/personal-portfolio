import { NextPage } from 'next'
import React from 'react'

import Button from './buttons/Button'

type inputFields = 'name' | 'email' | 'message'
const initialInputs = {
    name: '',
    email: '',
    message: '',
}

const ContactForm: NextPage = () => {
    const [inputs, setInputs] = React.useState(initialInputs)

    const [submitted, setSubmitted] = React.useState(false)

    const setField = (field: inputFields, value: string) => {
        setInputs({
            ...inputs,
            [field]: value,
        })
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // TODO: handle form submit

        setSubmitted(true)
        setInputs(initialInputs)
    }

    return (
        <form className='flex flex-col gap-8' onSubmit={submitForm}>
            <label className='flex flex-col gap-2'>
                <span className='font-light italic'>Full name:</span>
                <input
                    type='text'
                    value={inputs.name}
                    onChange={(e) => setField('name', e.target.value)}
                    className='bg-default text-default transition-colors'
                />
            </label>
            <label className='flex flex-col gap-2'>
                <span className='font-light italic'>Email address:</span>
                <input
                    type='text'
                    value={inputs.email}
                    onChange={(e) => setField('email', e.target.value)}
                    className='bg-default text-default transition-colors'
                />
            </label>
            <label className='flex flex-col gap-2'>
                <span className='font-light italic'>Message:</span>
                <textarea
                    value={inputs.message}
                    onChange={(e) => setField('message', e.target.value)}
                    className='bg-default text-default transition-colors'
                />
            </label>

            <Button variant='outline' className='self-center' type='submit'>
                Send Message
            </Button>

            {/* #region  /**=========== Success Message =========== */}
            {submitted ? (
                <span className='text-center text-sm font-light italic text-primary-600 dark:text-primary-500'>
                    Thank you for sending me a message! I will get back to you
                    as soon as possible.
                </span>
            ) : (
                <></>
            )}
            {/* #endregion  /**======== Success Message =========== */}
        </form>
    )
}

export default ContactForm
