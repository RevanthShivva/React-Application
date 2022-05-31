import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Search from "../../../images/searchicon.svg";
import api from "../../../api/api";
import { useState, useEffect } from "react";
import {BookCard,BookInfo } from "../../molecules/BookCards/Bookcards";

const useStyles=makeStyles({
    inputElement: {
        fontSize: "25px",
        border: "none",
        width: 300,
        height: 24,
        fontFamily: 'Cera Pro',
        marginLeft: "32px",
        "&:focus": {
          outline: "none",
        },
      },
      boxElement: {
        width: 598,
        height: 28,
        backgroundColor: "",
        borderBottom: "1.5px solid #BAC9CF",
        display: "flex",
        flexDirection: "row",
      },
      imageDiv: {
        marginLeft: "2.96px",
        marginTop: "2.96px",
        width: "18.39px",
        height: "18.39px",
      },
     
});

export const SearchBar =() =>{
    const styleClass = useStyles();
    return(
        <Box className={styleClass.boxElement}>
          <div className={styleClass.imageDiv}>
            <img src={Search} alt='SearchLogo' />
          </div>
          <input type="text" placeholder="Search by title or author"
          className={styleClass.inputElement}  id="serach" onKeyUp= {SearchFun}/>
             
        </Box>
    );
};

const SearchFun = ()=>{
  const [books, setBooks] = useState<BookInfo[]>([
    {
      id: 0,
      title: "",
      author: "",
      timeToRead: "",
      numberOfReads: "",
      image: "",
      status: {
        isFinished: false,
        isFeatured: false,
        isTrending: false,
        justAdded: false,
      },
    },
  ]);

  const getBooks = async () => {
    const response = await api.get("/booksStore/");
    const data = response.data;

    setBooks(data);
  };
   useEffect(() => {
    getBooks();
  }, []);

  console.log(books[0].author);


}
