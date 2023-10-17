import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      text:'Горные походы открывают удивительные природные ландшафт',
      date: new Date()
    },
    {
      title: 'Поход в горы',
      text:'Думал, что очень много времени',
      date: new Date()
    }
  ];
  return (
    <>
      <h1>заголовок</h1>
      <p>какой-то текст</p>
      <Button/>
      <JournalItem 
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
      <JournalItem
        title={data[1].title}
        text={data[1].text}
        date={data[1].date}
      />
    </>
  );
}

export default App;