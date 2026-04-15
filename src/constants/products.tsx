import { ProductLabel } from "@/types/products";

export const products = [
  {
    href: "https://mockify-puce.vercel.app/",
    title: "Mockify",
    description:
      "AI platform for booking 1-on-1 mock interviews with real-time, role-specific question generation and instant feedback.",
    thumbnail: "/images/mockify.png",
    images: [
      "/images/mockify.png",
      "/images/mockify (2).png",
      "/images/mockify (3).png",
    ],
    stack: [
      "Nextjs",
      "javascript",
      "Stream",
      "Gemini API",
      "PostgreSQL",
      "Clerk.js",
    ],
    slug: "mockify",
    label: ProductLabel.Live,
    content: (
      <div>
        <p>
          It helps you by giving realistic interview practice with AI-generated,
          role-specific questions and instant feedback, so you can improve
          confidence, identify weak areas, and perform better in real
          interviews.
        </p>
        <p>
          Key aspects of the project include: AI Interview Engine: Generates
          role-specific questions in real time. 1-on-1 Simulation: Provides a
          realistic interview experience. Instant Feedback: Gives performance
          insights and suggestions. Adaptive System: Adjusts difficulty based on
          user responses. Progress Tracking: Monitors improvement over time.
          Multi-Format Support: Covers technical, HR, and behavioral rounds.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://smartai-sepia.vercel.app/",
    title: "SmartAI",
    description:
      "AI-powered platform that generates resumes and cover letters, provides industry-specific quizzes, and delivers smart career insights.",
    thumbnail: "/images/smartai.png",
    images: [
      "/images/smartai.png",
      "/images/smartai (2).png",
      "/images/smartai (3).png",
    ],
    stack: ["Nextjs", "javascript", "Gemini API", "PostgreSQL", "Clerk.js"],
    slug: "smartai",
    label: ProductLabel.Live,
    content: (
      <div>
        <p>
          SmartAI is an AI-powered platform designed to simplify job preparation
          by generating professional resumes and personalized cover letters. It
          offers industry-specific quizzes to help users test and improve their
          knowledge in their chosen field. The platform also provides valuable
          AI-driven insights about industry trends, skills, and career growth
          opportunities. With intelligent automation, SmartAI acts as a complete
          career assistant to guide users throughout their job journey.
        </p>
        <p>
          Key aspects of the project include: Resume & Cover Letter Generator:
          Creates professional, tailored documents using AI. Industry-Specific
          Quizzes: Helps users practice with targeted questions based on their
          field. AI Career Assistant: Provides guidance and suggestions for
          career growth. Industry Insights: Delivers trends, skills, and
          knowledge relevant to specific industries. Smart Automation:
          Simplifies job preparation tasks with intelligent AI support.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://prio-x-three-gamma.vercel.app/",
    title: "PrioX",
    description:
      "Zcrum is a project management platform designed to organize tasks, track progress, and improve team collaboration. ",
    thumbnail: "/images/prio-x.png",
    images: [
      "/images/prio-x.png",
      "/images/prio-x (2).png",
      "/images/prio-x (3).png",
    ],
    stack: ["ReactJs", "Tailwindcss", "Nextjs", "Clerk.js", "Prisma", "zod"],
    slug: "prio-x",

    label: ProductLabel.Live,
    content: (
      <div>
        <p>
          Zcrum is a powerful project management tool that helps teams manage
          tasks, streamline workflows, and collaborate efficiently. It offers
          features like task assignment, priority tracking, and progress
          monitoring to ensure smooth and organized project execution.
        </p>
        <p>
          Key aspects of the project include: Task Management: Create, assign,
          and manage tasks efficiently. Workflow Tracking: Organize tasks across
          different stages of progress. Team Collaboration: Enable seamless
          communication and coordination. Priority & Status Control: Set
          priorities and track task status easily. Progress Monitoring:
          Visualize project progress and performance. Scalable Architecture:
          Designed to handle multiple projects and users smoothly.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://vehiql-rho.vercel.app/",
    title: "Vehiql",
    description:
      "AI-powered car dealership platform for smart car listings, intelligent search, and seamless test drive booking.",
    thumbnail: "/images/vehiql.png",
    images: [
      "/images/vehiql.png",
      "/images/vehiql(2).png",
      "/images/vehiql(3).png",
    ],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "clerk.js",
      "supabase",
      "Gemini API",
      "Prisma",
    ],
    slug: "vehiql",

    label: ProductLabel.Live,
    content: (
      <div>
        <p>
          This platform is an AI-powered car dealership system designed to
          simplify buying and selling vehicles through intelligent automation.
          It allows dealers to add car listings effortlessly using AI, while
          users can search for vehicles with smart, preference-based filtering.
          Customers can easily book test drives and choose convenient time slots
          based on showroom availability. With features like AI recommendations
          and showroom scheduling, the platform enhances user experience and
          streamlines dealership operations.
        </p>
        <p>
          Key aspects of the project include: AI Car Listing: Add and manage car
          details using AI assistance. Smart Search: Find cars using AI-powered
          search based on preferences. Test Drive Booking: Schedule test drives
          with flexible time slots. Showroom Scheduling: Set and manage showroom
          timings easily. AI Recommendations: Suggest cars based on user needs
          and behavior. Advanced Automation: Streamlines dealership operations
          with intelligent features.
        </p>{" "}
      </div>
    ),
  },

  {
    href: "https://github.com/vinaydagar04/snapui",
    title: "SnapUI",
    description:
      "SnapUI is a modern React component library that provides clean, customizable, and ready-to-use UI components for building fast and scalable applications.",
    thumbnail: "/images/snapui.png",
    images: [
      "/images/snapui.png",
      "/images/snapui(2).png",
      "/images/snapui(3).png",
      "/images/snapui(4).png",
    ],
    stack: ["Nextjs", "Tailwindcss", "typescript", "fumadocs", "mdx"],
    slug: "snapui",

    label: ProductLabel.Github,
    content: (
      <div>
        <p>
          SnapUI is a modern React component library designed to help developers
          build clean and responsive user interfaces بسرعة and efficiently. It
          offers a collection of reusable, customizable components that can be
          easily integrated into any project. Inspired by modern design systems,
          it focuses on simplicity, flexibility, and performance. With SnapUI,
          developers can speed up development while maintaining a consistent and
          scalable UI.
        </p>
        <p>
          Key aspects of the project include: Modern Components: Pre-built,
          reusable React components. Customizable Design: Easily adaptable
          styles and themes. Developer Friendly: Simple integration and usage.
          Performance Optimized: Lightweight and fast components. Scalable
          System: Designed for building large applications efficiently.
        </p>{" "}
      </div>
    ),
  },
];
