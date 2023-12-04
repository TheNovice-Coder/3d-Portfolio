
import {
    mobile,
    backend,
    creator,
    web
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "React Native Development",
      icon: mobile,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Content Creation",
      icon: creator,
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He is a dedicated student and is known for his problem-solving skills and his willingness to help others. His friendly nature and positive attitude creates a warm and welcoming environment for everyone around him.",
      name: "Palak Kunwar",
      image: "src/assets/profile.png",
    },
    {
      testimonial:
        "He's definitely someone I can rely upon in hard times. He's always there, ready to help and a fun guy to be around. Although he might have a few flaws, that's what makes him special.",
      name: "Rohit Rawat",
      image: "src/assets/Rawat.png",
    },
    {
      testimonial:
        "Uma is a good guy and has a Jolly nature. He is helpful in critical situations and his charming smile always gives a positive hope.",
      name: "Adnan Raza Khan",
      image: "src/assets/Adnan.jpeg",
    },
  ];
    
  export { services, testimonials,  };