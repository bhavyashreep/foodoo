// common utils here
export const logError=(type,data)=>{
    console.log(type,data)
}

   export const getColor = (value) => {
      if (value === "Beginner") {
        return "blue";
      } else if (value === "Intermiediate") {
        return "orange";
      } else {
        return "purple";
      }
    };