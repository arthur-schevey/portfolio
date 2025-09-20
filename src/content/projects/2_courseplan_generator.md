---
title: "University Course Plan Generator"
subheading: "Smart Scheduling from Transcript to Graduation"
image:
  alt: "Transcript parser example from course planner"
  src: "/images/projects/course-planner.png"
technologies:
- title: "Python"
  iconName: "skill-icons:python-light"
- title: "Django"
  iconName: "skill-icons:django"
- title: "PostgreSQL"
  iconName: "skill-icons:postgresql-light"
- title: "Bootstrap"
  iconName: "skill-icons:bootstrap"
---

This course plan generator automates degree planning by analyzing a student's transcript and curriculum requirements to generate optimized class schedules up to graduation. By combining a heuristic-based approach with a topological sort algorithm, it ensures that prerequisites, elective choices, and degree constraints are satisfied.  

The biggest challenge was modeling complex curriculum rules, such as "choose 2 out of 5 classes," requiring a custom approach to represent and process flexible degree requirements.  

Key features include:  
- Transcript parser to import completed courses automatically  
- Curriculum selection including majors, minors, and areas of interest  
- Multi-schedule generation for students to explore different pathways  
- Web interface built with Django and Bootstrap for accessibility  

This tool provides students with actionable, structured options for completing their degree efficiently and with flexibility.
