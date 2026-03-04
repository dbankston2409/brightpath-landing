import './globals.css'

export const metadata = {
  title: 'BrightPath - AI-Powered Career Coaching',
  description: 'Transform your career with AI-powered coaching, resume optimization, interview prep, and personalized career roadmaps.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
