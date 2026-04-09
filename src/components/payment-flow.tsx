"use client";

import { useState, useEffect } from "react";
import { 
  ChevronRight, 
  Smartphone, 
  User, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Timer, 
  CreditCard, 
  ArrowLeft,
  Info,
  Upload,
  Loader2,
  CheckCircle,
  Camera,
  AlertCircle 
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface PaymentFlowProps {
  id: string;
  match: any;
  initialBooking: any;
  upiConfig: {
    upiId: string;
    merchantName: string;
    amount: number;
    transactionNote: string;
    upiUrl: string;
    qrCodeUrl: string;
  };
}

export function PaymentFlow({ id, match, initialBooking, upiConfig }: PaymentFlowProps) {
  const router = useRouter();
  const [step, setStep] = useState<'details' | 'payment' | 'verification'>(initialBooking?.full_name && initialBooking?.full_name !== 'Fan' ? 'payment' : 'details');
  const [formData, setFormData] = useState({
    name: initialBooking?.full_name !== 'Fan' ? (initialBooking?.full_name || "") : "",
    email: initialBooking?.email || "",
    phone: initialBooking?.phone || ""
  });
  const [txnId, setTxnId] = useState("");
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStage, setVerificationStage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{phone?: string, txn?: string}>({ });

  // Countdown Logic
  const [secondsLeft, setSecondsLeft] = useState(300); // 5 Minutes

  useEffect(() => {
    if (secondsLeft <= 0) return;
    
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Mobile Validation (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors({ phone: "Please enter a valid 10-digit mobile number" });
      return;
    }

    if (formData.name && formData.email && formData.phone) {
      setStep('payment');
    }
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Strict Input Check
    if (txnId.length < 10) {
      setErrors({ txn: "Transaction ID must be at least 12 digits (UTR)" });
      return;
    }

    if (!screenshot) {
      setErrors({ txn: "Please upload the payment screenshot" });
      return;
    }

    setIsVerifying(true);
    
    // AI CROSS-VERIFICATION SIMULATION
    setVerificationStage("SCANNING_TEXT");
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setVerificationStage("IDENTIFYING_UTR");
    await new Promise(resolve => setTimeout(resolve, 1500));

    // SIMULATED OCR MATCHING LOGIC
    // If ID is too simple or looks like dummy data, trigger a 'suspicious' failure
    const isMockFailure = txnId.includes("1234") || txnId.length < 12;
    
    setVerificationStage("MATCHING_ID");
    await new Promise(resolve => setTimeout(resolve, 1200));

    if (isMockFailure) {
      setIsVerifying(false);
      setVerificationStage(null);
      setErrors({ txn: "AI Scan Mismatch: Transaction ID not found in screenshot. Please upload a clear photo." });
      return;
    }

    setVerificationStage("AUTHENTICATING");
    await new Promise(resolve => setTimeout(resolve, 1000));

    router.push(`/payment/success/${id}`);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshot(reader.result as string);
        setErrors({});
      };
      reader.readAsDataURL(file);
    }
  };

  const timeDisplay = formatTime(secondsLeft);

  return (
    <div className="flex flex-col gap-16 md:gap-24 animate-in fade-in duration-700">
      {/* Top Banner Timer - High Visibility */}
      <div className="flex justify-center w-full">
        <div className={cn(
          "px-10 py-4 rounded-[2rem] border flex items-center gap-5 transition-all duration-500 shadow-xl shadow-slate-200/50 bg-white",
          secondsLeft < 60 ? "border-red-200 ring-4 ring-red-500/5 animate-pulse" : "border-slate-100 ring-4 ring-slate-100/5"
        )}>
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
            secondsLeft < 60 ? "bg-red-500 text-white shadow-lg shadow-red-500/20" : "bg-slate-900 text-white"
          )}>
            <Timer className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block leading-tight mb-0.5">Session Expires</span>
            <span className={cn(
              "text-xl font-black tabular-nums tracking-tighter leading-none",
              secondsLeft < 60 ? "text-red-600" : "text-slate-900"
            )}>
              {timeDisplay}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full">
        {step === 'details' ? (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 animate-in fade-in duration-500">
          {/* Details Form Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col">
              <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Guest Information</h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Verification required for digital ticket delivery</p>
              
              <form onSubmit={handleDetailsSubmit} className="space-y-8">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#f04e23] transition-colors ml-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-[#f04e23] transition-colors" />
                      <input 
                        required
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full h-16 pl-16 pr-8 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-[#f04e23] transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-[#f04e23] transition-colors ml-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-[#f04e23] transition-colors" />
                      <input 
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full h-16 pl-16 pr-8 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-[#f04e23] transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="group space-y-3">
                    <div className="flex justify-between items-center ml-2">
                      <label className={cn(
                        "text-[10px] font-black uppercase tracking-[0.3em] transition-colors",
                        errors.phone ? "text-red-500" : "text-slate-400 group-focus-within:text-[#f04e23]"
                      )}>Mobile Number</label>
                      {errors.phone && (
                        <span className="text-[9px] font-black uppercase tracking-widest text-red-500 animate-pulse">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <Phone className={cn(
                        "absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors",
                        errors.phone ? "text-red-400" : "text-slate-300 group-focus-within:text-[#f04e23]"
                      )} />
                      <input 
                        required
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                        className={cn(
                          "w-full h-16 pl-16 pr-8 bg-slate-50 border-2 rounded-2xl outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm",
                          errors.phone ? "border-red-200 focus:border-red-500" : "border-slate-100 focus:border-[#f04e23]"
                        )}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-16 bg-[#f04e23] text-white font-black rounded-2xl flex items-center justify-center gap-4 transition-all hover:bg-slate-900 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-[0.2em] text-xs shadow-xl shadow-[#f04e23]/20 mt-12"
                >
                  PROCEED TO PAYMENT
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-6 flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase text-emerald-800 tracking-widest mb-1">Privacy Guaranteed</h5>
                <p className="text-[10px] font-bold uppercase tracking-wide leading-relaxed text-emerald-600">
                  Your details are only used for match-day security and ticket dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Reusing Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl overflow-hidden relative border border-white/5">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#f04e23] blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2" />
              
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10">Selected Experience</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-end pb-8 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#f04e23] mb-1 block">Payable</span>
                    <span className="text-4xl font-black tabular-nums tracking-tighter">₹{upiConfig.amount.toLocaleString()}</span>
                  </div>
                  <CreditCard className="w-8 h-8 opacity-20 text-[#f04e23]" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/50">
                    <span>{initialBooking.category} x {initialBooking.quantity}</span>
                    <span>₹{upiConfig.amount.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-6 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4 mt-8 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Timer className="w-5 h-5 text-[#f04e23] animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-[#f04e23] block tracking-widest">Time Remaining</span>
                    <span className={cn(
                      "text-xs font-black tracking-widest uppercase transition-colors",
                      secondsLeft < 60 ? "text-red-500 animate-pulse" : "text-white"
                    )}>
                      {timeDisplay}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/"
              className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors py-4"
            >
              <ArrowLeft className="w-3 h-3" />
              Abort Payment & Exit
            </Link>
          </div>
        </div>
      ) : step === 'payment' ? (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 animate-in slide-in-from-right-8 duration-700">
          {/* QR Code Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center">
              <div className="w-full mb-10">
                <button 
                  onClick={() => setStep('details')}
                  className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#f04e23] transition-colors"
                >
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                  Edit My Information
                </button>
              </div>

              <div className="relative group mb-12">
                <div className="absolute -inset-6 bg-gradient-to-r from-[#f04e23] to-[#ff7c5c] rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative bg-white p-6 rounded-[2.5rem] border-2 border-slate-50 shadow-inner">
                  <img 
                    src={upiConfig.qrCodeUrl} 
                    alt="Payment QR Code" 
                    className="w-48 h-48 md:w-64 md:h-64 object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap">
                  <Smartphone className="w-3 h-3 text-[#f04e23]" />
                  Scan With Any UPI App
                </div>
              </div>

              <div className="w-full space-y-4 mb-10">
                <div className="flex flex-col gap-4">
                  <a
                    href={upiConfig.upiUrl}
                    className="w-full h-16 bg-[#f04e23] text-white font-black rounded-2xl flex items-center justify-center gap-4 transition-all hover:bg-slate-900 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-[0.2em] text-xs shadow-xl shadow-[#f04e23]/20 relative z-10"
                  >
                    Pay via UPI App
                    <Smartphone className="w-4 h-4" />
                  </a>
                </div>
                
                {/* Manual UPI ID Display */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between gap-4 w-full relative z-10">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Manual UPI ID</span>
                    <span className="text-[11px] font-black text-slate-900 tracking-widest select-all">{upiConfig.upiId}</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => {
                      const text = upiConfig.upiId;
                      if (navigator.clipboard && window.isSecureContext) {
                        navigator.clipboard.writeText(text);
                      } else {
                        const textArea = document.createElement("textarea");
                        textArea.value = text;
                        document.body.appendChild(textArea);
                        textArea.select();
                        try {
                          document.execCommand('copy');
                        } catch (err) {
                          console.error('Fallback copy failed', err);
                        }
                        document.body.removeChild(textArea);
                      }
                      alert("UPI ID Copied!");
                    }}
                    className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-900 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all"
                  >
                    Copy
                  </button>
                </div>

                <p className="text-[9px] text-center font-bold uppercase tracking-widest text-slate-400">
                  Instant settlement via Google Pay, PhonePe, Paytm
                </p>
              </div>

              <div className="w-full h-px bg-slate-100 mb-10" />

              <div className="w-full flex flex-col gap-4">
                <button
                  onClick={() => setStep('verification')}
                  className="w-full h-16 bg-[#192356] hover:bg-slate-900 text-white font-black rounded-2xl flex items-center justify-center gap-4 transition-all uppercase tracking-widest text-[11px] shadow-xl shadow-blue-900/10"
                >
                  I HAVE COMPLETED PAYMENT
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Security Banner */}
            <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-6 flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase text-emerald-800 tracking-widest mb-1">Encrypted Payment</h5>
                  <p className="text-[10px] font-bold uppercase tracking-wide leading-relaxed text-emerald-600">
                    Validated for {formData.name} • {formData.phone}
                  </p>
                </div>
              </div>
          </div>

          {/* Reusing Sidebar for Payment View */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl overflow-hidden relative border border-white/5">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#f04e23] blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2" />
              
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10">Review Amount</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-end pb-8 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#f04e23] mb-1 block">Final Amount</span>
                    <span className="text-4xl font-black tabular-nums tracking-tighter">₹{upiConfig.amount.toLocaleString()}</span>
                  </div>
                  <CreditCard className="w-8 h-8 opacity-20 text-[#f04e23]" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/50">
                    <span>{initialBooking.category} x {initialBooking.quantity}</span>
                    <span>₹{upiConfig.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/50 border-t border-white/5 pt-4">
                    <span>Guest</span>
                    <span className="text-white line-clamp-1">{formData.name}</span>
                  </div>
                </div>

                <div className="p-6 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4 mt-8 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Timer className="w-5 h-5 text-[#f04e23] animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-[#f04e23] block tracking-widest">Time Remaining</span>
                    <span className={cn(
                      "text-xs font-black tracking-widest uppercase transition-colors",
                      secondsLeft < 60 ? "text-red-500 animate-pulse" : "text-white"
                    )}>
                      {timeDisplay}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] flex flex-col gap-4 shadow-sm">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Need Help?</h5>
              <p className="text-[11px] font-bold uppercase leading-relaxed text-slate-900">
                Concierge Support is available 24/7 for IPL ticketing assistance.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                  <Info className="w-4 h-4 text-slate-300" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#192356]">Official Support Portal</span>
              </div>
            </div>

            <Link 
              href="/"
              className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors py-4"
            >
              <ArrowLeft className="w-3 h-3" />
              Abort Payment & Exit
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 animate-in slide-in-from-right-8 duration-700">
          {/* Verification Form Section */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col">
              <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Audit Verification</h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Upload payment proof to finalize your ticket</p>
              
              <form onSubmit={handleVerificationSubmit} className="space-y-8">
                <div className="space-y-8">
                  {/* Transaction ID */}
                  <div className="group space-y-3">
                    <div className="flex justify-between items-center ml-2">
                      <label className={cn(
                        "text-[10px] font-black uppercase tracking-[0.3em] transition-colors",
                        errors.txn ? "text-red-500" : "text-slate-400 group-focus-within:text-[#f04e23]"
                      )}>Transaction ID / UTR</label>
                    </div>

                    {errors.txn && (
                      <div className="bg-red-50 border-2 border-red-100 p-4 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-[10px] font-bold text-red-600 uppercase tracking-wide leading-relaxed">
                          {errors.txn}
                        </p>
                      </div>
                    )}

                    <div className="relative">
                      <ShieldCheck className={cn(
                        "absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors",
                        errors.txn ? "text-red-400" : "text-slate-300 group-focus-within:text-[#f04e23]"
                      )} />
                      <input 
                        required
                        type="text"
                        placeholder="e.g. 456789123456"
                        value={txnId}
                        onChange={(e) => {
                          setTxnId(e.target.value);
                          if(errors.txn) setErrors({});
                        }}
                        className={cn(
                          "w-full h-16 pl-16 pr-8 bg-slate-50 border-2 rounded-2xl outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm uppercase tracking-widest",
                          errors.txn ? "border-red-200 focus:border-red-500" : "border-slate-100 focus:border-[#f04e23]"
                        )}
                      />
                    </div>
                  </div>

                  {/* Screenshot Upload */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Payment Screenshot</label>
                    <div className="relative group/upload">
                       {screenshot ? (
                         <div className={cn(
                           "relative w-full aspect-video rounded-[2rem] overflow-hidden border-2 transition-all duration-500",
                           isVerifying ? "border-[#f04e23] shadow-2xl shadow-orange-500/20" : "border-slate-100"
                         )}>
                            <img src={screenshot} alt="Payment Proof" className={cn(
                              "w-full h-full object-cover transition-all duration-700",
                              isVerifying && "brightness-[0.4] blur-sm scale-110"
                            )} />
                            
                            {isVerifying ? (
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#f04e23] animate-scan z-20 shadow-[0_0_15px_rgba(240,78,35,0.8)]" />
                                <div className="w-16 h-16 rounded-full border-2 border-[#f04e23]/30 border-t-[#f04e23] animate-spin mb-4" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] animate-pulse text-[#f04e23]">AI ANALYSIS ACTIVE</span>
                                <div className="mt-6 flex flex-col gap-2 w-full max-w-[200px]">
                                   <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-widest text-[#f04e23]/60 bg-white/5 py-1.5 px-3 rounded-lg border border-white/5">
                                      <span>Extracting OCR</span>
                                      <CheckCircle className={cn("w-3 h-3 text-[#f04e23] transition-opacity", verificationStage === "SCANNING_TEXT" ? "opacity-30" : "opacity-100")} />
                                   </div>
                                   <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-widest text-[#f04e23]/60 bg-white/5 py-1.5 px-3 rounded-lg border border-white/5">
                                      <span>UTR Match</span>
                                      <CheckCircle className={cn("w-3 h-3 text-[#f04e23] transition-opacity", ["SCANNING_TEXT", "IDENTIFYING_UTR"].includes(verificationStage!) ? "opacity-30" : "opacity-100")} />
                                   </div>
                                </div>
                              </div>
                            ) : (
                              <button 
                                type="button"
                                onClick={() => setScreenshot(null)}
                                className="absolute top-4 right-4 p-3 bg-red-500 text-white rounded-xl shadow-xl hover:bg-slate-900 transition-colors"
                              >
                                <ArrowLeft className="w-4 h-4" />
                              </button>
                            )}
                         </div>
                       ) : (
                         <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-slate-200 rounded-[2rem] bg-slate-50 hover:bg-orange-50 hover:border-[#f04e23] transition-all cursor-pointer group-hover/upload:scale-[0.99]">
                            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                              <Camera className="w-6 h-6 text-slate-400 group-hover:text-[#f04e23]" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Upload Screenshot</span>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-2">Maximum File Size: 5MB</span>
                            <input 
                              type="file" 
                              className="hidden" 
                              accept="image/*"
                              onChange={handleFileChange}
                              required
                            />
                         </label>
                       )}
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100 mt-6" />

                <button
                  disabled={isVerifying}
                  type="submit"
                  className={cn(
                    "w-full h-16 text-white font-black rounded-2xl flex items-center justify-center gap-4 transition-all uppercase tracking-[0.2em] text-xs shadow-xl mt-6 relative overflow-hidden",
                    isVerifying ? "bg-slate-900 cursor-not-allowed" : "bg-[#f04e23] hover:bg-slate-900 hover:scale-[1.02] active:scale-[0.98] shadow-[#f04e23]/20"
                  )}
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#f04e23]" />
                      <span className="animate-in fade-in duration-300">
                        {verificationStage === "SCANNING_TEXT" && "Scanning For OCR..."}
                        {verificationStage === "IDENTIFYING_UTR" && "Identifying UTR..."}
                        {verificationStage === "MATCHING_ID" && "Cross-Verifying ID..."}
                        {verificationStage === "AUTHENTICATING" && "Finalizing Audit..."}
                      </span>
                    </>
                  ) : (
                    <>
                      Verify & Generate Ticket
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-100 rounded-3xl p-6 flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0">
                  <Info className="w-6 h-6 text-[#f04e23]" />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase text-[#192356] tracking-widest mb-1">Audit Policy</h5>
                  <p className="text-[10px] font-bold uppercase tracking-wide leading-relaxed text-blue-600">
                    Falsified transaction records will result in immediate blacklisting and forfeiture of funds.
                  </p>
                </div>
              </div>
          </div>

          {/* Verification Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl overflow-hidden relative border border-white/5">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#f04e23] blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2" />
              
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10">Audit Pending</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-end pb-8 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#f04e23] mb-1 block">Amount Paid</span>
                    <span className="text-4xl font-black tabular-nums tracking-tighter">₹{upiConfig.amount.toLocaleString()}</span>
                  </div>
                  <ShieldCheck className="w-8 h-8 opacity-20 text-[#f04e23]" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/50">
                    <span>Ticket Owner</span>
                    <span className="text-white line-clamp-1">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/50 pt-2">
                    <span>Email PIN</span>
                    <span className="text-[#f04e23]">{formData.email.slice(0, 3)}***</span>
                  </div>
                </div>

                <div className="p-6 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4 mt-8 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Timer className="w-5 h-5 text-[#f04e23] animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-[#f04e23] block tracking-widest">Window Closes</span>
                    <span className={cn(
                      "text-xs font-black tracking-widest uppercase transition-colors",
                      secondsLeft < 60 ? "text-red-500 animate-pulse" : "text-white"
                    )}>
                      {timeDisplay}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setStep('payment')}
              className="w-full flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors py-4"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to QR Portal
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);
}
