import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { useAuthModal } from "@/hooks/use-auth-modal";
import { useToast } from "@/hooks/use-toast";

export default function AuthModals() {
  const { 
    loginOpen, 
    signupOpen, 
    thankYouOpen, 
    closeLogin, 
    closeSignup, 
    closeThankYou,
    openLogin,
    openSignup,
    showThankYou
  } = useAuthModal();
  
  const { toast } = useToast();
  
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    remember: false
  });
  
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    terms: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!loginForm.email || !loginForm.password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate login
    setTimeout(() => {
      closeLogin();
      toast({
        title: "Login Successful!",
        description: "Welcome back to NeoFlow. (This is a demo)",
      });
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!signupForm.firstName || !signupForm.lastName || !signupForm.email || !signupForm.password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (!signupForm.terms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms of service to continue.",
        variant: "destructive"
      });
      return;
    }

    // Simulate signup
    setTimeout(() => {
      closeSignup();
      showThankYou();
    }, 1000);
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      {/* Login Modal */}
      <AnimatePresence>
        {loginOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 modal-backdrop flex items-center justify-center z-50"
            onClick={(e) => e.target === e.currentTarget && closeLogin()}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-morphism rounded-2xl p-8 max-w-md w-full mx-4 relative"
            >
              <button
                onClick={closeLogin}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold gradient-text mb-2">Welcome Back</h2>
                <p className="text-gray-300">Sign in to your account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="login-email" className="text-gray-300">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    className="glass-morphism border-gray-600 focus:border-cyan-400 mt-2"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="login-password" className="text-gray-300">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    className="glass-morphism border-gray-600 focus:border-cyan-400 mt-2"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={loginForm.remember}
                      onCheckedChange={(checked) => 
                        setLoginForm({...loginForm, remember: checked as boolean})
                      }
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-300">
                      Remember me
                    </Label>
                  </div>
                  <button type="button" className="text-sm text-cyan-400 hover:text-cyan-300">
                    Forgot password?
                  </button>
                </div>

                <Button type="submit" className="w-full btn-primary py-3 rounded-lg font-semibold text-white">
                  Sign In
                </Button>
              </form>

              <div className="text-center mt-6">
                <span className="text-gray-400">Don't have an account? </span>
                <button
                  onClick={() => {
                    closeLogin();
                    openSignup();
                  }}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Sign up
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signup Modal */}
      <AnimatePresence>
        {signupOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 modal-backdrop flex items-center justify-center z-50"
            onClick={(e) => e.target === e.currentTarget && closeSignup()}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-morphism rounded-2xl p-8 max-w-md w-full mx-4 relative"
            >
              <button
                onClick={closeSignup}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold gradient-text mb-2">Join NeoFlow</h2>
                <p className="text-gray-300">Create your account today</p>
              </div>

              <form onSubmit={handleSignup} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name" className="text-gray-300">First Name</Label>
                    <Input
                      id="first-name"
                      value={signupForm.firstName}
                      onChange={(e) => setSignupForm({...signupForm, firstName: e.target.value})}
                      className="glass-morphism border-gray-600 focus:border-cyan-400 mt-2"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="last-name" className="text-gray-300">Last Name</Label>
                    <Input
                      id="last-name"
                      value={signupForm.lastName}
                      onChange={(e) => setSignupForm({...signupForm, lastName: e.target.value})}
                      className="glass-morphism border-gray-600 focus:border-cyan-400 mt-2"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="signup-email" className="text-gray-300">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                    className="glass-morphism border-gray-600 focus:border-cyan-400 mt-2"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-300">Company</Label>
                  <Input
                    id="company"
                    value={signupForm.company}
                    onChange={(e) => setSignupForm({...signupForm, company: e.target.value})}
                    className="glass-morphism border-gray-600 focus:border-cyan-400 mt-2"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <Label htmlFor="signup-password" className="text-gray-300">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                    className="glass-morphism border-gray-600 focus:border-cyan-400 mt-2"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={signupForm.terms}
                    onCheckedChange={(checked) => 
                      setSignupForm({...signupForm, terms: checked as boolean})
                    }
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the{" "}
                    <button type="button" className="text-cyan-400 hover:text-cyan-300">
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button type="button" className="text-cyan-400 hover:text-cyan-300">
                      Privacy Policy
                    </button>
                  </Label>
                </div>

                <Button type="submit" className="w-full btn-primary py-3 rounded-lg font-semibold text-white animate-glow">
                  Create Account
                </Button>
              </form>

              <div className="text-center mt-6">
                <span className="text-gray-400">Already have an account? </span>
                <button
                  onClick={() => {
                    closeSignup();
                    openLogin();
                  }}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Sign in
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Modal */}
      <AnimatePresence>
        {thankYouOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 modal-backdrop flex items-center justify-center z-50"
            onClick={(e) => e.target === e.currentTarget && closeThankYou()}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-morphism rounded-2xl p-8 max-w-md w-full mx-4 text-center"
            >
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-6xl mb-6"
              >
                🎉
              </motion.div>
              
              <h2 className="text-3xl font-bold gradient-text mb-4">Welcome to NeoFlow!</h2>
              
              <p className="text-gray-300 mb-6">
                Thank you for signing up. We've sent a confirmation email to your inbox.
              </p>
              
              <div className="space-y-4">
                <div className="text-cyan-400 text-lg font-semibold flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✉️
                  </motion.div>
                  <span className="ml-2">Check your email</span>
                </div>
                <p className="text-sm text-gray-400">
                  Click the verification link to activate your account and start your free trial.
                </p>
              </div>
              
              <Button 
                onClick={closeThankYou}
                className="btn-primary px-8 py-3 rounded-lg font-semibold text-white mt-6"
              >
                Got it!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
