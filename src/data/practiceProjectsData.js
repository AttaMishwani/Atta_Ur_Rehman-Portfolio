// src/data/practiceProjectsData.js

import launchdesk from "../assets/images/launchdesk/launchdesk.webp"


export const ProjectDetailarray = [
  {
    id: "launchdesk",
    title: "LaunchDesk - Job Board Platform",
    image: launchdesk,

    status: "Under Construction",
    shortDescription: `LaunchDesk is a responsive full-stack job board platform built with React and Firebase. 
It allows users to browse jobs, apply with screening questions, and track application statuses in real-time. 
Recruiters can review applications and update statuses via a secure dashboard. 
The project took months to complete due to life interruptions like exams, and a tricky Firebase resume upload bug. 
I solved the resume issue by letting applicants paste a Google Drive link instead of uploading directly.
I also learned Redux Persist for state retention across sessions and improved my skills with Firebase security rules and TanStack Query.
It’s still under development, but already functional and a big learning milestone.`,
    fullDescription: `### Features
- **User Authentication** with Firebase Auth.
- **Job Browsing** with search and filters.
- **Application Submission** with screening questions and resume link support.
- **Recruiter Dashboard** for managing applications and updating statuses.
- **State Persistence** with redux-persist.
- **Data Fetching** via TanStack Query.
- **Styling** handled entirely in TailwindCSS.

### Challenges
- **Resume Upload Issue**: Firebase Storage kept failing to save resumes. I pivoted to allowing Google Drive links, which simplified the process.
- **Life Interruptions**: Exams, moving houses, and burnout led to months-long pauses in development.
- **Learning Curve**: I had never heard of redux-persist before this project, but implementing it improved user experience dramatically.

### Lessons Learned
- How to structure a large React + Firebase app.
- Writing Firestore security rules to differentiate recruiter vs applicant access.
- Managing app state effectively between sessions.

The app is still **under construction** and will get features like recruiter job posting, analytics dashboards, and file uploads in future updates.`,
    techStack: ["React.js", "Firebase", "Redux Toolkit", "Redux Persist", "TanStack Query", "Tailwind CSS"],
    link: "https://your-launchdesk-link.com" // optional live link
  }
];
