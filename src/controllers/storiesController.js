
//home
export const trending = (req, res)=> res.render("trendingstories");

export const neew = (req, res)=> res.render("newstories");

export const see = (req, res) => res.render("readstory", { storyId: req.params.id });


export const edit = (req,res) => res.render("Edit", { storyId: req.params.id });

export const deleteStory = (req,res) => res.render("deletestory", { storyId: req.params.id });













