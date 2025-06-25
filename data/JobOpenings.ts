export interface JobOpening {
    id: string;
    title: string;
    workHours: string;
    location: string;
    desc: string;
    responsibilities: string[];
    salary: string;
    workMode: string;
    applyLink: string;
  }
  
  export interface JobCategory {
    type: string;
    openings: JobOpening[];
  }
  
  export const jobOpenings: JobCategory[] = [
    {
      type: 'Production',
      openings: [
        {
          id: 'prod-1',
          title: 'Production Supervisor',
          workHours: 'Full-Time',
          location: 'Chennai, IN',
          desc: 'Oversee production operations and ensure quality standards are met.',
          responsibilities: [
            'Manage production schedules and workflows.',
            'Ensure compliance with safety regulations.',
            'Train and supervise production staff.',
          ],
          salary: '$70,000 - $90,000 per year',
          workMode: 'On-Site',
          applyLink: 'apply/prod-1',
        },
        {
          id: 'prod-2',
          title: 'Machine Operator',
          workHours: 'Full-Time',
          location: 'Chennai, IN',
          desc: 'Operate and maintain production machinery for aluminum manufacturing.',
          responsibilities: [
            'Operate production equipment safely.',
            'Perform routine maintenance checks.',
            'Monitor product quality during production.',
          ],
          salary: '$45,000 - $60,000 per year',
          workMode: 'On-Site',
          applyLink: 'apply/prod-2',
        },
      ],
    },
    {
      type: 'Sales & Marketing',
      openings: [
        {
          id: 'sales-1',
          title: 'Sales Manager',
          workHours: 'Full-Time',
          location: 'Remote, USA',
          desc: 'Lead the sales team to drive revenue and build client relationships.',
          responsibilities: [
            'Develop and implement sales strategies.',
            'Manage key client accounts.',
            'Collaborate with marketing for campaigns.',
          ],
          salary: '$90,000 - $130,000 per year + commission',
          workMode: 'Remote',
          applyLink: 'apply/sales-1',
        },
        {
          id: 'sales-2',
          title: 'Marketing Specialist',
          workHours: 'Part-Time',
          location: 'New York, NY',
          desc: 'Create and manage marketing campaigns for aluminum products.',
          responsibilities: [
            'Develop social media and email campaigns.',
            'Analyze campaign performance metrics.',
            'Coordinate with sales team for promotions.',
          ],
          salary: '$30 - $40 per hour',
          workMode: 'Hybrid',
          applyLink: 'apply/sales-2',
        },
      ],
    },
    {
      type: 'Engineering',
      openings: [
        {
          id: 'eng-1',
          title: 'Mechanical Engineer',
          workHours: 'Full-Time',
          location: 'Houston, TX',
          desc: 'Design and optimize aluminum extrusion processes.',
          responsibilities: [
            'Design production machinery and tools.',
            'Conduct process optimization studies.',
            'Collaborate with production teams.',
          ],
          salary: '$85,000 - $115,000 per year',
          workMode: 'On-Site',
          applyLink: 'apply/eng-1',
        },
      ],
    },
  ];