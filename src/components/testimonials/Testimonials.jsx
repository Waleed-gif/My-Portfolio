import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar: AVTR1,
    name: 'sample 1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi placeat numquam saepe obcaecati voluptas quos earum ipsum dolorem. Aut quam libero ex dolorum labore ullam, veritatis sequi corrupti. Quam.'
  },
  {
    avatar: AVTR2,
    name: 'sample 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi placeat numquam saepe obcaecati voluptas quos earum ipsum dolorem. Aut quam libero ex dolorum labore ullam, veritatis sequi corrupti. Quam.'
  },
  {
    avatar: AVTR3,
    name: 'sample 3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi placeat numquam saepe obcaecati voluptas quos earum ipsum dolorem. Aut quam libero ex dolorum labore ullam, veritatis sequi corrupti. Quam.'
  },
  {
    avatar: AVTR4,
    name: 'sample 4',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi placeat numquam saepe obcaecati voluptas quos earum ipsum dolorem. Aut quam libero ex dolorum labore ullam, veritatis sequi corrupti. Quam.'
  },
]

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonial_container">
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <article key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt="avatar one" />
          </div>
            <h5 className='client_name'>{name}</h5>
            <small className="client_review">
              {review}
            </small>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}
