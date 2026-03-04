export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your AI-Powered Career Coach
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-purple-100 max-w-3xl mx-auto">
            Transform your career with personalized AI guidance. Land your dream job with confidence.
          </p>
          <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition shadow-lg">
            Start Your Journey Free →
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1: Resume AI */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Resume AI</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered resume optimization tailored to your target role. Beat ATS systems and impress recruiters.
              </p>
            </div>

            {/* Feature 2: Interview Prep */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Interview Prep</h3>
              <p className="text-gray-600 leading-relaxed">
                Practice with AI mock interviews. Get instant feedback and master behavioral and technical questions.
              </p>
            </div>

            {/* Feature 3: Salary Insights */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Salary Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Know your worth. Get real-time salary data and negotiate with confidence backed by market insights.
              </p>
            </div>

            {/* Feature 4: Career Roadmap */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Career Roadmap</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized career path planning. See exactly what skills and steps you need to reach your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SK
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Sarah Kim</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "BrightPath helped me land a $150k job at a top tech company. The interview prep was incredible!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MJ
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Marcus Johnson</h4>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "The career roadmap feature gave me clarity I never had. I switched careers with confidence."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  EP
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Emily Park</h4>
                  <p className="text-sm text-gray-600">UX Designer</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Resume AI completely transformed my resume. I went from zero responses to 5 interviews in two weeks."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-10 text-purple-100">
            Join thousands of professionals who landed their dream jobs with BrightPath.
          </p>
          <button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-purple-50 transition shadow-2xl">
            Get Started Free →
          </button>
          <p className="mt-6 text-purple-200 text-sm">
            No credit card required • 14-day free trial
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">BrightPath</p>
          <p className="text-sm">AI-Powered Career Coaching for the Future</p>
          <p className="mt-6 text-xs text-gray-500">© 2026 BrightPath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
