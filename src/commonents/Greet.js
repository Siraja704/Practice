import react from "react";

//if you want to do like this

// let Greet = ({ Name, College, children }) => {
//   return (
//     <div>
//       <h1>
//         Hello {Name} its working now He is from {College}
//       </h1>
//       {children}
//     </div>
//   );
// };

//this is the way to varaibe and then do it

let Greet = (props) => {
  const { Name, College, children } = props;
  return (
    <div>
      <h1>
        Hello {Name} its working now He is from {College}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
