
import Star from '../assets/star.svg'

const Rating = ({value}) => {

  
   const stars = Array(value).fill(Star);
  return (
    <>
      <div className="flex items-center">
  {stars.map((star, index) => (
    <img
      key={index}
      src={star}
      alt="star"
      width="14"
      height="14"
      className="mr-1" // optional: spacing between stars
    />
  ))}
</div>
    </>
  )
}

export default Rating