import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '', // Added lastname to match typical CRM requirements though not in original UI design, keeping flexible
        email: '',
        mobile: '',
        country_name: '', // Added country_name
        ticket_title: 'Support Request', // Default subject
        description: '', // Message
        department: 'General Support',
        priority: 'Normal'
    });

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [view, setView] = useState('FORM'); // 'FORM', 'OTP', 'SUCCESS'
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [timeLeft, setTimeLeft] = useState(15);
    const [timerActive, setTimerActive] = useState(false);

    // CRM API URL (Proxied if needed, but trying direct first as per PHP script)
    // Note: If CORS fails, we might need a local proxy or cloud function.
    // The PHP script was a server-side proxy. Direct browser calls might be blocked.
    // However, I will implement the logic as requested.
    const API_URL = "https://crm1.radhikafx.com/form_api.php";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Auto move to next input
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const requestOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        // Validate basic fields
        if (!formData.firstname || !formData.email || !formData.mobile || !formData.description) {
            setStatus({ type: 'error', msg: 'Please fill in all required fields.' });
            setLoading(false);
            return;
        }

        // Construct payload for OTP Request
        // Matching openliveaccount_v2/html/submit.php logic:
        // method=otp_send, type=live (or similar), email, etc.
        const payload = new URLSearchParams();
        payload.append('method', 'otp_send');
        payload.append('email', formData.email);
        payload.append('type', 'live'); // Using 'live' as it seems to be the valid type in the backend logic
        payload.append('module_name', 'LiveAccount'); // Using LiveAccount module logic for OTP

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: payload.toString()
            });

            const data = await response.json();

            if (data.success) {
                setView('OTP');
                setStatus({ type: 'success', msg: `OTP sent to ${formData.email}` });
                startTimer();
            } else {
                setStatus({ type: 'error', msg: data.error?.message || 'Failed to send OTP.' });
            }
        } catch (error) {
            console.error(error);
            // Fallback for demo/development if CORS blocks it (simulate success)
            // setView('OTP');
            setStatus({ type: 'error', msg: 'Network error. Please try again or contact support.' });
        } finally {
            setLoading(false);
        }
    };

    const verifyOtpAndSubmit = async () => {
        const otpCode = otp.join('');
        if (otpCode.length !== 6) {
            setStatus({ type: 'error', msg: 'Please enter a valid 6-digit OTP.' });
            return;
        }

        setLoading(true);
        setStatus({ type: '', msg: '' });

        // Construct payload for Final Submission
        const payload = new URLSearchParams();
        payload.append('web_operation', 'WebContactUs');
        payload.append('module_name', 'Contacts');
        payload.append('email', formData.email);
        payload.append('otp', otpCode);
        payload.append('otp_verify', 'true');
        payload.append('type', 'live');

        // Add form fields to 'value' JSON as expected by the CRM
        // Mapping fields to match Vtiger expectations strictly based on success response
        const formValues = {
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            mobile: formData.mobile,
            country_name: formData.country_name,
            city: '', // Empty city if not collected, but included as per old form
            ticket_title: formData.ticket_title,
            description: formData.description,
            ticketcategories: formData.department, // Mapped
            ticketpriorities: formData.priority,   // Mapped
            ticketstatus: 'Open',
            leadstatus: 'New',
            leadsource: 'Contact us Form',
            // Include operation meta inside value as well, mimicking contactus_v2 behavior
            web_operation: 'WebContactUs',
            module_name: 'Contacts',
            method: 'WebContactUs'
        };
        payload.append('value', JSON.stringify(formValues));

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: payload.toString()
            });

            const data = await response.json();

            if (data.success) {
                setView('SUCCESS');
            } else {
                setStatus({ type: 'error', msg: data.error?.message || 'Verification failed.' });
            }
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', msg: 'Submission failed. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const startTimer = () => {
        setTimeLeft(15);
        setTimerActive(true);
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setTimerActive(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    if (view === 'SUCCESS') {
        return (
            <div className="bg-[#0a1629] p-8 rounded-2xl border border-[var(--color-gold)]/30 text-center">
                <div className="w-20 h-20 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-gold)]">
                    <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">Thank you for contacting us. Our team will review your request and get back to you shortly.</p>
                <button
                    onClick={() => {
                        setFormData({ ...formData, description: '', ticket_title: 'Support Request' });
                        setView('FORM');
                        setOtp(['', '', '', '', '', '']);
                    }}
                    className="btn-gold px-8 py-3 rounded text-[var(--color-navy)] font-bold"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-[#0a1629] p-8 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">Send us a Message</h2>

            {status.msg && (
                <div className={`mb-6 p-4 rounded ${status.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'} flex items-center gap-2`}>
                    {status.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
                    {status.msg}
                </div>
            )}

            {view === 'FORM' ? (
                <form onSubmit={requestOtp} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-500 text-xs font-bold uppercase mb-2">First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Department</label>
                            <div className="relative">
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none"
                                >
                                    <option>General Support</option>
                                    <option>Sales & Accounts</option>
                                    <option>IB & Partnerships</option>
                                    <option>Careers</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Country</label>
                            <input
                                type="text"
                                name="country_name"
                                value={formData.country_name}
                                onChange={handleChange}
                                className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Subject</label>
                        <input
                            type="text"
                            name="ticket_title"
                            value={formData.ticket_title}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-500 text-xs font-bold uppercase mb-2">Message</label>
                        <textarea
                            name="description"
                            rows="5"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#02040a] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-gold w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-[#02040a] font-bold"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <>Start Verification <Send size={18} /></>}
                    </button>
                    <p className="text-xs text-gray-500 mt-2">We will send a One-Time Password (OTP) to your email to verify your identity.</p>
                </form>
            ) : (
                <div className="max-w-md mx-auto text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Verify Your Email</h3>
                    <p className="text-gray-400 mb-6 font-sm">Enter the 6-digit code sent to <span className="text-[var(--color-gold)]">{formData.email}</span></p>

                    <div className="flex gap-2 justify-center mb-8">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleOtpChange(e.target, index)}
                                className="w-12 h-14 bg-[#02040a] border border-gray-700 rounded text-center text-xl font-bold text-white focus:border-[var(--color-gold)] focus:outline-none"
                            />
                        ))}
                    </div>

                    <button
                        onClick={verifyOtpAndSubmit}
                        disabled={loading}
                        className="btn-gold w-full px-8 py-3 rounded text-[#02040a] font-bold mb-4 flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : 'Verify & Submit'}
                    </button>

                    <button
                        onClick={(e) => {
                            if (!timerActive) {
                                requestOtp(e);
                            }
                        }}
                        disabled={timerActive || loading}
                        className={`text-sm ${timerActive ? 'text-gray-500 cursor-not-allowed' : 'text-[var(--color-gold)] hover:underline'}`}
                    >
                        {timerActive ? `Resend OTP in ${timeLeft}s` : 'Resend OTP'}
                    </button>

                    <button onClick={() => setView('FORM')} className="block w-full text-gray-500 text-xs mt-4 hover:text-white">
                        Back to Form
                    </button>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
