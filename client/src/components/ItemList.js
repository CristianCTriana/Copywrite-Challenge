import  '../css/itemList.css';

export default function ItemList({text, isPalindrome}){
    return(
        <div className='container'>
            <span className='text'>{text}</span>
            <span className='palindrome'>{isPalindrome? 'Es palindroma':'No es palindroma'}</span>
        </div>
    )
}