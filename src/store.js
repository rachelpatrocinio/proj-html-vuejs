import { reactive } from 'vue';

export const store = reactive ({
    currentSlideIndex: 1,
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
      ]
})