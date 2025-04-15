
const menuIcon = document.getElementById('menu-icon');
const mobileMenuBar = document.querySelector('.mobile-menu-bar');
function toggleMenu() {
    if (mobileMenuBar.style.display === 'flex') {
        mobileMenuBar.style.display = 'none'; 
    } else {
        mobileMenuBar.style.display = 'flex'; 
    }
}
menuIcon.addEventListener('click', toggleMenu);
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-bar a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBar.style.display = 'none';
        link.classList.add('glow');
        setTimeout(() => {
            link.classList.remove('glow'); 
        }, 300); 
    });
});
const hobbyDescriptions = {
    music: "I love listening to various genres of music, from classical to pop. Music inspires me and keeps me motivated.",
    dance: "Dancing is my way of expressing joy and creativity. I enjoy various styles, including classical and hip-hop.",
    makeup: "As a makeup enthusiast, I love experimenting with different looks and techniques to enhance beauty.",
    designing: "Designing allows me to bring my ideas to life through creativity and visual storytelling.",
    reading: "Reading books is a passion of mine. I enjoy diving into different genres and exploring new worlds."
};
const hobbies = document.querySelectorAll('.hobby');
const hobbyDescription = document.getElementById('hobby-description');
hobbies.forEach(hobby => {
    const handleClick = () => {
        const hobbyId = hobby.id;
        hobbyDescription.innerHTML = `<strong>${hobby.innerText}</strong>: ${hobbyDescriptions[hobbyId]}`;
        hobbyDescription.style.opacity = 1; 
        const hobbiesSection = document.getElementById('hobbies');
        hobbiesSection.scrollIntoView({ behavior: 'smooth' });
    };
    hobby.addEventListener('click', handleClick);
    hobby.addEventListener('touchstart', handleClick);
});
const skillCertificates = {
    programmer: {
        text: "Certificates: 10",
        img: "path/to/programmer_certificate.jpg",
        description: "I am a beginner in programming with foundational knowledge in Python and C. I’ve earned certifications in these languages, marking the first steps toward my goal of developing efficient solutions and creating software that meets user needs. I’m eager to continue improving my skills and building my coding abilities along the way."
    },
    "social-worker": {
        text: "Certificates: 1",
        img: "path/to/social_worker_certificate.jpg",
        description: "I am dedicated to community support, especially in enhancing women's safety through audits and campaigns. My work is driven by the goal of creating lasting, positive change."
    },
    "analytics-designer": {
        text: "Certificates: 2",
        img: "path/to/analytics_designer_certificate.jpg",
        description: "I’m a beginner in data visualization, learning to create clear and effective dashboards in Power BI. With a passion for design, I’m working towards building dashboards that make data easy to understand and use. My goal is to help users make smart, data-driven decisions in the future."
    },
    "data-handling": {
        text: "Certificates: 2",
        img: "path/to/data_handling_certificate.jpg",
        description: "As an aspiring analytical designer, I’m taking my first steps in managing and analyzing data accurately. I’m dedicated to learning more about databases and improving my skills to ensure reliable results in the future."
    },
    sportsperson: {
        text: "Certificates: 3",
        img: "path/to/sportsperson_certificate.jpg",
        description: "As a sportsperson, I thrive on teamwork and competition. I bring the same energy and discipline from the field into my academic and professional life."
    },
    "nptel-silver-medal": {
        text: "Certificates: 1",
        img: "path/to/nptel_certificate.jpg",
        description: "The NPTEL Silver Medal in Python for Data Science reflects my commitment to mastering advanced data science concepts. It highlights my expertise in applying Python for analytics."
    },
    "Datathon": {
        text: "Certificates: 1",
        img: "path/to/Datathon.jpg",
        description: "Runner-Up-[5th-Place] | TSM Intra-College Datathon 2025--Achieved Runner-Up as part of Team Crazy Coders in a competitive data science showdown at TSM, while also securing 5th place in the Yukti TSM event. This experience underscores the strength of teamwork, mentorship, and applied data expertise."
    },
    "Gameathon": {
        text: "Certificates: 1",
        img: "path/to/GAME_A_THON.jpg",
        description: "Game-a-thon ‘25-[3rd-Place] | SRM Institute of Science and Technology--Earned a Certificate of Participation in a dynamic coding and gaming challenge organized by ArrowDev Club at SRM Vadapalani. This event honed my innovative problem-solving skills and spotlighted my enthusiasm for creative tech solutions."
    }
};
const skills = document.querySelectorAll('.skill');
const skillDescription = document.getElementById('skill-description');
skills.forEach(skill => {
    const handleSkillClick = () => {
        const allImages = document.querySelectorAll('.certificate-images');
        allImages.forEach(images => images.style.display = 'none');
        const certificateImages = skill.querySelector('.certificate-images');
        if (certificateImages) {
            certificateImages.style.display = 'flex'; 
        }
        const skillName = skill.id; 
        skillDescription.innerHTML = `<strong>${skill.innerText}</strong>: ${skillCertificates[skillName].description} See above for certificates.`;
        skillDescription.style.opacity = 1; 
        const skillsSection = document.getElementById('skills');
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    };
    skill.addEventListener('click', handleSkillClick);
    skill.addEventListener('touchstart', handleSkillClick);
});
