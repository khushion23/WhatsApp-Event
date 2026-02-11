import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const rsvpSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  designation: z.string().trim().min(1, "Designation is required").max(100),
  organization: z.string().trim().min(1, "Organization is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

const initialForm: RSVPFormData = {
  fullName: "",
  designation: "",
  organization: "",
  email: "",
  phone: "",
};

const fields: { name: keyof RSVPFormData; label: string; type: string }[] = [
  { name: "fullName", label: "Full Name", type: "text" },
  { name: "designation", label: "Designation", type: "text" },
  { name: "organization", label: "Organization", type: "text" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
];

const RSVP = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState<RSVPFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof RSVPFormData, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = rsvpSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RSVPFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof RSVPFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Registration submitted successfully! We'll be in touch soon.");
    setForm(initialForm);
  };

  return (
    <section id="rsvp" className="section-padding bg-background min-h-[80vh] flex items-center justify-center" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex-1 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col justify-center bg-background/80 border border-white/10 backdrop-blur-md"
          >
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-center text-white mb-2">
              Register Your Interest
            </h2>
            <div className="flex justify-center mb-4">
              <div className="w-32 h-1 bg-green-400 rounded-full" />
            </div>
            <p className="text-center text-base text-blue-200 mb-8">Secure your seat at this exclusive executive forum</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <input
                    id={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                    className="w-full border border-white/20 rounded-lg px-4 py-3 text-base bg-white/5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-green-400/40 focus:border-green-400 transition-all duration-300"
                    placeholder={field.label}
                  />
                  {errors[field.name] && (
                    <p className="text-xs text-destructive mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}
              <button type="submit" className="w-full py-3 text-lg font-semibold rounded-lg bg-green-400 hover:bg-green-500 text-black shadow-lg transition-all duration-200">
                Submit Registration
              </button>
            </form>
          </motion.div>
          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="w-full h-full flex items-center justify-center">
              <video
                src="/assets/7592140-hd_1920_1080_25fps (1) - CROP - Videobolt.net (1).mp4"
                className="rounded-2xl shadow-lg object-cover w-full"
                style={{ height: '100%', minHeight: '370px', maxHeight: '520px', aspectRatio: '1/1', background: '#181c23' }}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
