import { reactive } from 'vue';

export const store = reactive ({
    currentSlideIndex: 1,
    currentIndex: 0,
    menuHeader: [
        {
            name: 'HOME',
            src: '#'
        },
        {
            name: 'COURSES',
            src: '#courses'
        },
        {
            name: 'INSTRUCTORS',
            src: '#instructors'
        },
        {
            name: 'EVENTS',
            src: '#'
        },
        {
            name: 'PAGES',
            src: '#'
        },
        {
            name: 'ELEMENTS',
            src: '#'
        }
    ],
    heroBanner:[
      {
        title: 'Accelerate Your Career',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum numquam ea excepturi laudantium, tempore voluptas ratione odio mollitia corrupti perspiciatis magnam, reprehenderit laboriosam accusantium temporibus iusto minima',
        img: 'h5-slide-1-background.jpg'
      },
      {
        title: 'Contemporary Ideas',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum numquam ea excepturi laudantium, tempore voluptas ratione odio mollitia corrupti perspiciatis magnam, reprehenderit laboriosam accusantium temporibus iusto minima',
        img: 'h5-slide-3-background.jpg'
      },
      {
        title: 'Home Learning',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum numquam ea excepturi laudantium, tempore voluptas ratione odio mollitia corrupti perspiciatis magnam, reprehenderit laboriosam accusantium temporibus iusto minima',
        img: 'h3-slide-1-background.jpg'
      },
    ],
    popularCourses: [
        {
          subject: 'Business English',
          name: 'Preston Marshall'
        },
        {
          subject: 'Social Computing',
          name: 'David Sanders'
        },
        {
          subject: 'Learn Spanish',
          name: 'Jennie King'
        },
    ],
    support: [
        {
          name: 'User Dashboard',
          src: '#'
        },
        {
          name: 'Contact Us',
          src: '#'
        },
        {
          name: 'FAQ',
          src: '#'
        },
        {
          name: 'Course Offer',
          src: '#'
        },
        {
          name: 'Events',
          src: '#'
        }
    ],
    reviews: [
        {
            review: 'Lorem ipsum dolor nsectetur, adipisicing elit. Repellat harum cumque quo ipsum obcaecati repudiandae, nihil consequatur et laboriosam expedita laborum! Labore accusantium quia fugit quis delectus et minima aut quibusdam maiores commodi incidunt, accusamus illum!',
            name: 'Jamilla Lowy',
            img: 'h5-team-member-2.jpg'
        },
        {
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat harum cumque quo ipsum obcaecati repudiandae, nihil consequatur et laboriosam expedita laborum! Labore accusantium quia fugit quis delectus et minima aut quibusdam maiores commodi incidunt, accusamus illum!',
            name: 'Joan Collins',
            img: 'instructor-img-6.jpg'
        },
        {
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat harum cumque quo ipsum obcaecati repudiandae, nihil consequatur et laboriosam expedita laborum! quia fugit quis delectus et minima aut quibusdam maiores commodi incidunt, accusamus illum!',
            name: 'Jonathan Bullshof',
            img:'h5-team-member-3.jpg'
        }
    ],
    subjects:[
        {
          subject: 'Languages',
          img: 'h5-custom-icon-1.png'
        },
        {
          subject: 'Software',
          img: 'h5-custom-icon-2.png'
        },
        {
          subject: 'Business',
          img: 'h5-custom-icon-3.png'
        },
        {
          subject: 'Chemistry',
          img: 'h5-custom-icon-4.png'
        },
        {
          subject: 'Science',
          img: 'h5-custom-icon-5.png'
        },
        {
          subject: 'DIY & Craft',
          img: 'h5-custom-icon-6.png'
        }
    ],
    learningPossibilities:[
        {
          object: 'What We Do',
          title: 'Learning Possibilities',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos eum assumenda repellat consequuntur voluptatem amet quidem, fugiat libero illum! Atque error id perferendis eveniet nihil aperiam architecto nisi assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita doloribus atque voluptatum totam aperiam rem saepe iste dolor, magni esse officiis explicabo voluptate assumenda officia. Deserunt quis error illum velit!',
          checks: ['We enrich lives learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training.', 'People teach. People learn. This is where they connect.'],
          img: 'h12-tabs-icon-1.png'
        },
        {
          object: 'Degree Progamme',
          title: 'Learning Degree',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos eum assumenda repellat consequuntur voluptatem amet quidem. Atque error id perferendis eveniet nihil aperiam architecto nisi assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita doloribus atque voluptatum totam aperiam rem saepe iste dolor, magni esse officiis explicabo voluptate assumenda officia. Deserunt quis error illum velit!',
          checks: ['We enrich lives learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training.', 'People teach. People learn. This is where they connect.'],
          img: 'h12-tabs-icon-2.png'
        },
        {
          object: 'Career Achivements',
          title: 'Learning Achivements',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos eum assumenda repellat consequuntur voluptatem amet quidem, fugiat libero illum! Atque error id perferendis eveniet nihil aperiam architecto nisi assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita doloribus atque voluptatum totam aperiam rem saepe iste dolor, magni esse officiis explicabo voluptate assumenda officia. Deserunt quis error illum velit!',
          checks: ['We enrich lives learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training.', 'People teach. People learn. This is where they connect.'],
          img: 'h12-tabs-icon-3.png'
        },
        {
          object: 'Personal Managment',
          title: 'Learning Management',
          description:'Lorem ipsum dolor sit amet consectetur. Omnis eos eum assumenda repellat consequuntur voluptatem amet quidem, fugiat libero illum! Atque error id perferendis eveniet nihil aperiam architecto nisi assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita doloribus atque voluptatum totam aperiam rem saepe iste dolor, magni esse officiis explicabo voluptate assumenda officia. Deserunt quis error illum velit!',
          checks: ['We enrich lives learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training.', 'People teach. People learn. This is where they connect.'],
          img: 'h12-tabs-icon-4.png'
        },
        {
          object: 'Steps To Success',
          title: 'Learning Success',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos eum assumenda repellat consequuntur voluptatem amet quidem, fugiat libero illum! Atque error id perferendis eveniet nihil aperiam architecto nisi assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita doloribus atque voluptatum totam aperiam rem saepe iste dolor, magni esse officiis explicabo voluptate assumenda officia. Deserunt quis error illum velit!',
          checks: ['We enrich lives learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training.', 'People teach. People learn. This is where they connect.'],
          img: 'h12-tabs-icon-5.png'
        },
        {
          object: 'Knowledge Transfer',
          title: 'Learning Transfer',
          description:'Amet consectetur adipisicing elit. Omnis eos eum assumenda repellat consequuntur voluptatem amet quidem, fugiat libero illum! Atque error id perferendis eveniet nihil aperiam architecto nisi assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita doloribus atque voluptatum totam aperiam rem saepe iste dolor, magni esse officiis explicabo voluptate assumenda officia. Deserunt quis error illum velit!',
          checks: ['We enrich lives learning.', 'Maximizing potential through individual attention.', 'The trusted name for specialized training.', 'People teach. People learn. This is where they connect.'],
          img: 'h12-tabs-icon-6.png'
        }
    ],
    academyLogos:[
        {
          img:'h5-client-5.png',
          name: 'iAcademy'
        },
        {
          img:'h5-client-1.png',
          name: 'Student Central University'
        },
        {
          img:'h5-client-2.png',
          name: 'Educator'
        },
        {
          img:'h5-client-1.png',
          name: 'Student Central University'
        }        
    ]
})