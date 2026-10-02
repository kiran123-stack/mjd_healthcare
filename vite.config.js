import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

function resendDevPlugin() {
  return {
    name: 'resend-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/send-email', (req, res, next) => {
        if (req.method !== 'POST') return next();
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const targetRecipient = data.recipient || (data.formType === 'contact' ? 'info@mjdhealthcare.in' : 'mjdhealthtech@gmail.com');
            const apiKey = process.env.EMAIL_API || process.env.VITE_EMAIL_API || '';

            const htmlContent = `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #16324F; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">
                <div style="background-color: #007BFF; padding: 20px; color: white;">
                  <h2 style="margin: 0; font-size: 20px;">MJD Healthcare — New Consultation Request</h2>
                  <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Channel: ${(data.formType || 'GENERAL INQUIRY').toUpperCase()}</p>
                </div>
                <div style="padding: 24px; background-color: #FFFFFF;">
                  <p style="margin: 0 0 10px 0;"><strong>Full Name:</strong> ${data.name || 'N/A'}</p>
                  <p style="margin: 0 0 10px 0;"><strong>Email Address:</strong> <a href="mailto:${data.email}" style="color: #007BFF;">${data.email || 'N/A'}</a></p>
                  ${data.phone ? `<p style="margin: 0 0 10px 0;"><strong>Phone / WhatsApp:</strong> ${data.phone}</p>` : ''}
                  <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${data.subject || 'Website Consultation'}</p>
                  <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
                  <p style="margin: 0 0 8px 0;"><strong>Message / Strategic Scope:</strong></p>
                  <div style="background-color: #F8FAFC; border-left: 4px solid #007BFF; padding: 14px 16px; border-radius: 4px; white-space: pre-wrap; font-size: 14px;">${data.message || 'No additional message provided.'}</div>
                </div>
                <div style="background-color: #F1F5F9; padding: 14px 24px; font-size: 11px; color: #64748B; text-align: center;">
                  Sent automatically via MJD Healthcare Web Platform.
                </div>
              </div>
            `;

            let resendRes = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                from: 'MJD Healthcare <onboarding@resend.dev>',
                to: [targetRecipient],
                subject: data.subject || `[MJD Healthcare] New Inquiry from ${data.name || 'Client'}`,
                html: htmlContent
              })
            });

            let resData = await resendRes.json();

            if (!resendRes.ok && resData?.name === 'validation_error') {
              const fallback = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${apiKey}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  from: 'MJD Healthcare <onboarding@resend.dev>',
                  to: ['rammumar1981@gmail.com'],
                  subject: `[For: ${targetRecipient}] ${data.subject || 'New Inquiry'}`,
                  html: `<div style="background:#fee2e2;color:#991b1b;padding:10px;border-radius:6px;margin-bottom:15px;font-size:12px;"><strong>Resend Delivery Note:</strong> Delivered to account email because ${targetRecipient} requires domain verification on resend.com/domains.</div>` + htmlContent
                })
              });
              if (fallback.ok) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ success: true, forwardedToOwner: true }));
              }
            }

            res.writeHead(resendRes.ok ? 200 : 500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(resData));
          } catch (e) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: e.message }));
          }
        });
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), resendDevPlugin()],
  resolve: {
    alias: {
      'lucide-react': path.resolve(__dirname, 'node_modules/lucide-react/dist/cjs/lucide-react.js'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-gsap': ['gsap'],
        },
      },
    },
  },
});
