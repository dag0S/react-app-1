import { useState } from 'react';
import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm() {
	const [inputData, setInputData] = useState('');
	const [state, setState] = useState({
		age: 31
	});

	const [state2, setState2] = useState([
		1,2,3
	]);

	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
	};

	const addJournalIten = (e) => {
		e.preventDefault();
		state.age = 40;
		console.log(state);
		// state2.push(4);
		// setState2([...state2]);
		setState({...state});
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<>
			<form className='journal-form' onSubmit={addJournalIten}>
				{state.age}
				{state2.length}
				<input type="text" name="title"/>
				<input type="date" name="date"/>
				<input type="text" name="tag" value={inputData} onChange={inputChange}/>
				<textarea name="post" id="" cols="30" rows="10"></textarea>
				<Button text="Сохранить" onClick={() => console.log('Нажали')}/>
			</form>
		</>
	);
}

export default JournalForm;