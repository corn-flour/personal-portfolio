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
    const [isError, setIsError] = React.useState(false)

    // * Special honeypot value to detect spam bots
    const [honeypot, setHoneypot] = React.useState('')

    const setField = (field: inputFields, value: string) => {
        setInputs({
            ...inputs,
            [field]: value,
        })
        // remove success message if user types again
        setSubmitted(false)
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //#region  //*=========== Handle Honeypot ===========
        if (honeypot) {
            setSubmitted(true)
            return
        }
        //#endregion  //*======== Handle Honeypot ===========

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        }).catch(() => {
            // fetch request fails to complete
            setIsError(true)
            return
        })

        if (res && res.status === 200) {
            setSubmitted(true)
            setInputs(initialInputs)
        } else {
            // response status returns error
            setIsError(true)
        }
    }

    return (
        <form className='flex flex-col gap-8' onSubmit={submitForm}>
            <label className='flex flex-col gap-2'>
                <span className='font-light italic'>Full name: *</span>
                <input
                    type='text'
                    value={inputs.name}
                    onChange={(e) => setField('name', e.target.value)}
                    className='bg-default text-default transition-colors focus:border-primary-500 focus:shadow-none focus:ring-primary-500'
                    autoComplete='name'
                    required={true}
                />
            </label>
            <label className='flex flex-col gap-2'>
                <span className='font-light italic'>Email address: *</span>
                <input
                    type='text'
                    value={inputs.email}
                    onChange={(e) => setField('email', e.target.value)}
                    className='bg-default text-default transition-colors focus:border-primary-500 focus:shadow-none focus:ring-primary-500'
                    autoComplete='email'
                    required={true}
                />
            </label>

            {/* #region  /**=========== HoneyPot Input =========== */}
            <label className='definitely-form-field-not-false'>
                <span>Phone :</span>
                <input
                    type='text'
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete='off'
                />
            </label>
            {/* #endregion  /**======== HoneyPot Input =========== */}

            <label className='flex flex-col gap-2'>
                <span className='font-light italic'>Message: *</span>
                <textarea
                    value={inputs.message}
                    onChange={(e) => setField('message', e.target.value)}
                    className='bg-default text-default transition-colors focus:border-primary-500 focus:shadow-none focus:ring-primary-500'
                    required={true}
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

            {/* #region  /**=========== Error Message =========== */}
            {isError ? (
                <span className='text-center text-sm font-light italic text-red-600 dark:text-red-500'>
                    Sorry, an unexpected error has occurred :(
                </span>
            ) : (
                <></>
            )}
            {/* #endregion  /**======== Error Message =========== */}
        </form>
    )
}

export default ContactForm
