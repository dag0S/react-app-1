import './Button.css';
import { useState } from 'react';

function Button() {
	// let text = 'Сохранить';
	const [text, setText] = useState('Сохранить');
	console.log('Рендер');

	const clicked = () => {
		setText(t => t + '!');
		console.log(text);
	};

	return (
		<button onClick={clicked} className="button accent">{text}</button>
	);
}

export default Button;
