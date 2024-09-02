import Carosel from './Carosel'
import ESCandSosial from './ESCandSosial'
import News from './News'

const Main = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Carosel />
      <News />
      <ESCandSosial />
    </div>
  )
}

export default Main