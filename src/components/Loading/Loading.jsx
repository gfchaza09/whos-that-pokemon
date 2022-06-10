import { useEffect, useState } from 'react';

// Styles
import './Loading.styles.css';

export const Loading = () => {

    const [loading, setLoading] = useState(0);

  return (
    <div className='container__loading'>
        <progress className="nes-progress is-primary" value={loading} max="100"></progress>
    </div>
  )
};