import Carosel from './Carosel'
import News from './News'

const Main = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Carosel />
      <News />
    </div>
  )
}

export default Main