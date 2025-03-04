import React from 'react';
import { BookOpen, Calculator, Award, Phone, Mail, MapPin, Clock, GraduationCap, Lightbulb } from 'lucide-react';

function App() {
  const handleEnrollClick = () => {
    // Open WhatsApp with the specified phone number
    window.open(`https://wa.me/919711160529`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <GraduationCap size={40} className="text-yellow-300" />
            <h1 className="text-4xl font-bold tracking-tight">EXCEL ACADEMY</h1>
          </div>
          <p className="mt-2 text-blue-100 italic">Empowering Minds, Ensuring Excellence</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Welcome to Excellence in Education</h2>
          <p className="text-gray-700 leading-relaxed">
            Excel Academy provides specialized coaching for students in classes 9-12, 
            focusing on building strong foundations and achieving academic excellence. 
            Our personalized approach ensures that every student receives the attention 
            they need to succeed.
          </p>
        </section>

        {/* Courses Offered */}
        <section className="mb-10 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-800">Courses Offered</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Classes 9-10 */}
            <div className="border border-blue-100 rounded-lg p-5 bg-blue-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                <Calculator size={20} className="mr-2" />
                Classes 9th & 10th
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mathematics - Comprehensive coverage of NCERT curriculum</li>
                <li>Science - Physics, Chemistry, and Biology with practical insights</li>
                <li>Regular tests and personalized feedback</li>
                <li>Special focus on board exam preparation</li>
              </ul>
            </div>

            {/* Classes 11-12 */}
            <div className="border border-blue-100 rounded-lg p-5 bg-blue-50 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                <Calculator size={20} className="mr-2" />
                Classes 11th & 12th
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mathematics - Advanced concepts with problem-solving techniques</li>
                <li>Economics - Micro, Macro, and Indian Economic Development</li>
                <li>Specialized study materials and question banks</li>
                <li>Career guidance and competitive exam preparation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Faculty */}
        <section className="mb-10 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-800">Our Expert Faculty</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 p-4 border border-blue-100 rounded-lg bg-blue-50">
            
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Aditi Chaudhary</h3>
              <p className="text-gray-700 mb-3">
                With extensive teaching experience and a passion for education, 
                Ms. Chaudhary specializes in making complex concepts accessible and 
                engaging for students of all learning styles. Her students consistently 
                achieve top results in board examinations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Mathematics Expert</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Science Specialist</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Economics Mentor</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-10 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-800">Why Choose Excel Academy?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-blue-700 mb-2">Personalized Attention</h3>
              <p className="text-gray-700">Small batch sizes ensure individual attention and customized learning plans.</p>
            </div>
            <div className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-blue-700 mb-2">Expert Guidance</h3>
              <p className="text-gray-700">Learn from experienced educators who are passionate about student success.</p>
            </div>
            <div className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-blue-700 mb-2">Comprehensive Resources</h3>
              <p className="text-gray-700">Access to quality study materials, practice tests, and digital learning tools.</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-blue-700 text-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <Phone className="text-yellow-300" />
            <h2 className="text-2xl font-semibold">Contact Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Phone className="mt-1 text-yellow-300 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold">Call Us:</p>
                  <p>9711160529, 9910037728</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-yellow-300 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold">Visit Us:</p>
                  <p>3/33, 2nd Floor, Old Rajinder Nagar, New Delhi</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Clock className="mt-1 text-yellow-300 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold">Coaching Hours:</p>
                  <p>Monday to Friday: 3:00 PM - 8:00 PM</p>
                  <p>Saturday & Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold mb-2">Admissions Open for New Batch</p>
                <button 
                  onClick={handleEnrollClick}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-full transition-colors flex items-center gap-2"
                >
                  <span>Enroll Now</span>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Excel Academy. All Rights Reserved.</p>
          <p className="text-blue-200 text-sm mt-1">Empowering students to achieve academic excellence since 2010</p>
        </div>
      </footer>
    </div>
  );
}

export default App;