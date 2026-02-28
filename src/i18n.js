import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ar",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About",
            skills: "Experience",
            qualification: "Qualifications",
            services: "Services",
            portfolio: "Work",
            work: "Work",
            contact: "Contact",
          },
          hero: {
            greeting: "Hello, I'm",
            name: "Saeed Ramadan",
            title: "Frontend (React Js) Developer & Programming Instructor",
            devCV: "Developer CV",
            instCV: "Instructor CV",
            aboutMe: "About me",
            scrollDown: "Scroll Down",
          },
          about: {
            subtitle: "My Intro",
            title: "About Me",
            expertise: "Expertise",
            expertise_sub: "Development & Instruction",
            tech: "Tech Stack",
            tech_sub: "React & Modern UI",
            quality: "Quality",
            quality_sub: "Clean Architecture",
            description:
              "Computer Science graduate and Front-End Developer with a strong track record of building responsive, high-performance web applications using React.js. Specialized in creating intuitive user interfaces and complex dashboards with a focus on clean, reusable component-based architecture. Expert in modern React (Redux Toolkit/Context API) and crafting premium UIs using Tailwind CSS and Material UI.",
            contact: "Contact Me",
            yearsCoding: "Years Coding",
          },
          education: {
            subtitle: "Academic Background",
            title: "Education",
            degree_label: "Bachelor's Degree",
            degree: "Bachelor of Computers & Artificial Intelligence",
            faculty: "Faculty of Computers & AI",
            university: "Sohag University",
            gpa: "GPA",
            graduated: "Graduated",
            project: "Grad Project",
            tag1: "Computer Science",
            tag2: "Artificial Intelligence",
            tag3: "Data & Algorithms",
          },
          skills: {
            subtitle: "Professional Stack",
            title: "Technical Mastery",
            frontend: "Frontend Tech",
            instructor: "Teaching & Leadership",
            react: "React Ecosystem",
            state: "State Management",
            ui: "UI & Styling",
            api: "APIs & Tooling",
          },
          qualification: {
            subtitle: "My Journey",
            title: "Qualifications",
            education: "Education",
            experience: "Experience",
            exp1: {
              title: "Front-End Developer",
              company: "The 4th Pyramid (الهرم الرابع)",
              date: "Jan 2026 - Present",
            },
            exp2: {
              title: "Programming Instructor",
              company: "Tariq E Shewy Academy",
              date: "Dec 2025 - Present",
            },
            exp3: {
              title: "Online Programming Instructor",
              company: "Freelance & AlphaProg",
              date: "Oct 2022 - Jan 2025",
            },
            edu: {
              title: "Bachelor of Computers and AI",
              school: "Sohag University",
              date: "2020 - 2024",
              desc: "CS Major | GPA: 3.1/4.0 (Very Good). Grad Project: HOPE (Excellent)",
            },
            activities: "Activities",
            act1: {
              title: "Academic Committee Head",
              org: "SMART Family",
              date: "2024",
            },
            act2: {
              title: "ECPC Contestant",
              org: "Egyptian Collegiate Programming Contest",
              date: "2022",
            },
            act3: {
              title: "Core Team Member",
              org: "GDSC Sohag University",
              date: "2021",
            },
            act4: {
              title: "Event Organizer",
              org: "Life Makers Foundation",
              date: "2021",
            },
          },
          services: {
            subtitle: "My Services",
            title: "What I Offer",
            seeMore: "See more",
            web: "Web Development",
            web_desc:
              "Developing high-performance, responsive websites using modern frameworks like React 19.",
            web_i1: "Modern & Responsive UI Design",
            web_i2: "Single Page Applications (SPA)",
            web_i3: "State Management (Redux/Context)",
            web_i4: "API Integration (Axios/REST)",
            web_i5: "Performance Optimization",
            uiux: "UI/UX Solutions",
            uiux_desc:
              "Crafting beautiful and functional interfaces with a focus on user experience.",
            uiux_i1: "User Interface Design",
            uiux_i2: "Prototypes in Figma",
            uiux_i3: "User Experience Research",
            uiux_i4: "Interactive Design Elements",
            uiux_i5: "Visual Branding",
            teaching: "Technical Mentorship",
            teaching_desc:
              "Educational services focused on modern web technologies and logic building.",
            teaching_i1: "Curriculum Design",
            teaching_i2: "Technical Mentorship",
            teaching_i3: "Code Reviews",
            teaching_i4: "Workshops",
            teaching_i5: "Pedagogy for Kids",
          },
          volunteering: {
            subtitle: "Volunteering",
            title: "Community & Leadership",
            v1_title: "SMART Family",
            v1_status: "Active Lead Developer",
            v2_title: "GDSC Sohag",
            v2_status: "Member & Tech Support",
            v3_title: "ECPC",
            v3_status: "Problem Solver & Contributor",
          },
          portfolio: {
            subtitle: "Featured Work",
            title: "Recent Projects",
            desc: "Crafting digital excellence through elite architectures and visionary design patterns.",
            all: "All",
            professional: "Professional",
            personal: "Personal",
            grad: "Graduation",
            demo: "Demo",
            details: "Details",
            projectDetails: {
              liveDemo: "Live Demo",
              overview: "Overview",
              keyFeatures: "Key Features",
              techStack: "Tech Stack",
              galleryPrefix: "Project",
              gallerySuffix: "Gallery",
            },
            bymona: {
              title: "Bynona Platform",
              desc: "Premium e-commerce supporting retail & wholesale with dynamic logic (React 19, Zustand, React Query).",
              details: {
                overview:
                  "Bynona is a high-performance, feature-rich e-commerce application designed for the Egyptian market. It offers a seamless shopping experience for fashion, electronics, and more, with a focus on premium aesthetics, accessibility, and state-of-the-art performance.",
                features: {
                  f1: {
                    title: "E-commerce Core",
                    desc: "Advanced catalog with Price Modes (Retail/Wholesale), dynamic filtering, smart favorites, and complete checkout flow.",
                  },
                  f2: {
                    title: "User Experience",
                    desc: "Secure authentication, comprehensive profiles, advanced address management, and bi-directional (RTL/LTR) support.",
                  },
                  f3: {
                    title: "Technical Advanced Features",
                    desc: "Real-time notifications via Laravel Echo/Pusher, Firebase Cloud Messaging, and SEO optimization.",
                  },
                },
              },
            },
            propix8: {
              title: "Propix8 Platform",
              desc: "High-end real estate platform with interactive Google Maps and smooth animations.",
              details: {
                overview:
                  'Propix8 is a premium, high-performance real estate platform designed to connect property seekers with their dream homes. It offers a seamless user experience for buying, renting, and investing in real estate, featuring advanced search capabilities, interactive property tours, and a comprehensive booking management system. The application is built with a "Mobile-First" approach.',
                features: {
                  f1: {
                    title: "Core Experience",
                    desc: "Dynamic Hero, Advanced Filtering, Featured Sections, Testimonials, and modern pagination.",
                  },
                  f2: {
                    title: "Auth & Security",
                    desc: "Secure Sign In, JWT-based authentication, Registration, and Password flows.",
                  },
                  f3: {
                    title: "Property Exploration",
                    desc: "List/Grid units, High-quality galleries, Video Tours, Interactive Maps, and Comparisons.",
                  },
                  f4: {
                    title: "Smart Booking System",
                    desc: "Simple wizard, Re-booking logic, and User Dashboard for tracking viewing history.",
                  },
                },
              },
            },
            hope: {
              title: "HOPE Platform",
              desc: "Social service website for missing persons and things. My graduation project as Project Leader & Front End Developer.",
              details: {
                overview:
                  "HOPE is an AI-powered social service platform I led as both Project Leader and Front End Developer for my graduation project. It helps families find missing persons using face recognition, a smart chatbot, and real-time notifications. Built with React.js, Material UI, and Context API.",
                features: {
                  f1: {
                    title: "User & Auth System",
                    desc: "Secure registration with email verification, login with password recovery, and full profile management with editable data.",
                  },
                  f2: {
                    title: "Posts & Social Features",
                    desc: "Create posts for missing people and things, comment, reply, share, pin/hide, and real-time chat between users.",
                  },
                  f3: {
                    title: "AI Chatbot",
                    desc: "Smart chatbot to create posts faster, find missing persons in nearby hospitals, and provide emotional support.",
                  },
                  f4: {
                    title: "Dashboard & Notifications",
                    desc: "Admin dashboard with statistics, user/post management, face-recognition notifications, and real-time alerts.",
                  },
                },
              },
            },
            srgym: {
              title: "SR-Gym",
              desc: "A fitness gym management app with workout schedules, animations, and Redux state management.",
            },
            fastpizza: {
              title: "Fast React Pizza",
              desc: "A fast food ordering app with real-time cart management and geolocation-based delivery.",
            },
            personalsite: {
              title: "Personal Website v1",
              desc: "My first personal portfolio built with React, Framer Motion animations, and i18next.",
            },
          },
          contact: {
            subtitle: "Get in touch",
            title: "Contact Me",
            description:
              "Let's forge the next generation of digital excellence together.",
            talk: "Talk to me",
            write: "Write me",
            mail_title: "Email",
            name: "Name",
            mail: "Mail",
            project: "Project",
            send: "Send Message",
          },
        },
      },
      ar: {
        translation: {
          nav: {
            home: "الرئيسية",
            about: "عني",
            skills: "الخبرات",
            qualification: "المؤهلات",
            services: "الخدمات",
            portfolio: "الأعمال",
            work: "الأعمال",
            contact: "اتصل بي",
          },
          hero: {
            greeting: "أهلاً، أنا",
            name: "سعيد رمضان",
            title: "مطور واجهات أمامية (React Js) ومدرب برمجة",
            devCV: "السيرة الذاتية للمطور",
            instCV: "السيرة الذاتية للمدرب",
            aboutMe: "من أنا",
            scrollDown: "انزل للأسفل",
          },
          about: {
            subtitle: "مقدمة",
            title: "من أنا",
            expertise: "الخبرة",
            expertise_sub: "التطوير والتدريب",
            tech: "التقنيات",
            tech_sub: "React وواجهات حديثة",
            quality: "الجودة",
            quality_sub: "بنية كود نظيفة",
            description:
              "خريج علوم حاسب ومطور واجهات أمامية بخبرة قوية في بناء تطبيقات ويب سريعة الاستجابة وعالية الأداء باستخدام React.js. متخصص في إنشاء واجهات مستخدم بديهية ولوحات تحكم معقدة مع التركيز على بنية المكونات القابلة لإعادة الاستخدام. خبير في React الحديثة (Redux Toolkit/Context API) وصياغة واجهات مستخدم متميزة باستخدام Tailwind CSS و Material UI.",
            contact: "تواصل معي",
            yearsCoding: "سنوات من البرمجة",
          },
          education: {
            subtitle: "الخلفية الأكاديمية",
            title: "التعليم",
            degree_label: "درجة البكالوريوس",
            degree: "بكالوريوس الحاسبات والذكاء الاصطناعي",
            faculty: "كلية الحاسبات والذكاء الاصطناعي",
            university: "جامعة سوهاج",
            gpa: "التقدير",
            graduated: "التخرج",
            project: "مشروع التخرج",
            tag1: "علوم الحاسب",
            tag2: "الذكاء الاصطناعي",
            tag3: "البيانات والخوارزميات",
          },
          skills: {
            subtitle: "المهارات المهنية",
            title: "الإتقان التقني",
            frontend: "تقنيات الواجهات",
            instructor: "التدريب والقيادة",
            react: "بيئة React",
            state: "إدارة الحالة",
            ui: "التصميم والتنسيق",
            api: "الأدوات والربط",
          },
          qualification: {
            subtitle: "مسيرتي",
            title: "المؤهلات",
            education: "التعليم",
            experience: "الخبرة",
            exp1: {
              title: "مطور واجهات أمامية",
              company: "The 4th Pyramid (الهرم الرابع)",
              date: "يناير 2026 - الحالي",
            },
            exp2: {
              title: "مدرب برمجة",
              company: "أكاديمية طارق الشيوى",
              date: "ديسمبر 2025 - الحالي",
            },
            exp3: {
              title: "مدرب برمجة أونلاين",
              company: "عمل حر و AlphaProg",
              date: "أكتوبر 2022 - يناير 2025",
            },
            edu: {
              title: "بكالوريوس الحاسبات والذكاء الاصطناعي",
              school: "جامعة سوهاج",
              date: "2020 - 2024",
              desc: "تخصص علوم حاسب | تقدير عام: جيد جداً (3.1/4.0). مشروع التخرج: HOPE (امتياز)",
            },
            activities: "الأنشطة والمسابقات",
            act1: {
              title: "رئيس اللجنة الأكاديمية",
              org: "أسرة SMART",
              date: "2024",
            },
            act2: {
              title: "متسابق ECPC",
              org: "المسابقة البرمجية المصرية للكليات",
              date: "2022",
            },
            act3: {
              title: "عضو الفريق الأساسي",
              org: "GDSC جامعة سوهاج",
              date: "2021",
            },
            act4: {
              title: "منظم فعاليات",
              org: "مؤسسة صناع الحياة",
              date: "2021",
            },
          },
          services: {
            subtitle: "خدماتي",
            title: "ماذا أقدم",
            seeMore: "رؤية المزيد",
            web: "تطوير الويب",
            web_desc:
              "تطوير مواقع عالية الأداء وسريعة الاستجابة باستخدام أحدث التقنيات مثل React 19.",
            web_i1: "تصميم واجهات عصرية وسريعة الاستجابة",
            web_i2: "تطبيقات ذات صفحة واحدة (SPA)",
            web_i3: "إدارة الحالة (Redux/Context)",
            web_i4: "ربط API (Axios/REST)",
            web_i5: "تحسين الأداء",
            uiux: "حلول الواجهات والتصميم",
            uiux_desc:
              "صياغة واجهات جميلة وعملية مع التركيز على تجربة المستخدم.",
            uiux_i1: "تصميم واجهة المستخدم",
            uiux_i2: "نماذج أولية في Figma",
            uiux_i3: "بحث تجربة المستخدم",
            uiux_i4: "عناصر تصميم تفاعلية",
            uiux_i5: "الهوية البصرية للعلامة التجارية",
            teaching: "التوجيه التقني",
            teaching_desc:
              "خدمات تعليمية تركز على تقنيات الويب الحديثة وبناء المنطق البرمجي.",
            teaching_i1: "تصميم المناهج الدراسية",
            teaching_i2: "الإرشاد التقني",
            teaching_i3: "مراجعة الكود",
            teaching_i4: "ورش العمل",
            teaching_i5: "تعليم البرمجة للأطفال",
          },
          volunteering: {
            subtitle: "التطوع",
            title: "المجتمع والقيادة",
            v1_title: "أسرة SMART",
            v1_status: "مطور رئيسي نشط",
            v2_title: "GDSC سوهاج",
            v2_status: "عضو ودعم تقني",
            v3_title: "ECPC",
            v3_status: "حل مشكلات ومساهم",
          },
          portfolio: {
            subtitle: "أعمال مختارة",
            title: "أحدث المشاريع",
            desc: "نصيغ التميز الرقمي من خلال بنى تحتية نخبوية وأنماط تصميم بصيرة.",
            all: "الكل",
            professional: "احترافي",
            personal: "شخصي",
            grad: "التخرج",
            demo: "عرض حي",
            details: "التفاصيل",
            projectDetails: {
              liveDemo: "عرض مباشر",
              overview: "نبذة عامة",
              keyFeatures: "المميزات الرئيسية",
              techStack: "التقنيات المستخدمة",
              galleryPrefix: "معرض",
              gallerySuffix: "المشروع",
            },
            bymona: {
              title: "منصة Bynona",
              desc: "منصة تجارة إلكترونية تدعم البيع بالتجزئة والجملة مع منطق ديناميكي (React 19, Zustand, React Query).",
              details: {
                overview:
                  "بينونة هي منصة تجارة إلكترونية عالية الأداء وغنية بالمميزات مصممة للسوق المصري. تقدم تجربة تسوق سلسة للأزياء والإلكترونيات وغيرها، مع التركيز على الجماليات المميزة، وسهولة الوصول، والأداء المتطور.",
                features: {
                  f1: {
                    title: "جوهر التجارة الإلكترونية",
                    desc: "كتالوج متقدم بأسعار البيع (تجزئة/جملة)، تصفية ديناميكية، مفضلة، وعملية شراء متكاملة.",
                  },
                  f2: {
                    title: "تجربة المستخدم",
                    desc: "تسجيل دخول آمن، ملفات شخصية شاملة، إدارة متقدمة للعناوين، ودعم كامل للغتين.",
                  },
                  f3: {
                    title: "مميزات تقنية متقدمة",
                    desc: "إشعارات فورية عبر Laravel Echo/Pusher، ودعم Firebase، وتحسين محركات البحث.",
                  },
                },
              },
            },
            propix8: {
              title: "منصة Propix8",
              desc: "منصة عقارات فاخرة مع خرائط جوجل التفاعلية ورسوم متحركة سلسة.",
              details: {
                overview:
                  "منصة Propix8 هي منصة عقارية متميزة وعالية الأداء مصممة لربط الباحثين عن العقارات بمنازل أحلامهم. تقدم تجربة مستخدم سلسة للشراء والتأجير والاستثمار في العقارات، وتتميز بقدرات بحث متقدمة، وجولات تفاعلية في العقارات، ونظام إدارة حجوزات شامل. تم بناء التطبيق بمنهجية 'الهاتف أولاً' لدعم كافة الشاشات بشكل ممتاز وتوفر دعم كامل للغة العربية (RTL).",
                features: {
                  f1: {
                    title: "تجربة تصفح متقدمة",
                    desc: "نظام تصفية متقدم، عرض للمشاريع المتميزة والأعمال السابقة مع تقييمات العملاء.",
                  },
                  f2: {
                    title: "نظام أمان وتسجيل دخول",
                    desc: "تسجيل دخول آمن بتقنية JWT مع إدارة كلمات المرور وتجربة مستخدم سهلة.",
                  },
                  f3: {
                    title: "استكشاف العقارات",
                    desc: "طرق عرض شبكية أو قوائم مع معارض صور عالية الجودة وجولات فيديو وخرائط حية تفاعلية ومقارنة الوحدات.",
                  },
                  f4: {
                    title: "نظام حجز ذكي",
                    desc: "معالج حجز بسيط ومتابعة شاملة لحالات الحجوزات مع ميزة 'إعادة الحجز' بضغطة زر.",
                  },
                },
              },
            },
            hope: {
              title: "منصة HOPE",
              desc: "موقع خدمة اجتماعية للمفقودين. مشروع تخرجي كقائد مشروع ومطور Front End.",
              details: {
                overview:
                  "منصة HOPE هي منصة خدمة اجتماعية تعمل بالذكاء الاصطناعي لمساعدة العائلات في إيجاد المفقودين باستخدام تقنية التعرف على الوجوه وشاتبوت ذكي وإشعارات فورية. كنت قائد الفريق ومطور Front End لمشروع التخرج. بُني بـ React.js و Material UI و Context API.",
                features: {
                  f1: {
                    title: "نظام المستخدمين",
                    desc: "تسجيل آمن بتحقق بريدي، تسجيل دخول مع استعادة كلمة السر، وإدارة بيانات شخصية كاملة قابلة للتعديل.",
                  },
                  f2: {
                    title: "المنشورات والتواصل",
                    desc: "إنشاء منشورات للمفقودين والأشياء، تعليق، رد، مشاركة، تثبيت/إخفاء، ودردشة فورية بين المستخدمين.",
                  },
                  f3: {
                    title: "شاتبوت ذكي",
                    desc: "شاتبوت لإنشاء منشورات أسرع، البحث عن المفقودين في أقرب مستشفى، وتقديم الدعم النفسي للمستخدمين.",
                  },
                  f4: {
                    title: "لوحة تحكم وإشعارات",
                    desc: "لوحة إدارة مع إحصائيات، إدارة المستخدمين/المنشورات، وإشعارات فورية بتقنية التعرف على الوجوه.",
                  },
                },
              },
            },
            srgym: {
              title: "SR-Gym",
              desc: "تطبيق إدارة صالة رياضية مع جداول تمارين ورسوم متحركة وإدارة الحالة بـ Redux.",
            },
            fastpizza: {
              title: "Fast React Pizza",
              desc: "تطبيق طلب طعام سريع مع إدارة سلة مشتريات فورية والتوصيل المحدد بالموقع الجغرافي.",
            },
            personalsite: {
              title: "الموقع الشخصي v1",
              desc: "أول موقع شخصي أنشأته بـ React مع رسوم Framer Motion ودعم i18next للغات.",
            },
          },
          contact: {
            subtitle: "ابق على تواصل",
            title: "تواصل معي",
            description: "لنصنع معاً الجيل القادم من التميز الرقمي.",
            talk: "تحدث معي",
            write: "اكتب لي",
            mail_title: "البريد الإلكتروني",
            name: "الاسم",
            mail: "البريد الإلكتروني",
            project: "المشروع",
            send: "إرسال الرسالة",
          },
        },
      },
    },
  });

export default i18n;
