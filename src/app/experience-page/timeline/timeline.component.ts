import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

interface TimelineEvent {
  year: string;
  title: string;
  image: string;
  description: string;
  listItems?: string[];
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  timelineEvents: TimelineEvent[] = [
    {
      year: '2025 - present',
      title: 'Software Engineer, DevOps',
      image: './assets/h2oaiLogo.png',
      description: ``,
      listItems: [
        'Focuses on cloud infrastructure automation and developer experience optimization.',
        'Design and implement robust CI/CD pipelines, manage multi-cloud environments across AWS, Azure, and GCP, and maintain containerized applications using Docker and Kubernetes.',
        'Infrastructure as Code (IaC) development with Terraform and CloudFormation, Jenkins and GitHub Actions automation, and ensuring scalable, secure internal developer environments for the engineering teams.',
      ],
    },
    {
      year: '2025',
      title: 'AWS Certified Solutions Architect – Associate',
      image: './assets/tech/aws.png',
      description: `Earned the AWS Certified Solutions Architect – Associate certification, demonstrating proficiency in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.`,
    },
    {
      year: '2021 - 2025',
      title: 'BSc Engineering - University of Moratuwa (CSE Department)',
      image: './assets/University_of_Moratuwa_logo.png',
      description: `B.Sc Engineering with specialization in Computer Science and Engineering
      <br><br>
      GPA: 3.82/4.00<br>
      First Class Honours<br>
      Earned placement in the Dean's List five times<br>
      <br>
      Involved in maintenance of the CSE Department website`,
    },
    {
      year: '2025',
      title: 'Intern - Engineering',
      image: './assets/h2oaiLogo.png',
      description: `Contributed to the platform engineering team by developing and optimizing automated deployment pipelines for Helm charts across multiple Kubernetes environments. Successfully implemented CI/CD improvements that enhanced deployment reliability and reduced manual intervention in the release process.`,
    },
    {
      year: '2024',
      title: 'Intern - Software Engineer - WSO2',
      image: './assets/wso2.png',
      description: `I was a member of the Identity and Access Management team, where I developed a set of JavaScript SDKs to integrate authentication directly into JavaScript-based web applications. My work involved using technologies such as Identity Server, Asgardeo, OAuth, JavaScript, TypeScript, React, and Ballerina.`,
    },
    {
      year: '2024',
      title: 'Identity Server Fundamentals',
      image: './assets/wso2.png',
      description: `I have earned Practitioner and Developer certifications, demonstrating a strong foundation in IAM concepts and practical experience with WSO2 Identity Server.`,
    },
    {
      year: '2020 - 2024',
      title: 'Co-founder - Ecode IT',
      image: './assets/ecode_e.png',
      description: `Ecode IT is a tech startup founded by me and two of my colleagues. At Ecode IT, we mainly provide enterprise level customized systems including web interfaces, desktop applications and mobile applications. Follow <a href="https://lk.linkedin.com/company/ecode-it" target="_blank">Ecode IT</a> on LinkedIn.`,
    },
    {
      year: '2020',
      title: 'CIMA',
      image: './assets/cima.png',
      description: `Completed the certificate in Business Accounting<br>`,
      listItems: [
        'Fundamentals of Business Economics',
        'Fundamentals of Management Accounting',
        'Fundamentals of Financial Accounting',
        'Fundamentals of Ethics, Corporate Governance and Business Law',
      ],
    },
    {
      year: '2020',
      title: 'Intern - eVision Micro Systems',
      image: './assets/evision.png',
      description: `I focused on improving the user experience and visual appeal of Sales Force Automation (SFA) mobile applications. This involved redesigning and enhancing UI components to create a more user-friendly interface. Additionally, I addressed software glitches and bugs to ensure the smooth and error-free functioning of the SFA app.`,
    },
    {
      year: '2011 - 2019',
      title: 'Alumni - Royal College, Colombo 07',
      image: './assets/RC-Crest.png',
      description: `GCE Advanced Level Examination -<br>
      3As (Mathematics Stream- Combined Mathematics, Chemistry, Physics)<br><br>
      GCE Ordinary Level Examination -<br>
      9As (English Literature, Commerce)`,
    },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  getPosition(index: number): string {
    return index % 2 === 0 ? 'left' : 'right';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Detect when the timeline elements come into the viewport
    const windowHeight = window.innerHeight;
    const timelineElements =
      this.el.nativeElement.querySelectorAll('.timeline');

    timelineElements.forEach((element: any) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < windowHeight && rect.bottom >= 0;

      if (isVisible) {
        // Apply the animation class
        this.renderer.addClass(element, 'animation-triggered');
      }
    });
  }
}
