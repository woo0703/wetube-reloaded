export const trending = (req, res)=> res.send("Trending Stories");
export const neew = (req, res)=> res.send("New Stories");

export const see = (req,res) => {
    return res.send(`Read Story #${req.params.id}`);
};

export const edit = (req,res) => {
    return res.send("Edit");
};

export const deleteStory = (req,res) => {
    return res.send("Delete Story");
};
















