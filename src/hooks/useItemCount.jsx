import {useState} from 'react'

const UseItemCount = () => {

    const [count, setCount] = useState(1);
    const handleSumar = () => setCount(count + 1);
    const handleRestar = () => setCount(count - 1);

    return {
        count,
        handleSumar,
        handleRestar
    }
}
export default UseItemCount