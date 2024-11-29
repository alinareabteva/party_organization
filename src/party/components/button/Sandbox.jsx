import React, {useState, useEffect} from 'react';
import Button from './Button';

const Sandbox = () => {
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      }, 5000)
    }, [loading])

  return(
    <>

    <h2 className="text"><span>1. Text and onClick function:</span></h2>
    <Button onClick={() => { console.log('!!!!'); }}>Button text</Button>

    <h2 className="text"><span>2. Disabled button:</span></h2>
    <Button onClick={() => { console.log('!!!!'); }} disabled />

    <h2 className="text"><span>3. Active button:</span></h2>
    <Button active />

    <h2 className="text"><span>4. Supporting data, type and etc. attributes:</span></h2>
    <Button data-name="button" />
    <Button type="submit" />

    <h2 className="text"><span>5. Button link</span></h2>
    <Button href="test">Link</Button>
    <Button href="test" disabled>Link</Button>

    <h2 className="text"><span>6. Button with spinner</span></h2>
        
    <Button className="sweet-loading"onClick={e => setLoading(true)} loading={loading}>{loading ? 'Loading data...' : 'Fetch Data From Server'}</Button>
    

  </>
)};

export default Sandbox;
