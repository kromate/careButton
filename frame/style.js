export const bodyStyle = (bgColor) => { 
    return `
  
        @keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
}

.body123 *{
    font-family: sans-serif;
}
.body123 h3{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
  button {
    background-color: ${bgColor};
    cursor: pointer;
    color: white;
    transition: all .35s linear;
  }
  button.animateB123 {
     animation: float 5s ease-in-out infinite;
  }

  header {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    outline-offset: -5px;
    padding: 24px 24px 0px 50px;
    box-sizing: border-box;
    background: ${bgColor};
    color: white;
    min-height: 130px;

  }

  form {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    margin-top: 150px;
    text-align: center;
  }

  textarea {
    resize: none;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
    outline: none;
  }

  input {
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    padding: 1rem;
      margin-top: 1rem;
    outline: none;
  }
.box123 input:hover, .box123 textarea:hover{
  box-shadow: 0 0 5pt 0.5pt #D3D3D3;
}
.box123 input:focus, .box123 textarea:focus {
  box-shadow: 0 0 5pt 2pt #D3D3D3;
  outline-width: 0px;
}
  ::placeholder {
    font-size: larger;
  }


  button.shrrr {
    border: none;
    outline: none;
    border-radius: 5px;
    min-height: 50px;
    padding: 1rem ;
    color: white;
    margin-top: 1rem;
  }
  button.shrrr:disabled {
    color: white;
    cursor: not-allowed;
    background-color: grey !important;
  }

  #b123 {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    transform-origin: center center;
    backface-visibility: hidden;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .box123 {
    z-index: 200000;
    position: fixed;
    bottom: 100px;
    right: 20px;
    height: calc(100% - 120px);
    width: 376px;
    min-height: 250px;
    max-height: 704px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
    opacity: 1;
    border-radius: 8px;
    overflow: hidden;
    transition: width 200ms ease 0s, height ease 0s, max-height ease 0s;
  }
  .closebtn{
      position: absolute;
      top: 24px;
      right: 24px;
      width: 15px;
      display: none;
  }
  @media  (max-width: 450px) {
       .box123{
    width: 100%;
    height: 100%;
    max-height: none;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 0px;
    background: #fff;
       }
       .closebtn{
           display: block;
       }
  }
  `
}