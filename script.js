// Get elements
const menuIcon = document.getElementById('menu-icon');
const mobileMenuBar = document.querySelector('.mobile-menu-bar');

// Function to toggle the mobile menu
function toggleMenu() {
    if (mobileMenuBar.style.display === 'flex') {
        mobileMenuBar.style.display = 'none'; // Hide the menu
    } else {
        mobileMenuBar.style.display = 'flex'; // Show the menu
    }
}

// Add click event listener to the menu icon
menuIcon.addEventListener('click', toggleMenu);

// Optional: Hide the mobile menu when a link is clicked
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-bar a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hide mobile menu after selection
        mobileMenuBar.style.display = 'none';

        // Add glow effect on click
        link.classList.add('glow');
        setTimeout(() => {
            link.classList.remove('glow'); // Remove glow effect after a short duration
        }, 300); // Duration in milliseconds
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
        hobbyDescription.style.opacity = 1; // Show the description

        // Scroll to the hobbies section smoothly
        const hobbiesSection = document.getElementById('hobbies');
        hobbiesSection.scrollIntoView({ behavior: 'smooth' });
    };

    hobby.addEventListener('click', handleClick);

    // Handle touch events for mobile devices
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
    }
    "Datathon": {
        text: "Certificates: 1",
        img: "path/to/Datathon.jpg",
        description: "Runner-Up | TSM Intra-College Datathon 2025--Achieved Runner-Up as part of Team Crazy Coders in a competitive data science showdown at TSM, while also securing 5th place in the Yukti TSM event. This experience underscores the strength of teamwork, mentorship, and applied data expertise."
    }
    "Gameathon": {
        text: "Certificates: 1",
        img: "path/to/GAME_A_THON.jpg",
        description: "Game-a-thon ‘25 | SRM Institute of Science and Technology--Earned a Certificate of Participation in a dynamic coding and gaming challenge organized by ArrowDev Club at SRM Vadapalani. This event honed my innovative problem-solving skills and spotlighted my enthusiasm for creative tech solutions."
    }
};

const skills = document.querySelectorAll('.skill');
const skillDescription = document.getElementById('skill-description');

skills.forEach(skill => {
    const handleSkillClick = () => {
        // Hide all certificate images
        const allImages = document.querySelectorAll('.certificate-images');
        allImages.forEach(images => images.style.display = 'none');

        // Show the corresponding certificate images
        const certificateImages = skill.querySelector('.certificate-images');
        if (certificateImages) {
            certificateImages.style.display = 'flex'; // Use flex to show images in a column
        }

        // Get the skill name from the clicked element
        const skillName = skill.id; // Assuming each skill div has an id matching the key in skillCertificates

        // Update description text
        skillDescription.innerHTML = `<strong>${skill.innerText}</strong>: ${skillCertificates[skillName].description} See above for certificates.`;
        skillDescription.style.opacity = 1; // Show the description

        // Scroll to the skills section smoothly
        const skillsSection = document.getElementById('skills');
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    };

    skill.addEventListener('click', handleSkillClick);

    // Handle touch events for mobile devices
    skill.addEventListener('touchstart', handleSkillClick);
});
