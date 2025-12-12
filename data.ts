import { CVData } from './types';

export const cvData: CVData = {
  name: "SeungPyo Jeon",
  koreanName: "전승표",
  title: "Undergraduate Researcher in Computer Vision",
  profileImage: "https://github.com/SeungPyo-Jeon/SeungPyo-Jeon.github.io/blob/main/assets/profile3.png?raw=true", // 교체 방법: 이 부분을 실제 이미지 URL이나 public 폴더 내의 경로(예: "assets/profile.jpg")로 변경하세요.
  summary: [
    "Hello, I'm SeungPyo.",
    "관심 분야는 **Computer Vision** 입니다.",
    "특히, **SLAM, 3D Reconstruction, 자율주행, VLA, Physical AI**에 깊은 관심을 가지고 있습니다.",
    "현재 **서울과학기술대학교 인공지능응용학과 4학년 재학** 중입니다."
  ],
  contact: {
    email: "tmdvy1468+lab@gmail.com",
    github: "https://github.com/SeungPyo-Jeon",
    location: "Seoul, Republic of Korea"
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
      school: "Military Service - ROKA ",
      degree: "육군 병장 만기 전역",
      location: "Icheon, Korea",
      period: "2021.05 – 2022.11",
      details: ["제7기동군단장상"]
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
      position: "Intern",
      location: "Uiwang, Korea",
      period: "2024.06 – 2024.09",
      description: [
        "ICT 대중교통연구실",
        "열차 내 혼잡도 계산을 위한 승객 인식 모델 개발 참여"
      ]
    }
  ],
  projects: [
    {
      title: "Satellite Tree Species Classification",
      description: "탄소중립 전략의 핵심 자원인 수림의 탄소 포집량 계산을 위해 중요한 수종 예측을 목표로 합니다.\n 다중 다시점 위성 데이터를 입력으로 하는 수종 분류 딥러닝 모델을 제작하였습니다.",
      techStack: ["Python", "PyTorch", "Remote Sensing"],
      links: [
        { title: "GitHub", url: "https://github.com/SeungPyo-Jeon/CapstoneDesign-ForestCarbonAi" },
        { title: "수종 Demo", url: "https://seungpyo-jeon.github.io/CapstoneDesign-ForestCarbonAi/DemoPage/compareSpecies.html" }, 
        {title: "탄소량 Demo", url: "https://seungpyo-jeon.github.io/CapstoneDesign-ForestCarbonAi/DemoPage/multiMap.html"},
        { title: "Paper", url: "https://www.mdpi.com/2072-4292/17/13/2222" }
      ],
      period: "Research Project",
      // 예시 이미지: 실제 이미지가 있다면 경로를 입력하세요.
      imageUrl: "https://github.com/SeungPyo-Jeon/CapstoneDesign-ForestCarbonAi/blob/main/DemoPage/workflow_revision.png?raw=true" 
    },
    {
      title: "DEVS Simulation For Efficient Operation",
      description: "실제 엘레베이터 운영 데이터를 구할 수 없는 상황 속 가장 효율적인 운영 알고리즘 탐색을 목표로 합니다.\n 확장 가능한 DEVS 시뮬레이션을 이용해 최적의 알고리즘을 찾습니다",
      techStack: ["Python", "DEVS", "M&S"],
      links: [
        { title: "GitHub", url: "https://github.com/SeungPyo-Jeon/Elevator_System_Using_DEVS_formalism" },
      ],
      period: "Lecture - Simulation",
      imageUrl: "https://github.com/SeungPyo-Jeon/Elevator_System_Using_DEVS_formalism/blob/main/ddqn-optimize.gif?raw=true"
    },
    {
      title: "Passenger Recognition Model for Congestion Analysis",
      description: "탑승객 안전과 직결된 열차 내 혼잡도를 계산을 목표로 합니다. \n CCTV 이미지를 입력으로 하는 Faster-RCNN 기반 승객 인식 모델을 개발하였습니다.",
      links: [
        { title: "GitHub", url: "https://github.com/SeungPyo-Jeon/KRRI-ObjectDetection" },
      ],
      techStack: ["Python", "Faster-RCNN", "Computer Vision"],
      period: "한국철도기술연구원(KRRI) Internship"
    }
  ],
  skills: [
    { category: "Programming", items: ["Python", "C/C++", "Java", "C#"] },
    { category: "Frameworks & Libraries", items: ["PyTorch", "TensorFlow", "OpenCV", "Pandas", "NumPy"] },
    { category: "Others", items: ["Android", "Unity", "Git"] }
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
    { name: "SQLD", date: "2024.08" }
  ] 
};