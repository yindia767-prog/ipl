"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ShoppingBag, Shield, Lock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const INDIAN_NAMES = [
  "Aarav Sharma", "Aditya Patel", "Advait Singh", "Akash Gupta", "Amit Verma",
  "Ananya Iyer", "Anika Reddy", "Arjun Malhotra", "Aryan Joshi", "Avni Choudhury",
  "Bhavya Saxena", "Chaitanya Pillai", "Devansh Kulkarni", "Diya Nair", "Esha Deshmukh",
  "Gautam Rao", "Hritik Pandey", "Ira Bhattacharya", "Ishaan Mehra", "Jhanvi Kapoor",
  "Kabir Khanna", "Kavya Das", "Krishna Menon", "Kyra Shah", "Laksh Agarwal",
  "Manav Ghosh", "Mira Bose", "Nakul Sen", "Navya Roy", "Nikhil Dubey",
  "Ojas Tiwari", "Pari Shrivastava", "Parth Mishra", "Prisha Chauhan", "Rahul Thakur",
  "Riya Bhatia", "Rohan Soni", "Saanvi Bansal", "Samarth Jain", "Sara Saxena",
  "Siddharth Rawat", "Sia Vohra", "Tanishq Negi", "Tanvi Gill", "Uday Chawla",
  "Vanya Kumar", "Varun Bajaj", "Vedika Grover", "Vihaan Prasad", "Zoya Khan",
  "Abhishek Rao", "Amrita Patil", "Aniket Desai", "Anjali Hegde", "Anshul Gupta",
  "Arpita Singh", "Ashwin Kumar", "Deepak Sharma", "Deepika Padukone", "Ganesh Hegde",
  "Harsha Vardhan", "Indira Gandhi", "Jaya Prada", "Karthik Aryan", "Kiran Bedi",
  "Lata Mangeshkar", "Madhavan Nair", "Meena Kumari", "Mohanlal Viswanathan", "Nagarjuna Akkineni",
  "Nandita Das", "Naveen Jindal", "Neeta Ambani", "Nitin Gadkari", "Pankaj Tripathi",
  "Pooja Hegde", "Prabhu Deva", "Pranab Mukherjee", "Priyanka Chopra", "Raghuram Rajan",
  "Rajesh Khanna", "Ranbir Kapoor", "Ratan Tata", "Rekha Ganesan", "Rishi Kapoor",
  "Sachin Tendulkar", "Salman Khan", "Sanjay Dutt", "Shah Rukh Khan", "Shilpa Shetty",
  "Sridevi Kapoor", "Sunil Gavaskar", "Sushmita Sen", "Tabu Hashmi", "Vidya Balan",
  "Vikram Seth", "Vinod Khanna", "Yuvraj Singh", "Zeenat Aman", "Aamir Khan"
];

const MATCHES = [
  "CSK vs MI", "RCB vs KKR", "GT vs LSG", "RR vs SRH", "DC vs PBKS",
  "MI vs RCB", "CSK vs GT", "LSG vs RR", "SRH vs KKR", "PBKS vs DC",
  "Wankhede Stadium Special", "Eden Gardens Final", "Chinnaswamy Opener"
];

const PAYMENTS = ["Paytm", "Google Pay", "PhonePe"];

export function BookingNotification() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    name: "",
    match: "",
    payment: "",
    time: 0
  });

  useEffect(() => {
    const playSubtleSound = () => {
      try {
        const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        
        const audioCtx = new AudioContextClass();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); 
        oscillator.frequency.exponentialRampToValueAtTime(554.37, audioCtx.currentTime + 0.1); 

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.03, audioCtx.currentTime + 0.05); // Very low volume
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8); // Slow subtle decay

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.8);
      } catch (e) {
        // Silently fail if blocked by browser
      }
    };

    const showNotification = () => {
      const name = INDIAN_NAMES[Math.floor(Math.random() * INDIAN_NAMES.length)];
      const match = MATCHES[Math.floor(Math.random() * MATCHES.length)];
      const payment = PAYMENTS[Math.floor(Math.random() * PAYMENTS.length)];
      const time = Math.floor(Math.random() * 5) + 3; // X > 2 minutes

      setData({ name, match, payment, time });
      setVisible(true);
      playSubtleSound();

      // Hide after 4 seconds
      setTimeout(() => setVisible(false), 4000);
    };

    // Initial delay
    const initialTimer = setTimeout(showNotification, 3000);

    // Dynamic interval (7 seconds)
    const timer = setInterval(showNotification, 7000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={cn(
      "fixed bottom-6 left-6 z-[100] transition-all duration-700 transform",
      visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
    )}>
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-4 flex items-center gap-4 max-w-sm">
        <div className="w-12 h-12 bg-[#f04e23]/10 rounded-full flex items-center justify-center shrink-0">
          <ShoppingBag className="w-6 h-6 text-[#f04e23]" />
        </div>
        
        <div className="flex-1">
          <p className="text-[11px] font-bold text-slate-900 leading-tight">
            <span className="text-[#f04e23]">{data.name}</span> just booked <br />
            <span className="font-black uppercase">{data.match}</span> Ticket
          </p>
          <div className="flex items-center gap-2 mt-1">
            <CheckCircle2 className="w-3 h-3 text-green-500" />
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
              via {data.payment} • {data.time} mins ago
            </p>
          </div>

          <div className="flex items-center gap-3 mt-2 pt-2 border-t border-slate-100/50">
             <div className="flex items-center gap-1 opacity-40">
                <Shield className="w-2.5 h-2.5" />
                <span className="text-[7px] font-black uppercase tracking-tighter">Secure</span>
             </div>
             <div className="flex items-center gap-1 opacity-40">
                <Lock className="w-2.5 h-2.5" />
                <span className="text-[7px] font-black uppercase tracking-tighter">Verified</span>
             </div>
             <div className="flex items-center gap-1 opacity-40">
                <Award className="w-2.5 h-2.5" />
                <span className="text-[7px] font-black uppercase tracking-tighter">Guaranteed</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
