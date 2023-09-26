const styles = {
  body: {
    margin: "0 auto",
    color: "black",
    backgroundColor: "transparent",
  },
  calculator: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    maxWidth: "350px",
    margin: "0 auto",
    padding: "30px",
    border: "30px solid brown",
    borderRadius: "10px",
    backgroundColor: "#04044b",
  },
  calculatorButton: { 
    fontSize: "24px",
    padding: "15px",
    backgroundColor: 'brown'
  },
  calculatorButtonActive: {
    backgroundColor: "brown",
  },
  output: {
    gridColumn: "span 4",
    textAlign: "right",
    padding: "10px",
    fontSize: "40px",
    color: "white",
    border: "2px solid brown",
    padding: "30px",
  },

  specialButton:{
    backgroundColor:"brown",
    color:"#F9EAE0",
    fontSize: "36px",
    textAlign : "center"
  }
};

export default styles;
