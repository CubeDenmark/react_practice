import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const firstName = 'Juan';
  const lastName = 'Dela Cruz';
  const age = 25;
  const students = 
  [
  {
    firstName: 'Mat',
    lastName: 'James',
    age: 20,
  },
  {
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    age: 26,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 26,
  }
  ]
  const arr = [1,2,3,4,5];

  return (
   <>
   <Header />
   <main>
    <h1>Hello {firstName} {lastName} {age} {arr} {students.firstName}</h1>
   {arr.map((num => <p> {num * 5} </p>))}
   {students.map((s => <p> {s.firstName} {s.lastName}</p>))}
   </main>
   <Footer />
   </>
  );
}

export default App;
