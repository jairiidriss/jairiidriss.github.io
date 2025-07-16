---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}


I am Idriss JAIRI, a Ph.D. student in machine learning at the <a href = "https://www.univ-lille.fr/">University of Lille</a> (<a href = "https://www.cristal.univ-lille.fr/">CRIStAL Laboratory</a>). Having a background in software engineering and data science.

Education
======

* Ph.D. in Machine Learning, <a href="https://www.univ-lille.fr/">University of Lille</a>, Lille, France (Oct 2022 – Sept 2025)
  * Supervisor: <a href="https://www.researchgate.net/profile/Hayfa-Zgaya">Prof. Hayfa Zgaya</a>
  * Thesis: Design and Development of Intelligent Air Quality Indicators for Environmental and Health Preservation Support

* Master of Science in Computer Science & Technology, <a href="https://www.swpu.edu.cn/">Southwest Petroleum University</a>, Chengdu, China (Oct 2019 – June 2022)
  * Supervisor: <a href="https://www.researchgate.net/profile/Yu-Fang-36">Dr. Yu Fang</a>
  * Thesis: Neural Transfer Learning for Soil Liquefaction Tests
  * Overall GPA: 4.27/5

* Bachelor of Science in Computer Science & Engineering, <a href="https://www.uiz.ac.ma/faculte-des-sciences-agadir">Faculty of Sciences Ibn Zohr</a>, Agadir, Morocco (Sep 2018 – June 2019)
  * Final-year project: Development of a Web Application for Managing Barbershop Appointments and Scheduling

* DUT (University Technology Diploma) in Computer Science & Engineering, <a href="https://www.esta.ac.ma/">Higher School of Technology</a>, Agadir, Morocco (Sep 2016 – June 2018)
  * Final-year project: Design and Development of a 3D Game with Unity 3D

Research experience
======

* 2022-10 to Now: PhD Student
  * <a href = "https://www.univ-lille.fr/">University of Lille</a> (<a href = "https://www.cristal.univ-lille.fr/">CRIStAL Laboratory</a>)
  * Design and development of intelligent performance indicators for environmental preservation support based on the "water-air-soil" strategy

* 2020-09 to 2022-06: Research Assistant (Machine Learning Researcher)
  * <a href = "https://www.swpu.edu.cn/">Southwest Petroleum University</a>
  * Duties included: Exploring and Developing new techniques to evaluate the liquefaction of soil using machine learning techniques
  
Internships
======
* 2019-02 to 2019-04: Internship - Web Developer
  * <a href = "https://www.vala.ma/">Vala-orange</a>
  * Duties included: Developing web application and SEO (Search Engine Optimization)

* 2018-03 to 2018-06: Internship - Web Developer
  * WOHLSTANDFURALLE SARL
  * Duties included: Developing E-commerce web application
  
Skills
======

* Areas of Expertise: 
    * Machine learning
    * Deep learning
    * Data visualization, Data preparation
    * Data science, Statistics
    * Software engineering
    * Web development
    * Problem-solving
* Programming Languages: 
    * C, C++, JavaScript, HTML/CSS, Python, Java, PHP, SQL, Latex
* Frameworks/Systems: 
    * MVC, Django, Bootstrap, WordPress, VueJS

Highlighted Publications
======
  <ul>
    {% assign sorted_posts = site.publications | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
      {% include archive-single-cv.html %}
    {% endfor %}
  </ul>

Teaching
======
  <ul>
    {% for post in site.teaching %}
      {% include archive-single-cv.html %}
    {% endfor %}
  </ul>

Supervision
======
* Master M1 Project: Machine learning-based decision support system in resuming driving with visual field deficits.


Grants and Awards
======
* Sichuan Provincial Government Scholarship for Foreign Students in <a href = "https://www.swpu.edu.cn/">Southwest Petroleum University</a>, 2021-2022
* Sichuan Provincial Government Scholarship for Foreign Students in <a href = "https://www.swpu.edu.cn/">Southwest Petroleum University</a>, 2020-2021