import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

function Spinner() {
  return (
        <ClipLoader
          color='#4338ca'
          
          size={150}
        />
      
  )
}

export default Spinner