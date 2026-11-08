'use client';
import { useState } from 'react';
import { site } from '@/site.config';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  if (!site.formEndpoint) return null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setStatus('sent');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const field =
    'mt-1 w-full rounded-md border border-sage-200 bg-white px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-600';

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={4} required className={field} />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-sage-700 px-6 py-2.5 font-medium text-white hover:bg-sage-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-600 focus-visible:ring-offset-2 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>
      <p id="form-status" role="status" aria-live="polite" className="text-sm">
        {status === 'sent' && 'Thank you, your message was sent. I will reply soon.'}
        {status === 'error' && 'Something went wrong. Please call or email instead.'}
      </p>
    </form>
  );
}
