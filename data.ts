import { CVData } from './types';

export const cvData: CVData = {
  name: "SeungPyo Jeon",
  koreanName: "전승표",
  title: "Undergraduate Researcher in Computer Vision",
  profileImage: "https://placehold.co/400x500/e2e8f0/64748b?text=Profile+Image", // 교체 방법: 이 부분을 실제 이미지 경로(예: "./profile.jpg")나 URL로 변경하세요.
  summary: [
    "제 관심 분야는 **Computer Vision** 입니다.",
    "특히, **SLAM, 3D Reconstruction, 자율주행, Physical AI**에 깊은 관심을 가지고 있습니다.",
    "한번 집중하기 시작하면 끝까지 포기하지 않고 파고들어, 복잡하고 도전적인 연구/개발에 기여하고 싶습니다."
  ],
  contact: {
    email: "24110163@seoultech.ac.kr",
    github: "https://github.com/SeungPyo-Jeon",
    location: "Seoul, Republic of Korea",
    phone: "010-4162-1468"
  },
  education: [
    {
      school: "Seoul National University of Science and Technology",
      degree: "B.S. in Artificial Intelligence Applications",
      location: "Seoul, Korea",
      period: "2024.03 – Present",
      details: ["GPA: 3.89 / 4.5"]
    },
    {
      school: "University of Nevada, Las Vegas",
      degree: "Exchange Student / Workshop",
      location: "NV, USA",
      period: "2024.12 – 2025.01",
      details: ["Howard R. Hughes College of Engineering", "ML+AI workshop (33h)", "US College Educational Learning Program (14h)"]
    },
    {
      school: "Hoseo University",
      degree: "B.S. in Computer and Information Engineering",
      location: "Cheonan, Korea",
      period: "2020.03 – 2024.02",
      details: ["GPA: 4.14 / 4.5"]
    }
  ],
  experience: [
    {
      company: "Korea Railroad Research Institute (KRRI)",
      position: "Research Intern",
      location: "Uiwang, Korea",
      period: "2024.06 – 2024.09",
      description: [
        "ICT 대중교통연구실 소속",
        "열차 내 혼잡도 계산을 위한 승객 인식 모델 개발 참여"
      ]
    }
  ],
  projects: [
    {
      title: "Satellite Tree Species Classification Model",
      description: "탄소중립 전략의 핵심 자원인 수림의 탄소 포집량 계산을 위해 중요한 수종 예측을 목표로 합니다. 다중 다시점 위성 데이터를 입력으로 하는 수종 분류 딥러닝 모델을 제작하였습니다.",
      techStack: ["Python", "PyTorch", "Remote Sensing"],
      link: "https://github.com/SeungPyo-Jeon/CapstoneDesign-ForestCarbonAi",
      period: "Research Project"
    },
    {
      title: "Passenger Recognition Model for Congestion Analysis",
      description: "탑승객 안전과 직결된 열차 내 혼잡도를 계산을 목표로 합니다. CCTV 이미지를 입력으로 Faster-RCNN 기반 승객 인식 모델을 개발하였습니다.",
      techStack: ["Python", "Faster-RCNN", "Computer Vision"],
      period: "KRRI Internship"
    }
  ],
  skills: [
    { category: "Programming", items: ["Python", "C/C++", "Java", "C#"] },
    { category: "Frameworks & Libraries", items: ["PyTorch", "TensorFlow", "OpenCV", "Pandas", "NumPy"] },
    { category: "Others", items: ["Android", "Unity", "Git", "LaTeX"] }
  ],
  papers: [
    {
      title: "From Coarse to Crisp: Enhancing Tree Species Maps with Deep Learning and Satellite Imagery",
      authors: "Taebin Choe, Seungpyo Jeon, Byeongcheol Kim, Seonyoung Park*",
      journal: "MDPI Remote Sensing (2025)",
      link: "https://www.mdpi.com/2072-4292/17/13/2222"
    }
  ],
  qualifications: [
    { name: "SQLD", date: "2024.08" },
    { name: "TOEIC", score: "765" }
  ]
};