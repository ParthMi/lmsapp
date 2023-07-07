import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./homestyle.css";
const Home = () => {
  const navigate = useNavigate();
  const [search,setSearch]=useState("react");
  const [spinner,setSpinner]=useState(false);
  const [books,setBooks]=useState();

  useEffect(() => {
    if (localStorage.getItem('status') === "0") {
      navigate('/components/Login', { replace: true });
    }
    else{
      async function getBooks(search) {
          setSpinner(true);

          fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
              .then((response) => response.json())
              .then((json) => {
                  setSpinner(false);
                  setBooks([json]);
              });
      };
      getBooks(search);
    }
  }, [search]);


  return (<>
 <div className='searchbar'>
      <input type="text" className='searchinput' placeholder='Search for books....' 
      value={search}
          onChange={(e) => setSearch(e.target.value)} />
      <button className='submit-btn'>Search</button>
    </div>
    
{spinner && (
                <img src='https://www.shutterstock.com/shutterstock/videos/1105267779/thumb/1.jpg?ip=x480'className='loading'/>)}

   
    <br></br><br></br>


    {books?.map((book) => {
        return (
          <>
          <div>
            {book.items[0].volumeInfo.title}
          </div>
          </>
        )
    }
  
    )}



    </>
  )
}

export default Home
