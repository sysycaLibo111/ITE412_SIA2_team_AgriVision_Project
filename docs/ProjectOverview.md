 ProjectOverview
 
1. System Objectives 
       - Develop a CNN-powered web application capable of detecting rice pests and diseases through image recognition using smartphone cameras.
       - Provide decision support and management guidelines for detected pests and diseases to assist farmers in implementing timely interventions.
       - Integrate real-time APIs (mapping, weather forecasts, and agricultural news) to enhance situational awareness and decision-making.
       - Enable expert collaboration and knowledge sharing through a built-in communication and advisory feature.
       - Provide an admin role (Municipal Agriculture Office) to oversee pest and disease reports, monitor outbreak areas, and generate reports for policy and intervention planning.


2. Proposed Scope 
    The scope of this project centers on the development of a web application designed to support rice pest and disease management through role-based access for farmers, agricultural experts, and administrators. The system is intended to provide image-based detection of rice pests and diseases using convolutional neural network (CNN) models, enabling real-time capture, analysis, and delivery of results directly through devices. To enhance decision-making and situational awareness, the application will also integrate external APIs such as weather forecasts, mapping services, and rice-related agricultural news. Furthermore, the system will feature role-based dashboards tailored to the needs of different stakeholders, including detection and advisory tools for farmers, validation and recommendation modules for experts, and monitoring and reporting functionalities for administrators in the Municipal Agriculture Office. In addition, collaboration features will be incorporated to facilitate direct communication between farmers and experts within the application. Despite its potential, the project will operate under specific limitations. The detection capability will be confined solely to rice pests and diseases, excluding other crops and agricultural concerns. The functionality of the application will rely heavily on a stable internet connection for model processing and API integrations, which may limit accessibility in areas with poor connectivity. Moreover, advanced analytics and large-scale data visualizations will be simplified to suit the web platform, ensuring usability without compromising system performance. These limitations establish the boundaries of the system while emphasizing its practicality and relevance to rice farming communities.

3. Stakeholders 
    1.Farmers (End-Users) – Capture rice field images, receive detection results and advice.
    2.Agricultural Experts (Collaborators/Validators) – Validate pest and disease cases, provide recommendations.
    3.Municipal Agriculture Office (Administrators) – Manage the system, oversee rice health conditions, monitor outbreak areas, and generate official reports.
    4.Researchers/Developers (Project Team) – Build and maintain the web application and AI model.

4. Tools/Technologies
Visual Studio Code, Ionic, Angular, Supabase, Public API (Weather Forecast, Mapping)

High-Level System Overview

   AgriExpert: A Rice Disease and Pest Detection, Management, and Expert Collaboration Web Application Using Convolutional Neural Network is a web application designed to help rice farmers diagnose and manage crop issues, particularly those caused by pests and diseases. The system leverages modern technology to support farmers in making informed decisions about crop health and pest control.

   At its core, AgriExpert utilizes Convolutional Neural Network (CNN) models, a deep learning architecture known for strong performance in image recognition. Farmers can upload or capture images or use real-time detection for rice plants, including leaves, grains, or stems, which the system analyzes through its disease identification module, same goes with the pest identification module.. The CNN model compares these inputs against a pre-trained dataset to detect signs of pest or disease damage and then provides detailed results along with recommended treatment, control methods, and preventive measures. This enables farmers to respond quickly and minimize crop losses.

   Beyond automated detection, the system includes an expert consultation module that fosters collaboration between farmers and agricultural specialists. Farmers can request expert advice, while experts contribute updated knowledge, enhance the pest and disease library, and collaborate on complex agricultural cases. To support their work, experts can also generate consultation records for future reference.

   The data flow across AgriExpert begins with users—farmers, experts, and administrators—logging in through credential verification, which grants access to system functionalities. Farmers upload or scan images of rice pests and diseases, which are processed and stored in the pest and disease database. They may then browse the pest/disease library, consult with experts, or collaborate with other users, generating consultation and collaboration records that are securely stored for future reference. Experts contribute knowledge, validate pest and disease details, and manage the library to ensure accuracy. Administrators oversee the system through dashboard monitoring and report generation, relying on aggregated data analytics from stored records. This structured flow ensures seamless interaction, accurate detection, informed decision-making, and continuous knowledge sharing across stakeholders.

   AgriExpert integrates several public APIs alongside Firebase to enhance its functionality and usability. The Weather Forecast API provides real-time climate data, helping predict pest and disease risks, while the Mapping API (Google Maps or OpenStreetMap) enables geotagging and visualization of outbreak areas for better monitoring by administrators. Agricultural News APIs supply timely updates on rice farming practices, pest threats, and government advisories, ensuring users remain informed. Firebase serves as the backbone for authentication, real-time database management, and cloud storage, enabling secure data handling and seamless synchronization across farmers, experts, and administrators within the web application.

   System integrity is maintained by the Municipal Agriculture Office (MAO), who verify expert credentials, manage user accounts, update content, and generate municipal reports. This ensures that information provided to farmers is accurate, credible, and up-to-date.
   
   Overall, AgriExpert combines AI-driven analysis, expert collaboration, and reliable information management to empower farmers with real-time insights. By improving disease and pest management, the system strengthens decision-making, reduces agricultural losses, and promotes sustainable rice production

High-Level System Architecture & Integration

Integration Pattern Applied

Hub-Spoke (ESB-like) Pattern

Rationale
The Hub-Spoke pattern was chosen because it provides a centralized hub (the web server) to manage communication between AgriExpert’s modules. This approach simplifies data flow, reduces interdependencies between modules, and supports scalability. Farmers, experts, and administrators interact with the system through the hub, which routes requests to the Detection, Knowledge Library, Consultation, and Mapping modules. This design ensures maintainability, consistency of data, and efficient monitoring for municipal-level agricultural management.

Diagram Reference
![High-Level Architecture Diagram](./HighLevelArchitecture.png)
