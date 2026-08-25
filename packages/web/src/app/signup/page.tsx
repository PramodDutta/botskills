import type { Metadata } from 'next';
import { SignupForm } from '@/components/signup-form';

export const metadata: Metadata = {
  title: 'Create an account',
  description:
    'Accounts are launching soon on botskills.sh: keep your upvotes across devices, follow bots, and publish under your handle. Join the waitlist.',
  alternates: { canonical: 'https://botskills.sh/signup' },
  robots: { index: false, follow: true },
};

export default function SignupPage() {
  return (
    <main className="wrap detail">
      <h1>Create an account</h1>
      <p className="sub">
        Accounts are launching soon. Your upvotes already count anonymously; an account will keep
        them across devices, let you follow bots, and publish under your handle. Leave your email
        and you are first in.
      </p>
      <SignupForm />
    </main>
  );
}
