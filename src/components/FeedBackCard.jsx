import PropTypes from 'prop-types';
import { quotes } from '../assets';

const FeedBackCard = ({ content, name, title, img, index }) => {
  return (
    <div className={`${index == 0 && 'bg-black-gradient'} flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 border-t-slate-900 border-t-4 border-b-slate-900 border-b-4 feedback-card`}>
      <img src={quotes} alt="double_qoutes" className='w-[42px] h-[27px] object-contain' />
      <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10'>{content}</p>
      <div className=' flex flex-row'>
        <img src={img} alt="img" className=' w-[48px] h-[48px] rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[18px] leading-[30px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}


FeedBackCard.propTypes = {
  content: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FeedBackCard