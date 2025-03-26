const Workshop = require('../Model/Workshop');

// Create Workshop
/*exports.createWorkshop = async (req, res) => {
  try {
    const { title, description, date, location, price } = req.body;
    
    const workshop = new Workshop({
      title,
      description,
      date,
      location,
      price,
      image: req.file ? req.file.path : ''
    });

    await workshop.save();
    res.status(201).json(workshop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};*/

// Get All Workshops
const getAllWorkshops = async (req, res, next) => {

  let Workshops;

  try {
    Workshops = await Workshop.find();
  } catch (err) {
      console.log(err);
  }

//not found
if (!Workshops) {
  return res.status(404).json({ message: 'Workshops not found' });
}

//Display alll Workshops
return res.status(200).json({ Workshops });
};

//data insert
const addWorkshops = async (req, res) => {
  const {title, description, sessions, instructor, gmail, price, image} = req.body;
  
      let Workshops;
  
      try {
          Workshops = new Workshop({title, description, sessions, instructor, gmail, price, image});
          await Workshops.save();
      }catch (err) {
          console.log(err);
      }
      //not insert users
      if (!Workshops) {
          return res.status(404).json({ message: "unable to add users"});
      }
      return res.status(200).json({ Workshops });
    };

    //Get by Id
    const getById = async (req, res, next) => {
    
        const id = req.params.id;
    
        let Workshops;
    
        try {
            Workshops = await Workshop.findById(id);
        } catch (err) {
            console.log(err);
        }
        //not available users
        if (!Workshops) {
            return res.status(404).json({ message: "User not found"});
        }
        return res.status(200).json({ Workshops });
    
    };

    //Update user details
    const updateWorkshop = async (req, res, next) => {
        const id = req.params.id;
        const {title, description, sessions, instructor, gmail, price, image} = req.body;
    
        let Workshops;
    
        try {
            Workshops = await Workshop.findByIdAndUpdate(id, 
                { title: title, description: description, sessions: sessions, instructor: instructor, gmail: gmail, price: price, image: image});
                users = await users.save();
        } catch (err) {
            console.log(err);
        }
        //not update user details
        if (!Workshops) {
            return res.status(404).json({ message: "Unable to Update User Details"});
        }
        return res.status(200).json({ Workshops });
    };
    
    //Delete user details
    const deleteWorkshop = async (req, res, next) => {
        const id = req.params.id;
    
        let Workshops;
    
        try {
            Workshops = await Workshop.findByIdAndDelete(id)
        } catch (err) {
            console.log(err);
        }
        //not delete user
        if (!Workshops) {
            return res.status(404).json({ message: "Unable to Delete User Details"});
        }
        return res.status(200).json({ Workshops });
    }


exports.getAllWorkshops = getAllWorkshops;
exports.addWorkshops = addWorkshops;
exports.getById = getById;
exports.updateWorkshop = updateWorkshop;
exports.deleteWorkshop = deleteWorkshop;

// Get Single Workshop
/*exports.getWorkshopById = async (req, res) => {
  try {
    const Workshops = await Workshop.findById(req.params.id);
    if (!Workshop) {
      return res.status(404).json({ message: 'Workshop not found' });
    }
    res.json(Workshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Workshop
exports.updateWorkshop = async (req, res) => {
  try {
    const { title, description, date, location, price } = req.body;
    
    const workshop = await Workshop.findById(req.params.id);
    if (!workshop) {
      return res.status(404).json({ message: 'Workshop not found' });
    }

    // Remove old image if a new one is uploaded
    if (req.file && workshop.image) {
      fs.unlinkSync(path.join(__dirname, '..', workshop.image));
    }

    workshop.title = title;
    workshop.description = description;
    workshop.date = date;
    workshop.location = location;
    workshop.price = price;
    
    if (req.file) {
      workshop.image = req.file.path;
    }

    const updatedWorkshop = await workshop.save();
    res.json(updatedWorkshop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Workshop
exports.deleteWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);
    if (!workshop) {
      return res.status(404).json({ message: 'Workshop not found' });
    }

    // Remove associated image
    if (workshop.image) {
      fs.unlinkSync(path.join(__dirname, '..', workshop.image));
    }

    await workshop.remove();
    res.json({ message: 'Workshop deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};*/