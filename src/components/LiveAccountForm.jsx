import React, { useState } from 'react';
import {
    ChevronRight, CheckCircle, AlertCircle, Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COUNTRIES } from '../data/countries';

const LiveAccountForm = ({ isIB = false, className = '' }) => {
    // Steps: 1 = Account Setup, 2 = Location & Extras
    const [step, setStep] = useState(1);
    const [view, setView] = useState('WIZARD'); // 'WIZARD', 'SUCCESS'

    // Form State
    const [formData, setFormData] = useState({
        // Step 1
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',

        // Step 2
        country_name: '',
        city: '',
        parent_affiliate_code: '',
        is_ib_request: isIB || false
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', msg: '' });

    const API_URL = "https://promotions.radhikafx.com/wp-json/radhika-proxy/v1/register-real";

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleNextStep = () => {
        setStatus({ type: '', msg: '' });

        // Basic Validation per Step
        if (step === 1) {
            if (!formData.firstname || !formData.lastname || !formData.email || !formData.mobile) {
                setStatus({ type: 'error', msg: 'Please fill in all required fields.' });
                return;
            }
        } else if (step === 2) {
            if (!formData.country_name || !formData.city) {
                setStatus({ type: 'error', msg: 'Please complete your location details.' });
                return;
            }
            // Submit form after Step 2
            submitForm();
            return;
        }

        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
        setStatus({ type: '', msg: '' });
    };

    const submitForm = async () => {
        setLoading(true);
        setStatus({ type: '', msg: '' });

        // Prepare payload in the required format
        const payload = {
            first_name: formData.firstname.trim(),
            last_name: formData.lastname.trim(),
            email: formData.email.trim(),
            phone: formData.mobile.trim(),
            lead_source: "Google_Ads_Feb"
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                setView('SUCCESS');
            } else {
                const errorMsg = data.message || data.error || 'Registration failed. Please try again.';
                setStatus({ type: 'error', msg: errorMsg });
            }
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', msg: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    if (view === 'SUCCESS') {
        return (
            <div className={`flex items-center justify-center p-6 ${className}`}>
                <div className="bg-[#0a1629] p-12 rounded-2xl border border-[var(--color-gold)]/30 text-center max-w-xl w-full">
                    <div className="w-24 h-24 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-8 text-[var(--color-gold)]">
                        <CheckCircle size={48} />
                    </div>
                    <h1 className="text-3xl font-[var(--font-heading)] font-bold text-white mb-4">Application Submitted!</h1>
                    <p className="text-gray-400 mb-8 text-lg">
                        Welcome to Radhika Capital Markets. Your application has been received.
                        Please check your email <strong>{formData.email}</strong> for login credentials and next steps.
                    </p>
                    <Link to="/" className="btn-gold inline-flex px-8 py-3 rounded text-[#091830] font-bold">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`bg-[#0a1629] border border-gray-800 rounded-2xl p-6 md:p-10 relative overflow-hidden ${className}`}>
            {view === 'WIZARD' && (
                <>
                    {/* Progress Bar */}
                    <div className="mb-10">
                        <div className="flex justify-between text-xs font-bold uppercase text-gray-500 mb-2">
                            <span className={step >= 1 ? 'text-gold-gradient' : ''}>1. Account Setup</span>
                            <span className={step >= 2 ? 'text-gold-gradient' : ''}>2. Location & Extras</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[var(--color-gold)] transition-all duration-500 ease-in-out"
                                style={{ width: `${(step / 2) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    {status.msg && (
                        <div className={`mb-6 p-4 rounded flex items-center gap-2 ${status.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                            <AlertCircle size={18} /> {status.msg}
                        </div>
                    )}

                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* STEP 1: Account Setup */}
                        {step === 1 && (
                            <div className="space-y-6 animate-fade-in">
                                <h3 className="text-2xl font-bold text-white mb-6">Let's get you started</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-500 text-xs font-bold uppercase mb-2">First Name</label>
                                        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="w-full bg-[#091830] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Last Name</label>
                                        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="w-full bg-[#091830] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Email Address</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#091830] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Mobile Number</label>
                                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full bg-[#091830] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="+1 234 567 8900" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Location & Extras */}
                        {step === 2 && (
                            <div className="space-y-6 animate-fade-in">
                                <h3 className="text-2xl font-bold text-white mb-6">Additional Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Country</label>
                                        <select name="country_name" value={formData.country_name} onChange={handleChange} className="w-full bg-[#091830] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none">
                                            <option value="" disabled>Select Country</option>
                                            {COUNTRIES.map((country) => (
                                                <option key={country} value={country}>{country}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-500 text-xs font-bold uppercase mb-2">City</label>
                                        <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full bg-[#091830] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="City" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Affiliate Code (Optional)</label>
                                    <input type="text" name="parent_affiliate_code" value={formData.parent_affiliate_code} onChange={handleChange} className="w-full bg-[#091830] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="Enter code here" />
                                </div>

                                <div className="pt-4 border-t border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="ib_toggle"
                                            name="is_ib_request"
                                            checked={formData.is_ib_request}
                                            onChange={handleChange}
                                            className="w-5 h-5 rounded border-gray-700 bg-[#091830] text-[var(--color-gold)] focus:ring-[var(--color-gold)]"
                                        />
                                        <label htmlFor="ib_toggle" className="text-white cursor-pointer select-none">Interested in becoming an IB?</label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-10 pt-6 border-t border-gray-800">
                            {step > 1 ? (
                                <button onClick={handlePrevStep} className="text-gray-400 hover:text-white font-bold px-6 py-3">Back</button>
                            ) : <div></div>}

                            <button
                                onClick={handleNextStep}
                                disabled={loading}
                                className="btn-gold px-8 py-3 rounded text-[#091830] font-bold flex items-center gap-2"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : (
                                    <>
                                        {step === 2 ? 'Submit Application' : 'Next Step'} <ChevronRight size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default LiveAccountForm;
