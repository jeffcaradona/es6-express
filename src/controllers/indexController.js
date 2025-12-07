
export const index = (req, res, next) => {
  try {
    res.render("index", { title: "Express" });
      
  } catch (error) {
      next(error);
  } 
};

export default index ;