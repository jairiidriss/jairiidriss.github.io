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


I am Idriss JAIRI, a Ph.D. student in machine learning at the University of Lille. Having a background in software engineering and data science.

Education
======

* Ph.D. in Machine Learning, <a href = "https://www.univ-lille.fr/">University of Lille</a> (<a href = "https://www.cristal.univ-lille.fr/">CRIStAL Laboratory</a>), Lille, 2022-Now
* M.S. in Computer Science and Technology, <a href = "https://www.swpu.edu.cn/">Southwest Petroleum University</a>, Chengdu, 2019-2022
  * Supervisor: <a href = "https://www.researchgate.net/profile/Yu-Fang-36">Dr. Yu Fang</a>
* B.S. in Computer Science, Faculty of Science, Agadir, 2018-2019
* DUT (Diplôme universitaire de technologie) in Computer Science, Higher School of Technology, Agadir, 2016-2018

Work experience
======
* 2020-09 to 2022-06: Research Assistant
  * Southwest Petroleum University
  * Duties included: Exploring and Developing new techniques to evaluate the liquefaction of soil using machine learning techniques
  * Supervisor: Dr. Yu FANG

* 2019-02 to 2019-04: Internship - Web Developer
  * Vala-orange
  * Duties included: Developing web application and SEO

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
    * C, C++, JavaScript, HTML/CSS, Python, Java, PHP, SQL, Latex</li>
* Frameworks/Systems: 
    * MVC, Django, Bootstrap, WordPress, VueJS

Publications
======
  <ul>
    {% for post in site.publications %}
      {% include archive-single-cv.html %}
    {% endfor %}
  </ul>
  
Talks
======
  <ul>
  {% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}
  </ul>
  
Teaching
======
  <ul>
    {% for post in site.teaching %}
      {% include archive-single-cv.html %}
    {% endfor %}
  </ul>

Grants and Awards
======
* Sichuan Provincial Government Scholarship for Foreign Students, 2021-2022
* Sichuan Provincial Government Scholarship for Foreign Students, 2020-2021