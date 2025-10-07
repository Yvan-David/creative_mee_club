import React, { useState } from 'react';
import NavBar from './nav';
import AppFooter from './footer';

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  projectSummary: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    projectSummary: '',
  });
  
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // Replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mrbpgqoo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your information has been submitted successfully.'
      });
      
      // Reset form after successful submission
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        projectSummary: '',
      });
      setStep(1);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: 'There was an error submitting your information. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToNextStep = () => {
    setStep(2);
  };

  return (
    <>
    <NavBar/>
    <div className="bg-slate-50 p-8 max-w-4xl mx-auto rounded">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          {step === 1 ? '1' : '✓'}
        </div>
        <div className="h-1 bg-gray-300 flex-grow mx-2"></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-500'}`}>
          2
        </div>
      </div>

      {submitMessage && (
        <div className={`p-4 mb-6 rounded ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Let's Get to Know You</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formValues.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-gray-700 mb-1">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formValues.website}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded bg-white"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <button
                type="button"
                onClick={goToNextStep}
                className="bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition-colors"
              >
                Next Step
              </button>
            </div>
          </>
        )}
        
        {step === 2 && (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Project Summary</h1>
            
            <div>
              <label htmlFor="projectSummary" className="block text-gray-700 mb-1">
                If you already uploaded a file containing all project information, you can
                type "N/A" below unless you want to add anything else.
              </label>
              <textarea
                id="projectSummary"
                name="projectSummary"
                value={formValues.projectSummary}
                onChange={handleChange}
                placeholder="i.e. page count, functionality, design preferences, timeline, budget, etc..."
                className="w-full p-3 border border-gray-300 rounded min-h-32 bg-white"
              />
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
                disabled={isSubmitting}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
       <AppFooter/>
       </>
  );
};

export default ContactForm;
