import { feedback } from "../constants"
import styles from "../style"
import FeedBackCard from "./FeedBackCard"


const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* <div className="absolute z-[0] w-[50%] h-[50%] -right-[100%] rounded-full blue__gradient" /> */}
      <div className='absolute z-[0] -right-[65%] bottom-0 w-1/2 h-full rounded-full blue__gradient'></div>
      <div className=" w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>What people are <br className='sm:block hidden' /> saying about us</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      </div>
      <div className=" flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {
          feedback.map((card, index) => (
            <FeedBackCard key={card.id} {...card} index={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials