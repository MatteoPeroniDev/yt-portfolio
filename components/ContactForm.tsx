"use client";
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import SendIcon from "@/assets/icons/send.svg";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(e: any) {
    e.preventDefault()

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    )
      .then((response) => {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2'>
        <label htmlFor='name' className='font-title text-sm text-accent-blue'>Il tuo nome</label>
        <input type='text' id='name' name='name' required className='font-text bg-transparent !text-foreground p-2 border-2 border-accent-blue rounded-2xl' onChange={handleChange} />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='font-title text-sm text-accent-blue'>La tua email</label>
        <input type='email' id='email' name='email' required className='font-text bg-transparent !text-foreground p-2 border-2 border-accent-blue rounded-2xl' onChange={handleChange} />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='message' className='font-title text-sm text-accent-blue'>Il tuo messaggio</label>
        <textarea id='message' name='message' required className='font-text bg-transparent !text-foreground p-2 border-2 border-accent-blue rounded-2xl' onChange={handleChange} />
      </div>
      <button type='submit' className='cta w-full'>
        <span>Invia il messaggio</span>
        <SendIcon className='w-6 h-6 ml-2' />
      </button>
    </form>
  )
}

export default ContactForm