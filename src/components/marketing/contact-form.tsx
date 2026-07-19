"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactState } from "@/app/(marketing)/contact/actions";
import { reportConversionByLabel } from "@/lib/gtag";

const initialState: ContactState = { ok: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-lg bg-pool-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-pool-700 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pool-600 sm:w-auto"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const inputClass =
  "mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-pool-500 focus:outline-none focus:ring-2 focus:ring-pool-200";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const v = state.values;

  // Fire the Google Ads conversion only after the server action reports a
  // successful save. No-op unless NEXT_PUBLIC_ADS_LABEL_CONTACT is set at build.
  useEffect(() => {
    if (state.ok) {
      reportConversionByLabel(process.env.NEXT_PUBLIC_ADS_LABEL_CONTACT);
    }
  }, [state.ok]);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-pool-100 bg-pool-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pool-600 text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-slate-900">Thanks — message sent!</h3>
        <p className="mt-2 text-sm text-slate-600">
          We&apos;ve got your note and will get back to you shortly. Need us fast?
          Call{" "}
          <a href="tel:+16318787796" className="font-semibold text-pool-700">
            (631) 878-7796
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      {/* Honeypot — hidden from users, catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" type="text" required defaultValue={v?.name} className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" defaultValue={v?.phone} className={inputClass} placeholder="(631) 555-0100" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input id="email" name="email" type="email" required defaultValue={v?.email} className={inputClass} placeholder="you@example.com" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} defaultValue={v?.message} className={inputClass} placeholder="Tell us a bit about your pool or project…" />
      </div>

      <SubmitButton />
      <p className="text-xs text-slate-500">
        We&apos;ll only use your details to reply to this inquiry.
      </p>
    </form>
  );
}
