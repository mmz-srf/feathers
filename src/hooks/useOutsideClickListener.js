import { useEffect } from 'react';

/**
 * Example usage:
 *
 * const MyExpandableComponent = () => {
 *   const [expanded, setExpanded] = useState(false);
 *   const myRef = useRef(null);
 *   useOutsideClickListener(myRef, () => {
 *     console.log('click outside, I will close myself now');
 *     setExpanded(false);
 *   });
 *   ...
 *   return (
 *     <div>
 *       <button onClick={() => setExpanded(!expanded)}>Toggle State</button>
 *       {expanded && <div ref=myRef>I'm only here when expanded, now outside clicks are tracked!</div}
 *     </div>
 *   );
 * };
 */
const useOutsideClickListener = (ref, callback = () => {}) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(event);
    }
  }

  useEffect(() => {
    // Bind the event listener
    // eslint-disable-next-line no-undef
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      // eslint-disable-next-line no-undef
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useOutsideClickListener;
