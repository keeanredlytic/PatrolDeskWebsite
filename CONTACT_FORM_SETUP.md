# Contact Form Email Setup Guide

The contact form is currently set up with a mailto fallback. To enable actual email sending to `support@patroldesk.com`, choose one of these options:

## Option 1: Formspree (Recommended - Easiest)

1. **Sign up** at [https://formspree.io/](https://formspree.io/)
2. **Create a new form** and set the recipient email to `support@patroldesk.com`
3. **Get your Form ID** (looks like: `xvgkqjpn`)
4. **Update Contact.js** - Replace `YOUR_FORM_ID` on line 36 with your actual Form ID

**Example:**
```javascript
const response = await fetch('https://formspree.io/f/xvgkqjpn', {
```

**Free tier:** 50 submissions/month

## Option 2: EmailJS (Alternative)

1. **Sign up** at [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}` (set to `support@patroldesk.com`)
   - `{{subject}}`
4. **Get your IDs:**
   - Service ID
   - Template ID
   - Public Key (User ID)
5. **Uncomment the EmailJS code** in Contact.js and replace the placeholder values

**Free tier:** 200 emails/month

## Option 3: Backend API (Most Control)

Create a backend endpoint that sends emails using:
- Node.js with Nodemailer
- Python with SendGrid
- AWS SES
- Or any email service API

Then update the fetch URL in Contact.js to point to your endpoint.

## Current Behavior

Right now, the form uses a **mailto fallback** which opens the user's email client. This works but isn't ideal for user experience.

## Testing

After setting up your chosen service:
1. Fill out the contact form
2. Submit it
3. Check `support@patroldesk.com` inbox
4. Verify the email was received correctly

---

**Need help?** Contact your developer or refer to the service documentation.

