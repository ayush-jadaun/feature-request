"use client";
import React, { useState } from "react";
import {
  Check,
  Users,
  Video,
  Shield,
  CreditCard,
  BookOpen,
  BarChart3,
  Bell,
  Globe,
  X,
  Info,
} from "lucide-react";

export default function EdTechFeatureSelector() {
  const [selectedFeatures, setSelectedFeatures] = useState<
    Record<string, boolean>
  >({});
  const [selectedCount, setSelectedCount] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [expandedExplanations, setExpandedExplanations] = useState<
    Record<string, boolean>
  >({});

  const featureCategories = [
    {
      id: "auth",
      title: "User Login & Profiles",
      icon: <Users className="w-6 h-6" />,
      description: "How users create accounts and log into your platform",
      features: [
        {
          name: "OTP & Email Login",
          explanation:
            "Users can log in using their phone number (with SMS code) or email address. Like how you log into WhatsApp or Gmail.",
        },
        {
          name: "Firebase/Custom JWT Auth",
          explanation:
            "A secure system that remembers who is logged in and keeps their account safe from hackers.",
        },
        {
          name: "Device Binding (limit logins)",
          explanation:
            "Control how many phones/computers one student can use to access their account. Prevents password sharing.",
        },
        {
          name: "Forgot Password",
          explanation:
            "Students can reset their password if they forget it, just like on Facebook or Instagram.",
        },
        {
          name: "Role-based Access (Student, Admin, Mentor)",
          explanation:
            "Different types of users see different things - students see courses, teachers can upload content, admins control everything.",
        },
      ],
    },
    {
      id: "dashboard",
      title: "Home Screen",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "The first screen students see when they open your app",
      features: [
        {
          name: "Personalized Greeting & Banners",
          explanation:
            'Shows "Good morning, John!" and displays important announcements or offers at the top.',
        },
        {
          name: "Featured Courses & Categories",
          explanation:
            "Highlights your best courses and organizes them by subject (Math, Science, etc.) like Netflix categories.",
        },
        {
          name: "Recent Activity / Continue Watching",
          explanation:
            "Shows students where they left off in their courses, so they can quickly resume learning.",
        },
        {
          name: "Push Notifications & Announcements",
          explanation:
            "Send important messages to all students, like exam dates or new course launches.",
        },
      ],
    },
    {
      id: "courses",
      title: "Course Catalog",
      icon: <BookOpen className="w-6 h-6" />,
      description: "How students browse and enroll in your courses",
      features: [
        {
          name: "Course Catalog with Categories & Filters",
          explanation:
            "Organize courses by subject, difficulty level, or teacher. Students can easily find what they need.",
        },
        {
          name: "Search (by tags, title, mentor)",
          explanation:
            'Students can search for "Physics" or "Khan Sir" to find specific courses quickly.',
        },
        {
          name: "Free vs Paid Courses",
          explanation:
            "Some courses are free to attract students, others require payment. Clearly marked for each course.",
        },
        {
          name: "Enroll/Unenroll Option",
          explanation:
            "Students can join courses they want and leave courses they don't need anymore.",
        },
        {
          name: "Course Progress Tracking",
          explanation:
            "Shows students how much of each course they've completed (like 60% complete).",
        },
      ],
    },
    {
      id: "video",
      title: "Video Player",
      icon: <Video className="w-6 h-6" />,
      description:
        "The heart of your platform - how students watch video lectures",
      features: [
        {
          name: "Adaptive Bitrate Streaming (HLS)",
          explanation:
            "Videos automatically adjust quality based on internet speed. No buffering on slow connections.",
        },
        {
          name: "Resume Playback from Last Position",
          explanation:
            "If a student stops a video halfway, it resumes from exactly where they left off next time.",
        },
        {
          name: "Video Speed Control, Subtitles Support",
          explanation:
            "Students can watch at 1.5x speed or add subtitles in different languages for better understanding.",
        },
        {
          name: "Dynamic Watermark (user ID/email)",
          explanation:
            "Student's name/email appears on videos to prevent sharing recordings with non-subscribers.",
        },
        {
          name: "Secure Player (no screenshot/screen-record)",
          explanation:
            "Prevents students from taking screenshots or recording your premium video content.",
        },
        {
          name: "Playback Analytics (watch %, drop-off)",
          explanation:
            "See which parts of videos students skip or rewatch most - helps improve content quality.",
        },
      ],
    },
    {
      id: "drm",
      title: "Content Protection",
      icon: <Shield className="w-6 h-6" />,
      description:
        "Advanced security to prevent video piracy and unauthorized sharing",
      features: [
        {
          name: "Widevine (Android), FairPlay (iOS)",
          explanation:
            "Industry-standard encryption that makes it nearly impossible to download or share your videos illegally.",
        },
        {
          name: "Screen Recording Block (FLAG_SECURE)",
          explanation:
            "Prevents students from using screen recording apps to capture your video content.",
        },
        {
          name: "User Binding (email/device ID/token)",
          explanation:
            "Videos are locked to specific student accounts and devices, preventing unauthorized access.",
        },
        {
          name: "Rooted/Jailbroken Device Detection",
          explanation:
            "Blocks access from modified phones that could be used to bypass security measures.",
        },
        {
          name: "Expiring Signed URLs for Streaming",
          explanation:
            "Video links expire after a short time, making it impossible to share direct video URLs.",
        },
      ],
    },
    {
      id: "downloads",
      title: "Offline Downloads",
      icon: <Video className="w-6 h-6" />,
      description:
        "Let students download videos for offline viewing (securely)",
      features: [
        {
          name: "Encrypted Local Downloads (sandboxed)",
          explanation:
            "Students can download videos to watch without internet, but files are encrypted and can't be shared.",
        },
        {
          name: "License Expiry for Downloads",
          explanation:
            "Downloaded videos automatically stop working after subscription expires or set time limit.",
        },
        {
          name: "No Export Access (internal storage only)",
          explanation:
            "Downloaded videos stay hidden in your app - students can't find them in phone gallery or share them.",
        },
        {
          name: "Downloads Tied to User Account",
          explanation:
            "Only the student who downloaded can watch. Videos won't work if shared with others.",
        },
        {
          name: "Decryption via In-App Player Only",
          explanation:
            "Downloaded videos only play inside your app using your special player - can't be opened elsewhere.",
        },
      ],
    },
    {
      id: "payments",
      title: "Payment System",
      icon: <CreditCard className="w-6 h-6" />,
      description: "How students pay for courses and subscriptions",
      features: [
        {
          name: "Razorpay / Stripe / Cashfree Integration",
          explanation:
            "Accept payments through trusted payment gateways used by major companies across India and globally.",
        },
        {
          name: "UPI, Card, Wallet, Netbanking Support",
          explanation:
            "Students can pay using any method they prefer - PhonePe, Paytm, debit card, credit card, etc.",
        },
        {
          name: "Discount Coupons / Offers",
          explanation:
            'Create discount codes like "SAVE50" or run limited-time offers to boost sales.',
        },
        {
          name: "Invoices / GST Receipt Generator",
          explanation:
            "Automatically generate proper tax receipts for business compliance and student records.",
        },
        {
          name: "EMI Payment Option",
          explanation:
            "Students can pay for expensive courses in monthly installments instead of full amount upfront.",
        },
        {
          name: "Subscription Plans & Expiry Handling",
          explanation:
            "Manage monthly/yearly subscriptions and automatically restrict access when payments are due.",
        },
      ],
    },
    {
      id: "content",
      title: "Study Materials",
      icon: <BookOpen className="w-6 h-6" />,
      description: "PDF notes, books, and written materials for students",
      features: [
        {
          name: "Downloadable Notes Per Course",
          explanation:
            "Provide PDF notes, formulas, and summary sheets that students can download for each course.",
        },
        {
          name: "PDF Viewer inside App",
          explanation:
            "Students can read PDFs directly in your app without needing to open other apps.",
        },
        {
          name: "Access Controlled (locked for unpaid)",
          explanation:
            "Only paying students can access premium PDFs - free users see limited content.",
        },
        {
          name: "Option to Add Highlights/Bookmarks",
          explanation:
            "Students can highlight important text and bookmark pages in PDFs for quick reference.",
        },
      ],
    },
    {
      id: "quizzes",
      title: "Tests & Assignments",
      icon: <Check className="w-6 h-6" />,
      description: "Interactive quizzes and homework assignments",
      features: [
        {
          name: "MCQ-Based Tests with Timer",
          explanation:
            "Create multiple-choice tests with time limits, just like real competitive exams (JEE, NEET).",
        },
        {
          name: "Auto-Grading & Score Display",
          explanation:
            "Tests are checked automatically and students see their scores immediately after submission.",
        },
        {
          name: "Leaderboard (optional)",
          explanation:
            "Show top-scoring students to encourage healthy competition among learners.",
        },
        {
          name: "Solutions + Analysis after Submission",
          explanation:
            "After completing test, students see correct answers and detailed explanations for wrong answers.",
        },
        {
          name: "Attach Assignments per Lecture",
          explanation:
            "Add homework or practice problems after each video lesson to reinforce learning.",
        },
      ],
    },
    {
      id: "live",
      title: "Live Classes",
      icon: <Video className="w-6 h-6" />,
      description: "Real-time online classes and doubt sessions",
      features: [
        {
          name: "Integration with Zoom / Agora / Jitsi",
          explanation:
            "Host live video classes using professional platforms that can handle hundreds of students.",
        },
        {
          name: "Class Reminders via Notification",
          explanation:
            "Automatically remind students about upcoming live classes so they don't miss important sessions.",
        },
        {
          name: "Join via Calendar/Schedule View",
          explanation:
            "Students see all upcoming live classes in a calendar format and can join with one tap.",
        },
        {
          name: "Live Chat / Polls (if supported)",
          explanation:
            "Students can ask questions during live class or vote in polls to keep them engaged.",
        },
      ],
    },
    {
      id: "admin",
      title: "Admin Dashboard",
      icon: <Shield className="w-6 h-6" />,
      description: "Management panel for you to control your entire platform",
      features: [
        {
          name: "Course & Content Management (Add/Edit/Delete)",
          explanation:
            "Easily add new courses, edit existing content, or remove outdated materials from web dashboard.",
        },
        {
          name: "Video Upload & Processing Status",
          explanation:
            "Upload videos and see processing progress. System converts videos to multiple qualities automatically.",
        },
        {
          name: "User Management (Ban, View Activity)",
          explanation:
            "See all registered students, block problematic users, and track who's accessing what content.",
        },
        {
          name: "Transactions & Refund Management",
          explanation:
            "View all payments, process refunds, and track revenue from your admin dashboard.",
        },
        {
          name: "Quiz Creator Tool",
          explanation:
            "Create tests and assignments using a simple drag-and-drop interface without technical knowledge.",
        },
        {
          name: "Announcement Broadcast",
          explanation:
            "Send notifications to all students or specific groups about important updates or offers.",
        },
        {
          name: "Analytics Dashboard",
          explanation:
            "See charts and graphs showing student engagement, popular courses, revenue trends, etc.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Business Insights",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Detailed reports to understand your business performance",
      features: [
        {
          name: "Course Enrollments & Drop-offs",
          explanation:
            "See which courses are most popular and where students are leaving your platform.",
        },
        {
          name: "Video Engagement & Watch Time",
          explanation:
            "Understand which videos keep students engaged longest and which ones they skip.",
        },
        {
          name: "Revenue Analytics",
          explanation:
            "Track daily/monthly income, best-selling courses, and payment method preferences.",
        },
        {
          name: "Quiz Performance Reports",
          explanation:
            "See average test scores, difficult questions, and areas where students struggle most.",
        },
        {
          name: "User Retention Metrics",
          explanation:
            "Know how many students return daily/weekly and what keeps them engaged long-term.",
        },
      ],
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: <Bell className="w-6 h-6" />,
      description:
        "Stay connected with your students through push notifications",
      features: [
        {
          name: "Firebase Cloud Messaging / OneSignal",
          explanation:
            "Send push notifications to student phones even when your app is closed - like WhatsApp messages.",
        },
        {
          name: "Course-specific Notifications",
          explanation:
            "Send targeted messages only to students enrolled in specific courses about relevant updates.",
        },
        {
          name: "Scheduled Announcements",
          explanation:
            "Set notifications to be sent at specific times, like exam reminders or new content releases.",
        },
        {
          name: "Push + In-App Support",
          explanation:
            "Messages appear both as phone notifications and inside your app for maximum visibility.",
        },
      ],
    },
    {
      id: "web",
      title: "Website Version",
      icon: <Globe className="w-6 h-6" />,
      description: "A website version of your app for computer users",
      features: [
        {
          name: "Same features as App: Login, Course Access, Player",
          explanation:
            "Students can access everything from their laptop/computer browser, not just mobile app.",
        },
        {
          name: "Admin Access",
          explanation:
            "You can manage your platform from computer browser - easier for uploading content and administration.",
        },
        {
          name: "SEO Optimization for Course Pages",
          explanation:
            "Your courses appear in Google search results, bringing more students organically.",
        },
        {
          name: "Web-based Payment Flow",
          explanation:
            "Students can purchase courses directly from website using any payment method.",
        },
      ],
    },
    {
      id: "infrastructure",
      title: "Technical Foundation",
      icon: <Shield className="w-6 h-6" />,
      description:
        "Behind-the-scenes technology that keeps your platform running smoothly",
      features: [
        {
          name: "AWS / GCP Deployment & Management",
          explanation:
            "Professional cloud deployment with monitoring, scaling, and maintenance. Note: Cloud hosting costs handled separately by you.",
        },
        {
          name: "Docker + CI/CD Pipeline",
          explanation:
            "Automatic system updates and deployments without downtime - your platform stays current.",
        },
        {
          name: "Load Balancer & Auto-scaling",
          explanation:
            "System automatically handles traffic spikes (like during exam results) without crashing.",
        },
        {
          name: "CDN Integration (CloudFront/Cloudflare)",
          explanation:
            "Videos load faster for students across India using global content delivery networks.",
        },
        {
          name: "Redis Caching",
          explanation:
            "Frequently accessed data loads instantly, making your app feel super fast to users.",
        },
        {
          name: "PostgreSQL / MongoDB",
          explanation:
            "Reliable databases to store all student data, courses, and transactions securely.",
        },
        {
          name: "Sentry + Grafana Monitoring",
          explanation:
            "Advanced monitoring to catch and fix issues before students notice any problems.",
        },
      ],
    },
    {
      id: "security",
      title: "Security & Safety",
      icon: <Shield className="w-6 h-6" />,
      description:
        "Multiple layers of protection for your platform and student data",
      features: [
        {
          name: "HTTPS Everywhere (SSL)",
          explanation:
            "All data transfer between app and servers is encrypted - same security as online banking.",
        },
        {
          name: "Role-Based Access Control",
          explanation:
            "Strict controls on who can see what - students can't access admin features and vice versa.",
        },
        {
          name: "DRM Licenses with Expiry",
          explanation:
            "Video access automatically expires when subscriptions end or accounts are terminated.",
        },
        {
          name: "Rate Limiting on API",
          explanation:
            "Prevents hackers from overwhelming your system with too many requests at once.",
        },
        {
          name: "Web Application Firewall (WAF)",
          explanation:
            "Blocks malicious attacks and hacking attempts before they reach your platform.",
        },
      ],
    },
    {
      id: "enhancements",
      title: "Advanced Features",
      icon: <Globe className="w-6 h-6" />,
      description: "Optional premium features to make your platform stand out",
      features: [
        {
          name: "Multilingual Support (English, Hindi, etc.)",
          explanation:
            "Your app interface and content can support multiple Indian languages to reach more students.",
        },
        {
          name: "Gamification (Badges, Ranks, Points)",
          explanation:
            "Students earn points and badges for completing courses - makes learning fun and addictive.",
        },
        {
          name: "Referral Program",
          explanation:
            "Students get discounts for bringing friends to your platform - viral growth mechanism.",
        },
        {
          name: "Affiliate Program for Educators",
          explanation:
            "Other teachers can promote your courses and earn commission - expands your reach.",
        },
        {
          name: "Doubt Forum / Community Chat",
          explanation:
            "Students can ask questions and help each other, creating an engaged learning community.",
        },
        {
          name: "AI Doubt Assistant (LangChain/OpenAI)",
          explanation:
            "ChatGPT-like AI that answers student questions instantly 24/7 when teachers aren't available.",
        },
        {
          name: "B2B SaaS Multi-Institute Support",
          explanation:
            "Sell your platform to other coaching institutes as white-label solution - additional revenue stream.",
        },
      ],
    },
  ];

  interface Feature {
    name: string;
    explanation: string;
  }

  interface FeatureToggleParams {
    categoryId: string;
    featureIndex: number;
  }

  const handleFeatureToggle = (
    categoryId: FeatureToggleParams["categoryId"],
    featureIndex: FeatureToggleParams["featureIndex"]
  ): void => {
    const key: string = `${categoryId}-${featureIndex}`;
    const newSelected: Record<string, boolean> = { ...selectedFeatures };

    if (newSelected[key]) {
      delete newSelected[key];
      setSelectedCount(selectedCount - 1);
    } else {
      newSelected[key] = true;
      setSelectedCount(selectedCount + 1);
    }

    setSelectedFeatures(newSelected);
  };

  interface HandleCategoryToggleParams {
    categoryId: string;
    features: Feature[];
  }

  const handleCategoryToggle = (
    categoryId: HandleCategoryToggleParams["categoryId"],
    features: HandleCategoryToggleParams["features"]
  ): void => {
    const newSelected: Record<string, boolean> = { ...selectedFeatures };
    const categoryKeys: string[] = features.map(
      (_, index) => `${categoryId}-${index}`
    );
    const allSelected: boolean = categoryKeys.every((key) => newSelected[key]);

    if (allSelected) {
      categoryKeys.forEach((key) => delete newSelected[key]);
      setSelectedCount(selectedCount - categoryKeys.length);
    } else {
      const newlySelected: string[] = categoryKeys.filter(
        (key) => !newSelected[key]
      );
      categoryKeys.forEach((key) => (newSelected[key] = true));
      setSelectedCount(selectedCount + newlySelected.length);
    }

    setSelectedFeatures(newSelected);
  };

  interface ExpandedExplanations {
    [key: string]: boolean;
  }

  interface ToggleExplanationParams {
    key: string;
  }

  const toggleExplanation = (key: ToggleExplanationParams["key"]): void => {
    setExpandedExplanations((prev: ExpandedExplanations) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Enhanced Header with dismiss option */}
      {showHeader && (
        <div className="bg-black text-white relative border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
            <button
              onClick={() => setShowHeader(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
                Build Your EdTech Empire
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                Create a world-class education platform like Physics Wallah or
                Unacademy. Select the features you need and we&#39;ll build your
                custom EdTech solution.
              </p>

              {/* Enhanced Stats */}
              <div className="flex justify-center gap-6 sm:gap-12 lg:gap-16 mb-6 sm:mb-8 lg:mb-10">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                    {selectedCount}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    Features Selected
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                    {featureCategories.length}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    Categories
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                    {featureCategories.reduce(
                      (acc, cat) => acc + cat.features.length,
                      0
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    Total Features
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compact header when main header is dismissed */}
      {!showHeader && (
        <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-black">
                  EdTech Platform Builder
                </h1>
                <p className="text-sm text-gray-600">
                  {selectedCount} features selected
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {featureCategories.map((category) => {
            const categoryKeys = category.features.map(
              (_, index) => `${category.id}-${index}`
            );
            const allSelected = categoryKeys.every(
              (key) => selectedFeatures[key]
            );
            const someSelected = categoryKeys.some(
              (key) => selectedFeatures[key]
            );

            return (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Enhanced Category Header */}
                <div className="bg-gray-100 border-b border-gray-200 p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-black rounded-lg shadow-sm flex-shrink-0">
                        <div className="text-white text-sm sm:text-base">
                          {category.icon}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                          {category.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleCategoryToggle(category.id, category.features)
                    }
                    className={`w-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold transition-all rounded-lg ${
                      allSelected
                        ? "bg-gray-800 text-white hover:bg-gray-700"
                        : someSelected
                        ? "bg-gray-600 text-white hover:bg-gray-700"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    <span className="block sm:hidden">
                      {allSelected
                        ? "✓ All Selected"
                        : someSelected
                        ? `${
                            categoryKeys.length -
                            categoryKeys.filter((key) => selectedFeatures[key])
                              .length
                          } left`
                        : "Select All"}
                    </span>
                    <span className="hidden sm:block">
                      {allSelected
                        ? "✓ All Selected - Click to Remove"
                        : someSelected
                        ? `Select Remaining (${
                            categoryKeys.length -
                            categoryKeys.filter((key) => selectedFeatures[key])
                              .length
                          } left)`
                        : "Select All Features"}
                    </span>
                  </button>
                </div>

                {/* Enhanced Features List */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    {category.features.map((feature, index) => {
                      const key = `${category.id}-${index}`;
                      const explanationKey = `${category.id}-${index}-explanation`;
                      const isSelected = selectedFeatures[key];
                      const isExplanationExpanded =
                        expandedExplanations[explanationKey];

                      return (
                        <div
                          key={index}
                          className={`border rounded-lg p-3 sm:p-4 transition-all ${
                            isSelected
                              ? "border-black bg-gray-100"
                              : "border-gray-300 hover:border-gray-400 bg-white"
                          }`}
                        >
                          <label className="flex items-start gap-3 sm:gap-4 cursor-pointer">
                            <div className="flex-shrink-0 mt-1">
                              <input
                                type="checkbox"
                                checked={isSelected || false}
                                onChange={() =>
                                  handleFeatureToggle(category.id, index)
                                }
                                className="sr-only"
                              />
                              <div
                                className={`w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-md flex items-center justify-center transition-all ${
                                  isSelected
                                    ? "bg-black border-black"
                                    : "border-gray-400 hover:border-gray-500"
                                }`}
                              >
                                {isSelected && (
                                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                )}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-sm sm:text-base font-semibold leading-relaxed transition-colors pr-2 ${
                                    isSelected ? "text-black" : "text-gray-900"
                                  }`}
                                >
                                  {feature.name}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    toggleExplanation(explanationKey);
                                  }}
                                  className="flex-shrink-0 ml-2 text-gray-500 hover:text-black transition-colors"
                                >
                                  <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                              </div>

                              {/* Accordion explanation */}
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  isExplanationExpanded
                                    ? "max-h-96 opacity-100 mt-2 sm:mt-3"
                                    : "max-h-0 opacity-0"
                                }`}
                              >
                                <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 sm:p-4">
                                  <div className="flex items-start gap-2">
                                    <div className="bg-gray-300 rounded-full p-1 mt-0.5 flex-shrink-0">
                                      <Info className="w-3 h-3 text-gray-600" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <h4 className="text-sm font-semibold text-gray-800 mb-1">
                                        What this means:
                                      </h4>
                                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                        {feature.explanation}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30">
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3 sm:gap-6 min-w-0 flex-1">
                <div className="text-sm sm:text-base lg:text-lg font-bold text-black">
                  <span className="hidden sm:inline">
                    {selectedCount === 0
                      ? "👆 Select features above to get started"
                      : selectedCount < 10
                      ? `🎯 ${selectedCount} features selected - Add more for a complete platform`
                      : selectedCount < 25
                      ? `🚀 ${selectedCount} features selected - You're building something great!`
                      : `🔥 ${selectedCount} features selected - Enterprise-level platform!`}
                  </span>
                  <span className="sm:hidden">
                    {selectedCount === 0
                      ? "👆 Select features"
                      : selectedCount < 10
                      ? `🎯 ${selectedCount} selected`
                      : selectedCount < 25
                      ? `🚀 ${selectedCount} selected`
                      : `🔥 ${selectedCount} selected`}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 flex-shrink-0">
                {selectedCount > 0 && (
                  <>
                    <button
                      className="px-4 sm:px-6 py-2 border-2 border-gray-400 text-gray-600 font-medium rounded-lg hover:bg-gray-100 hover:text-black transition-colors text-sm sm:text-base"
                      onClick={() => {
                        setSelectedFeatures({});
                        setSelectedCount(0);
                      }}
                    >
                      <span className="hidden sm:inline">Clear All</span>
                      <span className="sm:hidden">Clear</span>
                    </button>
                    <button
                      className="px-4 sm:px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                      onClick={() => {
                        // Collect selected features
                        const selectedList: string[] = [];
                        featureCategories.forEach((cat) => {
                          cat.features.forEach((feature, idx) => {
                            const key = `${cat.id}-${idx}`;
                            if (selectedFeatures[key]) {
                              selectedList.push(
                                `${cat.title}: ${feature.name}`
                              );
                            }
                          });
                        });
                        const message = encodeURIComponent(
                          `Hi, I'm interested in these EdTech features:\n\n${selectedList.join(
                            "\n"
                          )}\n\nPlease contact me!`
                        );
                        window.open(
                          `https://wa.me/919548999129?text=${message}`,
                          "_blank"
                        );
                      }}
                    >
                      Send to WhatsApp
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding to prevent content overlap */}
      <div className="h-20 sm:h-24"></div>
    </div>
  );
}
